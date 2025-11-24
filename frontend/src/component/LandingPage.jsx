import { Link } from "react-router-dom";
import Particles from "./Particles ";

const LandingPage = () => {
  return (
    <>
      {/* <div> */}
      {/* <FloatingLines
          enabledWaves={["top", "middle", "bottom"]}
          lineCount={[10, 15, 20]}
          lineDistance={[8, 6, 4]}
          bendRadius={5.0}
          bendStrength={-0.5}
          interactive={true}
          parallax={true}
        /> */}
      <div style={{ width: "100%", height: "600px", position: "relative" }}>
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
      {/* </div> */}
      <div className="absolute top-1/2 bottom-1/2 translate-x-1/2 right-1/2 z-99">
        <Link
          className="font-semibold truncate w-full text-white md:text-2xl text-lg py-3 px-29 rounded-md bg-zinc-600 cursor-pointer hover:opacity-80 transition-all"
          to="/register"
        >
          Get Started
        </Link>
      </div>
    </>
  );
};

export default LandingPage;
