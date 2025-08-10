import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import ErrorCode from "../component/ErrorCode";
import Home from "../component/Home";
import Register from "../component/Register";
import Login from "../component/Login";
import PrivateRoute from "../context/PrivateRoute";
import Assignments from "../component/Assignments";
import CreateAssignments from "../component/CreateAssignments";
import MyAttemptedAssignments from "../component/MyAttemptedAssignments";
import Users from "../component/Users";
import Loader from "../component/Loader";
import UpdateAssignment from "../component/UpdateAssignment";
import AssignmentDetails from "../component/AssignmentDetails";
import AssignmentViewDetails from "../component/AssignmentViewDetails";
import Pendingassignmentspage from "../component/Pendingassignmentspage";
import UpdateAssignmentModal from "../component/UpdateAssignmentModal";
import DashboardLayout from "../component/Dashboard/DashboardLayout";
import EditProfileWithImgBB from "../component/EditProfileWithImgBB";
// https://assignment-11-server-side-rosy.vercel.app
const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <ErrorCode></ErrorCode>,
    children: [
      {
        path: "/",
        Component: Home,
        loader: () =>
          fetch(
            "https://assignment-11-server-side-rosy.vercel.app/homeAssignment",
            {
              credentials: "include",
            }
          ),
        hydrateFallbackElement: <Loader></Loader>,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/users",
        Component: Users,
        loader: () =>
          fetch("https://assignment-11-server-side-rosy.vercel.app/users").then(
            (res) => res.json()
          ),
        hydrateFallbackElement: <Loader></Loader>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "dashboard/assignments",
        element: <Assignments></Assignments>,
        loader: () =>
          fetch("https://assignment-11-server-side-rosy.vercel.app/assignment"),
        hydrateFallbackElement: <Loader></Loader>,
      },
      {
        path: "dashboard/update/:id",
        element: <UpdateAssignment></UpdateAssignment>,
        loader: ({ params }) =>
          fetch(
            `https://assignment-11-server-side-rosy.vercel.app/assignment/${params.id}`,
            {
              credentials: "include",
            }
          ).then((res) => res.json()),
        hydrateFallbackElement: <Loader></Loader>,
      },
      {
        path: "dashboard/assignmentViewDetails/:id",
        element: <AssignmentViewDetails></AssignmentViewDetails>,
        loader: ({ params }) =>
          fetch(
            `https://assignment-11-server-side-rosy.vercel.app/viewAssignmentViewDetails/${params.id}`,
            {
              credentials: "include",
            }
          ).then((res) => res.json()),
        hydrateFallbackElement: <Loader></Loader>,
      },
      {
        path: "dashboard/assignmentDetails/:id",
        element: <AssignmentDetails></AssignmentDetails>,
        loader: ({ params }) =>
          fetch(
            `https://assignment-11-server-side-rosy.vercel.app/assignment/${params.id}`,
            {
              credentials: "include",
            }
          ).then((res) => res.json()),
        hydrateFallbackElement: <Loader></Loader>,
      },
      {
        path: "dashboard/CreateAssignments",
        element: <CreateAssignments></CreateAssignments>,
      },
      {
        path: "dashboard/MyAttemptedAssignments",
        element: <MyAttemptedAssignments></MyAttemptedAssignments>,
      },
      {
        path: "dashboard/PendingAssignmentsPage",
        loader: () =>
          fetch(
            "https://assignment-11-server-side-rosy.vercel.app/assignmentModal",
            {
              credentials: "include",
            }
          ).then((res) => res.json()),
        element: <Pendingassignmentspage></Pendingassignmentspage>,
      },
      {
        path: "dashboard/updateModal/:id",
        element: <UpdateAssignmentModal></UpdateAssignmentModal>,
        loader: ({ params }) =>
          fetch(
            `https://assignment-11-server-side-rosy.vercel.app/assignmentModal/${params.id}`,
            {
              credentials: "include",
            }
          ).then((res) => res.json()),
        hydrateFallbackElement: <Loader></Loader>,
      },
      {
        path: "dashboard/updateProfile",
        element: <EditProfileWithImgBB></EditProfileWithImgBB>,
      },
    ],
  },
]);

export default router;
