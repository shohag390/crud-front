import { createBrowserRouter } from "react-router";
import HomeLayout from "../Pages/HomeLayout";
import App from "../App";
import Users from "../Components/Users";
import AddUser from "../Components/AddUser";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        Component: HomeLayout,
      },
      {
        path: "/users",
        Component: Users,
      },
      {
        path: "/add-users",
        Component: AddUser,
      },
    ],
  },
]);
