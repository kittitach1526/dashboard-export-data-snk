// ฟังก์ชันจำลองการ Login (อนาคตเปลี่ยนเป็น axios.post เพื่อต่อกับ Backend จริงได้เลย)
export const authService = {
  login: async (username, password) => {
    // จำลอง Network Delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (username === "admin" && password === "1234") {
      // เก็บสถานะการ Login
      localStorage.setItem("isAuthenticated", "true");
      // สามารถเก็บข้อมูล User เพิ่มเติมได้ เช่น
      localStorage.setItem("userRole", "Operator");
      
      return { status: "success", message: "Login Successful" };
    } else {
      throw new Error("Invalid Username or Password");
    }
  },

  logout: () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("userRole");
    window.location.href = "/login";
  },

  isAuthenticated: () => {
    return localStorage.getItem("isAuthenticated") === "true";
  }
};