import React, { useState, useEffect } from "react";
import { CSVLink } from "react-csv";
import { format } from "date-fns";
import { aircomService } from "../services/aircom_api"; // สำหรับ Preset Today/Week
import { exportService } from "../services/export_api"; // สำหรับ Custom Range ที่เพิ่งสร้าง

function ExportPage() {
  const [data, setData] = useState([]);
  const [columns, setColumns] = useState([]);
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState("Aircom (5.5)");
  
  const [timeMode, setTimeMode] = useState("custom"); // 'preset' หรือ 'custom'
  const [timePreset, setTimePreset] = useState("today");
  const [startDate, setStartDate] = useState(format(new Date(), "yyyy-MM-dd"));
  const [endDate, setEndDate] = useState(format(new Date(), "yyyy-MM-dd"));

  const categories = [
    "Aircom (5.5)", "Aircom (6.5)", "Aircom (7)",
    "Power (5.5)", "Power (6.5)", "Power (7)",
    "Flow (5.5)", "Flow (6.5)", "Flow (7)",
    "Pressure (5.5)", "Pressure (6.5)", "Pressure (7)"
  ];

  // ฟังก์ชันหลักในการดึงข้อมูล
  const handleFetchData = async () => {
    setLoading(true);
    setData([]); // เคลียร์ข้อมูลเก่าก่อนดึงใหม่
    
    try {
      let result;
      
      // 1. เตรียมชื่อ Collection (Condition) ให้ตรงกับ DB
      // แปลง "Aircom (5.5)" -> "aircom_5_5"
      const namePart = category.split(" ")[0].toLowerCase();
      const versionPart = category.split("(")[1].replace(")", "").replace(".", "");
      const collectionName = `${namePart}_${versionPart}`;

      // 2. แยก Logic ตามโหมดเวลา
      if (timeMode === "preset") {
        // ใช้ Service เดิมที่แยกเป็นรายฟังก์ชัน (getAircomToday_5_5 ฯลฯ)
        const functionPrefix = category.split(" ")[0]; // Aircom, Power...
        const functionName = `get${functionPrefix}${timePreset === 'today' ? 'Today' : timePreset === 'week' ? 'Week' : 'Month'}_${versionPart}`;
        
        if (aircomService[functionName]) {
          result = await aircomService[functionName]();
        } else {
          console.error("Function not found:", functionName);
        }
      } else {
        // 🔹 ใช้ Service ใหม่ที่รับ Range วันที่ (export_api.js)
        result = await exportService.getAircomByRange(collectionName, startDate, endDate);
      }

      if (result && result.status === "success") {
        setData(result.data);
        setColumns(result.columns);
      } else {
        alert("ไม่พบข้อมูลในช่วงเวลาที่เลือก");
      }
    } catch (error) {
      console.error("Fetch Error:", error);
      alert("เกิดข้อผิดพลาดในการดึงข้อมูลจาก Server");
    } finally {
      setLoading(false);
    }
  };

  // ดึงอัตโนมัติเฉพาะโหมด Preset เมื่อเปลี่ยนเงื่อนไข
  useEffect(() => {
    if (timeMode === "preset") {
      handleFetchData();
    }
  }, [category, timePreset, timeMode]);

  return (
    <div className="max-w-6xl mx-auto bg-gray-50 min-h-screen p-4 md:p-8">
      <div className="bg-white rounded-3xl shadow-xl p-6 md:p-10 border border-gray-100">
        
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-gray-800 uppercase tracking-tighter">
            📊 DATA EXPORT SYSTEM
          </h1>
          <p className="text-gray-400 font-bold text-xs mt-2 tracking-widest uppercase">
            CSV Generation Tool v2.0
          </p>
        </div>

        {/* Step 1: เลือกหมวดหมู่ */}
        <div className="mb-10">
          <label className="block text-[11px] font-black text-gray-400 mb-4 uppercase tracking-[0.2em]">
            Step 1: Select Category
          </label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`py-3 px-2 rounded-xl font-bold text-sm transition-all ${
                  category === cat
                    ? "bg-blue-600 text-white shadow-lg scale-105"
                    : "bg-gray-100 text-gray-400 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Step 2: เลือกช่วงเวลา */}
        <div className="bg-slate-900 p-6 rounded-3xl mb-10 shadow-2xl">
          <div className="flex justify-between items-center mb-6">
            <span className="text-[11px] font-bold text-slate-500 uppercase">Step 2: Time Filter</span>
            <div className="flex bg-slate-800 p-1 rounded-lg">
              {/* <button 
                onClick={() => setTimeMode("preset")}
                className={`px-4 py-1.5 rounded-md text-xs font-bold ${timeMode === 'preset' ? 'bg-blue-600 text-white' : 'text-slate-400'}`}
              >Quick</button> */}
              <button 
                onClick={() => setTimeMode("custom")}
                className={`px-4 py-1.5 rounded-md text-xs font-bold ${timeMode === 'custom' ? 'bg-blue-600 text-white' : 'text-slate-400'}`}
              >Custom Range</button>
            </div>
          </div>

          {timeMode === "preset" ? (
            <select
              className="w-full p-4 bg-slate-800 border-none rounded-xl text-white font-bold"
              value={timePreset}
              onChange={(e) => setTimePreset(e.target.value)}
            >
              <option value="today">วันนี้ (Today)</option>
              <option value="week">7 วันย้อนหลัง</option>
              <option value="month">เดือนนี้</option>
            </select>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input 
                type="date" 
                className="p-4 bg-slate-800 text-white rounded-xl font-bold"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
              <input 
                type="date" 
                className="p-4 bg-slate-800 text-white rounded-xl font-bold"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
              <button 
                onClick={handleFetchData}
                className="bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all"
              >
                SEARCH DATA
              </button>
            </div>
          )}
        </div>

        {/* Step 3: ปุ่ม Export CSV */}
        <div className="flex flex-col items-center justify-center mb-12 border-b border-dashed border-gray-100 pb-12">
          {loading ? (
            <div className="text-blue-600 font-black animate-pulse flex items-center gap-2">
              <div className="w-4 h-4 bg-blue-600 rounded-full animate-bounce"></div>
              LOADING DATA...
            </div>
          ) : data.length > 0 ? (
            <div className="text-center">
              <CSVLink
                data={data}
                headers={columns.map((col) => ({ label: col, key: col }))}
                filename={`${category.replace(/[()]/g, "")}_${startDate}_to_${endDate}.csv`}
                className="group bg-emerald-500 hover:bg-emerald-600 text-white text-2xl font-black py-6 px-16 rounded-2xl shadow-xl transition-all inline-block active:scale-95"
              >
                DOWNLOAD CSV 📥
              </CSVLink>
              <p className="mt-4 text-slate-400 font-bold text-sm">FOUND {data.length.toLocaleString()} RECORDS</p>
            </div>
          ) : (
            <div className="text-gray-300 font-bold uppercase italic">No data to export</div>
          )}
        </div>

        {/* Preview Table */}
        <div className="overflow-x-auto rounded-xl border border-gray-100">
           {/* ส่วนนี้ใช้ Code Table เดิมของคุณได้เลยครับ */}
        </div>

      </div>
    </div>
  );
}

export default ExportPage;