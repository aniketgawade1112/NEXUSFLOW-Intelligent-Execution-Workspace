import { useUser, useAuth as useClerkAuth } from "@clerk/clerk-react";

export const useAuth = () => {
  const { user, isLoaded } = useUser();
  const { isSignedIn, getToken, signOut } = useClerkAuth();

  return {
    user,
    isLoaded,
    isSignedIn,
    getToken,
    signOut,
  };
};
