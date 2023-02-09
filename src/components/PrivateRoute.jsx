import { Navigate, Outlet } from "react-router-dom";
import { useAuthStatus } from "../hooks/useAuthStatus";
import Spinner from "./Spinner";

const PrivateRoute = () => {
  const { LoggedIn, loading } = useAuthStatus();
  if (loading) {
    return <Spinner />;
  }

  return LoggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
