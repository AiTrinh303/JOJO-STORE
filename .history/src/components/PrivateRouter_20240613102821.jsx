Protect Routes with Authorization
Next up, we will set up a route guard that protects any route that is private in the application. To achieve this, the useAuth hook for accessing our context data will be needed. Here is the code on how to work through it.


import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

const PrivateRoute = () => {
  const user = useAuth();
  if (!user.token) return <Navigate to="/login" />;
  return <Outlet />;
};

export default PrivateRoute;