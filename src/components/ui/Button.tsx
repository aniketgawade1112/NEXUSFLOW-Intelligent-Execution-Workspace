import { motion } from "framer-motion";
import type { ReactNode, CSSProperties } from "react";
import { T } from "../../styles/tokens";

type Variant = "primary" | "ghost" | "outline";

type Props = {
  children: ReactNode;
  onClick?: () => void;
  variant?: Variant;
  style?: CSSProperties;
};

export const Button = ({
  children,
  onClick,
  variant = "primary",
  style,
}: Props) => {
  const styles: Record<Variant, CSSProperties> = {
    primary: { background: T.accent, color: "#fff", border: "none" },
    ghost: { background: "transparent", color: T.muted, border: "none" },
    outline: {
      background: "transparent",
      color: T.text,
      border: `1px solid ${T.border}`,
    },
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      style={{
        ...styles[variant],
        padding: "8px 14px",
        borderRadius: 8,
        cursor: "pointer",
        fontWeight: 600,
        ...style,
      }}
    >
      {children}
    </motion.button>
  );
};
