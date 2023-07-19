import React from "react";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Header from "./components/Header";
import Read from "./firebase/fetchProducts";
import ProductDetails from "./components/ProductDetails";
import Login from "./pages/Auth/Login";
import Reset from "./pages/Auth/Reset";
import SignUp from "./pages/Auth/SignUp";



import{
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration
} from "react-router-dom";


const Layout=()=>{
  return(
    <div>
      <Header />
      <ScrollRestoration />
      <Outlet />
    </div>
  )
  
}

const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"/",
        element: <Home/>,
          
      },
      {
        path:"/product/:id",
        element: <ProductDetails />
      },
      {
        path:"/cart",
        element: <Cart />,
      },
      {
        path:"/login",
        element: <Login />,
      },
      {
        path:"/sign-up",
        element: <SignUp />,
      },
      {
        path:"/reset",
        element: <Reset />,
      },
      
    ],
  },
])



function App() {
  return (
    <div className="font-bodyFont">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
