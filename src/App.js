import logo from "./logo.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Layouts/Main";
import Home from "./Components/Home/Home";
import Statistic from "./Components/Statistic/Statistic";
import Blog from "./Components/Blog/Blog";

import Quiz from "./Components/Quiz/Quiz";
import Topics from "./Components/Topics/Topics";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          loader: async () =>
            fetch("https://openapi.programming-hero.com/api/quiz"),
          element: <Home></Home>,
        },

        {
          path: "/topics",
          loader: async () =>
            fetch("https://openapi.programming-hero.com/api/quiz"),
          element: <Topics></Topics>,
        },
        {
          path: "/topic/:topicId",
          loader: async ({ params }) => {
            return fetch(
              `https://openapi.programming-hero.com/api/quiz/${params.topicId}`
            );
          },

          element: <Quiz></Quiz>,
        },

        {
          path: "/statistic",
          loader: async () =>
            fetch("https://openapi.programming-hero.com/api/quiz"),
          element: <Statistic></Statistic>,
        },
        {
          path: "/blog",
          element: <Blog></Blog>,
        },
      ],
    },
    {
      path: "*",
      element: (
        <div className="text-indigo-900 text-6xl"> Ops! 404 Not Found</div>
      ),
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
