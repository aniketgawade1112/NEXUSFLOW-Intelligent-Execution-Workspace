import { ClerkProvider } from "@clerk/clerk-react";
import type { ReactNode } from "react";

const clerkKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

type Props = {
  children: ReactNode;
};

export const AppClerkProvider = ({ children }: Props) => {
  if (!clerkKey) throw new Error("Missing Clerk key");

  return <ClerkProvider publishableKey={clerkKey}>{children}</ClerkProvider>;
};
