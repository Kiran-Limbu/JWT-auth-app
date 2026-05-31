import { Link, useNavigate } from "react-router-dom";
import { IoIosLogOut } from "react-icons/io";
// import { useLogoutMutation } from "../redux/auth/userApiSlice";
import { toast } from "react-toastify";
// import { useDispatch } from "react-redux";
// import { logout } from "../redux/auth/authSlice";

const Navabar = () => {
  // const [logoutApiCall] = useLogoutMutation();
  const navigate = useNavigate();
  // const dispatch = useDispatch();

  const logoutHandle = async (e) => {
    e.preventDefault();
    try {
      // await logoutApiCall().unwrap();
      // dispatch(logout());
      navigate("/");
      toast.success("User Logout Sucessfullly");
    } catch (error) {
      toast.error(error.error);
    }
  };
  return (
    <div className="w-full bg-zinc-600 py-5 px-6">
      <div className="flex justify-around">
        <Link className="font-semibold text-3xl  hover:opacity-80 text-white" to="/profile">
          Auth
        </Link>
        <div>
          <button
          className="h-9 w-9 bg-zinc-300 flex items-center justify-center rounded-full border-none hover:opacity-80 cursor-pointer"
          onClick={logoutHandle}>
            <IoIosLogOut size={25} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navabar;
