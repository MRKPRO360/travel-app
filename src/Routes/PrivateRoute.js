import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

export default function PrivateRoute({ children }) {
  const location = useLocation();

  const { currentUser } = useAuth();

  return currentUser?.uid ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
}
