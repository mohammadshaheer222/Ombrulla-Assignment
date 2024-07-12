import { features } from "../data";

const Cards = () => {
  return (
    <div className="px-4  sm:space-x-4 sm:space-y-0 md:flex md:justify-start md:items-start  w-full lg:justify-center lg:items-center">
      <div className="sm:flex space-y-4 sm:space-y-0 sm:space-x-4 pt-10 md:flex-col md:space-x-0 w-full md:space-y-4">
        {features.map((data) => (
          <div className=" flex flex-col  justify-center items-start py-4 px-8 lg:flex-row lg:items-start lg:justify-start rounded-3xl even:border-[1px]  max-w-xs md:max-w-full">
            <img src={data.logo} alt="logo"/>
            <div >
              <h3 className="font-bold mt-4">{data.title}</h3>
              <p className="text-[#191825] opacity-50">{data.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
