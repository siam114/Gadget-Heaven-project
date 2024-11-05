import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './component/Root/Root';
import ErrorPage from './component/ErrorPage/ErrorPage';
import Home from './component/Home/Home';
import ProductDetail from './component/ProductDetail/ProductDetail';
import Dashboard from './component/Dashboard/Dashboard';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement:<ErrorPage/>,
    children :[
      {
        path: '/',
        element : <Home/>,
        loader: ()=> fetch('/category.json'),
        children:[
          
        ]
      },
      {
        path: 'products/:Id',
        element: <ProductDetail/>,
        loader: ()=> fetch('/fakeData.json')
      },
      {
        path: '/dashboard',
        element: <Dashboard/>,
        loader: ()=> fetch('/fakeData.json')
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
