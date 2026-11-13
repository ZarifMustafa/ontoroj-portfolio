import { team } from "@/data/team";

export default function Team() {
  return (
    <section id="team" className="px-6 py-20 sm:px-10 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl">
          <h2 className="text-sm font-semibold tracking-[0.2em] text-amber-500 uppercase dark:text-amber-400">
            The team
          </h2>
          <p className="mt-4 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50">
            Five people, one product mindset.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <div
              key={member.name}
              className="group rounded-2xl border border-black/10 bg-black/[0.02] p-6 transition-colors hover:border-amber-400/40 hover:bg-black/[0.04] dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-amber-400/30 dark:hover:bg-white/[0.06]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-orange-500 text-sm font-semibold text-black">
                {member.initials}
              </div>
              <h3 className="mt-4 text-base font-semibold text-zinc-900 dark:text-zinc-50">
                {member.name}
              </h3>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{member.role}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {member.tracks.map((track) => (
                  <span
                    key={track}
                    className="inline-block rounded-full border border-black/10 px-2.5 py-1 text-[11px] font-medium tracking-wide text-zinc-600 uppercase dark:border-white/10 dark:text-zinc-400"
                  >
                    {track}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
