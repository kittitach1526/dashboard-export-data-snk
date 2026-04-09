import { useState } from 'react';
import { 
  Wind, 
  Zap, 
  Activity, 
  Gauge, 
  Download,
  ChevronRight
} from 'lucide-react'; // แนะนำให้ลง lucide-react เพื่อใช้ icon สวยๆ

export default function Sidebar() {
  const [activeMenu, setActiveMenu] = useState("Aircom");

  const menuItems = [
    { name: "Aircom", icon: <Wind size={20} />, color: "hover:bg-blue-50 hover:text-blue-600" },
    { name: "Power", icon: <Zap size={20} />, color: "hover:bg-orange-50 hover:text-orange-600" },
    { name: "Flow", icon: <Activity size={20} />, color: "hover:bg-green-50 hover:text-green-600" },
    { name: "Pressure", icon: <Gauge size={20} />, color: "hover:bg-purple-50 hover:text-purple-600" },
  ];

  return (
    <div className="w-64 h-screen bg-white border-r border-gray-100 flex flex-col py-6">
      {/* Header ของ Sidebar */}
      <div className="px-6 mb-8">
        <h2 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">
          Main Monitoring
        </h2>
      </div>

      {/* Menu List */}
      <nav className="flex-1 px-3 space-y-1">
        {menuItems.map((item) => (
          <button
            key={item.name}
            onClick={() => setActiveMenu(item.name)}
            className={`w-full flex items-center justify-between px-4 py-3 rounded-xl font-bold transition-all duration-200 group ${
              activeMenu === item.name
                ? "bg-blue-600 text-white shadow-md shadow-blue-200"
                : `text-gray-500 ${item.color}`
            }`}
          >
            <div className="flex items-center gap-3">
              {item.icon}
              <span className="text-sm">{item.name}</span>
            </div>
            {activeMenu === item.name && <ChevronRight size={16} />}
          </button>
        ))}
      </nav>

      {/* ส่วนล่าง: Export Data */}
      <div className="px-3 mt-auto">
        {/* <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-500 hover:bg-gray-100 rounded-xl font-bold transition-all">
          <Download size={20} />
          <span className="text-sm">Export Data</span>
        </button> */}
        
        {/* User Info หรือ Version */}
        {/* <div className="mt-4 px-4 py-3 bg-gray-50 rounded-2xl">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs">
              SP
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-bold text-gray-700">Sphx IT</span>
              <span className="text-[10px] text-gray-400">System Admin</span>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}