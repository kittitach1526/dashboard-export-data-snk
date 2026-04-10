import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authService } from "../services/auth_api";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await authService.login(username, password);
      if (response.status === "success") {
        navigate("/"); // Login สำเร็จ ไปหน้าแรก
      }
    } catch (error) {
      alert(error.message); // แสดง Error จาก Service
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 rounded-4xl">
      {/* Container หลัก */}
      <div className="max-w-md w-full">
        
        {/* Logo Section */}
        <div className="text-center mb-8">
          <div className="inline-block p-4 bg-slate-900 rounded-3xl shadow-2xl mb-4">
            <span className="text-4xl">📊</span>
          </div>
          <h1 className="text-3xl font-extrabold text-gray-800 uppercase tracking-tighter">
            SNK DATA LOGIN
          </h1>
          <p className="text-gray-400 font-bold text-[10px] mt-1 tracking-[0.3em] uppercase">
            Secured Access v1.0
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-white rounded-[40px] shadow-2xl p-10 border border-gray-100 relative overflow-hidden">
          {/* แถบสีด้านบนเพิ่มดีไซน์ */}
          <div className="absolute top-0 left-0 w-full h-2 bg-blue-600"></div>

          <form onSubmit={handleLogin} className="space-y-6">
            {/* Username Input */}
            <div>
              <label className="block text-[11px] font-black text-gray-400 mb-2 uppercase tracking-widest">
                Operator ID
              </label>
              <input
                type="text"
                required
                className="w-full p-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:border-blue-600 focus:ring-0 outline-none transition-all font-bold text-gray-700 placeholder-gray-300"
                placeholder="Enter Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-[11px] font-black text-gray-400 mb-2 uppercase tracking-widest">
                Security Key
              </label>
              <input
                type="password"
                required
                className="w-full p-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:border-blue-600 focus:ring-0 outline-none transition-all font-bold text-gray-700 placeholder-gray-300"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-5 rounded-2xl font-black text-lg uppercase tracking-widest transition-all shadow-lg active:scale-95 ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-slate-900 hover:bg-black text-white"
              }`}
            >
              {loading ? "Verifying..." : "Access System 🔐"}
            </button>
          </form>

          {/* Support Info */}
          <div className="mt-8 pt-8 border-t border-dashed border-gray-100 text-center">
            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-tight">
              ThaiBestEnergy<br/>
              <span className="text-blue-600">FOSTEC</span>
            </p>
          </div>
        </div>

        {/* Footer Credit */}
        <p className="text-center mt-8 text-[10px] font-bold text-gray-300 uppercase tracking-[0.4em]">
          Industrial Grade Security
        </p>
      </div>
    </div>
  );
}

export default Login;