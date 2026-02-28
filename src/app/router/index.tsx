import { createBrowserRouter } from "react-router-dom";

const Page = ({ name }: { name: string }) => (
  <div style={{ padding: 40 }}>{name}</div>
);

export const router = createBrowserRouter([
  { path: "/", element: <Page name="Dashboard" /> },
  { path: "/tasks", element: <Page name="Tasks" /> },
]);
