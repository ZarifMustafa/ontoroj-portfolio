"use client";

import { useState } from "react";
import Image from "next/image";
import type { Discipline, TeamMember } from "@/data/team";

type Filter = Discipline | "All";

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-background";

export default function TeamGrid({
  members,
  disciplines,
}: {
  members: TeamMember[];
  disciplines: Discipline[];
}) {
  const [filter, setFilter] = useState<Filter>("All");
  const filters: Filter[] = ["All", ...disciplines];

  return (
    <>
      <div
        role="group"
        aria-label="Filter team by discipline"
        className="-mx-6 mb-8 flex gap-2 overflow-x-auto px-6 sm:mx-0 sm:px-0"
      >
        {filters.map((f) => {
          const active = filter === f;
          return (
            <button
              key={f}
              type="button"
              aria-pressed={active}
              onClick={() => setFilter(f)}
              className={`shrink-0 rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${focusRing} ${
                active
                  ? "border-amber-400 bg-amber-400 text-black"
                  : "border-black/10 text-zinc-600 hover:border-black/30 dark:border-white/10 dark:text-zinc-300 dark:hover:border-white/30"
              }`}
            >
              {f}
            </button>
          );
        })}
      </div>

      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-6">
        {members.map((m, i) => {
          const dimmed = filter !== "All" && m.discipline !== filter;
          // 3 cards on the first row, 2 wider cards on the second: no orphan.
          const span = i < 3 ? "lg:col-span-2" : "lg:col-span-3";
          return (
            <li
              key={m.name}
              className={`${span} ${i === members.length - 1 && members.length % 2 === 1 ? "sm:col-span-2" : ""} transition-opacity duration-300 ${dimmed ? "opacity-30" : "opacity-100"}`}
            >
              <MemberCard member={m} />
            </li>
          );
        })}
      </ul>
    </>
  );
}

function MemberCard({ member: m }: { member: TeamMember }) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-black/10 bg-black/[0.02] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/40 hover:bg-black/[0.04] dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-amber-400/30 dark:hover:bg-white/[0.06]">
      <div className="flex items-start gap-4">
        {m.photo ? (
          <Image
            src={m.photo}
            alt={`Portrait of ${m.name}`}
            width={56}
            height={56}
            className="h-14 w-14 rounded-2xl object-cover grayscale transition duration-300 group-hover:grayscale-0"
          />
        ) : (
          <div
            aria-hidden
            className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 text-base font-semibold text-black"
          >
            {m.initials}
          </div>
        )}
        <div className="min-w-0">
          <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
            {m.name}
          </h3>
          <p className="mt-0.5 text-sm text-zinc-600 dark:text-zinc-400">
            {m.role}
          </p>
        </div>
        <span className="ml-auto shrink-0 rounded-full bg-amber-400/15 px-2.5 py-1 text-[11px] font-semibold tracking-wide text-amber-600 uppercase dark:text-amber-400">
          {m.discipline}
        </span>
      </div>

      <p className="mt-5 text-sm leading-6 text-zinc-700 dark:text-zinc-300">
        {m.focus}
      </p>

      {m.skills.length > 0 && (
        <ul className="mt-4 flex flex-wrap gap-2">
          {m.skills.map((s) => (
            <li
              key={s}
              className="rounded-full border border-black/10 px-2.5 py-1 text-xs text-zinc-600 dark:border-white/10 dark:text-zinc-400"
            >
              {s}
            </li>
          ))}
        </ul>
      )}

      <div className="mt-auto flex items-end justify-between gap-4 pt-6">
        {m.previously.length > 0 ? (
          <p className="font-mono text-xs leading-5 text-zinc-500">
            <span className="text-zinc-400 dark:text-zinc-600">prev · </span>
            {m.previously.join(" · ")}
          </p>
        ) : (
          <span />
        )}
        <SocialLinks member={m} />
      </div>
    </article>
  );
}

function SocialLinks({ member: m }: { member: TeamMember }) {
  const links = [
    {
      href: m.links?.github,
      label: `${m.name} on GitHub`,
      path: "M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.7 5.39-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z",
    },
    {
      href: m.links?.linkedin,
      label: `${m.name} on LinkedIn`,
      path: "M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z",
    },
  ].filter((l) => l.href);

  if (links.length === 0) return null;

  return (
    <div className="flex shrink-0 gap-2">
      {links.map((l) => (
        <a
          key={l.label}
          href={l.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={l.label}
          className={`flex h-8 w-8 items-center justify-center rounded-full border border-black/10 text-zinc-500 transition-colors hover:border-amber-400/40 hover:text-amber-500 dark:border-white/10 dark:text-zinc-400 dark:hover:text-amber-400 ${focusRing}`}
        >
          <svg aria-hidden viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor">
            <path d={l.path} />
          </svg>
        </a>
      ))}
    </div>
  );
}
