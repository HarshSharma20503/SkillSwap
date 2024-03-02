import { useState, useEffect } from "react";
import ApiCall from "../../util/ApiCall";
import { useNavigate } from "react-router-dom";

const Discover = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getUser = async () => {
      const response = await ApiCall("/user/registered/getDetails", "GET", navigate, null);
      console.log("User Data: ", response.data);
      setUser(response.data);
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
