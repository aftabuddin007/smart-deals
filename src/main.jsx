import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './LayOuts/Root.jsx';
import Home from './Components/Home/Home.jsx';
import AllProducts from './Components/AllProducts/AllProducts.jsx';
import AuthProvider from './Context/AuthProvider.jsx';
import Login from './Pages/Login/Login.jsx';
import Signup from './Pages/Signup/Signup.jsx';
import { ToastContainer } from 'react-toastify';
import PrivateRoute from './Components/PrivateRoutes/PrivateRoutes.jsx';

import About from './Pages/About/About.jsx';
import MyBids from './Components/MyBids/MyBids.jsx';
import MyProducts from './Components/MyProducts/MyProducts.jsx';
import ProductDetail from './Components/ProductDetails/ProductDetail.jsx';
import CreateProduct from './Components/CreateProduct/CreateProduct.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    children:[
     {
      index:true,
      Component:Home
     },{
      path:'/allProducts',
      element:<AllProducts></AllProducts>
      
     },{
      path:'/login',
      element:<Login></Login>
     },{
      path:'/signup',
      element:<Signup></Signup>    
     },{
      path:'/about',
      element:<About></About>
     },{
      path:'/myBids',
      element:<MyBids></MyBids>
      
     },{
      path:'/myProduct',
      element:<MyProducts></MyProducts>
     },{
      path:'productDetails/:id',
      loader:({params})=>fetch(`http://localhost:3000/products/${params.id}`),

      element:<PrivateRoute>

        <ProductDetail></ProductDetail>
      </PrivateRoute>
     },{
      path:'/createProduct',
      element:<CreateProduct></CreateProduct>
     }
    ]
  },
  
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
<AuthProvider>
        <RouterProvider router={router} />,

</AuthProvider>
    <ToastContainer />
  </StrictMode>,
)
