import { useState } from "react";
import type { ReactNode } from "react";
import { Sidebar } from "./Sidebar";

type Props = {
  children: ReactNode;
};

export const MainLayout = ({ children }: Props) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      <main style={{ flex: 1 }}>{children}</main>
    </div>
  );
};
