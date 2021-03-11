import { lazy } from "react";

export const coursesRoutes = [
  {
    name: "List",
    path: "/list",
    exact: true,
    component: lazy(() =>
      import(
        "../Components/courses/CoursesList/CoursesList" /* webpackChunkName: "CoursesList" */
      )
    ),
  },
  {
    name: "Create",
    path: "/create",
    exact: true,
    component: lazy(() =>
      import(
        "../Components/courses/coursesForm/CoursesForm" /* webpackChunkName: "CoursesForm" */
      )
    ),
  },
];
