import { useSelector } from "react-redux";
import { useRef, useState } from "react";
import Navabar from "../component/Navabar";
import { MdEdit } from "react-icons/md";

const ProfilePage = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const fileInputRef = useRef(null);
  const splite = userInfo.username.split("");
  const firstLetter = splite[0];

  const [imgUrl, setImgUrl] = useState("");

  return (
    <>
      <Navabar />
      <div className="absolute z-9 top-1/5 w-full">
        <div className="flex justify-center items-center gap-4 flex-col">
          <span className="h-40 w-40 bg-gray-500 rounded-full relative">
            <h1 className="absolute top-1/13 right-1/3 font-semibold text-9xl text-zinc-200">
              {firstLetter}
            </h1>
            <button
              onClick={() => fileInputRef.current?.click()}
              className="absolute top-1/2 -right-2 z-9 h-8 w-8 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition cursor-pointer"
            >
              <MdEdit className="text-white" />
            </button>
            <input
              ref={fileInputRef}
              type="file"
              name="image"
              accept="image/*"
              className="hidden"
            />
          </span>
          {userInfo && (
            <>
              <h1>UserName: {userInfo.username}</h1>
              <h2>Email: {userInfo.email}</h2>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
