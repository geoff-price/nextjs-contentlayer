import { NextResponse } from 'next/server'

export async function GET() {
  const ALPHA_KEY = process.env.ALPHA_VANTAGE_KEY

  const mock = {
    label: 'S&P 500 (mock)',
    value: '4600.12',
    unit: 'Index',
    updatedAt: new Date().toISOString(),
  }

  if (!ALPHA_KEY) return NextResponse.json(mock)

  try {
    // Example for symbol SPY - you'll need to tune for real API responses
    const res = await fetch(
      `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=SPY&apikey=${ALPHA_KEY}`,
      { next: { revalidate: 60 * 5 } }
    )
    if (!res.ok) return NextResponse.json(mock)

    const data = await res.json()
    const price = data['Global Quote']?.['05. price']
    if (!price) return NextResponse.json(mock)

    return NextResponse.json({
      label: 'S&P 500 (SPY)',
      value: String(price),
      unit: 'USD',
      updatedAt: new Date().toISOString(),
    })
  } catch (err) {
    return NextResponse.json(mock)
  }
}
