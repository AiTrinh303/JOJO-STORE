// Add Logout Button
// Next, we need to add a button to dispatch the logOut action for ending the user session by clearing the user state in the context and also clarifying the token localStorage. 

//import React, { useEffect } from "react";
//import { useAuth } from "../Context/AuthContext";

const Dashboard = () => {
  //const auth = useAuth();
  return (
    <div className="container">
      <div>
        <h1>Welcome! {auth.user?.username}</h1>
        <button > className="btn-submit">
          logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;