import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Power from "./pages/Power";
import Pressure from "./pages/Pressure";
import Flow from "./pages/Flow";  



function App() {
  return (
    <Router>
      {/* 1. ล็อกความสูงเท่าหน้าจอพอดี และห้ามเลื่อนทั้งหน้าจอ (overflow-hidden) */}
      <div className="flex flex-col h-screen max-w-7xl mx-auto overflow-hidden">
        
        {/* Navbar: อยู่ด้านบนสุด ล็อกที่เดิมโดยธรรมชาติของ flex-col */}
        <Navbar />

        <div className="flex flex-1 overflow-hidden">
          {/* Sidebar: ล็อกความกว้าง และใช้ h-full เพื่อให้สูงเต็มพื้นที่ที่เหลือ */}
          <aside className="w-64 bg-gray-50 border-r border-gray-100 hidden md:block h-full">
            <Sidebar />
          </aside>

          {/* Main Content: 
              - flex-1: กินพื้นที่ที่เหลือ
              - overflow-y-auto: อนุญาตให้เลื่อนขึ้น-ลงได้เฉพาะส่วนนี้เท่านั้น
              - bg-gray-100: ปรับสีพื้นหลังให้ดูสบายตาขึ้น 
          */}
          <main className="flex-1 overflow-y-auto bg-gray-100 p-6"> 
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/power" element={<Power/>}/>
              <Route path="/flow" element={<Flow/>}/>
              <Route path="/pressure" element={<Pressure/>}/>
            </Routes>
          </main>
        </div>

      </div>
    </Router>
  );
}
export default App;
