import { useSelector } from "react-redux";
import { useRef, useState } from "react";
import Navabar from "../component/Navabar";
import { MdEdit } from "react-icons/md";
import { toast } from "react-toastify";
import { useUploadUserImgMutation } from "../redux/auth/userApiSlice";

const ProfilePage = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const fileInputRef = useRef(null);
  const splite = userInfo.username.split("");
  const firstLetter = splite[0];

  const [uploadImage] = useUploadUserImgMutation();
  const [file, setFile] = useState(null);
  const [imgUrl, setImgUrl] = useState(null);
  const [image, setImage] = useState("");

  console.log({ image, file });

  // Upload image handler
  const uploadImageHandler = async () => {
    if (!file) {
      toast.warning("Please select a file first!");
      return;
    }

    try {
      // Create FormData object
      const formData = new FormData();
      formData.append("image", file);

      const res = await uploadImage(formData).unwrap();
      console.log(res);
      setImgUrl(res.image);
      setImage(res.image);
      // fileInputRef.current.value = "";
      toast.success("Image uploaded successfully!");
    } catch (error) {
      toast.error(error?.data?.message || "Failed to upload image");
    }
  };
  return (
    <>
      <Navabar />
      <div className="min-h-screen bg-linear-to-br from-slate-900 via-purple-900 to-slate-900 py-12 px-4">
        <div className="flex justify-center items-center">
          <div className="bg-white/10 relative backdrop-blur-md rounded-3xl shadow-2xl p-8 md:p-12 max-w-md w-full border border-white/20">
            {/* Profile Avatar Section */}
            <div className="flex justify-center mb-8">
              {/* <form onSubmit={uploadImageHandler}> */}
                <span className="h-48 w-48 bg-green-600 rounded-full relative flex items-center justify-center shadow-lg overflow-hidden">
                  {/* Display uploaded image */}
                  {imgUrl ? (
                    <img
                      src={imgUrl}
                      alt="profile"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <h1 className="font-bold text-7xl text-white drop-shadow-lg">
                      {firstLetter}
                    </h1>
                  )}

                  {/* Edit Button */}
                  <button
                    type="button"
                    onClick={() => {
                      fileInputRef.current?.click();
                    }}
                    className="h-12 w-12 absolute -right-[5%] z-99 border-none bg-zinc-600 rounded-full flex items-center justify-center "
                  >
                    <MdEdit size={29} className="text-white text-xl" />
                  </button>

                  {/* File Input */}
                  <input
                    ref={fileInputRef}
                    type="file"
                    name="image"
                    accept="image/*"
                    onChange={(e) => {
                      setFile(e.target.files[0]);
                      // Auto-upload on select
                      uploadImageHandler();
                    }}
                    className="hidden"
                  />
                </span>
              {/* </form> */}
            </div>
                  <div className="flex justify-center mb-2">
                    {file && (
                      <button
                        onClick={uploadImageHandler}
                        className="px-4 py-2 bg-blue-500 text-white rounded"
                      >
                        Upload Image
                      </button>
                    )}
                  </div>

            {/* User Info Section */}
            {userInfo && (
              <div className="space-y-6">
                {/* Username */}
                <div className="text-center">
                  <p className="text-gray-300 text-sm font-semibold uppercase tracking-wider mb-2">
                    Username
                  </p>
                  <h1 className="text-3xl md:text-4xl font-bold text-white wrap-break-word">
                    {userInfo.username}
                  </h1>
                </div>

                {/* Divider */}
                <div className="h-px bg-linear-to-r from-transparent via-pink-500 to-transparent"></div>

                {/* Email */}
                <div className="text-center">
                  <p className="text-gray-300 text-sm font-semibold uppercase tracking-wider mb-2">
                    Email Address
                  </p>
                  <p className="text-lg md:text-xl text-gray-100 bg-linear-to-r hover:text-pink-400 transition-colors duration-300">
                    {userInfo.email}
                  </p>
                </div>

                {/* Action Button */}
                <button className="w-full mt-3 bg-linear-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-pink-500/50">
                  Edit Profile
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
