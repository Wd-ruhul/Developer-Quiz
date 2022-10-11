import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layouts/Main';
import Home from './Components/Home/Home';
import Statistic from './Components/Statistic/Statistic';
import Blog from './Components/Blog/Blog';
import Topics from './Components/Home/Topics';
import Quiz from './Components/Quiz/Quiz';



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
          path: "/topic/:topicId",
          loader: async ({ params }) => {
            return  fetch(
              `https://openapi.programming-hero.com/api/quiz/${params.topicId}`
            )
          },
           
          element: <Quiz></Quiz>,
        },
        {
          path: "/topics",

          element: <Topics></Topics>,
        },

        {
          path: "/statistic",
          element: <Statistic></Statistic>,
        },
        {
          path: "/blog",
          element: <Blog></Blog>,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider
      router={router}
      
      ></RouterProvider>
    </div>
  );
}

export default App;
