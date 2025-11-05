import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
// import useAuthCheck from "../hooks/useAuthCheck";

export default function UnProtectedLayout() {
  const { isAuthenticated } = useAuth();
  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  return <Outlet />;
//   const authChecked = useAuthCheck();
//   if (!authChecked) return <div>Loading...</div>;
//   return authChecked ? <Outlet /> : <Navigate to="/" replace />;
}
