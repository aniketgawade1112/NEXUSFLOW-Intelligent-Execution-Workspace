import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const Badge = ({ children }: Props) => (
  <span
    style={{
      padding: "2px 8px",
      borderRadius: 6,
      fontSize: 12,
      background: "rgba(99,102,241,.2)",
      color: "#6366F1",
    }}
  >
    {children}
  </span>
);
