import { Link } from "react-router-dom";
import FloatingLines from "./FloatingLine";

const LandingPage = () => {
  return (
    <div className="bg-zinc-800  w-full relative">
      <div>
        {/* <FloatingLines
          enabledWaves={["top", "middle", "bottom"]}
          lineCount={[10, 15, 20]}
          lineDistance={[8, 6, 4]}
          bendRadius={5.0}
          bendStrength={-0.5}
          interactive={true}
          parallax={true}
        /> */}
        <img
        className="w-full h-full object-cover overflow-hidden"
          src=""
          alt=""
        />
      </div>
      <div className="absolute top-1/2 bottom-1/2 translate-x-1/2 right-1/2">
        <button className="font-semibold truncate w-full text-white md:text-2xl text-lg py-3 px-29 rounded-md bg-zinc-600 cursor-pointer hover:opacity-80 transition-all">
          <Link to="/">Get Started</Link>
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
