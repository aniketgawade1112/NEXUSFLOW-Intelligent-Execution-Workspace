import { useSections } from "../hooks/useSections";
import { SectionGroup } from "./SectionGroup";
import type { Task } from "../../../types/task";

type Props = {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
};

export function Sections({ tasks, setTasks }: Props) {
  const sections = useSections(tasks);

  const addTask = (section: string, title: string) => {
    setTasks((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        title,
        description: "",
        status: "todo",
        priority: "medium",
        category: "normal",
        dueDate: "",
        labels: [section],
        createdAt: new Date().toISOString(),
      },
    ]);
  };

  return (
    <div style={{ padding: "28px 32px" }}>
      <h1 style={{ marginBottom: 20 }}>Sections</h1>

      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {sections.map((section) => (
          <SectionGroup key={section.id} {...section} onAddTask={addTask} />
        ))}
      </div>
    </div>
  );
}
