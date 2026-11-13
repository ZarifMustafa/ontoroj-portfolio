const services = [
  {
    title: "Product & SaaS builds",
    description:
      "End-to-end design and development of SaaS platforms — from idea and architecture to a product customers pay for.",
  },
  {
    title: "AI/ML systems",
    description:
      "Applied machine learning, LLM-powered features, and data pipelines built to work reliably in production, not just in notebooks.",
  },
  {
    title: "Web & mobile engineering",
    description:
      "Robust, well-tested software built on requirements and system design (SRBD) — clean architecture that scales with the product.",
  },
  {
    title: "Quality assurance",
    description:
      "Dedicated software QA covering functional, regression, and release testing, so every ship is a confident one.",
  },
];

export default function Services() {
  return (
    <section id="work" className="px-6 py-20 sm:px-10 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl">
          <h2 className="text-sm font-semibold tracking-[0.2em] text-amber-500 uppercase dark:text-amber-400">
            What we do
          </h2>
          <p className="mt-4 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50">
            We take products from zero to production.
          </p>
        </div>
        <div className="grid gap-px overflow-hidden rounded-2xl border border-black/10 bg-black/10 sm:grid-cols-2 dark:border-white/10 dark:bg-white/10">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-white p-8 transition-colors hover:bg-zinc-50 dark:bg-[#0a0a0d] dark:hover:bg-[#101013]"
            >
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                {s.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
