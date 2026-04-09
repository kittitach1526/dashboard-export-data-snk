import axios from "axios";

const API_BASE_URL = "http://localhost:8000";

// สร้าง instance ของ axios เพื่อตั้งค่าเริ่มต้น
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const aircomService = {
  // ฟังก์ชันดึงข้อมูล Aircom Today
  getAircomToday_5_5: async () => {
    try {
      const response = await apiClient.get("/api/aircom/aircom-5-5-today");
      return response.data; // ส่ง data กลับไปให้ Component
    } catch (error) {
      console.error("API Error (getAircomToday):", error);
      throw error; // ส่ง error กลับไปให้ Component จัดการ (เช่น alert)
    }
  },

  getAircomToday_6_5: async () => {
    try {
      const response = await apiClient.get("/api/aircom/aircom-6-5-today");
      return response.data; // ส่ง data กลับไปให้ Component
    } catch (error) {
      console.error("API Error (getAircomToday):", error);
      throw error; // ส่ง error กลับไปให้ Component จัดการ (เช่น alert)
    }
  },

  getAircomToday_7: async () => {
    try {
      const response = await apiClient.get("/api/aircom/aircom-7-today");
      return response.data; // ส่ง data กลับไปให้ Component
    } catch (error) {
      console.error("API Error (getAircomToday):", error);
      throw error; // ส่ง error กลับไปให้ Component จัดการ (เช่น alert)
    }
  },


  getAircomWeek_5_5: async () => {
    try {
      const response = await apiClient.get("/api/aircom/aircom-5-5-week");
      return response.data; // ส่ง data กลับไปให้ Component
    } catch (error) {
      console.error("API Error (getAircomWeek):", error);
      throw error; // ส่ง error กลับไปให้ Component จัดการ (เช่น alert)
    }
  },

   getAircomWeek_6_5: async () => {
    try {
      const response = await apiClient.get("/api/aircom/aircom-6-5-week");
      return response.data; // ส่ง data กลับไปให้ Component
    } catch (error) {
      console.error("API Error (getAircomWeek):", error);
      throw error; // ส่ง error กลับไปให้ Component จัดการ (เช่น alert)
    }
  },

   getAircomWeek_7: async () => {
    try {
      const response = await apiClient.get("/api/aircom/aircom-7-week");
      return response.data; // ส่ง data กลับไปให้ Component
    } catch (error) {
      console.error("API Error (getAircomWeek):", error);
      throw error; // ส่ง error กลับไปให้ Component จัดการ (เช่น alert)
    }
  },

  getAircomMonth_5_5: async () => {
    try {
      const response = await apiClient.get("/api/aircom/aircom-5-5-month");
      return response.data; // ส่ง data กลับไปให้ Component
    } catch (error) {
      console.error("API Error (getAircomMonth):", error);
      throw error; // ส่ง error กลับไปให้ Component จัดการ (เช่น alert)
    }
  },

    getAircomMonth_6_5: async () => {
    try {
      const response = await apiClient.get("/api/aircom/aircom-6-5-month");
      return response.data; // ส่ง data กลับไปให้ Component
    } catch (error) {
      console.error("API Error (getAircomMonth):", error);
      throw error; // ส่ง error กลับไปให้ Component จัดการ (เช่น alert)
    }
  },

    getAircomMonth_7: async () => {
    try {
      const response = await apiClient.get("/api/aircom/aircom-7-month");
      return response.data; // ส่ง data กลับไปให้ Component
    } catch (error) {
      console.error("API Error (getAircomMonth):", error);
      throw error; // ส่ง error กลับไปให้ Component จัดการ (เช่น alert)
    }
  },
  
  

  // คุณสามารถเพิ่มฟังก์ชันอื่นๆ ต่อได้ในอนาคต เช่น
  // getAircomByRange: (start, end) => apiClient.get(`/aircom-range?start=${start}&end=${end}`),
};