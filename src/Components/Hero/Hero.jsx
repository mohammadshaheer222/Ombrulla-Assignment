import hero from "/src/assets/hero.png";
import explore from "/src/assets/explore.png";

const Hero = () => {
  return (
    <div className="px-4 space-y-2 md:px-10 lg:px-32 lg:flex lg:justify-around lg:items-center">
      <img src={hero} alt="hero-image" className="lg:order-2" />
      <div className="text-center md:flex md:flex-col md:justify-center md:items-center lg:text-start space-y-4 lg:order-1">
        <div className="md:max-w-lg md:space-y-4 space-y-4">
          <div className="flex justify-center items-center gap-4">
            <h4 className="text-[#F85E9F] text-xs font-medium">Explore the world</h4>
            <img src={explore} alt="image" />
          </div>

          <h1 className="text-2xl md:text-4xl lg:text-5xl tracking-widest font-bold">
            Travel <span className="text-[#F85E9F]">top destination </span>of
            the world
          </h1>
          <p className="text-balance text-center lg:text-start">
            We always make our customer happy by providing as many choices as
            possible{" "}
          </p>
        </div>
        <div className="space-y-4 md:flex md:justify-center md:items-center md:gap-2 md:space-y-0 lg:justify-start lg:items-start">
          <button className="w-full py-4 text-xs bg-[#5D50C6] text-white rounded-full md:px-10 md:py-3 md:whitespace-nowrap">
            Get Started
          </button>
          <button className="w-full py-4 text-xs rounded-full shadow-sm md:px-10 md:py-3 md:whitespace-nowrap bg-white">
            Watch Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
