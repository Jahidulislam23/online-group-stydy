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
import Loader from '../component/Loader'
import UpdateAssignment from "../component/UpdateAssignment";
import AssignmentDetails from "../component/AssignmentDetails";
import AssignmentViewDetails from "../component/AssignmentViewDetails";


const router = createBrowserRouter([
    {
        path:'/',
        Component:MainLayout,
        errorElement:<ErrorCode></ErrorCode>,
        children:[
            {
                path:'/',
                Component:Home,
            },
            {
                path:'/register',
                Component:Register,
            },
            {
                path:'/login',
                Component:Login,
            },
            {
                path:'/Assignments',
                Component:Assignments,
                loader: () => fetch("http://localhost:3000/assignment").then(res=>res.json()),
                hydrateFallbackElement: <Loader></Loader>,
            },
            {
                path: "/update/:id",
                loader: ({ params }) =>
                fetch(`http://localhost:3000/assignment/${params.id}`).then(res=>res.json()),
                Component: UpdateAssignment,
                hydrateFallbackElement: <Loader></Loader>,
            },
            {
                path: "/assignmentViewDetails/:id",
                loader: ({ params }) =>
                fetch(`http://localhost:3000/viewAssignmentViewDetails/${params.id}`).then(res=>res.json()),
                Component: AssignmentViewDetails,
                hydrateFallbackElement: <Loader></Loader>,
            },
            {
                    path: "/assignmentDetails/:id",
                    Component: AssignmentDetails,
                    loader: ({ params }) =>
                    fetch(`http://localhost:3000/assignment/${params.id}`).then(res=>res.json()),
                    hydrateFallbackElement: <Loader></Loader>,
            },
            {
                path:'/CreateAssignments',
                element:<PrivateRoute><CreateAssignments></CreateAssignments></PrivateRoute>
            },
            {
                path:'/MyAttemptedAssignments',
                element:<PrivateRoute><MyAttemptedAssignments></MyAttemptedAssignments></PrivateRoute>
            },
            {
                path: "/users",
                Component: Users,
                loader: () => fetch("http://localhost:3000/users").then(res=>res.json()),
                hydrateFallbackElement: <Loader></Loader>,
            },
        ]
    }
])

export default router;