import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useAircomSocket_ac101 } from "../services/aircomSocket_ac101";

function AircomDashboard() {
//   // เปลี่ยนมาใช้ line ให้ตรงกับ Service
//   const [line, setLine] = useState("AC101"); 

  // เรียกใช้ Service (Hook)
  const { currentData_ac101, history_ac101, connected_ac101 } = useAircomSocket_ac101("AC101");
//   const { currentData_ac102, history_ac102, connected_ac102 } = useAircomSocket("AC102");

  // Component สำหรับสร้างเกจวงกลม
  const Gauge = ({ value, max, label, unit, color }) => {
    const percentage = Math.min((value / max) * 100, 100);
    return (
      <div className="flex flex-col items-center bg-white p-6 rounded-3xl shadow-lg border border-gray-100 w-full">
        <div className="relative w-32 h-32">
          <svg className="w-full h-full" viewBox="0 0 36 36">
            <path className="text-gray-200" strokeDasharray="100, 100" strokeWidth="3" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
            <path className={color} strokeDasharray={`${percentage}, 100`} strokeWidth="3" strokeLinecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-2xl font-black text-slate-800">{value || 0}</span>
            <span className="text-[10px] text-gray-400 font-bold">{unit}</span>
          </div>
        </div>
        <span className="mt-4 font-black text-gray-500 text-[10px] uppercase tracking-widest">{label}</span>
      </div>
    );
  };

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8 bg-gray-50 min-h-screen font-sans">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-black text-slate-900 tracking-tighter uppercase">AIRCOM LIVE MONITOR</h1>
        {/* <div className={`px-4 py-1 rounded-full text-[10px] font-black uppercase shadow-sm ${connected ? "bg-green-500 text-white" : "bg-red-500 text-white"}`}>
          {connected ? "● System Live" : "○ Disconnected"}
        </div> */}
      </div>

    {/*-----------------------------------------------------------------------------------------------------------------*/}
      {/* Tabs - แก้ไข category เป็น line */}
      <div className="flex gap-2 mb-8 bg-gray-200 p-1 rounded-2xl w-full justify-between h-10">
        <div className="flex items-center ml-5">
            Aircom - Factory 1 (5.5)
        </div>

        <div className={`px-4 py-1 rounded-full text-[10px] font-black flex items-center uppercase shadow-sm ${connected_ac101 ? "bg-green-500 text-white" : "bg-red-500 text-white"}`}>
          {connected_ac101 ? "● System Live" : "○ Disconnected"}
        </div>
        {/* {["AC101", "AC102", "AC103","STB101"].map((l) => (
          <button
            key={l}
            onClick={() => setLine(l)}
            className={`px-8 py-2 rounded-xl font-bold transition-all ${
              line === l ? "bg-white text-slate-900 shadow-sm" : "text-gray-500 hover:text-slate-700"
            }`}
          >
            {l}
          </button>
        ))} */}
      </div>

      {/* Gauges Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Gauge value={currentData_ac101?.power_55_f1?.toFixed(2)} max={100} label={`POWER`} unit="kW" color="text-blue-500" />
        <Gauge value={currentData_ac101?.flow_55_f1?.toFixed(2)} max={100} label={`FLOW`} unit="m³/min" color="text-orange-500" />
        <Gauge value={currentData_ac101?.press_55_f1?.toFixed(2)} max={100} label={`Pressure`} unit="Bar" color="text-emerald-500" />
        <Gauge value={currentData_ac101?.cal_55_f1?.toFixed(3)} max={100} label={`kW/m³/min`} unit="kW/m³/min" color="text-purple-500" />
      </div>

      {/*-----------------------------------------------------------------------------------------------------------------*/}
      {/* Tabs - แก้ไข category เป็น line */}
      <div className="flex gap-2 mb-8 bg-gray-200 p-1 rounded-2xl w-full justify-between h-10">
        <div className="flex items-center ml-5">
            Aircom - Factory 1 (6.5)
        </div>

        <div className={`px-4 py-1 rounded-full text-[10px] font-black flex items-center uppercase shadow-sm ${connected_ac101 ? "bg-green-500 text-white" : "bg-red-500 text-white"}`}>
          {connected_ac101 ? "● System Live" : "○ Disconnected"}
        </div>

        
      </div>
      
      {/* Gauges Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Gauge value={currentData_ac101?.power_65_f1?.toFixed(2)} max={100} label={`POWER`} unit="kW" color="text-blue-500" />
        <Gauge value={currentData_ac101?.flow_65_f1?.toFixed(2)} max={100} label={`FLOW`} unit="m³/min" color="text-orange-500" />
        <Gauge value={currentData_ac101?.press_65_f1?.toFixed(2)} max={100} label={`Pressure`} unit="Bar" color="text-emerald-500" />
        <Gauge value={currentData_ac101?.cal_65_f1?.toFixed(3)} max={100} label={`kW/m³/min`} unit="kW/m³/min" color="text-purple-500" />
      </div>

      {/* Gauges Section */}
      {/* <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Gauge value={currentData_ac102?.presAC2} max={10} label={`Pressure AC101`} unit="Bar" color="text-blue-500" />
        <Gauge value={currentData_ac102?.tempAC2} max={120} label={`Temp AC101`} unit="°C" color="text-orange-500" />
        <Gauge value={currentData_ac102?.currentAC2} max={100} label={`Current AC101`} unit="Amp" color="text-emerald-500" />
        <Gauge value={currentData_ac102?.freqAC2} max={100} label={`Freq AC101`} unit="Hz" color="text-purple-500" />
      </div> */}
{/*-----------------------------------------------------------------------------------------------------------------*/}
    <div className="flex gap-2 mb-8 bg-gray-200 p-1 rounded-2xl w-full justify-between h-10">
        <div className="flex items-center ml-5">
            Aircom - Factory 2 (7)
        </div>

        <div className={`px-4 py-1 rounded-full text-[10px] font-black flex items-center uppercase shadow-sm ${connected_ac101 ? "bg-green-500 text-white" : "bg-red-500 text-white"}`}>
          {connected_ac101 ? "● System Live" : "○ Disconnected"}
        </div>
        
        
        
      </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Gauge value={currentData_ac101?.power_7_f2?.toFixed(2)} max={100} label={`POWER`} unit="kW" color="text-blue-500" />
        <Gauge value={currentData_ac101?.flow_7_f2?.toFixed(2)} max={100} label={`FLOW`} unit="m³/min" color="text-orange-500" />
        <Gauge value={currentData_ac101?.press_7_f2?.toFixed(2)} max={100} label={`Pressure`} unit="Bar" color="text-emerald-500" />
        <Gauge value={currentData_ac101?.cal_7_f2?.toFixed(3)} max={100} label={`kW/m³/min`} unit="kW/m³/min" color="text-purple-500" />
      </div>
    
    </div>
  );
}

export default AircomDashboard;