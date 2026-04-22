import axios from "axios";
const API_BASE_URL = "http://localhost:8562";
export const exportService = {
  // ฟังก์ชันใหม่สำหรับดึงข้อมูลตามช่วงเวลา
  getAircomByRange: async (condition, start, end) => {
    // เช่น: /api/aircom/export?condition=aircom_5_5&start_date=2024-03-01&end_date=2024-03-05
    const response = await axios.get(`http://localhost:8562/api/export`, {
      params: {
        condition: condition,
        start_date: start,
        end_date: end
      }
    });
    return response.data;
  },
};