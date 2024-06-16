
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

//Context
import ShopContextProvider  from "./Context/ShopContext";

//Pages
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import ShopCategory from "./pages/ShopCategory/ShopCategory";
import Product from "./pages/Product/Product";
import Wishlists from "./pages/Wishlists/Wishlists";
import LoginSignUp from "./pages/LoginSignUp/LoginSignUp";
import Register from "./pages/Register/Register";

//Styles
import "./App.scss";
import women_banner from './assets/banner_women.png';
import men_banner from './assets/banner_men.png';
import kids_banner from './assets/banner_kids.png';
import CartPage from "./pages/CartPage/CartPage";

const Layout = () => {
  return (
    <div className="app">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/women",
        element: <ShopCategory banner = {women_banner} category = "women"/>,
      },
      {
        path: "/men",
        element: <ShopCategory banner = {men_banner} category = "men"/>,
      },
      {
        path: "/kids",
        element: <ShopCategory banner = {kids_banner} category = "kids"/>,
      },
      {
        path: "/product",
        element: <Product />,
        children: [
          {
            path: ":productId",
            element: <Product />,
          },
        ],
      },
      {
        path: "/cartpage",
        element: <CartPage />,
      },
    
      {
        path: "/wishlists",
        element: <Wishlists />,
      },
      
    ]
  },
  {
    path: "/loginsignup",
    element: <LoginSignUp />,    
  },
  {
    path: "register",
    element: <Register />,
  }
]);

function App() {
  return (
    <ShopContextProvider>      
        <RouterProvider router={router} />
    </ShopContextProvider>
  );
}

export default App;