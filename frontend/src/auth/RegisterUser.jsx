import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaRegEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useRegisterMutation } from "../redux/auth/userApiSlice";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setCredentials } from "../redux/auth/authSlice";

const RegisterUser = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [togglePassword, setTogglePassword] = useState(false);

  const [register] = useRegisterMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  
  const submitHandle = async (e) => {
    e.preventDefault();

    setUserName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setConfirmPassword("");

    if (password !== confirmPassword) {
      return toast.error("Password don't match !");
    } else {
      try {
        const res = await register({ username, email, password }).unwrap();
        dispatch(setCredentials({ ...res }));
         navigate("/profile");
      } catch (error) {
        toast.error(error?.data?.message || error.error);
      }
    }
  };
  return (
    <>
      <div className="flex items-center justify-center pt-5">
        <h1 className="text-2xl font-semibold text-white">Register User</h1>
      </div>
      <form onSubmit={(e) => submitHandle(e)}>
        <div className="shadow-xl flex justify-center items-center flex-col gap-5 pt-13">
          <div className="font-semibold flex flex-col justify-center">
            <label className="flex justify-start items-start" htmlFor="name">
              User Name
            </label>
            <input
              className="block py-3 px-7 md:text-xl text-md bg-zinc-300 rounded-md"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="font-semibold flex flex-col justify-center">
            <label className="flex justify-start items-start" htmlFor="email">
              Email
            </label>
            <input
              className="block py-3 px-7 md:text-xl text-md bg-zinc-300 rounded-md"
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="font-semibold flex flex-col justify-center">
            <label
              className="flex justify-start items-start"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="block py-3 px-7 md:text-xl text-md bg-zinc-300 rounded-md"
              type={togglePassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="font-semibold flex flex-col justify-center">
            <label
              className="flex justify-start items-start"
              htmlFor="password"
            >
              Confirm password
            </label>
            <input
              className="block py-3 px-7 md:text-xl text-md bg-zinc-300 rounded-md"
              type={togglePassword ? "text" : "password"}
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <div className="fixed z-99 translate-y-3 md:translate-x-60 translate-x-55">
              <span 
              onClick={() => setTogglePassword(!togglePassword)}>
                {togglePassword ? (
                  <FaRegEye size={20} />
                ) : (
                  <FaEyeSlash size={20} />
                )}
              </span>
            </div>
          </div>
          <div className="font-semibold flex flex-col justify-center">
            <button 
            type="submit"
            className="block py-3 px-28 md:text-xl text-md text-white bg-pink-500 hover:opacity-90 rounded-md cursor-pointer">
              Register
            </button>
          </div>
          <div className="font-semibold text-white">
            <p>
              Allready have an account !{" "}
              <Link className="text-pink-700" to="/login">
                {" "}
                Login
              </Link>{" "}
            </p>
          </div>
        </div>
      </form>
    </>
  );
};

export default RegisterUser;
