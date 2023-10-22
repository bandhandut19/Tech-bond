import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import AuthProvider from './components/Providers/AuthProvider';
import AddProducts from './components/AddProducts/AddProducts';
import MyCart from './components/MyCart/MyCart';
import SingleBrandProducts from './components/SingleBrandProducts/SingleBrandProducts';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Login from './components/Login/login';
import Register from './components/Register/Register';
import PrivateRouteForAddProduct from './components/PrivateRouteForAddProduct/PrivateRouteForAddProduct';
import UpdateProducts from './components/UpdateProducts/UpdateProducts';
import ErrorPage from './components/ErrorPage/ErrorPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path:'/',
        element: <Home></Home>
      },
      {
        path:'/addproducts',
        element: <PrivateRouteForAddProduct><AddProducts></AddProducts></PrivateRouteForAddProduct>
      },
      {
        path:'/mycart',
        element: <MyCart></MyCart>
      },
      {
        path:'/:brand',
        errorElement:<ErrorPage></ErrorPage>,
        element: <SingleBrandProducts></SingleBrandProducts>
      },
      {
        path:'/:brand/:product',
        errorElement:<ErrorPage></ErrorPage>,
        element: <ProductDetails></ProductDetails>
      },
      {
        path:'/login',
        element: <Login></Login>
      },
      {
        path:'/register',
        element: <Register></Register>
      },
      {
        path:'/update/:name',
        element: <PrivateRouteForAddProduct><UpdateProducts></UpdateProducts></PrivateRouteForAddProduct>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
     <RouterProvider router={router} />
    
    </AuthProvider>
  </React.StrictMode>,
)
