import { IoChevronDown } from "react-icons/io5";

export default function Footer() {
  const categoryArray = [
    "web builder",
    "hosting",
    "data center",
    "robotic-automation",
  ];
  const contactArray = [
    "contact",
    "privacy policy",
    "terms of service",
    "categories",
    "about",
  ];
  return (
    <div
      className="
        h-452px
        bg-[#212731] w-[100%] h-[452px] text-[#ffff]
        "
    >
      <div className="w-[80%] mx-auto py-10 lg:flex lg:flex-row grid grid-cols-2  grid-flow-row  justify-between items-start capitalize ">
        <div className=" ">
          <h2 className="uppercase text-[16px] my-4 ">Categories</h2>
          <div>
            {categoryArray.map((item, index) => {
              return (
                <p
                  key={index + 800}
                  className="text-[14px] my-4 text-[#B6BDC4]"
                >
                  {item}
                </p>
              );
            })}
          </div>
        </div>
        <div>
          <h2 className="uppercase text-[16px] my-4 ">contact</h2>
          {contactArray.map((item, index) => {
            return (
              <p
                key={index + 50000}
                className="text-[14px] my-4 text-[#B6BDC4]"
              >
                {item}
              </p>
            );
          })}
        </div>
        <div className="flex items-center h-[100%] justify-center mt-14">
          <p className="items-center flex gap-2 text-[#B6BDC4]">
            United states{" "}
            <span>
              <IoChevronDown className="text-xl" />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
