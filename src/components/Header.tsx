import ThemeToggle from "@/components/ThemeToggle";

const links = [
  { href: "#work", label: "What we do" },
  { href: "#team", label: "Team" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur-md dark:border-white/5 dark:bg-[#060608]/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10">
        <a href="#top" className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-amber-400 shadow-[0_0_12px_2px_rgba(251,191,36,0.8)]" />
          <span className="text-sm font-semibold tracking-[0.2em] text-zinc-900 uppercase dark:text-zinc-100">
            Ontoroj
          </span>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-zinc-600 sm:flex dark:text-zinc-400">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="transition-colors hover:text-zinc-950 dark:hover:text-zinc-100"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href="#contact"
            className="rounded-full border border-black/10 bg-black/5 px-4 py-2 text-xs font-medium text-zinc-900 transition-colors hover:border-amber-400/40 hover:bg-amber-400/10 dark:border-white/10 dark:bg-white/5 dark:text-zinc-100"
          >
            Start a project
          </a>
        </div>
      </div>
    </header>
  );
}
