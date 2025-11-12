// import { useAuth } from "../hooks/useAuth";
import { useGetMeQuery } from "../features/user/userApi";
import Dashboard from "./Dashboard";

export default function Home() {
  //   const { user } = useAuth();
  const { data: user } = useGetMeQuery();
  console.log(user);
  return (
    <div>
      <Dashboard />
      {/* <h2 className="text-2xl font-semibold mb-2">Welcome, {user?.email}!</h2> */}
    </div>
  );
}
