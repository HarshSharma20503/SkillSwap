import { useState, useEffect } from "react";
import axios from "axios";

const Discover = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      const response = await axios.get("/user/getDetails", { withCredentials: true });
      setUser(response.data.data);
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
