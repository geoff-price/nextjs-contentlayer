import MetricCard from '../../components/metric-card'

export const metadata = {
  title: 'Dashboards — wattsb4bots',
}

export default function DashboardsPage() {
  return (
    <main className="min-h-screen bg-neutral-900 text-neutral-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Dashboards</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <MetricCard url="/api/wti" title="WTI (EIA)" />
          <MetricCard url="/api/ercot" title="ERCOT Demand" />
          <MetricCard url="/api/stocks" title="S&P (mock)" />
        </div>
      </div>
    </main>
  )
}
