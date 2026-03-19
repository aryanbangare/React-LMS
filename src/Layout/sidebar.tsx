import { NavLink } from "react-router-dom";
import { FaBook, FaUsers, FaLayerGroup, FaExchangeAlt, FaHome } from "react-icons/fa";

export default function Sidebar() {
  const linkClass =
    "flex items-center gap-3 p-3 rounded-lg hover:bg-blue-500 hover:text-white";

  const activeClass = "bg-blue-600 text-white";

  return (
    <div className="w-64 min-h-screen bg-gray-900 text-white p-5">
      <h2 className="text-xl font-bold mb-6">Library Management System</h2>

      <nav className="space-y-2">
        <NavLink
          to="/Dashboard"
          className={({ isActive }) =>
            `${linkClass} ${isActive ? activeClass : ""}`
          }
        >
          <FaHome /> Dashboard
        </NavLink>
        <NavLink
          to="/books"
          className={({ isActive }) =>
            `${linkClass} ${isActive ? activeClass : ""}`
          }
        >
          <FaBook /> Books
        </NavLink>

        <NavLink
          to="/members"
          className={({ isActive }) =>
            `${linkClass} ${isActive ? activeClass : ""}`
          }
        >
          <FaUsers /> Members
        </NavLink>

        <NavLink
          to="/categories"
          className={({ isActive }) =>
            `${linkClass} ${isActive ? activeClass : ""}`
          }
        >
          <FaLayerGroup /> Category
        </NavLink>

        <NavLink
          to="/bookissue"
          className={({ isActive }) =>
            `${linkClass} ${isActive ? activeClass : ""}`
          }
        >
          <FaExchangeAlt /> BookIssue
        </NavLink>
      </nav>
    </div>
  );
}