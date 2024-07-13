import { services } from "../data";

const Services = () => {
  return (
    <div className="px-4 pb-10 sm:space-x-4 sm:space-y-0 lg:flex lg:px-16 xl:px-32 lg:justify-center lg:items-center ">
      <div className="text-center space-y-4 lg:text-start lg:w-[70%]">
        <h1 className="text-lg lg:text-2xl uppercase text-[#F85E9F] tracking-widest font-bold">
          Services
        </h1>
        <h3 className="text-2xl lg:text-4xl font-bold tracking-wider">
          Our top value categories for you
        </h3>
      </div>
      <div className="space-y-4 md:flex md:space-y-0 md:space-x-4 pt-10 lg:pt-0">
        {services.map((data) => (
          <div className=" flex flex-col  justify-center items-center  space-y-6 py-6 px-8 rounded-3xl border-[1px] lg:flex-wrap hover:scale-105 transition-all duration-300  cursor-pointer lg:py-16 shadow-lg">
            <img src={data.logo} alt="" />
            <h3 className="font-bold">{data.title}</h3>
            <p className="text-[#19182580] text-center">
              {data.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
