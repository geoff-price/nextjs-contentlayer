import Link from 'next/link'

export const metadata = {
  title: 'About — wattsb4bots',
  description: 'About wattsb4bots — our mission and team',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-neutral-900 text-neutral-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-4">About wattsb4bots</h1>
        <p className="text-lg leading-relaxed mb-6">
          wattsb4bots is a small project exploring energy, markets, and
          automation. We build dashboards and tools to make energy data more
          accessible.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Mission</h2>
          <p>
            We aim to make electricity market data friendly and actionable,
            combining open APIs, clean UI, and small automation to help
            researchers and curious minds.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Team</h2>
          <p>
            Mostly solo at the moment — a pragmatic engineer who likes
            data, energy, and tiny bots.
          </p>
        </section>

        <p>
          Back to <Link href="/">home</Link>.
        </p>
      </div>
    </main>
  )
}
