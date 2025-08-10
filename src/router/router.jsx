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
// http://localhost:3000
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
          fetch("http://localhost:3000/homeAssignment", {
            credentials: "include",
          }),
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
          fetch("http://localhost:3000/users").then((res) => res.json()),
        hydrateFallbackElement: <Loader></Loader>,
      },
    ],
  },
  {
    path:'/dashboard',
    element:(<PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>),
    children:[
      {
        path: "dashboard/assignments",
        element: <Assignments></Assignments>,
        loader: () => fetch("http://localhost:3000/assignment"),
        hydrateFallbackElement: <Loader></Loader>,
      },
      {
        path: "dashboard/update/:id",
        element: 
            <UpdateAssignment></UpdateAssignment>,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/assignment/${params.id}`, {
            credentials: "include",
          }).then((res) => res.json()),
        hydrateFallbackElement: <Loader></Loader>,
      },
      {
        path: "dashboard/assignmentViewDetails/:id",
        element:<AssignmentViewDetails></AssignmentViewDetails>,
        loader: ({ params }) =>
          fetch(
            `http://localhost:3000/viewAssignmentViewDetails/${params.id}`,
            {
              credentials: "include",
            }
          ).then((res) => res.json()),
        hydrateFallbackElement: <Loader></Loader>,
      },
      {
        path: "dashboard/assignmentDetails/:id",
        element:
            <AssignmentDetails></AssignmentDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/assignment/${params.id}`, {
            credentials: "include",
          }).then((res) => res.json()),
        hydrateFallbackElement: <Loader></Loader>,
      },
      {
        path: "dashboard/CreateAssignments",
        element:
            <CreateAssignments></CreateAssignments>,
      },
      {
        path: "dashboard/MyAttemptedAssignments",
        element:
            <MyAttemptedAssignments></MyAttemptedAssignments>,
      },
      {
        path: "dashboard/PendingAssignmentsPage",
        loader: () =>
          fetch("http://localhost:3000/assignmentModal", {
            credentials: "include",
          }).then((res) => res.json()),
        element:
            <Pendingassignmentspage></Pendingassignmentspage>,
      },
      {
        path: "dashboard/updateModal/:id",
        element: 
            <UpdateAssignmentModal></UpdateAssignmentModal>,
          loader: ({ params }) =>
          fetch(`http://localhost:3000/assignmentModal/${params.id}`, {
            credentials: "include",
          }).then((res) => res.json()),
        hydrateFallbackElement: <Loader></Loader>,
      },
      {
        path:'dashboard/updateProfile',
        element:<EditProfileWithImgBB></EditProfileWithImgBB>
      }
    ]
  }
]);

export default router;
