import { useState, useEffect } from "react";
import axios from "axios";
import ApiCall from "../../../util/ApiCall";

const Discover = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      const response = await ApiCall("/user/getDetails", "GET");
      console.log(response);
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
