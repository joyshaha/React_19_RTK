import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import useAuthCheck from "../../hooks/useAuthCheck";

export default function PublicLayout() {
  const authChecked = useAuthCheck();
  const token = useSelector((state) => state.auth.token);

  // Wait for auth check to complete
  if (!authChecked) {
    return <div>Loading...</div>;
  }

  // If authenticated, redirect to home
  return token ? <Navigate to="/" replace /> : <Outlet />;
}
