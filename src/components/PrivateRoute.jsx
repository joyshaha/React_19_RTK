import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import useAuthCheck from "../hooks/useAuthCheck";

export default function PrivateRoute({ element }) {
  const authChecked = useAuthCheck();
  const { isAuthenticated } = useAuth();
  
  if (!authChecked) return <div>Loading...</div>;
  return isAuthenticated ? element : <Navigate to="/signin" replace />;
}
