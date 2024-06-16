import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


type UserProfile = {
    userName: string;
    email: string;
  };

type UserContextType = {
    user: UserProfile | null;
    token: string | null;
    registerUser: (email: string, username: string, password: string) => void;
    loginUser: (username: string, password: string) => void;
    logout: () => void;
    isLoggedIn: () => boolean;
  };  

type Props = { children: React.ReactNode };

const UserContext = createContext<UserContextType>({} as UserContextType);