import { Navigate } from "react-router-dom";
// Define Layouts Here
import DashboardLayout from "./components/DashboardLayout";
import MainLayout from "./components/MainLayout";
// Define Sidebar Pages Here
import Dashboard from "./pages/Dashboard";
import AdminPanel from "./pages/AdminPanel";
import DataQuality from "./pages/DataQuality";
import Lineage from "./pages/Lineage";
import Reports from "./pages/Reports";
// Define Login and other Pages Here
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";

const routes = [
  {
    path: "app",
    element: <DashboardLayout />,
    children: [
      { path: "dashboard", element: <Dashboard /> },
      { path: "adminpanel", element: <AdminPanel /> },
      { path: "dataquality", element: <DataQuality /> },
      { path: "linage", element: <Lineage /> },
      { path: "reports", element: <Reports /> },
      { path: "*", element: <Navigate to="/404" /> },
    ],
  },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "404", element: <NotFound /> },
      { path: "/", element: <Navigate to="/app/dashboard" /> },
      { path: "*", element: <Navigate to="/404" /> },
    ],
  },
];

export default routes;
