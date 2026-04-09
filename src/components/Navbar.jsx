import React from "react";
import Logo from "../assets/Logo.png";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <nav className="bg-white border-b border-gray-100 px-6 py-3 flex justify-between items-center shadow-sm">
      {/* ส่วนที่ 1: Logo & Brand */}
      <div className="flex items-center gap-4">
        <div
          onClick={() => navigate("/")}
          className="cursor-pointer hover:scale-105 transition-transform duration-200"
        >
          <img src={Logo} alt="Logo" className="h-10 w-auto object-contain" />
        </div>
        <div className="h-6 w-[1px] bg-gray-200 hidden md:block"></div>{" "}
        {/* เส้นคั่นแนวตั้ง */}
        <div className="hidden md:block">
          <h1 className="text-sm font-bold text-gray-800 leading-tight">
            DATA MONITORING
          </h1>
          <p className="text-[10px] text-gray-400 uppercase tracking-widest">
            Srivaree Center
          </p>
        </div>
      </div>

      {/* ส่วนที่ 2: Navigation Links / Data Status */}
      <div className="flex gap-2">
        {/* SNK Data Button */}
        <div className="flex flex-col items-end px-4 py-1.5 rounded-xl hover:bg-gray-50 cursor-pointer transition-colors group">
          <span className="text-[10px] font-black text-gray-400 group-hover:text-blue-500 transition-colors">
            SNK SYSTEM
          </span>
          <span className="text-sm font-bold text-gray-700">SNK Data</span>
        </div>

        {/* เส้นคั่นเล็กๆ */}
        <div className="self-center w-[1px] h-4 bg-gray-200"></div>

        {/* SSI Data Button */}
        <div className="flex flex-col items-end px-4 py-1.5 rounded-xl hover:bg-gray-50 cursor-pointer transition-colors group">
          <span className="text-[10px] font-black text-gray-400 group-hover:text-blue-600 transition-colors">
            SSI SYSTEM
          </span>
          <span className="text-sm font-bold text-gray-700">SSI Data</span>
        </div>
      </div>
    </nav>
  );
}
