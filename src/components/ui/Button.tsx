import { motion } from "framer-motion";
import { T } from "../../lib/constants";
import Icon from "./Icon";

export default function Button({
  children,
  onClick,
  variant = "primary",
  icon,
}: any) {
  const styles: any = {
    primary: { background: T.accent, color: "#fff" },
    ghost: { background: "transparent", color: T.muted },
    outline: { background: "transparent", border: `1px solid ${T.border}` },
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      style={{
        ...styles[variant],
        border: "none",
        padding: "8px 14px",
        borderRadius: 8,
        display: "flex",
        gap: 6,
        alignItems: "center",
      }}
    >
      {icon && <Icon name={icon} size={14} />}
      {children}
    </motion.button>
  );
}
