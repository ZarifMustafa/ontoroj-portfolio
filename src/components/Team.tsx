import { disciplines, team } from "@/data/team";
import TeamGrid from "@/components/TeamGrid";

const companies = new Set(team.flatMap((m) => m.previously));

const stats = [
  { value: team.length, label: "Engineers" },
  { value: disciplines.length, label: "Disciplines" },
  { value: companies.size, label: "Industry teams we came from" },
];

export default function Team() {
  return (
    <section id="team" className="px-6 py-20 sm:px-10 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 grid gap-10 lg:grid-cols-2 lg:items-end">
          <div className="max-w-xl">
            <h2 className="text-sm font-semibold tracking-[0.2em] text-amber-500 uppercase dark:text-amber-400">
              The team
            </h2>
            <p className="mt-4 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50">
              Engineers from Samsung R&amp;D, DSI and Enosis — now building
              for you.
            </p>
            <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
              No hand-offs between agencies. The people you talk to are the
              people who design, build, test and ship your product.
            </p>
          </div>
          <dl className="grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-black/10 bg-black/10 dark:border-white/10 dark:bg-white/10">
            {stats.map((s) => (
              <div key={s.label} className="bg-white p-5 sm:p-6 dark:bg-[#0a0a0d]">
                <dt className="text-xs leading-5 text-zinc-500 dark:text-zinc-400">
                  {s.label}
                </dt>
                <dd className="mt-1 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
                  {s.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <TeamGrid members={team} disciplines={disciplines} />

        <div className="mt-12 flex flex-col items-start justify-between gap-6 rounded-2xl border border-amber-400/30 bg-amber-400/[0.06] p-8 sm:flex-row sm:items-center dark:bg-amber-400/[0.04]">
          <div>
            <p className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
              Want this team on your product?
            </p>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              Tell us what you&apos;re building — we&apos;ll reply within two
              business days.
            </p>
          </div>
          <a
            href="#contact"
            className="shrink-0 rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-black transition-transform hover:scale-[1.03]"
          >
            Work with us
          </a>
        </div>
      </div>
    </section>
  );
}
