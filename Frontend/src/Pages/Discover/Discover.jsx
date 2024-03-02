import { useState, useEffect } from "react";
import axios from "axios";
import ApiCall from "../../../util/ApiCall";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Discover = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const getUser = async () => {
      try {
        // const response = await ApiCall("/user/getDetails", "GET");
        const response = await axios.get("/user/getDetails");
        console.log(response);
      } catch (error) {
        console.error("Error in API call:", error);
        if (error.response.status === 401) {
          // alert("You are not authorized to access this page. Please login first.");
          toast.error("You are not authorized to access this page. Please login first.");
          // window.location.href = "/login";
          navigate("/login");
        }
      }
    };
    getUser();
  }, []);

  return (
    <>
      {user && <div>{user.name}</div>}
      <div>Discover</div>
    </>
  );
};

export default Discover;
