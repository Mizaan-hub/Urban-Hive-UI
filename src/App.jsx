import{
  createBrowserRouter, //Creates Browser Router to redirect to different pages
  RouterProvider,
}from "react-router-dom"
import ListPage from './routes/ListPage/ListPage';
import Layout from './routes/Layout/Layout';
import HomePage from './routes/HomePage/HomePage';

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
        }
      ]
    }

  ]);

  return (
    <RouterProvider router={router}/>
  )
}

export default App