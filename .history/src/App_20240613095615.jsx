import { useEffect } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

//Context
import ShopContextProvider  from "./Context/ShopContext";

//Pages
import Footer from "./components/Footer";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import ShopCategory from "./pages/ShopCategory";
import Product from "./pages/Product";
import Wishlists from "./pages/Wishlists/Wishlists";
import Login from "./pages/Login";
// import LoginSignUp from "./pages/LoginSignUp/LoginSignUp";
// import Register from "./pages/Register/Register";
import CartPage from "./pages/CartPage/CartPage";
import FilteredProductList from "./pages/FilteredProductList";
import BackToTopButton from "./components/BackToTopButton";

//Styles
import AOS from 'aos';
import 'aos/dist/aos.css';
import women_banner from './assets/banner_women.png';
import men_banner from './assets/banner_men.png';
import kids_banner from './assets/banner_kids.png';

const Layout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
      <Footer />
      <BackToTopButton />
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
        path: "/filtered-products",
        element: <FilteredProductList />,
      },
      {
        path: "/cartpage",
        element: <CartPage />,
      },
    
      {
        path: "/wishlists",
        element: <Wishlists />,
      },
      {
        path: "/login",
        element: <Login />,
      }
      // {
      //   path: "/loginsignup",
      //   element: <LoginSignUp />,    
      // },
      // {
      //   path: "/register",
      //   element: <Register />,
      // }
    ]
  },
]);

function App() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 1000,
      delay: 150,
    });
    AOS.refresh();
  }, []);
  return (
    <ShopContextProvider>          
          <RouterProvider router={router} />  
    </ShopContextProvider>
  );
}

export default App;