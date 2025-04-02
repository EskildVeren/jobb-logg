import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import JobOverviewPage from "./pages/jobOverviewPage/JobOverviewPage.tsx";
import AuthenticationPage from "./pages/authenticationPage/AuthenticationPage.tsx";

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
    <RouterProvider router={router} />
  </StrictMode>
);
