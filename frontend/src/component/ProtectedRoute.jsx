import { Navigate, Outlet } from "react-router-dom"

const ProtectedRoute = () => {
  const getUserData = JSON.parse(localStorage.getItem("userInfo"));

  return getUserData ? <Outlet /> : <Navigate to="/register" replace={true} />
}

export default ProtectedRoute
