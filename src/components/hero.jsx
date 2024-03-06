import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { GoDash } from "react-icons/go";
import { IoMdInformationCircleOutline } from "react-icons/io";
import Filter from "./filter";
import SitesList from "./SitesList";
import RelatedSiteList from "./RelatedSideList";
import Signup from "./signup";
import PageRouter from "./PageRoute";
export default function Hero() {
  return (
    <div className="w-[70%] mx-auto z-0  h-auto py-10 ">
      <div className="">
        <h1 className="lg:text-[48px] md:text-[30px] text-[25px] text-[#2C384A]">
          Best Website builders in the US
        </h1>
      </div>
      <hr className="my-2" />
      <div className="flex lg:flex-row flex-col lg:gap-6 gap-4 lg:items-center items-start text-[#4B5665] capitalize my-4">
        <div className="flex gap-2 items-center font-medium ">
          <IoIosCheckmarkCircleOutline className="text-xl" />
          last updated
        </div>
        <div className="flex gap-2 items-center font-medium">
          <GoDash className="text-xl" />
          february 22,2020
        </div>
        <div className="flex gap-2 items-center font-medium">
          <IoMdInformationCircleOutline className="text-xl" />
          Advertising Disclosure
        </div>
      </div>
      <hr className="my-2" />
      <Filter />
      <PageRouter />
      <SitesList />
      <RelatedSiteList />
      <Signup />
    </div>
  );
}
