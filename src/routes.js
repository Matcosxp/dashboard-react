// Material Dashboard 2 React layouts
import Dashboard from "layouts/dashboard";
import Tables from "layouts/tables";
import Billing from "layouts/billing";
import RTL from "layouts/rtl";
import Notifications from "layouts/notifications";
import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";
import Signout from "layouts/authentication/sign-out";
import ResetPassword from "layouts/authentication/reset-password/cover";

// Importa il componente PrivateRoute
import PrivateRoute from "./PrivateRoute";

// @mui icons
import Icon from "@mui/material/Icon";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: (
      <PrivateRoute allowedRoles={["user", "admin"]}>
        <Dashboard />
      </PrivateRoute>
    ),
  },
  {
    type: "collapse",
    name: "Dati",
    key: "tables",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/tables",
    component: (
      <PrivateRoute allowedRoles={["user", "admin"]}>
        <Tables />
      </PrivateRoute>
    ),
  },
  {
    type: "collapse",
    name: "Billing",
    key: "billing",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    route: "/billing",
    component: (
      <PrivateRoute allowedRoles={["user", "admin"]}>
        <Billing />
      </PrivateRoute>
    ),
  },
  {
    type: "collapse",
    name: "RTL",
    key: "rtl",
    icon: <Icon fontSize="small">format_textdirection_r_to_l</Icon>,
    route: "/rtl",
    component: (
      <PrivateRoute allowedRoles={["user", "admin"]}>
        <RTL />
      </PrivateRoute>
    ),
  },
  {
    type: "collapse",
    name: "Notifications",
    key: "notifications",
    icon: <Icon fontSize="small">notifications</Icon>,
    route: "/notifications",
    component: (
      <PrivateRoute allowedRoles={["user", "admin"]}>
        <Notifications />
      </PrivateRoute>
    ),
  },
  {
    type: "collapse",
    name: "Profile",
    key: "profile",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/profile",
    component: (
      <PrivateRoute allowedRoles={["user", "admin"]}>
        <Profile />
      </PrivateRoute>
    ),
  },
  {
    type: "collapse",
    name: "Sign In",
    key: "sign-in",
    icon: <Icon fontSize="small">login</Icon>,
    route: "/authentication/sign-in",
    component: <SignIn />,
  },
  {
    type: "collapse",
    name: "Sign Up",
    key: "sign-up",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/authentication/sign-up",
    component: <SignUp />,
  },
  {
    type: "collapse",
    name: "Sign Out",
    key: "sign-out",
    icon: <Icon fontSize="small">logout</Icon>,
    route: "/authentication/sign-out",
    component: <Signout />,
  },
];

export default routes;
