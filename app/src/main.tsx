import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createHashRouter, RouterProvider } from "react-router-dom";
import JobOverviewPage from "./pages/jobOverviewPage/JobOverviewPage.tsx";
import AuthenticationPage from "./pages/authenticationPage/AuthenticationPage.tsx";
import { ThemeProvider } from "./components/ui/theme-provider.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const router = createHashRouter([
  {
    path: "/",
    element: <AuthenticationPage />,
  },
  {
    path: "jobs",
    element: <JobOverviewPage />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <RouterProvider router={router} />
      </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>
);
