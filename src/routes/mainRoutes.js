import { lazy } from "react";

export const mainRoutes = [
  {
    name: "Home",
    path: "/",
    exact: true,
    component: lazy(() =>
      import("../pages/HomePage" /* webpackChunkName: "home-page" */)
    ),
  },
  {
    name: "About",
    path: "/about",
    exact: true,
    component: lazy(() =>
      import("../pages/AboutPage" /* webpackChunkName: "AboutPage" */)
    ),
  },
  {
    name: "Courses",
    path: "/courses",
    exact: false,
    component: lazy(() =>
      import("../pages/CoursesPage" /* webpackChunkName: "CoursesPage" */)
    ),
  },
];
