import { RelatedSiteData } from "../data";
import image from "../assets/img1.png";
export default function RelatedSiteList() {
  return (
    <div className="">
      <h2 className="text-[32px] text-[#2C384A] leading-[44px]">
        Related deals you might like for
      </h2>
      <div className="flex lg:flex-row flex-col lg:justify-center  lg:items-center gap-10  items-start  lg:gap-6 lg:w-[73vw] w-[95vw] mt-8 text-[0.9rem] lg:text-[1rem]">
        {RelatedSiteData.map((item) => {
          const { id, discount, name, title, price, img } = item;
          return (
            <div
              key={id}
              className="lg:w-[25vw]  w-[75vw] relative lg:block flex justify-between  items-center bg-white rounded-lg p-4   lg:text-[1rem] text-[0.9rem]"
            >
              <div className="absolute top-0 left-0 lg:hidden">
                {" "}
                <p className="text-blue-800 bg-[#F2F4F7] px-2 rounded-e py-1">
                  {discount}% off
                </p>
              </div>
              <div className="absolute top-0 right-0 lg:hidden">
                <p className="text-blue-800 bg-[#F2F4F7] px-2 py-1 rounded-s">
                  Limited time
                </p>
              </div>
              <div className="flex items-center justify-center mt-6">
                <img
                  className="lg:w-[141px] lg:h-[103px] w-[90px] h-[80px]"
                  src={image}
                  alt=""
                />
              </div>
              <div className="mt-10 w-[35vw]">
                <div className="lg:flex gap-3 text-[0.8rem] lg:text-[1rem]  hidden">
                  <p className="text-blue-800 bg-[#F2F4F7] px-2 rounded-md py-[1px]">
                    {discount}% off
                  </p>
                  <p className="text-blue-800 bg-[#F2F4F7] px-2 py-[1px] rounded-md">
                    Limited time
                  </p>
                </div>
                <div className="lg:w-[20vw]  text-[#626E79]">
                  <p className="py-1 lg:text-center font-bold pt-2 text-[1rem] ">
                    {title}
                  </p>
                  <p className=" lg:text-[16px] text-[0.9rem]  text-[#626E79]">
                    {name}
                  </p>
                  <div className="flex items-end gap-[1vw] mt-2 ">
                    <p className="text-[#5C6874] font-medium">
                      $ {(price - price * (discount / 100)).toFixed(2)}
                    </p>
                    <p className="text-[#9FA9B3] text-[0.6rem] lg:text-[0.8rem]">
                      $ {price}
                    </p>
                    <p className="text-[#EF4C5D] lg:block hidden text-[0.8rem]">
                      ({discount}% off)
                    </p>
                  </div>
                </div>
                <div className=" lg:w-[20vw]">
                  <button className=" lg:w-[100%]  my-2 py-2 px-4 text-white bg-[#1B88F4] capitalize rounded-md">
                    view deal
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
