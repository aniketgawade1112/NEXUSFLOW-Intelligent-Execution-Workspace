import { AnimatePresence, motion } from "framer-motion";
import { useUIStore } from "../../../store/useUIStore";
import type { Task } from "../../../types/task";

type Props = {
  id: string;
  name: string;
  color: string;
  tasks: Task[];
  onAddTask: (section: string, title: string) => void;
};

export function SectionGroup({ id, name, color, tasks, onAddTask }: Props) {
  const collapsed = useUIStore((s) => s.sectionCollapsed[id]);
  const toggle = useUIStore((s) => s.toggleSection);

  return (
    <motion.div
      layout
      style={{
        background: "#111118",
        border: "1px solid #1E1E2E",
        borderRadius: 12,
        overflow: "hidden",
      }}
    >
      {/* HEADER */}
      <button
        onClick={() => toggle(id)}
        style={{
          width: "100%",
          padding: "14px 18px",
          display: "flex",
          alignItems: "center",
          gap: 10,
          background: "none",
          border: "none",
          color: "#F0F0FF",
          cursor: "pointer",
        }}
      >
        <div
          style={{
            width: 10,
            height: 10,
            borderRadius: "50%",
            background: color,
          }}
        />
        <span style={{ fontWeight: 700 }}>{name}</span>
        <span style={{ marginLeft: "auto", opacity: 0.6 }}>{tasks.length}</span>
      </button>

      {/* CONTENT */}
      <AnimatePresence>
        {!collapsed && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            style={{ overflow: "hidden" }}
          >
            <div style={{ padding: "0 16px 14px" }}>
              {tasks.map((t) => (
                <div
                  key={t.id}
                  style={{
                    padding: "8px 10px",
                    marginBottom: 6,
                    borderRadius: 8,
                    background: "#0A0A0F",
                    fontSize: 13,
                  }}
                >
                  {t.title}
                </div>
              ))}

              <button
                onClick={() => onAddTask(name.toLowerCase(), "New Task")}
                style={{
                  marginTop: 8,
                  background: "none",
                  border: "none",
                  color: "#6B6B8A",
                  cursor: "pointer",
                }}
              >
                + Add task
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
