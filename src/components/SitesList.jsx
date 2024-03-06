import { SitesData } from "../data";
import image from "../assets/img1.png";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { FaCheck } from "react-icons/fa";
import { IoChevronDown } from "react-icons/io5";
import { GoTrophy } from "react-icons/go";
import { IoDiamondOutline } from "react-icons/io5";
export default function SitesList() {
  return (
    <div className=" ">
      {SitesData.map((item, index) => {
        const {
          id,
          img,
          imgAlt,
          mainHighlight,
          bestFeatures,
          title,
          titleDetail,
          highlightDetail,
          rating,
          discount,
          isBestChoice,
          isBestValue,
        } = item;

        return (
          <div
            key={id}
            className="relative flex lg:flex-row flex-col bg-white mb-10 mt-5 justify-between items-start lg:w-[75vw] w-[80vw] h-auto  px-10 pb-5 font-Inter"
          >
            <div className="absolute top-10 left-[-1.3rem] border-2 border-[#E1E4E6] text-[#757778] rounded-[50%] z-[0] text-2xl py-1 px-3">
              {index + 1}
            </div>
            {isBestChoice && (
              <div className="absolute capitalize flex  items-center gap-1 top-[-1rem] left-[-1rem] text-white bg-[#FF7724] px-4 py-[0.35rem] rounded-lg">
                <GoTrophy />
                <p>Best choice</p>
              </div>
            )}
            {isBestValue && (
              <div className="absolute capitalize flex items-center gap-1 top-[-1rem] left-[-1rem] text-white bg-[#FF7724] px-4 py-[0.35rem] rounded-lg">
                <IoDiamondOutline />
                <p>Best value</p>
              </div>
            )}
            <div className="mt-14 flex justify-between  items-center">
              <div className="">
                <img className="w-[141px] h-[103px]" src={image} alt="" />
                <p className="text-center mt-2 text-[#626E79] capitalize">
                  {imgAlt}
                </p>
              </div>
              <div className="w-[25vw] absolute right-0 top-0 lg:hidden  h-[30vh] text-center flex  flex-col justify-between">
                <div className="bg-[#F3F9FF] text-center w-[22vw] h-auto rounded-b-lg py-1 mx-auto ">
                  <p className="lg:text-[32px] text-[25px] text-[#074786] mb-2">
                    {rating}
                  </p>
                  <p className="lg:text-[14px] text-[12px] text-[#074786] capitalize font-medium leading-[20px] mb-[5px]">
                    {rating > 9.5
                      ? "exceptional"
                      : rating > 9.1
                      ? "excellent"
                      : "very good"}
                  </p>
                  <p className="flex items-center gap-1  w-[90%]  justify-center mx-auto ">
                    {[...Array(4)].map((item, index) => {
                      return (
                        <div
                          className={`text-yellow-400 text-[0.8rem] lg:text-lg  `}
                          key={index}
                        >
                          <BsStarFill />
                        </div>
                      );
                    })}
                    <div className="text-[0.8rem]">
                      {rating > 9.5 ? (
                        <BsStarFill className="text-yellow-400 " />
                      ) : rating > 9.1 ? (
                        <BsStarHalf className="text-yellow-400" />
                      ) : (
                        <BsStar className="text-yellow-400" />
                      )}
                    </div>
                  </p>
                </div>
                <div>
                  <button className="text-white bg-blue-500 w-full py-2 px-4 rounded-md">
                    view
                  </button>
                </div>
              </div>
            </div>
            <div className="lg:w-[490px] text-[#4B5665] mt-4 w-[70vw] lg:text-[17px] text-[15px]">
              <div>
                <span className=" font-bold text-[#4B5665]">{title}: </span>
                {titleDetail}
              </div>
              {discount && (
                <p className="text-[#074786] bg-[#f4f8fb] w-[4rem] my-1">
                  {discount}% off{" "}
                </p>
              )}
              <div className="">
                <p className="text-[#2C384A] my-2 capitalize font-bold">
                  main highlights
                </p>
                {highlightDetail && (
                  <div className="pl-4">{highlightDetail}</div>
                )}
                {mainHighlight.length !== 0 && (
                  <div className="bg-[#FFF4ED] lg:w-[32vw] w-[50vw] h-auto rounded-lg py-2 px-6 ml-[1.3rem] my-2">
                    {mainHighlight.map((item, index) => {
                      return (
                        <div
                          key={index + 500}
                          className="flex gap-3 items-center mb-4"
                        >
                          <p className="text-[#1B88F4] bg-white px-3 py-[3px] rounded-md font-medium">
                            {item.version}
                          </p>
                          <p className="text-[#4B5665] capitalize">
                            {item.name}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                )}
                {bestFeatures.length !== 0 && (
                  <div className="mt-4 ">
                    <h2 className="font-medium mb-2">Why we love it</h2>
                    {bestFeatures.map((item, index) => {
                      return (
                        <div
                          key={index + 5000}
                          className="flex gap-2 items-center mb-1 ml-3"
                        >
                          <FaCheck className="text-[#61adf4]  bg-[#eef2f6] p-[3px] rounded-full" />
                          <p className="capitalize">{item}</p>{" "}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
              <p className="text-[#1B88F4] font-medium  gap-1 items-center capitalize mt-3 lg:flex hidden">
                show more{" "}
                <span className="inline mt-1">
                  <IoChevronDown />
                </span>
              </p>
            </div>
            <div className="w-[16vw] h-[40vh] text-center lg:flex hidden  flex-col justify-between">
              <div className="bg-[#F3F9FF] w-[155px] h-[138px] rounded-b-lg py-1 mx-auto">
                <p className="text-[32px] text-[#074786] mb-2">{rating}</p>
                <p className="text-[14px] text-[#074786] capitalize font-medium leading-[20px] mb-[5px]">
                  {rating > 9.5
                    ? "exceptional"
                    : rating > 9.1
                    ? "excellent"
                    : "very good"}
                </p>
                <p className="flex items-center gap-1 text-center w-[7.5vw] mx-auto ">
                  {[...Array(4)].map((item, index) => {
                    return (
                      <div className={`text-yellow-400  `} key={index}>
                        <BsStarFill />
                      </div>
                    );
                  })}
                  {rating > 9.5 ? (
                    <BsStarFill className="text-yellow-400" />
                  ) : rating > 9.1 ? (
                    <BsStarHalf className="text-yellow-400" />
                  ) : (
                    <BsStar className="text-yellow-400" />
                  )}
                </p>
              </div>
              <div>
                <button className="text-white bg-blue-500 w-full py-2 px-4 rounded-md">
                  view
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
