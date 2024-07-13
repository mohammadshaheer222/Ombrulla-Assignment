import Works from "./Works";
import travel from "/src/assets/travel.png";
import { works } from "../data";
const Travel = () => {
  return (
    <div className="px-4 py-10 md:px-8 lg:px-0 lg:pr-14 xl:pr-28 w-full lg:flex">
      <div className="lg:w-[70%]">
        <img className="w-full h-full" src={travel} alt="" />
      </div>

      <div className="text-center space-y-4 mt-10 lg:w-[30%] lg:flex lg:flex-col lg:justify-center lg:items-center lg:max-w-sm">
        <h4 className="text-2xl uppercase text-[#F85E9F] tracking-widest font-bold">
          Travel Point
        </h4>
        <h1 className="text-4xl font-bold tracking-wider">
          We helping you find your dream location
        </h1>{" "}
        <p className="text-sm text-[#19182580]">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-4 lg:w-full">
          {works.map((data, index) => (
            <Works count={data.count} role={data.role} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Travel;
