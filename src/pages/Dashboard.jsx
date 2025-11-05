import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export default function Dashboard() {
  // Mock chart data
  const revenueData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Revenue ($)",
        data: [12000, 19000, 15000, 21000, 26000, 30000],
        borderColor: "#3b82f6",
        backgroundColor: "rgba(59,130,246,0.3)",
        tension: 0.3,
        fill: true,
      },
    ],
  };

  const userSignupData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "New Signups",
        data: [30, 45, 40, 60, 70, 80, 75],
        backgroundColor: "rgba(34,197,94,0.7)",
        borderRadius: 8,
      },
    ],
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex md:flex-row flex-col justify-between items-center">
        <h2 className="text-2xl font-semibold">Dashboard Overview</h2>
        <p className="text-gray-800 text-sm">
          Updated: {new Date().toLocaleDateString()}
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Users"
          value="1,245"
          growth="+12%"
          color="blue"
        />
        <StatCard title="Revenue" value="$45,600" growth="+18%" color="green" />
        <StatCard
          title="Active Sessions"
          value="320"
          growth="-4%"
          color="orange"
        />
        <StatCard title="New Signups" value="98" growth="+9%" color="purple" />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-lg font-semibold mb-4">Revenue Trends</h3>
          <div className="h-96 w-full">
            <Line
              data={revenueData}
              options={{ responsive: true, maintainAspectRatio: false }}
              height={300}
            />
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-lg font-semibold mb-4">Weekly User Signups</h3>
          <div className="h-96 w-full">
            <Bar
              data={userSignupData}
              options={{ responsive: true, maintainAspectRatio: false }}
              height={300}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// --- Subcomponent for Stats Cards ---
function StatCard({ title, value, growth, color }) {
  const colorMap = {
    blue: "text-blue-500",
    green: "text-green-500",
    orange: "text-orange-500",
    purple: "text-purple-500",
  };

  return (
    <div className="bg-white rounded-xl p-5 shadow hover:shadow-md transition-shadow duration-200">
      <p className="text-gray-500 text-sm">{title}</p>
      <h3 className="text-2xl font-semibold mt-1">{value}</h3>
      <span className={`text-sm font-medium ${colorMap[color]}`}>{growth}</span>
    </div>
  );
}
