import{
  createBrowserRouter, //Creates Browser Router to redirect to different pages
  RouterProvider,
}from "react-router-dom"
import ListPage from './routes/ListPage/ListPage';
import Layout from './routes/Layout/Layout';
import HomePage from './routes/HomePage/HomePage';
import SinglePage from "./routes/SinglePage/SinglePage";
import ProfilePage from "./routes/ProfilePage/ProfilePage";
import LogIn from "./routes/LogIn/LogIn";
import Register from "./routes/Register/Register";
import NewPostPage from "./routes/NewPostPage/NewPostPage";
import ProfileUpdatePage from "./routes/ProfileUpdatePage/ProfileUpdatePage";

function App() {

  const router = createBrowserRouter([
    {
      path: "/", //setting default layout to every page
      element: <Layout/>,
      children:[ //calling children using outlet function
        {
          path: "/",
          element: <HomePage/>
        },
    
        {
          path: "/list",
          element: <ListPage/>
        },
        {
          path:"/:id",
          element: <SinglePage/>
        },
        {
          path:"/profile",
          element:<ProfilePage/>
        },
        {
          path:"/login",
          element: <LogIn/>
        },
        {
          path:"/register",
          element: <Register/>
        },
        {
          path:"/profUp",
          element: <ProfileUpdatePage/>
        }
      ]
    }

  ]);

  return (
    <RouterProvider router={router}/>
  )
}

export default App