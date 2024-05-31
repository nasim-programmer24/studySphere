import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import Assignments from "../pages/Assignments";
import CreateAssignments from "../pages/CreateAssignments";
import PendingAssignments from "../pages/PendingAssignments";
import MyAttemptedAssignments from "../pages/MyAttemptedAssignments";
import AssignmentDetails from "../pages/AssignmentDetails";
import PrivateRoute from "./PrivateRoute";
import MyCreatedAssignments from "../pages/MyCreatedAssignments";
import UpdateAssignment from "../pages/UpdateAssignment";
import Contact from "../pages/Contact";
import ErrorPage from "../pages/ErrorPage";
import MyCheckedAssignments from "../pages/MyCheckedAssignments";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage/>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/registration",
        element: <Register />,
      },
      {
        path: "/assignments",
        element: <Assignments />,
        loader: () => fetch(`${import.meta.env.VITE_API_URL}/assignments`),
      },
      {
        path: "/createAssignments",
        element: (
          <PrivateRoute>
            <CreateAssignments />
          </PrivateRoute>
        ),
      },
      {
        path: "/pendingAssignments",
        element: (
          <PrivateRoute>
            <PendingAssignments />,
          </PrivateRoute>
        ),
      },
      {
        path: "/my-attempted-assignments",
        element: (
          <PrivateRoute>
            <MyAttemptedAssignments />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-created-assignments",
        element: (
          <PrivateRoute>
            <MyCreatedAssignments />
          </PrivateRoute>
        ),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            <UpdateAssignment />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/assignment/${params.id}`),
      },
      {
        path: "/my-checked-assignments",
        element: (
          <PrivateRoute>
            <MyCheckedAssignments />
          </PrivateRoute>
        ),
      },
      {
        path: "/assignment/:id",
        element: (
          <PrivateRoute>
            <AssignmentDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

export default router;
