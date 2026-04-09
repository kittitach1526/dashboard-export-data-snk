import { NavLink } from 'react-router-dom'; // 1. นำเข้า NavLink
import { 
  Wind, 
  Zap, 
  Activity, 
  Gauge, 
  ChevronRight
} from 'lucide-react';

export default function Sidebar() {
  // 2. เพิ่ม property 'path' เข้าไปใน array ของเมนู
  const menuItems = [
    { name: "Aircom", path: "/", icon: <Wind size={20} />, color: "hover:bg-blue-50 hover:text-blue-600" },
    { name: "Power", path: "/power", icon: <Zap size={20} />, color: "hover:bg-orange-50 hover:text-orange-600" },
    { name: "Flow", path: "/flow", icon: <Activity size={20} />, color: "hover:bg-green-50 hover:text-green-600" },
    { name: "Pressure", path: "/pressure", icon: <Gauge size={20} />, color: "hover:bg-purple-50 hover:text-purple-600" },
  ];

  return (
    <div className="w-64 h-full bg-white border-r border-gray-100 flex flex-col py-6">
      <div className="px-6 mb-8">
        <h2 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">
          Main Monitoring
        </h2>
      </div>

      <nav className="flex-1 px-3 space-y-1">
        {menuItems.map((item) => (
          // 3. เปลี่ยนจาก <button> เป็น <NavLink>
          // NavLink จะมี 'isActive' มาให้เช็คโดยอัตโนมัติว่าตอนนี้เราอยู่หน้านั้นหรือไม่
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) => `
              w-full flex items-center justify-between px-4 py-3 rounded-xl font-bold transition-all duration-200 group
              ${isActive 
                ? "bg-blue-600 text-white shadow-md shadow-blue-200" 
                : `text-gray-500 ${item.color}`
              }
            `}
          >
            {/* 4. ใส่ข้อมูลเหมือนเดิม แต่ใช้ isActive แทน activeMenu เดิม */}
            {({ isActive }) => (
              <>
                <div className="flex items-center gap-3">
                  {item.icon}
                  <span className="text-sm">{item.name}</span>
                </div>
                {isActive && <ChevronRight size={16} />}
              </>
            )}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}