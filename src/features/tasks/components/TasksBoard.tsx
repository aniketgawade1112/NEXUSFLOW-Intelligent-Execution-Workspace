import { useState } from "react";
import { useTasks } from "../hooks/useTasks";
import { KanbanColumn } from "./KanbanColumn";
import { TaskFilters } from "./TaskFilters";
import { useUIStore } from "../../../store/useUIStore";
import { TaskModal } from "./TaskModal";

export default function TasksBoard() {
  const { tasks, update, create } = useTasks();
  const { modalOpen, openModal } = useUIStore();

  const [search, setSearch] = useState("");

  const filtered = tasks.filter((t) =>
    t.title.toLowerCase().includes(search.toLowerCase()),
  );

  const moveTask = (id: string, status: any) => {
    update.mutate({ id, updates: { status } });
  };

  return (
    <div style={{ padding: 20 }}>
      <button onClick={() => openModal()}>New Task (N)</button>

      <TaskFilters search={search} setSearch={setSearch} />

      <div style={{ display: "flex", gap: 12 }}>
        <KanbanColumn
          title="Todo"
          status="todo"
          tasks={filtered.filter((t) => t.status === "todo")}
          onDrop={moveTask}
        />

        <KanbanColumn
          title="In Progress"
          status="in_progress"
          tasks={filtered.filter((t) => t.status === "in_progress")}
          onDrop={moveTask}
        />

        <KanbanColumn
          title="Completed"
          status="completed"
          tasks={filtered.filter((t) => t.status === "completed")}
          onDrop={moveTask}
        />
      </div>

      {modalOpen && (
        <TaskModal
          onSave={(title) =>
            create.mutate({
              title,
              status: "todo",
              priority: "medium",
              category: "normal",
              labels: [],
            })
          }
        />
      )}
    </div>
  );
}
