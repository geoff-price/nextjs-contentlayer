import { NextResponse } from 'next/server'

export async function GET() {
  const EIA_API_KEY = process.env.EIA_API_KEY

  // Simple fallback mock
  const mock = {
    label: 'WTI Spot (USD/bbl)',
    value: '82.45',
    unit: 'USD/bbl',
    updatedAt: new Date().toISOString(),
  }

  if (!EIA_API_KEY) {
    return NextResponse.json(mock)
  }

  try {
    const res = await fetch(
      `https://api.eia.gov/series/?api_key=${EIA_API_KEY}&series_id=PET.RWTC.D`,
      { next: { revalidate: 60 * 5 } }
    )

    if (!res.ok) return NextResponse.json(mock)

    const data = await res.json()
    const latest = data.series?.[0]?.data?.[0]
    if (!latest) return NextResponse.json(mock)

    const value = latest[1]
    return NextResponse.json({
      label: 'WTI Spot (USD/bbl)',
      value: String(value),
      unit: 'USD/bbl',
      updatedAt: new Date().toISOString(),
    })
  } catch (err) {
    return NextResponse.json(mock)
  }
}
