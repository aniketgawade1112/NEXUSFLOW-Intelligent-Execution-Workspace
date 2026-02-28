import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { AppClerkProvider } from "./providers/ClerkProvider";
import { QueryProvider } from "./providers/QueryProvider";

export default function App() {
  return (
    <AppClerkProvider>
      <QueryProvider>
        <RouterProvider router={router} />
      </QueryProvider>
    </AppClerkProvider>
  );
}
