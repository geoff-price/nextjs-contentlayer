'use client'

import React from 'react'

type Metric = {
  label: string
  value: string
  unit?: string
  updatedAt?: string
}

export default function MetricCard({ url, title }: { url: string; title: string }) {
  const [data, setData] = React.useState<Metric | null>(null)
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState<string | null>(null)

  React.useEffect(() => {
    let cancelled = false
    setLoading(true)
    fetch(url)
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`)
        return r.json()
      })
      .then((json) => {
        if (!cancelled) setData(json)
      })
      .catch((err) => {
        if (!cancelled) setError(err.message)
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })

    return () => {
      cancelled = true
    }
  }, [url])

  return (
    <div className="p-4 bg-neutral-800 rounded-md shadow-sm">
      <h3 className="text-sm font-medium text-neutral-200 mb-2">{title}</h3>

      {loading && <div className="text-neutral-400">Loading…</div>}
      {error && <div className="text-red-400">Error: {error}</div>}

      {data && (
        <div className="flex items-baseline gap-2">
          <div className="text-3xl font-semibold">{data.value}</div>
          {data.unit && <div className="text-sm text-neutral-400">{data.unit}</div>}
        </div>
      )}

      {data?.updatedAt && (
        <div className="mt-2 text-xs text-neutral-500">Updated {data.updatedAt}</div>
      )}
    </div>
  )
}
