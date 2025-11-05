import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
// import useAuthCheck from "../hooks/useAuthCheck";

export default function ProtectedLayout() {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) {
    return <Navigate to="/signin" replace />;
  }
  return <Outlet />;
  // const authChecked = useAuthCheck();
  // if (!authChecked) return <div>Loading...</div>;
  // return authChecked ? <Outlet /> : <Navigate to="/signin" replace />;
}
