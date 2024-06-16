// Protect Routes with Authorization
// Set up a route guard that protects any route that is private in the application. To achieve this, the useAuth hook for accessing our context data will be needed.
// If the user does not possess a token, indicating they are not logged in, the code triggers a redirect to the /login route using the <Navigate> component. Otherwise, it renders the child components nested within the PrivateRoute component accessed via <Outlet />, allowing authenticated users to access the protected routes while redirecting unauthenticated users to the login page.


import { Link, Outlet } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

const PrivateRoute = () => {
  const user = useAuth();
  (!user.token): <Link to="/login" />
  return <Outlet />;
};

export default PrivateRoute;