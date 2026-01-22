
import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "./layout/DashboardLayout.tsx";
import Dashboard from "./pages/Dashboard";
import { RouterProvider } from "react-router-dom";

import Products from './components/product/Products.tsx';
import ProductDetails from './components/product/ProductDetails.tsx';
import About from './components/About.tsx';
import Cart from './components/Cart.tsx';
import ErrorPage from './pages/ErrorPage.tsx';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout/>,
    children:[
        {index: true, element: <Dashboard/>},
        { path: "shop/products", element: <Products /> }, 
        { path: "shop/products/:id", element: <ProductDetails /> },
        {path:"shop/cart", element:<Cart/>},
        {path:"about", element:<About/>}

    ]
  },
  {
        path:"*",
        element:<ErrorPage/>
   }
]);

/* / 
├── /shop 
│   ├── products 
│   ├── product/:productId 
│   ├── product/:productId/customize 
│   └── cart 
├── /about 
└── * (404)  */

/* ,
{
  path: "/shop",
  element: <ShopLayout/>,
  children:[
      {index: true, element: <Products/>},
      {path:"product/:productId", element:<ProductDetails/>},
      {path:"cart", element:<Cart/>}
  ]
},
{
  path:"/about",
  element:<About/>
}, */