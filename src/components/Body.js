import React from "react";
import Login from "./Login";
import Browse from "./Browse";
import Error from "./Error";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MoviePage from "./MoviePage";

const Body = () => {
  // const dispatch = useDispatch(); // redux dispatch hook to dispatch action == no longer needed bcz we hv moved the onauthstatechanged & dispatch inside that to header component. we did that bcz we want auth state throughout my app at everytime . header is the only component present everywhere.

  // creating router
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/error",
      element: <Error />,
    },
    {
      path: "/browse/:id",
      element: <MoviePage />,
    },
  ]);


  return (
    <div className="w-[100%] overflow-x-hidden">
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
