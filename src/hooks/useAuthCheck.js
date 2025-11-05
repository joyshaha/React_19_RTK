import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { logIn } from "../features/auth/authSlice";

function useAuthCheck() {
  const dispatch = useDispatch();
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    const authUser = localStorage?.getItem("authUser");
    if (authUser) {
      const auth = JSON.parse(authUser);
      if (auth?.token && auth?.username) {
        dispatch(logIn({ token: auth.token, username: auth.username }));
      }
    }
    // Always set authChecked to true after checking, whether auth exists or not
    setAuthChecked(true);
  }, [dispatch]);
  return authChecked;
}

export default useAuthCheck;
