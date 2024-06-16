// //Create Authentication Logic - The AuthProvider component will be updated with login and logout functions. This function will be passed down through the AuthContext.Provider and it will be accessible globally.

// import { useContext, createContext, useState } from "react";
// import { useNavigate } from "react-router-dom";

// const AuthContext = createContext();

// const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [token, setToken] = useState(localStorage.getItem("site") || "");
//   const navigate = useNavigate();
//   const loginAction = async (data) => {
//     try {
//       const response = await fetch("your-api-endpoint/auth/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//       });
//       const res = await response.json();
//       if (res.data) {
//         setUser(res.data.user);
//         setToken(res.token);
//         localStorage.setItem("site", res.token);
//         navigate("/dashboard");
//         return;
//       }
//       throw new Error(res.message);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const logOut = () => {
//     setUser(null);
//     setToken("");
//     localStorage.removeItem("site");
//     navigate("/login");
//   };

//   return (
//     <AuthContext.Provider value={{ token, user, loginAction, logOut }}>
//       {children}
//     </AuthContext.Provider>
//   );

// };

// export default AuthProvider;

// export const useAuth = () => {
//   return useContext(AuthContext);
// };


import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); 

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
   
    setUser(null); // Xóa thông tin người dùng khi đăng xuất
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
