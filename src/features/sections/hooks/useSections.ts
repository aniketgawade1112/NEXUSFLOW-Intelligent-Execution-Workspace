import type { Task } from "../../../types/task";

export type Section = {
  id: string;
  name: string;
  color: string;
};

const SECTIONS: Section[] = [
  { id: "frontend", name: "Frontend", color: "#6366F1" },
  { id: "backend", name: "Backend", color: "#10B981" },
  { id: "design", name: "Design", color: "#EC4899" },
  { id: "personal", name: "Personal", color: "#F59E0B" },
];

export function useSections(tasks: Task[]) {
  return SECTIONS.map((section) => ({
    ...section,
    tasks: tasks.filter(
      (t) =>
        t.labels?.includes(section.name.toLowerCase()) &&
        t.status !== "completed",
    ),
  }));
}
