import { createBrowserRouter } from "react-router";
import { Layout } from "@/app/components/Layout";
import { Home } from "@/app/screens/Home";
import { Budget } from "@/app/screens/Budget";
import { Guests } from "@/app/screens/Guests";
import { Providers } from "@/app/screens/Providers";
import { Profile } from "@/app/screens/Profile";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "budget", Component: Budget },
      { path: "guests", Component: Guests },
      { path: "providers", Component: Providers },
      { path: "profile", Component: Profile },
    ],
  },
]);
