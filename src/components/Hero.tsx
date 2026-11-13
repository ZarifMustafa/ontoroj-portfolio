export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden px-6 pt-20 pb-24 sm:px-10 sm:pt-28 sm:pb-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute top-[-10rem] left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-amber-500/20 blur-[120px]"
      />
      <div className="relative mx-auto max-w-4xl text-center">
        <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-zinc-300">
          <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
          Building SaaS & software products
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-zinc-50 sm:text-6xl">
          A small team, shipping{" "}
          <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-orange-400 bg-clip-text text-transparent">
            full-stack products
          </span>
          .
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base text-zinc-400 sm:text-lg">
          Ontoroj is a five-person studio spanning AI/ML, software
          engineering, and quality assurance. We design, build, and ship SaaS
          platforms and custom software — from first prototype to production.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#contact"
            className="rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-black transition-transform hover:scale-[1.03]"
          >
            Work with us
          </a>
          <a
            href="#team"
            className="rounded-full border border-white/10 px-6 py-3 text-sm font-medium text-zinc-200 transition-colors hover:border-white/30"
          >
            Meet the team
          </a>
        </div>
      </div>
    </section>
  );
}
