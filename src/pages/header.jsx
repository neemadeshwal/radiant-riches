import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { useState } from "react";
import { filterArray } from "../data";

export default function Header() {
  const [isSideOpen, setIsSideOpen] = useState(false);
  function handleSideOpen(value) {
    setIsSideOpen(value);
  }
  return (
    <div className="relative">
      <Navbar handleSideOpen={handleSideOpen} isSideOpen={isSideOpen} />

      <div
        className={` ${
          isSideOpen ? "open border " : ""
        } panel-container   w-[100%] transition ease-in-out z-10 duration-700 m-0 p-0 absolute top-[4.3rem]   left-0 h-[100%]  bg-white`}
      >
        <div className=" gap-12 py-4 text-[#D1D6DA] text-[1rem] flex-cols  tracking-wider  capitalize cursor-pointer ">
          <p className="text-gray-800 py-2 px-10 hover:bg-gray-800 font-semibold my-1 hover:text-gray-400 ">
            categories
          </p>
          <hr />

          <p className="text-gray-800 py-2 px-10 hover:bg-gray-800 font-semibold my-1 hover:text-gray-400 ">
            website builders
          </p>
          <hr />

          <p className="text-gray-800 py-2 px-10 hover:bg-gray-800 font-semibold my-1 hover:text-gray-400 ">
            today's deals
          </p>
          <hr />
        </div>
        {isSideOpen && (
          <div className="capitalize flex flex-col gap-0 box-content h-[35vh] overflow-auto ml-6">
            <p className="font-semibold  text-gray-900">Types:</p>
            {filterArray.map((item, index) => {
              return (
                <p
                  key={index + 100}
                  className=" bg-white  px-3 py-2 rounded-md text-[#4B5665] mx-7 hover:bg-gray-800 hover:text-gray-400 font-semibold box-border  cursor-pointer   "
                >
                  {item}
                </p>
              );
            })}
          </div>
        )}
      </div>

      <Outlet />
      <Footer />
    </div>
  );
}
