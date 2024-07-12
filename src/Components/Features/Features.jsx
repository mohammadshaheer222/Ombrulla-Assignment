import Cards from "./Cards";
import feature from "/src/assets/feature.png";

const Features = () => {
  return (
    <div className="px-4 lg:px-16">
      <div className="flex flex-col lg:flex-row lg:space-x-4 justify-center items-center w-ful h-full">
      <img src={feature} alt="feature-image" className="lg:order-2 lg:w-[40%]" />
        <div className="lg:order-1 lg:w-1/2 space-y-4">
          <h3 className="text-lg uppercase text-[#F85E9F] mt-10 tracking-widest font-semibold text-center lg:text-left">
            Key Features
          </h3>
          <h1 className="text-xl font-bold tracking-wider text-center lg:text-left">
            We offer best services
          </h1>
          <p className="text-sm text-center md:px-16 lg:px-0 lg:text-left">
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
