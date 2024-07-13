import Cards from "./Cards";
import feature from "/src/assets/feature.png";

const Features = () => {
  return (
    <div className="px-4 py-10 lg:px-28">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:space-x-4 justify-center items-center w-ful h-full">
      <img src={feature} alt="feature-image" className="lg:order-2 lg:w-[40%]" />
        <div className="lg:order-1 lg:w-1/2 space-y-4">
          <h3 className="text-lg lg:text-2xl uppercase text-[#F85E9F] mt-10 tracking-widest font-bold text-center lg:text-left">
            Key Features
          </h3>
          <h1 className="text-2xl lg:text-4xl font-bold tracking-wider text-center lg:text-left">
            We offer best services
          </h1>
          <p className="text-sm text-[#19182580] text-center md:px-16 lg:px-0 lg:text-left">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC.
          </p>
          <div className="md:flex md:justify-start md:items-start md:px-16 lg:px-0">
            <Cards />
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Features;
