import axios from "axios";

const API_BASE_URL = "http://localhost:8562";

// สร้าง instance ของ axios เพื่อตั้งค่าเริ่มต้น
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});


export const powerService = {
  // ฟังก์ชันดึงข้อมูล Aircom Today
  getPowerToday_5_5: async () => {
    try {
      const response = await apiClient.get("/api/power/power-5-5-today");
      console.log(response.data)
      return response.data; // ส่ง data กลับไปให้ Component
    } catch (error) {
      console.error("API Error (getAircomToday):", error);
      throw error; // ส่ง error กลับไปให้ Component จัดการ (เช่น alert)
    }
  },

  getPowerWeek_5_5: async () => {
    try {
      const response = await apiClient.get("/api/power/power-5-5-week");
      return response.data; // ส่ง data กลับไปให้ Component
    } catch (error) {
      console.error("API Error (getAircomToday):", error);
      throw error; // ส่ง error กลับไปให้ Component จัดการ (เช่น alert)
    }
  },

  getPowerMonth_5_5: async () => {
    try {
      const response = await apiClient.get("/api/power/power-5-5-month");
      return response.data; // ส่ง data กลับไปให้ Component
    } catch (error) {
      console.error("API Error (getAircomToday):", error);
      throw error; // ส่ง error กลับไปให้ Component จัดการ (เช่น alert)
    }
  },

  //------------------------------------------------------------------------------------

  getPowerToday_6_5: async () => {
    try {
      const response = await apiClient.get("/api/power/power-6-5-today");
      return response.data; // ส่ง data กลับไปให้ Component
    } catch (error) {
      console.error("API Error (getAircomToday):", error);
      throw error; // ส่ง error กลับไปให้ Component จัดการ (เช่น alert)
    }
  },

  getPowerWeek_6_5: async () => {
    try {
      const response = await apiClient.get("/api/power/power-6-5-week");
      return response.data; // ส่ง data กลับไปให้ Component
    } catch (error) {
      console.error("API Error (getAircomToday):", error);
      throw error; // ส่ง error กลับไปให้ Component จัดการ (เช่น alert)
    }
  },

  getPowerMonth_6_5: async () => {
    try {
      const response = await apiClient.get("/api/power/power-6-5-month");
      return response.data; // ส่ง data กลับไปให้ Component
    } catch (error) {
      console.error("API Error (getAircomToday):", error);
      throw error; // ส่ง error กลับไปให้ Component จัดการ (เช่น alert)
    }
  },
//------------------------------------------------------------------------------------
  getPowerToday_7: async () => {
    try {
      const response = await apiClient.get("/api/power/power-7-today");
      return response.data; // ส่ง data กลับไปให้ Component
    } catch (error) {
      console.error("API Error (getAircomToday):", error);
      throw error; // ส่ง error กลับไปให้ Component จัดการ (เช่น alert)
    }
  },

  getPowerWeek_7: async () => {
    try {
      const response = await apiClient.get("/api/power/power-7-week");
      return response.data; // ส่ง data กลับไปให้ Component
    } catch (error) {
      console.error("API Error (getAircomToday):", error);
      throw error; // ส่ง error กลับไปให้ Component จัดการ (เช่น alert)
    }
  },

  getPowerMonth_7: async () => {
    try {
      const response = await apiClient.get("/api/power/power-7-month");
      return response.data; // ส่ง data กลับไปให้ Component
    } catch (error) {
      console.error("API Error (getAircomToday):", error);
      throw error; // ส่ง error กลับไปให้ Component จัดการ (เช่น alert)
    }
  },

  //------------------------------------------------------------------------------------

  
}