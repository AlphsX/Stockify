import React from "react";
import { NavLink } from "react-router-dom";
import { Gauge, Package, PanelLeft } from "lucide-react";
import logo from "../assets/vite.svg";

interface Props {
  isOpen: boolean;
  onToggle: () => void;
}

const Sidebar: React.FC<Props> = ({ isOpen, onToggle }) => {
  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `flex items-center gap-3 px-4 py-2 rounded-full mb-1.5 transition-colors font-medium text-sm ${
      isActive
        ? "bg-blue-50 text-blue-700"
        : "text-gray-500 hover:bg-gray-100 hover:text-gray-900"
    }`;

  return (
    <>
      {/* Backdrop for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-20 md:hidden transition-opacity duration-300"
          onClick={onToggle}
        />
      )}

      <aside
        className={`w-64 min-h-screen bg-white flex flex-col p-3 fixed left-0 top-0 z-30 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-2 py-4 mb-4">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Stockify Logo" className="w-8 h-8" />
            <span className="text-2xl font-bold text-gray-900 tracking-tight font-outfit">
              Stockify
            </span>
          </div>
          <button
            onClick={onToggle}
            className="p-2 text-gray-500 hover:text-gray-900 transition-colors"
            title="Close Sidebar"
          >
            <PanelLeft className="w-5 h-5" />
          </button>
        </div>

        <nav className="flex-1">
          <NavLink to="/" className={navLinkClasses}>
            <Gauge className="w-5 h-5" strokeWidth={2} />
            Dashboard
          </NavLink>
          <NavLink to="/products" className={navLinkClasses}>
            <Package className="w-5 h-5" strokeWidth={2} />
            Manage Products
          </NavLink>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
