import Sidebar from "./Sidebar";
import { T } from "../../lib/constants";

export default function MainLayout({
  children,
  view,
  setView,
  collapsed,
  setCollapsed,
}: any) {
  return (
    <div
      style={{
        background: T.bg,
        color: T.text,
        height: "100vh",
        display: "flex",
      }}
    >
      <Sidebar
        active={view}
        setActive={setView}
        collapsed={collapsed}
        setCollapsed={setCollapsed}
      />
      <main style={{ flex: 1 }}>{children}</main>
    </div>
  );
}
