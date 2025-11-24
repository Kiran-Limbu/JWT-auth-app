import { Route, Routes } from "react-router-dom";
import RegisterUser from "./auth/RegisterUser";
import LandingPage from "./component/LandingPage";
import ProtectedRoute from "./component/ProtectedRoute";
import LoginUser from "./auth/LoginUser";
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <div className="bg-zinc-800 min-h-screen w-full">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<RegisterUser />} />
        <Route path="/login" element={<LoginUser />} />

        {/* Protected Route For User */}
        <Route path="" element={<ProtectedRoute />}>
          <Route path="/profile" />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
