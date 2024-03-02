import { toast } from "react-toastify";
import axios from "axios";

const ApiCall = async (url, method, navigate, setUser, data) => {
  console.log("******** Inside ApiCall function ********");

  if (method === "GET") {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error("Error in API call:", error);
      setUser(null);
      if (error.response.status === 401) {
        toast.error("You are not authorized to access this page. Please login first.");
        navigate("/login");
      } else if (error.response.status === 404) {
        toast.error("The requested resource was not found.");
        navigate("/");
      } else if (error.response.status === 500) {
        toast.error("Server Error. Please try again later.");
        navigate("/");
      } else {
        toast.error("An error occurred. Please try again later.");
        navigate("/");
      }
    }
  } else if (method === "POST") {
    try {
      const response = await axios.post(url, data);
      return response.data;
    } catch (error) {
      console.error("Error in API call:", error);
      setUser(null);
      if (error.response.status === 401) {
        toast.error("You are not authorized to access this page. Please login first.");
        navigate("/login");
      } else if (error.response.status === 404) {
        toast.error("The requested resource was not found.");
        navigate("/");
      } else if (error.response.status === 500) {
        toast.error("Server Error. Please try again later.");
        navigate("/");
      } else {
        toast.error("An error occurred. Please try again later.");
        navigate("/");
      }
    }
  }
};

export default ApiCall;
