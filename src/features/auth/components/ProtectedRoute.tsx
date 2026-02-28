import { Navigate } from "react-router-dom";
import { useAuth } from "../hook/useAuth";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const ProtectedRoute = ({ children }: Props) => {
  const { isLoaded, isSignedIn } = useAuth();

  if (!isLoaded) return <div>Loading...</div>;

  if (!isSignedIn) return <Navigate to="/sign-in" replace />;

  return <>{children}</>;
};
