import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Aircom from "./pages/Aircom";
import Power from "./pages/Power";
import Pressure from "./pages/Pressure";
import Flow from "./pages/Flow";  



function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen max-w-7xl mx-auto">
        {/* Navbar อยู่ด้านบนสุด */}
        <Navbar />

        <div className="flex flex-1">
          {/* Sidebar: กำหนดความกว้างคงที่ (เช่น w-64 = 16rem หรือ 256px) */}
          <aside className="w-64 bg-gray-200 hidden md:block">
            <Sidebar />
          </aside>

          {/* Main Content: ใช้ flex-1 เพื่อขยายเต็มพื้นที่ที่เหลือ แล้วก็กำหนดสีพื้นหลัง*/}
          <main className="flex-1 p-2 bg-gray-200"> 
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </main>
        </div>


      </div>
    </Router>
  );
}

export default App;
