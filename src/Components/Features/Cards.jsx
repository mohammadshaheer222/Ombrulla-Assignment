import { features } from "../data";

const colors = ["#FF5722", "#FACD49", "#F85E9F"];

const Cards = () => {
  return (
    <div className="px-4 sm:space-x-4 sm:space-y-0 md:flex md:justify-start md:items-start w-full lg:justify-center lg:items-center">
      <div className="sm:flex space-y-4 sm:space-y-0 sm:space-x-4 pt-10 lg:pt-0 md:flex-col md:space-x-0 w-full md:space-y-4">
        {features.map((data, index) => (
          <div
            key={data.title}
            className="flex flex-col justify-center items-start py-6 px-8 lg:flex-row lg:items-center lg:justify-start rounded-3xl hover:border-[1px] hover:shadow-lg cursor-pointer transition-all duration-300  max-w-xs md:max-w-full lg:gap-4"
          >
            <div
              style={{ backgroundColor: colors[index % colors.length] }}
              className="w-[100px] h-[100px] rounded-3xl flex justify-center items-center"
            >
              <img src={data.logo} alt="logo" />
            </div>
            <div className="mt-6 lg:mt-0 lg:ml-4">
              <h3 className="font-bold ">{data.title}</h3>
              <p className="text-[#191825] opacity-50">{data.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
