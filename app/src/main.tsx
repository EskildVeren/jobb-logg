import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import JobOverviewPage from "./pages/jobOverviewPage/JobOverviewPage.tsx";
import AuthenticationPage from "./pages/authenticationPage/AuthenticationPage.tsx";
import { ThemeProvider } from "./components/ui/theme-provider.tsx";

const router = createBrowserRouter([
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
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);
