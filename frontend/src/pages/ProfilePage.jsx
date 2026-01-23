import { useSelector } from "react-redux";
import FloatingLines from "../component/FloatingLine";
import Navabar from "../component/Navabar";

const ProfilePage = () => {
   const {userInfo} = useSelector(state => state.auth);
   const splite = userInfo.username.split('');
    const firstLetter = splite[0];
   
  return (
    <>
    <Navabar />
      <div style={{ width: "100%", height: "620px", position: "relative" }}>
        <FloatingLines
          enabledWaves={["top", "middle", "bottom"]}
          lineCount={[10, 15, 20]}
          lineDistance={[8, 6, 4]}
          bendRadius={5.0}
          bendStrength={-0.5}
          interactive={true}
          parallax={true}
        />
      </div>
      <div className="absolute z-9 top-1/5 w-full">
      <div className="flex justify-center items-center gap-4 flex-col">
        <span className="h-40 w-40 bg-gray-500 rounded-full relative">
            <h1 className="absolute top-1/13 right-1/3 font-semibold text-9xl text-zinc-200">
            {firstLetter}
            </h1>
            <p className="absolute top-1/2 -right-2 z-9 h-6 w-6 bg-green-500 rounded-full"></p>
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
