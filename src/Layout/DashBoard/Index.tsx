
import StatsCard from "Layout/StatsCard/Index";
import { FaBook, FaUsers, FaExchangeAlt, FaExclamationTriangle } from "react-icons/fa";

export default function Dashboard() {
  return (
    <div>
      <h1 className="text-2xl  text-white font-bold mb-6">Dashboard</h1>

      {/* Cards */}
      <div className="grid grid-cols-4 gap-6">
        
        <StatsCard
          title="Total Books"
          value="56"
          icon={<FaBook />}
          color="bg-blue-500"
        />

        <StatsCard
          title="Members"
          value="46"
          icon={<FaUsers />}
          color="bg-green-500"
        />

        <StatsCard
          title="Issued Books"
          value="44"
          icon={<FaExchangeAlt />}
          color="bg-purple-500"
        />

        <StatsCard
          title="Category"
          value="30"
          icon={<FaExclamationTriangle />}
          color="bg-red-500"
        />
        
      </div>
    </div>
  );
}