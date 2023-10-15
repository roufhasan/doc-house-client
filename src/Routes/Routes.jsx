import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import DoctorInfo from "../Pages/Home/DoctorInfo/DoctorInfo";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/doctors/:id",
        element: <DoctorInfo />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/doctors/${params.id}`),
      },
    ],
  },
]);
