import { useState } from "react";
import MainLayout from "../components/layout/MainLayout";

// import your components
import Dashboard from "../features/dashboard/components/Dashboard";
import TasksBoard from "../features/tasks/components/TasksBoard";
import { Sections } from "../features/sections/components/Sections";
import { Calendar } from "../features/calendar/components/Calendar";
import { Expenses } from "../features/expenses/components/Expenses";

export default function App() {
  const [view, setView] = useState("dashboard");
  const [collapsed, setCollapsed] = useState(false);

  const renderView = () => {
    switch (view) {
      case "dashboard":
        return <Dashboard />;
      case "tasks":
        return <TasksBoard />;
      case "sections":
        return <Sections />;
      case "calendar":
        return <Calendar />;
      case "expenses":
        return <Expenses />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <MainLayout
      view={view}
      setView={setView}
      collapsed={collapsed}
      setCollapsed={setCollapsed}
    >
      {renderView()}
    </MainLayout>
  );
}
