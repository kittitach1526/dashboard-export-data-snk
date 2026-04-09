import axios from "axios";

const API_BASE_URL = "http://localhost:8000";

// สร้าง instance ของ axios เพื่อตั้งค่าเริ่มต้น
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});


export const flowService = {
  // ฟังก์ชันดึงข้อมูล Aircom Today
  getFlowToday_5_5: async () => {
    try {
      const response = await apiClient.get("/api/flow/flow-5-5-today");
      return response.data; // ส่ง data กลับไปให้ Component
    } catch (error) {
      console.error("API Error (getAircomToday):", error);
      throw error; // ส่ง error กลับไปให้ Component จัดการ (เช่น alert)
    }
  },

  getFlowWeek_5_5: async () => {
    try {
      const response = await apiClient.get("/api/flow/flow-5-5-week");
      return response.data; // ส่ง data กลับไปให้ Component
    } catch (error) {
      console.error("API Error (getAircomToday):", error);
      throw error; // ส่ง error กลับไปให้ Component จัดการ (เช่น alert)
    }
  },

  getFlowMonth_5_5: async () => {
    try {
      const response = await apiClient.get("/api/flow/flow-5-5-month");
      return response.data; // ส่ง data กลับไปให้ Component
    } catch (error) {
      console.error("API Error (getAircomToday):", error);
      throw error; // ส่ง error กลับไปให้ Component จัดการ (เช่น alert)
    }
  },

  //------------------------------------------------------------------------------------

  getFlowToday_6_5: async () => {
    try {
      const response = await apiClient.get("/api/flow/flow-6-5-today");
      return response.data; // ส่ง data กลับไปให้ Component
    } catch (error) {
      console.error("API Error (getAircomToday):", error);
      throw error; // ส่ง error กลับไปให้ Component จัดการ (เช่น alert)
    }
  },

  getFlowWeek_6_5: async () => {
    try {
      const response = await apiClient.get("/api/flow/flow-6-5-week");
      return response.data; // ส่ง data กลับไปให้ Component
    } catch (error) {
      console.error("API Error (getAircomToday):", error);
      throw error; // ส่ง error กลับไปให้ Component จัดการ (เช่น alert)
    }
  },

  getFlowMonth_6_5: async () => {
    try {
      const response = await apiClient.get("/api/flow/flow-6-5-month");
      return response.data; // ส่ง data กลับไปให้ Component
    } catch (error) {
      console.error("API Error (getAircomToday):", error);
      throw error; // ส่ง error กลับไปให้ Component จัดการ (เช่น alert)
    }
  },
//------------------------------------------------------------------------------------
  getFlowToday_7: async () => {
    try {
      const response = await apiClient.get("/api/flow/flow-7-today");
      return response.data; // ส่ง data กลับไปให้ Component
    } catch (error) {
      console.error("API Error (getAircomToday):", error);
      throw error; // ส่ง error กลับไปให้ Component จัดการ (เช่น alert)
    }
  },

  getFlowWeek_7: async () => {
    try {
      const response = await apiClient.get("/api/flow/flow-7-week");
      return response.data; // ส่ง data กลับไปให้ Component
    } catch (error) {
      console.error("API Error (getAircomToday):", error);
      throw error; // ส่ง error กลับไปให้ Component จัดการ (เช่น alert)
    }
  },

  getFlowMonth_7: async () => {
    try {
      const response = await apiClient.get("/api/flow/flow-7-month");
      return response.data; // ส่ง data กลับไปให้ Component
    } catch (error) {
      console.error("API Error (getAircomToday):", error);
      throw error; // ส่ง error กลับไปให้ Component จัดการ (เช่น alert)
    }
  },

  //------------------------------------------------------------------------------------

  
}