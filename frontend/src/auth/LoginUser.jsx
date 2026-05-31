import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaRegEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
// import { AuthGlobalContex } from "../contex/AuthContex";
import axios from "axios";
import SetCredientials from "./AuthLocalStore";

const LoginUser = () => {


  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [togglePassword, setTogglePassword] = useState("");
  const [loading, setLoading] = useState(true);

  //get the localstorage item of user data
  // const getUserData = JSON.parse(localStorage.getItem("userInfo"));
  // console.log(getUserData);
  // console.log(getUserData.email);

  

  if (!loading) {
    return <div>Loading......</div>;
  }

  const submitHandle = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/users/login`,
        formData,
      );

      setFormData("");
      SetCredientials(res.data);
      console.log(res);
      toast.success("User login Success");
      setLoading(false);
      navigate("/profile");
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    }
  };
  return (
    <>
      <div className="flex items-center justify-center pt-[20vh]">
        <h1 className="text-2xl font-semibold text-white">Login User</h1>
      </div>
      <form onSubmit={(e) => submitHandle(e)}>
        <div className="shadow-xl flex justify-center items-center flex-col gap-5 pt-13">
          <div className="font-semibold flex flex-col justify-center">
            <label className="flex justify-start items-start" htmlFor="name">
              Email
            </label>

            <input
              className="block py-3 px-7 md:text-xl text-md bg-zinc-200 rounded-md"
              type="email"
              placeholder="Email address"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
          <div className="font-semibold flex flex-col justify-center">
            <label className="flex justify-start items-start" htmlFor="name">
              Password
            </label>
            <input
              className="block py-3 px-7 md:text-xl text-md bg-zinc-200 rounded-md"
              type={togglePassword ? "text" : "password"}
              placeholder="Password"
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
            <div className="fixed z-99 translate-y-3 md:translate-x-60 translate-x-55">
              <button
                type="button"
                onClick={() => setTogglePassword(!togglePassword)}
              >
                {togglePassword ? (
                  <FaRegEye size={20} />
                ) : (
                  <FaEyeSlash size={20} />
                )}
              </button>
            </div>
          </div>
          <div className="font-semibold flex flex-col justify-center">
            <button
              type="submit"
              className="block py-3 px-28 md:text-xl text-md text-white bg-pink-500 hover:opacity-90 rounded-md cursor-pointer"
            >
              Login
            </button>
          </div>
          <div className="font-semibold text-white">
            <p>
              Don't have an account ??{" "}
              <Link className="text-pink-700" to="/register">
                Register
              </Link>{" "}
            </p>
          </div>
        </div>
      </form>
    </>
  );
};

export default LoginUser;
