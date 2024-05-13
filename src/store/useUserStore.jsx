import { create } from "zustand";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const api = import.meta.env.VITE_URL_API;

const useUserStore = create((set) => ({
  userData: null,
  fetchUserData: async (token) => {
    try {
      const response = await axios.get(`${api}/api/User/GetUserData`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      set({ userData: response.data });
      return response.data; // Optional: Return data for additional processing if needed
    } catch (error) {
      console.error("Error fetching user data:", error);
      throw error; // Re-throw error for outer handling
    }
  },
}));

export const useFetchUserData = () => {
  const navigate = useNavigate();

  const fetchUserData = async (token) => {
    try {
      const userData = await useUserStore.getState().fetchUserData(token);
      return userData;
    } catch (error) {
      if (error.response && error.response.status === 401) {
        alert("Sesi Anda telah berakhir. Silakan login kembali.");
        localStorage.removeItem("token");
        navigate("/login");
      } else {
        // Handle other errors (e.g., display error message)
        console.error("Error fetching user data:", error);
      }
    }
  };

  return { fetchUserData };
};

export default useUserStore;