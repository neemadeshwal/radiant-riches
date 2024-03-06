import { filterArray } from "../data";

export default function Filter() {
  return (
    <div className="capitalize hidden  lg:flex gap-12 box-content">
      {filterArray.map((item, index) => {
        return (
          <p
            key={index + 100}
            className=" bg-white  px-3 py-2 rounded-md text-[#4B5665] box-border hover:text-black cursor-pointer hover:border border-gray-300 "
          >
            {item}
          </p>
        );
      })}
    </div>
  );
}
