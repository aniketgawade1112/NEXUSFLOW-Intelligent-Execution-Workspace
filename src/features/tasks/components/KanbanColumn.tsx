import { TaskCard } from "./TaskCard";
import type { Task, TaskStatus } from "../types";

type Props = {
  title: string;
  status: TaskStatus;
  tasks: Task[];
  onDrop: (id: string, status: TaskStatus) => void;
};

export const KanbanColumn = ({ title, status, tasks, onDrop }: Props) => {
  return (
    <div
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => {
        const id = e.dataTransfer.getData("taskId");
        onDrop(id, status);
      }}
      style={{
        flex: 1,
        minWidth: 280,
        background: "var(--bg)",
        border: "1px solid var(--border)",
        borderRadius: 10,
        padding: 10,
      }}
    >
      <h3>{title}</h3>

      {tasks.map((t) => (
        <div
          key={t.id}
          draggable
          onDragStart={(e) => e.dataTransfer.setData("taskId", t.id)}
        >
          <TaskCard task={t} />
        </div>
      ))}
    </div>
  );
};
