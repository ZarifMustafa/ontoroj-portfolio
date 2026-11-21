export type Discipline = "AI/ML" | "Engineering" | "QA";

export const disciplines: Discipline[] = ["AI/ML", "Engineering", "QA"];

export type TeamMember = {
  name: string;
  role: string;
  discipline: Discipline;
  initials: string;
  /** One line: what this person owns on a project. */
  focus: string;
  /** Companies this person has worked at. */
  previously: string[];
  /** Concrete tools/tech. Hidden when empty. */
  skills: string[];
  /** Path under /public, e.g. "/team/maria.jpg". Falls back to initials. */
  photo?: string;
  links?: { github?: string; linkedin?: string };
};

// TODO(team): confirm focus lines, fill in skills, photos and profile links.
export const team: TeamMember[] = [
  {
    name: "Aunindya Prosad Saha",
    role: "AI/ML Engineer",
    discipline: "AI/ML",
    initials: "AS",
    focus:
      "Turns models into production features — LLMs, data pipelines and evaluation.",
    previously: [],
    skills: [],
  },
  {
    name: "Maria Sultana",
    role: "Software Engineer",
    discipline: "Engineering",
    initials: "MS",
    focus:
      "Owns architecture and backend systems that scale with the product.",
    previously: ["Samsung R&D Bangladesh"],
    skills: [],
  },
  {
    name: "Ahmad Abdullah",
    role: "Software Engineer",
    discipline: "Engineering",
    initials: "AA",
    focus: "Builds full-stack features, from the API to a polished UI.",
    previously: ["Samsung R&D Bangladesh"],
    skills: [],
  },
  {
    name: "Zarif Zeisan Mustafa",
    role: "Software Engineer",
    discipline: "Engineering",
    initials: "ZM",
    focus: "Bridges product and platform, shipping features end to end.",
    previously: ["Samsung R&D Bangladesh", "Enosis Solutions"],
    skills: [],
  },
  {
    name: "Zakaria Emon",
    role: "Software QA Engineer",
    discipline: "QA",
    initials: "ZE",
    focus:
      "Keeps every release boring — test automation, regression and release gates.",
    previously: ["DSI"],
    skills: [],
  },
];
