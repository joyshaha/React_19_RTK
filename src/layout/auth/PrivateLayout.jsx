import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import useAuthCheck from "../../hooks/useAuthCheck";

export default function PrivateLayout() {
  const authChecked = useAuthCheck();
  const token = useSelector((state) => state.auth.token);

  // Wait for auth check to complete
  if (!authChecked) {
    return null; // or a loading spinner
  }

  // If no token, redirect to signin
  if (!token) {
    return <Navigate to="/signin" replace />;
  }

  return <Outlet />;
}
