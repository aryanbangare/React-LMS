
import StatsCard from "Layout/StatsCard/Index";
import { FaBook, FaUsers, FaExchangeAlt, FaExclamationTriangle } from "react-icons/fa";

export default function Dashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      {/* Cards */}
      <div className="grid grid-cols-4 gap-6">
        
        <StatsCard
          title="Total Books"
          value="120"
          icon={<FaBook />}
          color="bg-blue-500"
        />

        <StatsCard
          title="Members"
          value="80"
          icon={<FaUsers />}
          color="bg-green-500"
        />

        <StatsCard
          title="Issued Books"
          value="45"
          icon={<FaExchangeAlt />}
          color="bg-purple-500"
        />

        <StatsCard
          title="Overdue"
          value="8"
          icon={<FaExclamationTriangle />}
          color="bg-red-500"
        />

      </div>
    </div>
  );
}