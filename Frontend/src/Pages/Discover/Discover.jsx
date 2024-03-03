import { useEffect } from "react";
import ApiCall from "../../util/ApiCall";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../util/UserContext";

const Discover = () => {
  const navigate = useNavigate();

  const { user, setUser } = useUser();

  useEffect(() => {
    console.log(user);
    if (user !== null) return;
    const getUser = async () => {
      const response = await ApiCall("/user/registered/getDetails", "GET", navigate, setUser, null);
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
