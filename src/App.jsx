import { RouterProvider } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
// import { signIn } from "./features/auth/authSlice";
import { logIn } from "./features/auth/authSlice";

// import MainLayout from "./layout/MainLayout";
// import ProtectedLayout from "./layout/ProtectedLayout";
// import About from "./pages/About";
// import Home from "./pages/Home";
// import NotFound from "./pages/NotFound";
// import SignIn from "./pages/SignIn";
// import SignUp from "./pages/SignUp";
import router from "./routes/router";


export default function App() {
  const dispatch = useDispatch();
  // Auto-load user from localStorage into Redux
  useEffect(() => {
    const authUser = localStorage?.getItem("authUser");
    if (authUser) {
      const auth = JSON.parse(authUser);
      if (auth?.token && auth?.username) {
        dispatch(logIn({ token: auth.token, username: auth.username }));
      }
    }
  }, [dispatch]);
  
  return <RouterProvider router={router} />;
}

// export default function App() {
//   const dispatch = useDispatch();
//   // Auto-load user from localStorage into Redux
//   useEffect(() => {
//     const savedUser = localStorage.getItem("user");
//     if (savedUser) dispatch(signIn(JSON.parse(savedUser)));
//   }, [dispatch]);
  
//   return <RouterProvider router={router} />;
// }

// function PrivateRoute({ children }) {
//   const { isAuthenticated } = useAuth();
//   return isAuthenticated ? children : <Navigate to="/signin" />;
// }

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route
//           path="/"
//           element={
//             <PrivateRoute>
//               <MainLayout>
//                 <Home />
//               </MainLayout>
//             </PrivateRoute>
//           }
//         />
//         <Route
//           path="/about"
//           element={
//             <PrivateRoute>
//               <MainLayout>
//                 <About />
//               </MainLayout>
//             </PrivateRoute>
//           }
//         />
//         <Route path="/signin" element={<SignIn />} />
//         <Route path="/signup" element={<SignUp />} />
//         <Route path="/*" element={<NotFound />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }
