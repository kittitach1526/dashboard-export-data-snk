import { motion } from "framer-motion";

export const ProgressBar = ({ progress, color }) => {
  // ฟังก์ชันเลือกสีเริ่มต้น (Fallback) ถ้าคนเรียกไม่ได้กำหนดสีมาให้
  const defaultColor = (val) => {
    if (val > 80) return "bg-green-500"; 
    if (val > 50) return "bg-yellow-500"; 
    return "bg-red-500"; 
  };

  return (
    <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden shadow-inner">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 1, ease: "circOut" }}
        className={`h-full rounded-full ${color || defaultColor(progress)}`}
      />
    </div>
  );
};