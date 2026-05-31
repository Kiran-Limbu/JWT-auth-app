import { useRef, useState } from "react";
import Navabar from "../component/Navabar";
import { MdEdit } from "react-icons/md";

const ProfilePage = () => {
  const fileInputRef = useRef(null);
  const [imgUrl, setImgUrl] = useState(null);

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImgUrl(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <Navabar />
      <div className="min-h-screen py-12 px-4">
        <div className="flex justify-center items-center">
          <div className="bg-white/10 relative backdrop-blur-md rounded-3xl shadow-2xl p-8 md:p-12 max-w-md w-full border border-white/20">
            {/* Profile Avatar Section */}
            <div className="flex justify-center mb-8">
              <span className="h-48 w-48 bg-green-600 rounded-full relative flex items-center justify-center shadow-lg overflow-hidden">
                {imgUrl ? (
                  <img
                    src={imgUrl}
                    alt="profile"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <h1 className="font-bold text-7xl text-white drop-shadow-lg">
                    K
                  </h1>
                )}

                {/* Edit Button */}
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="h-12 w-12 absolute -right-[5%] z-50 border-none bg-zinc-600 rounded-full flex items-center justify-center hover:bg-zinc-700 transition-colors"
                >
                  <MdEdit size={29} className="text-white" />
                </button>

                {/* File Input */}
                <input
                  ref={fileInputRef}
                  type="file"
                  name="image"
                  accept="image/*"
                  onChange={handleFileSelect}
                  className="hidden"
                />
              </span>
            </div>

            {/* User Info Section */}
            <div className="space-y-6">
              <div className="text-center">
                <p className="text-gray-300 text-sm font-semibold uppercase tracking-wider mb-2">
                  Username
                </p>
                <h1 className="text-3xl md:text-4xl font-bold text-white">
                  Kiran
                </h1>
              </div>

              <div className="h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent"></div>

              <div className="text-center">
                <p className="text-gray-300 text-sm font-semibold uppercase tracking-wider mb-2">
                  Email Address
                </p>
                <p className="text-lg md:text-xl text-gray-100 hover:text-pink-400 transition-colors duration-300">
                  kiran@example.com
                </p>
              </div>

              <button className="w-full mt-3 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-pink-500/50">
                Edit Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
