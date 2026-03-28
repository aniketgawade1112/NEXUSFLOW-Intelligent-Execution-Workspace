import { motion } from "framer-motion";
import { T } from "../../../lib/constants";
import Icon from "../../../components/ui/Icon";

export default function StatCard({ label, value, icon, color, sub }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      style={{
        background: T.surface,
        border: `1px solid ${T.border}`,
        borderRadius: 12,
        padding: "20px 24px",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <div style={{ fontSize: 12, color: T.muted }}>{label}</div>
          <div style={{ fontSize: 30, fontWeight: 800 }}>{value}</div>
          {sub && <div style={{ fontSize: 12, color: T.muted }}>{sub}</div>}
        </div>

        <div
          style={{
            width: 40,
            height: 40,
            borderRadius: 10,
            background: color + "22",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color,
          }}
        >
          <Icon name={icon} size={18} />
        </div>
      </div>
    </motion.div>
  );
}
