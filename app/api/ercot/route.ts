import { NextResponse } from 'next/server'

export async function GET() {
  // ERCOT public APIs vary by dataset; provide a mock for now
  const mock = {
    label: 'ERCOT Demand (MW)',
    value: '31,200',
    unit: 'MW',
    updatedAt: new Date().toISOString(),
  }

  // If you have an endpoint, wire it via environment variable
  const endpoint = process.env.ERCOT_ENDPOINT
  if (!endpoint) return NextResponse.json(mock)

  try {
    const res = await fetch(endpoint, { next: { revalidate: 60 * 1 } })
    if (!res.ok) return NextResponse.json(mock)
    const data = await res.json()
    // Transform as needed
    return NextResponse.json({
      label: 'ERCOT Demand (MW)',
      value: String(data.currentDemand ?? mock.value),
      unit: 'MW',
      updatedAt: new Date().toISOString(),
    })
  } catch (err) {
    return NextResponse.json(mock)
  }
}
