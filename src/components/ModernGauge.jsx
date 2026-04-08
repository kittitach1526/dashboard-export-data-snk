import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const ModernGauge = ({ value = 75, title = "Pressure" }) => {
  // ข้อมูล 2 ส่วน: ส่วนที่แสดงค่า และ ส่วนที่เหลือของครึ่งวงกลม
  const data = [
    { value: value },        // ส่วนสีหลัก
    { value: 100 - value },  // ส่วนสีเทา
    { value: 100 },         // ส่วนครึ่งวงกลมล่าง (ใส)
  ];

  const getGaugeColor = (val) => {
    if (val > 80) return '#ef4444';
    if (val > 50) return '#eab308';
    return '#22c55e';
  };

  return (
    // ปรับ h-40 เพื่อให้กระชับขึ้น และ overflow-hidden เพื่อตัดส่วนล่างที่ว่างทิ้ง
    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 w-64 h-40 flex flex-col items-center overflow-hidden">
      <h3 className="text-gray-500 text-sm font-semibold mb-2">{title}</h3>
      
      <div className="w-full h-32 relative">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="100%"         // ย้ายจุดศูนย์กลางไปไว้ที่ขอบล่างสุดของ Container
              startAngle={180}
              endAngle={0}
              innerRadius="80%" // ใช้ % เพื่อให้ยืดหยุ่นตามขนาดจอ
              outerRadius="110%" // ขยายให้ชิดขอบมากขึ้น
              paddingAngle={0}
              dataKey="value"
              stroke="none"     // เอาเส้นขอบสีขาวออกเพื่อให้ดูเต็ม
            >
              <Cell fill={getGaugeColor(value)} />
              <Cell fill="#f3f4f6" />
              <Cell fill="transparent" />
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        {/* ตัวเลขจัดวางให้อยู่กึ่งกลางฐานของครึ่งวงกลม */}
        <div className="absolute bottom-0 left-0 right-0 text-center">
          <span className="text-3xl font-bold text-gray-800">{value}</span>
          <span className="text-gray-400 text-sm ml-1">BAR</span>
        </div>
      </div>
    </div>
  );
};

export default ModernGauge;