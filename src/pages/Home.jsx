// import { useAuth } from "../hooks/useAuth";
import Dashboard from "./Dashboard";

export default function Home() {
  //   const { user } = useAuth();
  return (
    <div>
      <Dashboard />
      {/* <h2 className="text-2xl font-semibold mb-2">Welcome, {user?.email}!</h2> */}
    </div>
  );
}
