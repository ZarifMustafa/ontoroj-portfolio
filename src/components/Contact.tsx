export default function Contact() {
  return (
    <section id="contact" className="px-6 py-20 sm:px-10 sm:py-28">
      <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-black/10 bg-black/[0.02] p-10 text-center sm:p-16 dark:border-white/10 dark:bg-white/[0.03]">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-amber-400/10 via-transparent to-orange-500/10"
        />
        <div className="relative">
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50">
            Have a product in mind?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-zinc-600 dark:text-zinc-400">
            Tell us about what you&apos;re building. We reply within a couple
            of days.
          </p>
          <a
            href="mailto:hello@ontoroj.com"
            className="mt-8 inline-flex rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-black transition-transform hover:scale-[1.03]"
          >
            hello@ontoroj.com
          </a>
        </div>
      </div>
    </section>
  );
}
