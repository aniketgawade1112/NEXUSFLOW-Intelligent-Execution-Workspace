import { memo } from "react";
import { motion } from "framer-motion";
import { T } from "../../lib/constants";
import Icon from "../ui/Icon";

const NAV = [
  { id: "dashboard", label: "Dashboard", icon: "dashboard" },
  { id: "tasks", label: "Tasks Board", icon: "tasks" },
];

export default memo(function Sidebar({ active, setActive, collapsed }: any) {
  return (
    <motion.aside
      animate={{ width: collapsed ? 60 : 220 }}
      style={{
        background: T.surface,
        borderRight: `1px solid ${T.border}`,
        display: "flex",
        flexDirection: "column",
        height: "100%",
        padding: "10px 8px",
        gap: 4,
      }}
    >
      {NAV.map((n) => {
        const isActive = active === n.id;

        return (
          <button
            key={n.id}
            onClick={() => setActive(n.id)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "9px 10px",
              borderRadius: 8,
              border: "none",
              cursor: "pointer",
              background: isActive ? T.accentDim : "transparent",
              color: isActive ? T.accent : T.muted,
              fontSize: 13,
              textAlign: "left",
            }}
          >
            <Icon name={n.icon} size={16} />
            {!collapsed && n.label}
          </button>
        );
      })}
    </motion.aside>
  );
});
