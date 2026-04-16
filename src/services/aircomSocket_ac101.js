import { useState, useEffect, useRef } from "react";

export const useAircomSocket_ac101 = (line) => {
  const [currentData_ac101, setCurrentData] = useState(null);
  const [history_ac101, setHistory] = useState([]);
  const [connected_ac101, setConnected] = useState(false);
  const socketRef = useRef(null);

  useEffect(() => {
    // กำหนด Path ตาม Line ที่ส่งมา (เช่น ac101, ac102)
    const socketPath = `ws://node-red-200.sphx-dev.online/real-time/all`;
    socketRef.current = new WebSocket(socketPath);

    socketRef.current.onopen = () => {
      setConnected(true);
      console.log(`Connected to /real-time/power-f1-55`);
    };

    socketRef.current.onmessage = (event) => {
      try {
        const msg = JSON.parse(event.data);
        
        // อัปเดตข้อมูลล่าสุด
        console.log(msg)
        setCurrentData(msg);
        
        // อัปเดตประวัติกราฟ
        setHistory((prev) => {
          const newPoint = {
            time: new Date().toLocaleTimeString('th-TH', { hour12: false }),
            power_55_f1: msg.power_55_f1,
            flow_55_f1: msg.flow_55_f1,
            press_55_f1: msg.press_55_f1,
            volt: msg.voltageAC1,
            curr: msg.currentAC1,
            freq: msg.freqAC1
          };
          const updatedHistory = [...prev, newPoint];
          return updatedHistory.slice(-30); // เก็บ 30 จุดล่าสุด
        });
      } catch (e) {
        console.error("Socket Message Error:", e);
      }
    };

    socketRef.current.onclose = () => {
      setConnected(false);
      console.log(`Disconnected from ${line}`);
    };

    socketRef.current.onerror = (err) => {
      console.error("Socket Error:", err);
    };

    // Cleanup: ปิดการเชื่อมต่อเมื่อ Component ถูกถอดออก หรือเปลี่ยน Line
    return () => {
      if (socketRef.current) {
        socketRef.current.close();
      }
    };
  }, [line]); // จะเชื่อมต่อใหม่ทุกครั้งที่ line เปลี่ยน

  return { currentData_ac101, history_ac101, connected_ac101 };
};