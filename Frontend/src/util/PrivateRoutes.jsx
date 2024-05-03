import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = () => {
  const userInfo = localStorage.getItem("userInfo");
  return userInfo ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
