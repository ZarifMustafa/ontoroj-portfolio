export type TeamMember = {
  name: string;
  role: string;
  tracks: string[];
  initials: string;
};

export const team: TeamMember[] = [
  {
    name: "Aunindya Prosad Saha",
    role: "AI/ML Engineer",
    tracks: ["AI/ML"],
    initials: "AS",
  },
  {
    name: "Maria Sultana",
    role: "Software Engineer",
    tracks: ["SRBD"],
    initials: "MS",
  },
  {
    name: "Ahmad Abdullah",
    role: "Software Engineer",
    tracks: ["SRBD"],
    initials: "AA",
  },
  {
    name: "Zarif Zeisan Mustafa",
    role: "Software Engineer",
    tracks: ["SRBD", "Enosis Solutions"],
    initials: "ZM",
  },
  {
    name: "Zakaria Emon",
    role: "Software QA Engineer",
    tracks: ["DSI"],
    initials: "ZE",
  },
];
