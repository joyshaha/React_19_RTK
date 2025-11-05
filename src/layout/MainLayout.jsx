import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function MainLayout() {
  return (
    <div className="max-w-full h-screen overflow-hidden flex flex-col justify-center items-center">
      <div className="flex h-screen bg-gray-100 max-w-full mx-auto w-full">
        <Sidebar />
        <div className="flex flex-col max-w-full mx-auto w-full">
          <Navbar />
          <div className="p-6 overflow-auto w-full">
            {/* {children} */}
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
