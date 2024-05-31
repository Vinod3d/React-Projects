import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Root, { loader as rootLoader } from "./routes/root";
import ErrorPage from "./ErrorPage"
import Contact from "./routes/Contact"

const router = createBrowserRouter([
  {
    path : "/",
    element : <Root/>,
    errorElement: <ErrorPage/>,
    loader: rootLoader,
    children : [
      {
        path: "contacts/:contactId",
        element: <Contact/>,
      },
    ]
  },
])

function App() {


  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
