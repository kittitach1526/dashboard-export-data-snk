import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Power from "./pages/Power";
import Pressure from "./pages/Pressure";
import Flow from "./pages/Flow";
import AircomRealtime from "./pages/Aircom-overview";
import Login from "./pages/Login";

// 🔹 สร้าง Component ย่อยมาคุม Layout
function AppContent() {
  const location = useLocation();

  // กำหนดว่าหน้าไหนบ้างที่ "ไม่ต้องการ" ให้แสดง Sidebar และ Navbar
  const noLayoutPaths = ["/login"]; // ปกติหน้า Login มักจะซ่อนทั้งคู่
  const isLoginPage = noLayoutPaths.includes(location.pathname);

  return (
    <div className="flex flex-col h-screen max-w-7xl mx-auto overflow-hidden">
      {/* ซ่อน Navbar ในหน้า Login */}
      {!isLoginPage && <Navbar />}

      <div className="flex flex-1 overflow-hidden">
        {/* ซ่อน Sidebar ในหน้า Login */}
        {!isLoginPage && (
          <aside className="w-64 bg-gray-50 border-r border-gray-100 hidden md:block h-full">
            <Sidebar />
          </aside>
        )}

        {/* ส่วนเนื้อหาหลัก */}
        <main className={`flex-1 overflow-y-auto p-6 ${isLoginPage ? 'bg-white' : 'bg-gray-100'}`}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/power" element={<Power />} />
            <Route path="/flow" element={<Flow />} />
            <Route path="/pressure" element={<Pressure />} />
            <Route path="/aircom-realtime" element={<AircomRealtime />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

// 🔹 ไฟล์หลักทำหน้าที่แค่หุ้ม Router
function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;