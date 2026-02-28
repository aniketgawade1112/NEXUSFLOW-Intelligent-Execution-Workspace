import { createBrowserRouter } from "react-router-dom";
import SignInPage from "../../features/auth/components/SignInPage";
import SignUpPage from "../../features/auth/components/SignUpPage";
import { ProtectedRoute } from "../../features/auth/components/ProtectedRoute";

const Dashboard = () => <div style={{ padding: 40 }}>Dashboard</div>;

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
  },
  { path: "/sign-in", element: <SignInPage /> },
  { path: "/sign-up", element: <SignUpPage /> },
]);
