/* eslint-disable react/prop-types */
import { useState } from "react";
import { BsSearch, BsX } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
export default function Navbar({ handleSideOpen, isSideOpen }) {
  const [searchOpen, setSearchOpen] = useState(false);
  return (
    <div className="bg-[#212731] w-[100vw] m-0 z-[999] h-[70px] flex font-poppins items-center">
      <div className="flex justify-between lg:w-[60%] w-[80%]  mx-auto items-center">
        <div className="lg:flex gap-3 px-5 hidden  items-center bg-white rounded-md w-[20vw] text-[1rem] py-2 ">
          <BsSearch />
          <input
            className="bg-transparent outline-none"
            type="text"
            name="search"
            id="search"
          />
        </div>
        <div>
          {searchOpen ? (
            <div
              className={`flex gap-3 px-5 lg:hidden   items-center bg-white rounded-md ${
                searchOpen ? "w-[40vw]" : "w-0"
              } w-[40vw] transition ease-in-out duration-700 text-[0.9rem] py-2 `}
            >
              <BsSearch />
              <input
                className="bg-transparent outline-none"
                type="text"
                name="search"
                id="search"
              />
            </div>
          ) : (
            <BsSearch
              onClick={() => setSearchOpen(true)}
              className="block lg:hidden text-white text-2xl"
            />
          )}
        </div>
        <div className="flex justify-between items-center text-2xl lg:hidden text-white">
          {isSideOpen ? (
            <BsX className="text-4xl" onClick={() => handleSideOpen(false)} />
          ) : (
            <FaBars className="" onClick={() => handleSideOpen(true)} />
          )}
        </div>
        <div className=" gap-12 text-[#D1D6DA] text-[0.9rem] lg:flex hidden tracking-wider  capitalize cursor-pointer ">
          <p className="hover:text-gray-400">categories</p>
          <p className="hover:text-gray-400">website builders</p>
          <p className="hover:text-gray-400">today's deals</p>
        </div>
      </div>
    </div>
  );
}
