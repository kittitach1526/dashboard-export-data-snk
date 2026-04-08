import React from 'react';

interface CircularGaugeProps {
  value: number;          // ค่า 0 - 100
  size?: number;          // ขนาด px (default 160)
  strokeWidth?: number;   // ความหนาเส้น (default 3)
  startAngle?: number;    // องศาเริ่มต้น (เช่น -90 คือเที่ยงวัน, 0 คือ 3 นาฬิกา)
  primaryColor?: string;  // สีเส้น Progress (Tailwind Class หรือ Hex Color)
  secondaryColor?: string;// สีเส้นพื้นหลัง (Tailwind Class หรือ Hex Color)
  title?: string;         // ข้อความหลักตรงกลาง
  subtitle?: string;      // ข้อความรอง
}

export const CircularGauge = ({
  value = 0,
  size = 160,
  strokeWidth = 3,
  startAngle = -90,
  primaryColor = "stroke-blue-600",
  secondaryColor = "stroke-slate-200",
  title,
  subtitle
}: CircularGaugeProps) => {
  
  // ป้องกันค่าเกิน 100 หรือต่ำกว่า 0
  const normalizedValue = Math.min(Math.max(value, 0), 100);

  // ฟังก์ชันตรวจสอบและสร้าง props สำหรับสี
  const getColorProps = (color: string) => {
    if (color.startsWith('#')) {
      return { style: { stroke: color } };
    } else {
      return { className: color };
    }
  };

  const primaryColorProps = getColorProps(primaryColor);
  const secondaryColorProps = getColorProps(secondaryColor);

  return (
    <div 
      className="relative flex items-center justify-center" 
      style={{ width: size, height: size }}
    >
      <svg 
        className="w-full h-full transition-transform duration-500" 
        viewBox="0 0 36 36"
        style={{ transform: `rotate(${startAngle}deg)` }}
      >
        {/* วงกลมพื้นหลัง (Background Rail) */}
        <circle
          cx="18"
          cy="18"
          r="16"
          fill="none"
          strokeWidth={strokeWidth}
          {...secondaryColorProps}
        />
        
        {/* วงกลมแสดงค่า (Progress Bar) */}
        <circle
          cx="18"
          cy="18"
          r="16"
          fill="none"
          className="transition-all duration-1000 ease-out"
          strokeWidth={strokeWidth}
          strokeDasharray={`${normalizedValue}, 100`}
          strokeLinecap="round"
          {...primaryColorProps}
        />
        
      </svg>

      {/* ส่วนแสดงข้อความตรงกลาง (ไม่หมุนตาม SVG) */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        {title && (
          <span className="text-2xl font-bold text-slate-800 leading-none">
            {title}
          </span>
        )}
        {subtitle && (
          <span className="text-xs font-medium text-slate-500 mt-1">
            {subtitle}
          </span>
        )}
      </div>
    </div>
  );
};