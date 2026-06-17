import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { getUser } from "../utils/authApi";

export default function ProtectedRoute({ children }) {
  const [loading, setLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const checkUser = async () => {
      try {
        const res = await getUser();

        if (res.success) {
          setIsAuth(true);
        } else {
          setIsAuth(false);
        }
      } catch (err) {
        setIsAuth(false);
      } finally {
        setLoading(false);
      }
    };

    checkUser();
  }, []);

  if (loading) return <p>Loading...</p>;

  if (!isAuth) return <Navigate to="/login" />;

  return children;
}