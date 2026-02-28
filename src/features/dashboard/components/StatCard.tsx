import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  label: string;
  value: string | number;
  sub?: string;
  icon?: ReactNode;
};

export const StatCard = ({ label, value, sub, icon }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      style={{
        background: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: 12,
        padding: 20,
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <div style={{ fontSize: 12, opacity: 0.7 }}>{label}</div>
          <div style={{ fontSize: 28, fontWeight: 800 }}>{value}</div>
          {sub && <div style={{ fontSize: 12 }}>{sub}</div>}
        </div>
        {icon}
      </div>
    </motion.div>
  );
};
