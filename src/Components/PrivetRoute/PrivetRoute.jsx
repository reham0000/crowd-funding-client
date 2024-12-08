import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
    
  const location = useLocation();



  if (loading) {
    return <span className="loading loading-bars loading-lg absolute top-2/4 left-2/4"></span>
  }

  if (!user) {
    return <Navigate state={{from: location.pathname}} to="/signin"></Navigate>;
  }

  return children;
};

export default PrivetRoute;
