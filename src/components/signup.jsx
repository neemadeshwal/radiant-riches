export default function Signup() {
  return (
    <div className="flex justify-between lg:flex-row flex-col lg:items-center gap-10 items-start lg:mx-10 my-8">
      <div className="lg:w-[30vw] w-[80vw] ">
        <h1 className="text-[#5C6874] lg:text-[32px] text-[22px] lg:leading-[44px]">
          Sign up and get exclusive special deals
        </h1>
      </div>
      <div>
        <input
          className="px-4 py-2 rounded-s-md lg:w-[20vw] w-[42vw] mx-6 lg:mx-0"
          type="email"
          name="email"
          id="email"
        />
        <button className="px-4 py-2 rounded-e-md text-white bg-[#1B88F4]">
          Signup
        </button>
      </div>
    </div>
  );
}
