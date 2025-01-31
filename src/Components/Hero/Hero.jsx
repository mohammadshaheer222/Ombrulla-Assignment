import hero from "/src/assets/hero.png";
import explore from "/src/assets/explore.png";
import demo from "/src/assets/demo.png";

const Hero = () => {
  return (
    <div className="px-4 pt-10 space-y-2 md:px-10 lg:px-32 lg:flex lg:justify-around lg:items-center bg-gradient-to-b from-white to-gray-50 md:bg-gradient-to-b md:from-white md:to-white">
      <div className=" lg:order-2">
        <img src={hero} alt="hero-image"/>
      </div>
      <div className="text-center md:flex md:flex-col md:justify-center md:items-center lg:text-start space-y-4 lg:order-1">
        <div className="md:max-w-lg md:space-y-4 space-y-4">
          <div className="flex justify-center items-center gap-4 lg:justify-start lg:items-start">
            <button className="px-8 py-2 rounded-full shadow-sm md:px-10 md:py-3 md:whitespace-nowrap text-[#F85E9F] bg-white flex items-center justify-center gap-4 font-bold active:scale-95 active:shadow-lg duration-100">
              Explore the world
              <img src={explore} alt="image" />
            </button>
          </div>
          <div className="md:space-y-8 md:py-4 py-4 space-y-4">
            <h1 className="text-3xl md:text-4xl tracking-widest font-bold">
              Travel <span className="text-[#F85E9F]">top destination </span>of
              the world
            </h1>
            <p className="text-balance text-center lg:text-start text-[#19182580] font-normal">
              We always make our customer happy by providing as many choices as
              possible{" "}
            </p>
          </div>
        </div>
        <div className="space-y-4 md:flex md:justify-center md:items-center  md:space-y-0 md:gap-4 lg:justify-start lg:items-start">
          <button className="w-full lg:px-16 py-4 text-xs bg-[#5D50C6] text-white rounded-full md:px-10 md:py-3 md:whitespace-nowrap font-bold active:scale-95 active:shadow-lg duration-100  p-2 flex items-center justify-center hover:bg-[#695adb]  active:bg-[#463b97] ">
            Get Started
          </button>
          <button className="w-full lg:px-16 py-4 text-xs rounded-full shadow-sm md:px-10 md:py-3 md:whitespace-nowrap bg-white flex justify-center items-center gap-2 font-bold active:scale-95 active:shadow-lg duration-100">
            <img src={demo} alt="icon" />
            Watch Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
