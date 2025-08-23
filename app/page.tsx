import Image from "next/image"
import Link from "next/link"
import { allPosts } from "@/.contentlayer/generated"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Top bar */}
      <header className="mx-auto max-w-6xl px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative h-9 w-9">
            <Image
              src="/brand/wattsb4bots-mark.png"
              alt="WattsB4Bots"
              fill
              className="object-contain"
              priority
            />
          </div>
          <span className="font-semibold tracking-wide">WattsB4Bots</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-300">
          <Link href="/posts" className="hover:text-white">
            Blog
          </Link>
          <Link href="/about" className="hover:text-white">
            About
          </Link>
          <Link href="/dashboards" className="hover:text-white">
            Dashboards
          </Link>
        </nav>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 py-12 md:py-20 grid gap-10 md:grid-cols-2 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
            The Hidden Economics of{" "}
            <span className="text-[#39FF14]">Energy</span> and{" "}
            <span className="text-sky-400">Intelligence</span>
          </h1>
          <p className="mt-4 text-zinc-300 text-lg">
            Research on <strong>Energy × AI</strong>: the power behind data
            centers, AGI, and the robot economy — and who’s best positioned to
            win.
          </p>

          <ul className="mt-6 space-y-2 text-zinc-300">
            <li>• Energy concepts — watts, loads, cooling, siting.</li>
            <li>• Company & startup analysis — cloud, utilities, chips, nuclear, storage.</li>
            <li>• Strategic foresight — read the terrain, see the next move.</li>
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://wattsb4bots.substack.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-[#39FF14] px-5 py-3 font-semibold text-black hover:brightness-110"
            >
              Subscribe on Substack
            </a>
            <Link
              href="/posts"
              className="inline-flex items-center justify-center rounded-xl border border-zinc-600 px-5 py-3 font-semibold text-zinc-100 hover:border-zinc-400"
            >
              Read the Blog
            </Link>
          </div>

          <p className="mt-6 italic text-zinc-400">
            “The future won’t be coded. It will be powered.”
          </p>
        </div>

        {/* Highlight card */}
        <div className="rounded-2xl border border-zinc-800 bg-[#0E1218] p-6">
          <div className="flex items-center gap-3">
            <div className="relative h-10 w-10">
              <Image
                src="/brand/wattsb4bots-mark-glow.png"
                alt="Energy × AI"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-semibold">Energy × AI Brief</h2>
          </div>
          <p className="mt-3 text-zinc-300">
            Weekly signal on data-center power, grid stress, and intelligence
            demand. Short takes + one deep chart.
          </p>

          <div className="mt-5 rounded-xl border border-zinc-700 bg-black/30 p-2">
            <iframe
              src="https://wattsb4bots.substack.com/embed"
              className="h-44 w-full rounded-lg"
              style={{ border: 0 }}
              scrolling="no"
            />
          </div>
        </div>
      </section>

      {/* Feature cards */}
      <section className="mx-auto max-w-6xl px-6 pb-16 grid gap-4 md:grid-cols-3">
        {[
          {
            title: "Energy Concepts",
            body: "Plain-English primers on watts, PUE, cooling, siting, transmission.",
          },
          {
            title: "Who Benefits",
            body: "Utilities, hyperscalers, chipmakers, thermal, nuclear, storage — winners & risks.",
          },
          {
            title: "Foresight Tools",
            body: "Wardley maps, scenarios, strategy kernels — see the next move.",
          },
        ].map((c) => (
          <div
            key={c.title}
            className="rounded-2xl border border-zinc-800 bg-[#0E1218] p-5"
          >
            <h3 className="text-lg font-semibold">{c.title}</h3>
            <p className="mt-2 text-zinc-300">{c.body}</p>
          </div>
        ))}
      </section>

      {/* Posts (from Contentlayer) */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <h2 className="text-2xl font-semibold text-zinc-100 mb-4">
          Latest Posts
        </h2>
        <div className="space-y-6">
          {allPosts.map((post) => (
            <article
              key={post._id}
              className="rounded-lg border border-zinc-800 bg-[#0E1218] p-5"
            >
              <Link
                href={post.slug}
                className="text-xl font-semibold text-white"
              >
                {post.title}
              </Link>
              {post.description && (
                <p className="mt-2 text-zinc-300">{post.description}</p>
              )}
            </article>
          ))}
        </div>
      </section>

      <footer className="border-t border-zinc-800">
        <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-zinc-400 flex items-center justify-between">
          <span>© {new Date().getFullYear()} WattsB4Bots</span>
          <div className="flex gap-4">
            <a
              href="https://wattsb4bots.substack.com/"
              target="_blank"
              className="hover:text-zinc-200"
            >
              Substack
            </a>
            <Link href="/about" className="hover:text-zinc-200">
              About
            </Link>
          </div>
        </div>
      </footer>
    </main>
  )
}
