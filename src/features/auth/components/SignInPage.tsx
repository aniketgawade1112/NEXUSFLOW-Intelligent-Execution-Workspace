import { SignIn } from "@clerk/clerk-react";

export default function SignInPage() {
  return (
    <div style={{ display: "grid", placeItems: "center", height: "100vh" }}>
      <SignIn />
    </div>
  );
}
