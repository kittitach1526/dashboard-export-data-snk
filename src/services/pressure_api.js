import axios from "axios";

const API_BASE_URL = "http://localhost:8000";

// สร้าง instance ของ axios เพื่อตั้งค่าเริ่มต้น
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});


export const pressureService = {
  // ฟังก์ชันดึงข้อมูล Aircom Today
  getPressureToday_5_5: async () => {
    try {
      const response = await apiClient.get("/api/pressure/pressure-5-5-today");
      return response.data; // ส่ง data กลับไปให้ Component
    } catch (error) {
      console.error("API Error (getAircomToday):", error);
      throw error; // ส่ง error กลับไปให้ Component จัดการ (เช่น alert)
    }
  },

  getPressureWeek_5_5: async () => {
    try {
      const response = await apiClient.get("/api/pressure/pressure-5-5-week");
      return response.data; // ส่ง data กลับไปให้ Component
    } catch (error) {
      console.error("API Error (getAircomToday):", error);
      throw error; // ส่ง error กลับไปให้ Component จัดการ (เช่น alert)
    }
  },

  getPressureMonth_5_5: async () => {
    try {
      const response = await apiClient.get("/api/pressure/pressure-5-5-month");
      return response.data; // ส่ง data กลับไปให้ Component
    } catch (error) {
      console.error("API Error (getAircomToday):", error);
      throw error; // ส่ง error กลับไปให้ Component จัดการ (เช่น alert)
    }
  },

  //------------------------------------------------------------------------------------

  getPressureToday_6_5: async () => {
    try {
      const response = await apiClient.get("/api/pressure/pressure-6-5-today");
      return response.data; // ส่ง data กลับไปให้ Component
    } catch (error) {
      console.error("API Error (getAircomToday):", error);
      throw error; // ส่ง error กลับไปให้ Component จัดการ (เช่น alert)
    }
  },

  getPressureWeek_6_5: async () => {
    try {
      const response = await apiClient.get("/api/pressure/pressure-6-5-week");
      return response.data; // ส่ง data กลับไปให้ Component
    } catch (error) {
      console.error("API Error (getAircomToday):", error);
      throw error; // ส่ง error กลับไปให้ Component จัดการ (เช่น alert)
    }
  },

  getPressureMonth_6_5: async () => {
    try {
      const response = await apiClient.get("/api/pressure/pressure-6-5-month");
      return response.data; // ส่ง data กลับไปให้ Component
    } catch (error) {
      console.error("API Error (getAircomToday):", error);
      throw error; // ส่ง error กลับไปให้ Component จัดการ (เช่น alert)
    }
  },
//------------------------------------------------------------------------------------
  getPressureToday_7: async () => {
    try {
      const response = await apiClient.get("/api/pressure/pressure-7-today");
      return response.data; // ส่ง data กลับไปให้ Component
    } catch (error) {
      console.error("API Error (getAircomToday):", error);
      throw error; // ส่ง error กลับไปให้ Component จัดการ (เช่น alert)
    }
  },

  getPressureWeek_7: async () => {
    try {
      const response = await apiClient.get("/api/pressure/pressure-7-week");
      return response.data; // ส่ง data กลับไปให้ Component
    } catch (error) {
      console.error("API Error (getAircomToday):", error);
      throw error; // ส่ง error กลับไปให้ Component จัดการ (เช่น alert)
    }
  },

  getPressureMonth_7: async () => {
    try {
      const response = await apiClient.get("/api/pressure/pressure-7-month");
      return response.data; // ส่ง data กลับไปให้ Component
    } catch (error) {
      console.error("API Error (getAircomToday):", error);
      throw error; // ส่ง error กลับไปให้ Component จัดการ (เช่น alert)
    }
  },

  //------------------------------------------------------------------------------------

  
}