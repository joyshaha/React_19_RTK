import { createBrowserRouter } from "react-router-dom";

// import ProtectedLayout from "../layout/ProtectedLayout";
// import UnProtectedLayout from "../layout/UnProtectedlayout";
import PrivateLayout from "../layout/auth/PrivateLayout";
import PublicLayout from "../layout/auth/PublicLayout";

// import SignIn from "../pages/SignIn";
// import SignUp from "../pages/SignUp";
import Login from "../pages/onboard/Login";
import Register from "../pages/onboard/Register";

import PodcastDetails from "../components/Podcast/PodcastDetails";
import PodcastForm from "../components/Podcast/PodcastForm";
import VideoDetails from "../components/Video/VideoDetails";
import MainLayout from "../layout/MainLayout";
import About from "../pages/About";
import Basic from "../pages/Basic";
import Home from "../pages/Home";
import List from "../pages/List";
import NotFound from "../pages/NotFound";
import PodcastsPage from "../pages/PodcastsPage";
import PostsPage from "../pages/PostsPage";
import TransactionsPage from "../pages/TransactionsPage";
import VideosPage from "../pages/VideosPage";
// import PrivateRoute from "../components/PrivateRoute";

// export const router = createBrowserRouter([
//   {
//     path: "/",
//     element: (
//       <PrivateRoute
//         element={
//           <MainLayout>
//             <Home />
//           </MainLayout>
//         }
//       />
//     ),
//   },
//   {
//     path: "/list",
//     element: (
//       <PrivateRoute
//         element={
//           <MainLayout>
//             <List />
//           </MainLayout>
//         }
//       />
//     ),
//   },
//   { path: "/signin", element: <SignIn /> },
//   { path: "/signup", element: <SignUp /> },
// ]);

const router = createBrowserRouter([
  {
    path: "/",
    // element: <ProtectedLayout />,
    element: <PrivateLayout />,
    children: [
      {
        element: <MainLayout />,
        children: [
          { index: true, element: <Home /> },
          // redux thunk
          { path: "list", element: <List /> },
          { path: "redux-thunk", element: <PostsPage /> },
          // rtk
          { path: "videos", element: <VideosPage /> },
          { path: "video/:id", element: <VideoDetails /> },
          { path: "transactions", element: <TransactionsPage /> },
          // rtk query
          { path: "podcasts", element: <PodcastsPage /> },
          { path: "podcasts/add", element: <PodcastForm edit={false} /> },
          { path: "podcast/:id", element: <PodcastDetails /> },
          { path: "podcasts/edit/:id", element: <PodcastForm edit={true} /> },
          // general redux
          { path: "about", element: <About /> },
        ],
      },
    ],
  },
  {
    path: "/signin",
    // element: <UnProtectedLayout />,
    element: <PublicLayout />,
    children: [
      // { index: true, element: <SignIn /> },
      { index: true, element: <Login /> },
    ],

  },
  {
    path: "/signup",
    // element: <UnProtectedLayout />,
    element: <PublicLayout />,
    children: [
      // { index: true, element: <SignUp /> },
      { index: true, element: <Register /> },
    ],
  },
  {
    path: "/basic",
    // element: <ProtectedLayout />,
    element: <PrivateLayout />,
    children: [{ path: "", element: <Basic /> }],
  },
  { path: "*", element: <NotFound /> },
]);

export default router;
