import React, { useState, useEffect } from "react";
import { CSVLink } from "react-csv";
// แนะนำให้ติดตั้งเพิ่ม: npm install date-fns
import { format } from "date-fns"; 

function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState("Aircom");
  const [timePreset, setTimePreset] = useState("today");
  const [customRange, setCustomRange] = useState({ start: "", end: "" });

  const categories = ["Aircom", "Power", "Flowrate", "Pressure"];

  // ฟังก์ชันสำหรับจัดรูปแบบวันที่เป็น dd/mm/yyyy
  const formatDateDisplay = (dateStr) => {
    if (!dateStr) return "";
    const date = new Date(dateStr);
    return format(date, "dd/mm/yyyy"); // ใช้ date-fns จัดการ
  };

  const fetchData = () => {
    setLoading(true);
    // ส่งข้อมูลไปยัง API ในรูปแบบที่ Backend ต้องการ (ปกติเป็น YYYY-MM-DD)
    console.log(`Fetching ${category} from ${customRange.start} to ${customRange.end}`);

    setTimeout(() => {
      const mockData = [
        { 
          // จัดรูปแบบวันที่ในข้อมูลที่จะ export เป็น dd/mm/yyyy
          timestamp: format(new Date(), "dd/mm/yyyy HH:mm:ss"), 
          category: category, 
          value: (Math.random() * 10).toFixed(2), 
          unit: "unit" 
        },
      ];
      setData(mockData);
      setLoading(false);
    }, 600);
  };

  useEffect(() => {
    if (timePreset !== "custom") fetchData();
  }, [timePreset, category]);

  return (
    <div className="max-w-7xl mx-auto bg-gray-50 min-h-screen p-8 rounded-4xl">
      <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-8 text-center uppercase tracking-tighter">
          📊 SSI DATA MANAGEMENT
        </h1>

        {/* --- Step 1: Category --- */}
        <div className="mb-8">
          <label className="block text-xs font-black text-gray-400 mb-4 uppercase tracking-widest">
            Step 1: Select Category
          </label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`py-4 px-6 rounded-2xl font-bold text-lg transition-all ${
                  category === cat
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-400 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* --- Step 2: Time Selection --- */}
        <div className="bg-gray-200 p-8 rounded-3xl mb-10 text-white shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-1 gap-8 items-center">
            <div>
              <label className="block text-xs font-bold text-slate-400 mb-3 uppercase tracking-widest">
                Step 2: Time Range
              </label>
              <select 
                className="w-full p-4 bg-gray-500 border-none rounded-xl text-white focus:ring-2 focus:ring-blue-500 font-bold"
                value={timePreset}
                onChange={(e) => setTimePreset(e.target.value)}
              >
                <option value="today">วันนี้ (Today)</option>
                <option value="7days">7 วันย้อนหลัง</option>
                <option value="30days">30 วันย้อนหลัง</option>
                <option value="custom">กำหนดเอง (dd/mm/yyyy)</option>
              </select>
            </div>

            {timePreset === "custom" && (
              <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in zoom-in duration-300">
                <div className="flex-1">
                  <span className="text-[10px] text-slate-500 uppercase font-bold ml-1">Start Date</span>
                  <input 
                    type="date" 
                    className="w-full p-3 bg-gray-500 rounded-xl border-none text-white focus:ring-2 focus:ring-blue-500" 
                    onChange={(e) => setCustomRange({...customRange, start: e.target.value})} 
                  />
                </div>
                <div className="flex-1">
                  <span className="text-[10px] text-slate-500 uppercase font-bold ml-1">End Date</span>
                  <input 
                    type="date" 
                    className="w-full p-3 bg-gray-500 rounded-xl border-none text-white focus:ring-2 focus:ring-blue-500" 
                    onChange={(e) => setCustomRange({...customRange, end: e.target.value})} 
                  />
                </div>
                <button 
                  onClick={fetchData} 
                  className="bg-blue-500 hover:bg-blue-400 text-white px-8 py-3 rounded-xl font-bold self-end transition-colors"
                >
                  Submit
                </button>
              </div>
            )}
          </div>
          
          {timePreset === "custom" && customRange.start && (
            <div className="mt-4 text-sm text-blue-300 font-medium italic">
              กำลังกรองข้อมูลจาก: {formatDateDisplay(customRange.start)} ถึง {formatDateDisplay(customRange.end || "...")}
            </div>
          )}
        </div>

        {/* --- Export Button --- */}
        <div className="flex flex-col items-center justify-center mb-12 border-b border-dashed border-gray-200 pb-12">
          {loading ? (
            <div className="text-blue-600 font-black animate-bounce tracking-widest">LOADING DATA...</div>
          ) : data.length > 0 ? (
            <CSVLink
              data={data}
              filename={`${category}_${format(new Date(), "dd-mm-yyyy")}.csv`}
              className="group bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white text-2xl font-black py-6 px-20 rounded-3xl shadow-[0_20px_50px_rgba(16,_185,_129,_0.3)] transition-all hover:-translate-y-2 active:scale-95"
            >
              DOWNLOAD CSV <span className="ml-2 group-hover:animate-bounce inline-block">📥</span>
            </CSVLink>
          ) : (
            <div className="text-gray-300 font-bold uppercase tracking-widest">No data found in this range</div>
          )}
        </div>

        {/* --- Preview Table --- */}
        <div>
          <h2 className="text-xl font-black text-gray-800 mb-6 flex items-center gap-2">
            <span className="w-2 h-8 bg-blue-600 rounded-full"></span>
            PREVIEW: {category}
          </h2>
          <div className="overflow-hidden rounded-3xl border border-gray-100 shadow-sm">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-8 py-5 text-left text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Timestamp (dd/mm/yyyy)</th>
                  <th className="px-8 py-5 text-left text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Data Category</th>
                  <th className="px-8 py-5 text-left text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Value Recorded</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-50">
                {data.map((item, idx) => (
                  <tr key={idx} className="hover:bg-blue-50/30 transition-colors">
                    <td className="px-8 py-5 text-sm font-bold text-gray-500 italic">{item.timestamp}</td>
                    <td className="px-8 py-5">
                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-black uppercase">
                        {item.category}
                      </span>
                    </td>
                    <td className="px-8 py-5 text-lg font-mono font-bold text-slate-800 tracking-tighter">
                      {item.value} <span className="text-[10px] text-gray-400 uppercase">{item.unit}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;