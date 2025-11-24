import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaRegEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useLoginMutation } from "../redux/auth/userApiSlice";
import { toast } from "react-toastify";
import { setCredentials } from "../redux/auth/authSlice";
import { useDispatch } from "react-redux";

const LoginUser = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [togglePassword, setTogglePassword] = useState("");

  const [login] = useLoginMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandle = async (e) => {
    e.preventDefault();

    try {
      const res = await login({ email, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      navigate("/profile");
    } catch (error) {
      toast.error(error?.data?.message || error.errro);
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="fixed z-99 translate-y-3 md:translate-x-60 translate-x-55">
              <button onClick={() => setTogglePassword(!togglePassword)}>
                {togglePassword ? <FaRegEye /> : <FaEyeSlash />}
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
