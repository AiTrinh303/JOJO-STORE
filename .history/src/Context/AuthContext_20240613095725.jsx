import { useContext, createContext } from "react";

const AuthContext = createContext();


export const useAuth = () => {
    return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  return 
    <AuthContext.Provider>
        {children}
    </AuthContext.Provider>;
};

export default AuthProvider;