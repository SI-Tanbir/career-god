import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root.jsx';
import Home from './components/Home.jsx';
import ApliedJobs from './components/AppliedJobs/ApliedJobs.jsx';
import ErrorPages from './components/ErrorPages./ErrorPages.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPages></ErrorPages>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
      },
      {
        path:"/applied",
        element:<ApliedJobs></ApliedJobs>
      }
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />
  </StrictMode>,
)
