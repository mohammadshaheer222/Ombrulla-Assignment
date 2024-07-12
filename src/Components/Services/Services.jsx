import { services } from "../data";

const Services = () => {
  return (
    <div className="px-4  sm:space-x-4 sm:space-y-0 lg:flex lg:px-16 xl:px-32 lg:justify-center lg:items-center">
      <div className="text-center lg:text-start lg:w-[70%]">
        <h1 className="text-lg uppercase text-[#F85E9F] tracking-widest font-semibold">
          Services
        </h1>
        <h3 className="text-xl font-bold tracking-wider">
          Our top value categories for you
        </h3>
      </div>
      <div className="sm:flex space-y-4 sm:space-y-0 sm:space-x-4 pt-10">
        {services.map((data) => (
          <div className=" flex flex-col  justify-center items-center  space-y-4 py-6 px-8 rounded-3xl border-[1px] bg-blue-50 lg:flex-wrap">
            <img src={data.logo} alt="" />
            <h3 className="font-bold">{data.title}</h3>
            <p className="text-[#191825] opacity-50 text-center">
              {data.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
