import axios from "axios";

async function ApiCall(url, httpMethod, data) {
  try {
    if (httpMethod === "GET") {
      const response = await axios.get(url);
      return response.data;
    } else if (httpMethod === "POST") {
      const response = await axios.post(url, data);
      return response.data;
    }
  } catch (error) {
    console.error("Error in API call:", error);
    if (error.response.status === 401) {
      alert("You are not authorized to access this page. Please login first.");
      window.location.href = "/login";
    }
  }
}

export default ApiCall;
