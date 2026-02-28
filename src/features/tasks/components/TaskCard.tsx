import { motion } from "framer-motion";
import type { Task } from "../types";

type Props = {
  task: Task;
};

export const TaskCard = ({ task }: Props) => {
  return (
    <motion.div
      layout
      style={{
        background: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: 10,
        padding: 12,
      }}
    >
      <div style={{ fontWeight: 600 }}>{task.title}</div>
      {task.description && (
        <div style={{ fontSize: 12, opacity: 0.7 }}>{task.description}</div>
      )}
    </motion.div>
  );
};
