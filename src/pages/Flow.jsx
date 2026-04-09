import React, { useState, useEffect } from "react";
import { CSVLink } from "react-csv";
import { format } from "date-fns";
import { flowService } from "../services/flow_api";

function Flow() {
  const [data, setData] = useState([]);
  const [columns, setColumns] = useState([]);
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState("Aircom");
  // const [category_power, setCategory_power] = useState("Power");

  const [timePreset, setTimePreset] = useState("today");

  const categories = ["Flow (5.5)", "Flow (6.5)", "Flow (7)"];
//   const categories_power = ["Power (5.5)", "Power (6.5)", "Power (7)"];

  // 🔹 ฟังก์ชันดึงข้อมูลที่สะอาดขึ้น
  const fetchData_flow_5_5 = async () => {
    setLoading(true);
    try {
      const result = await flowService.getFlowToday_5_5();

      if (result.status === "success") {
        setData(result.data);
        setColumns(result.columns);
      }
    } catch (error) {
      alert("ไม่สามารถดึงข้อมูลจาก Server ได้");
    } finally {
      setLoading(false);
    }
  };


  const fetchData_flow_Week_5_5 = async () => {
    setLoading(true);
    try {
      const result = await flowService.getFlowWeek_5_5();

      if (result.status === "success") {
        setData(result.data);
        setColumns(result.columns);
      }
    } catch (error) {
      alert("ไม่สามารถดึงข้อมูลจาก Server ได้");
    } finally {
      setLoading(false);
    }
  };


  const fetchData_flow_Month_5_5 = async () => {
    setLoading(true);
    try {
      const result = await flowService.getFlowMonth_5_5();

      if (result.status === "success") {
        setData(result.data);
        setColumns(result.columns);
      }
    } catch (error) {
      alert("ไม่สามารถดึงข้อมูลจาก Server ได้");
    } finally {
      setLoading(false);
    }
  };

  //------------------------------------------------------------------------------------------------

    const fetchData_flow_6_5 = async () => {
    setLoading(true);
    try {
      const result = await flowService.getFlowToday_6_5();

      if (result.status === "success") {
        setData(result.data);
        setColumns(result.columns);
      }
    } catch (error) {
      alert("ไม่สามารถดึงข้อมูลจาก Server ได้");
    } finally {
      setLoading(false);
    }
  };


  const fetchData_flow_Week_6_5 = async () => {
    setLoading(true);
    try {
      const result = await flowService.getFlowWeek_6_5();

      if (result.status === "success") {
        setData(result.data);
        setColumns(result.columns);
      }
    } catch (error) {
      alert("ไม่สามารถดึงข้อมูลจาก Server ได้");
    } finally {
      setLoading(false);
    }
  };


  const fetchData_flow_Month_6_5 = async () => {
    setLoading(true);
    try {
      const result = await flowService.getFlowMonth_6_5();

      if (result.status === "success") {
        setData(result.data);
        setColumns(result.columns);
      }
    } catch (error) {
      alert("ไม่สามารถดึงข้อมูลจาก Server ได้");
    } finally {
      setLoading(false);
    }
  };

  //------------------------------------------------------------------------------------------------

    const fetchData_flow_7 = async () => {
    setLoading(true);
    try {
      const result = await flowService.getFlowToday_7();

      if (result.status === "success") {
        setData(result.data);
        setColumns(result.columns);
      }
    } catch (error) {
      alert("ไม่สามารถดึงข้อมูลจาก Server ได้");
    } finally {
      setLoading(false);
    }
  };


  const fetchData_flow_Week_7 = async () => {
    setLoading(true);
    try {
      const result = await flowService.getFlowWeek_7();

      if (result.status === "success") {
        setData(result.data);
        setColumns(result.columns);
      }
    } catch (error) {
      alert("ไม่สามารถดึงข้อมูลจาก Server ได้");
    } finally {
      setLoading(false);
    }
  };


  const fetchData_flow_Month_7 = async () => {
    setLoading(true);
    try {
      const result = await flowService.getFlowMonth_7();

      if (result.status === "success") {
        setData(result.data);
        setColumns(result.columns);
      }
    } catch (error) {
      alert("ไม่สามารถดึงข้อมูลจาก Server ได้");
    } finally {
      setLoading(false);
    }
  };

  //------------------------------------------------------------------------------------------------

  useEffect(() => {
    if (category === "Flow (5.5)" && timePreset === "today") {
      fetchData_flow_5_5();
    } else if (category == "Flow (5.5)" && timePreset == "week") {
      fetchData_flow_Week_5_5();
    }else if (category == "Flow (5.5)" && timePreset == "month") {
      fetchData_flow_Month_5_5();
    }

    else if (category === "Flow (6.5)" && timePreset === "today") {
      fetchData_flow_6_5();
    } else if (category == "Flow (6.5)" && timePreset == "week") {
      fetchData_flow_Week_6_5();
    }else if (category == "Flow (6.5)" && timePreset == "month") {
      fetchData_flow_Month_6_5();
    }

    else if (category === "Flow (7)" && timePreset === "today") {
      fetchData_flow_7();
    } else if (category == "Flow (7)" && timePreset == "week") {
      fetchData_flow_Week_7();
    }else if (category == "Flow (7)" && timePreset == "month") {
      fetchData_flow_Month_7();
    }



    else {
      setData([]);
      setColumns([]);
    }
  }, [timePreset, category]);

  return (
    // แก้ไขจุดนี้: จำกัดความกว้างสูงสุดที่ max-w-7xl และจัดกึ่งกลางด้วย mx-auto
    <div className="max-w-5xl mx-auto bg-gray-50 min-h-screen p-4 md:p-8">
      <div className="bg-white rounded-3xl shadow-xl p-6 md:p-10 border border-gray-100">
        {/* --- Header --- */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-gray-800 uppercase tracking-tighter">
            📊 SNK DATA MANAGEMENT
          </h1>
          <p className="text-gray-400 font-bold text-xs mt-2 tracking-widest uppercase">
            Industrial Monitoring System v1.0
          </p>
        </div>

        {/* --- Step 1: Category --- */}
        <div className="mb-10">
          <label className="block text-[11px] font-black text-gray-400 mb-4 uppercase tracking-[0.2em]">
            Step 1: Select Category
          </label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`py-4 px-6 rounded-2xl font-bold text-lg transition-all ${
                  category === cat
                    ? "bg-blue-600 text-white shadow-lg translate-y-[-2px]"
                    : "bg-gray-100 text-gray-400 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* --- Step 2: Filter --- */}
        <div className="bg-slate-900 p-6 rounded-3xl mb-10 shadow-2xl">
          <label className="block text-[11px] font-bold text-slate-500 mb-3 uppercase tracking-widest">
            Step 2: Time Range
          </label>
          <select
            className="w-full p-4 bg-slate-800 border-none rounded-xl text-white focus:ring-2 focus:ring-blue-500 font-bold"
            value={timePreset}
            onChange={(e) => setTimePreset(e.target.value)}
          >
            <option value="today">วันนี้ (Today)</option>
            <option value="week">7 วันย้อนหลัง</option>
            <option value="month">เดือนนี้</option>
          </select>
        </div>

        {/* --- Export --- */}
        <div className="flex flex-col items-center justify-center mb-12 border-b border-dashed border-gray-100 pb-12">
          {loading ? (
            <div className="flex items-center gap-3 text-blue-600 font-black animate-pulse">
              <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
              LOADING MERGED DATA...
            </div>
          ) : data.length > 0 ? (
            <CSVLink
              data={data}
              headers={columns.map((col) => ({ label: col, key: col }))}
              filename={`${category}_${format(new Date(), "dd-MM-yyyy")}.csv`}
              className="group bg-emerald-500 hover:bg-emerald-600 text-white text-2xl font-black py-6 px-16 rounded-2xl shadow-xl transition-all active:scale-95"
            >
              DOWNLOAD CSV{" "}
              <span className="ml-2 group-hover:animate-bounce inline-block">
                📥
              </span>
            </CSVLink>
          ) : (
            <div className="text-gray-300 font-bold uppercase tracking-widest italic">
              Ready to process
            </div>
          )}
        </div>

        {/* --- Preview Table (จำกัดความสูงและเลื่อนภายใน) --- */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-black text-gray-800 flex items-center gap-2">
              <span className="w-2 h-8 bg-blue-600 rounded-full"></span>
              DATA PREVIEW
            </h2>
            <div className="text-[10px] font-bold text-gray-400 bg-gray-100 px-3 py-1 rounded-full uppercase">
              {data.length} Records Found
            </div>
          </div>

          {/* ส่วนจำกัดขนาดตารางและการเลื่อน */}
          <div className="relative overflow-auto max-h-[500px] border border-gray-200 rounded-2xl shadow-inner custom-scrollbar bg-white">
            <table className="min-w-full table-auto">
              <thead className="sticky top-0 z-30 bg-gray-100 shadow-sm">
                <tr>
                  {columns.map((col) => (
                    <th
                      key={col}
                      className="px-6 py-4 text-left text-[10px] font-black text-gray-500 uppercase tracking-widest whitespace-nowrap border-b border-gray-200"
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {data.map((row, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-blue-50/50 transition-colors"
                  >
                    {columns.map((col) => (
                      <td
                        key={`${idx}-${col}`}
                        className={`px-6 py-4 text-xs whitespace-nowrap font-medium border-r border-gray-50 last:border-r-0 ${
                          col === "timestamp"
                            ? "text-blue-600 font-bold"
                            : "text-gray-600"
                        }`}
                      >
                        {col.startsWith("status") ? (
                          <span
                            className={`px-2 py-0.5 rounded text-[10px] font-bold border ${
                              row[col]?.includes("RUN")
                                ? "bg-green-50 text-green-600 border-green-100"
                                : "bg-gray-50 text-gray-400 border-gray-200"
                            }`}
                          >
                            {row[col] || "-"}
                          </span>
                        ) : (
                          (row[col] ?? <span className="text-gray-200">-</span>)
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>

            {data.length === 0 && !loading && (
              <div className="text-center py-24 text-gray-300 font-bold uppercase tracking-widest italic">
                No data available
              </div>
            )}
          </div>
          <p className="text-[10px] text-gray-400 italic text-right">
            * ข้อมูลถูกจัดเรียงตามลำดับเวลาจากล่าสุด
          </p>
        </div>
      </div>
    </div>
  );
}

export default Flow;
