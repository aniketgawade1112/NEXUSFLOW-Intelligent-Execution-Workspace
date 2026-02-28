import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { AppClerkProvider } from "./providers/ClerkProvider";

export default function App() {
  return (
    <AppClerkProvider>
      <RouterProvider router={router} />
    </AppClerkProvider>
  );
}
