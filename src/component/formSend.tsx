import React from "react";

type Props = {};

const FormSend = (props: Props) => {
  return (
    <div className=" relative w-full">
      <div className=" h-[400px] w-full flex items-center justify-center bg-gradient-to-r from-[#ecf1eb] via-slate-200 to-[#78af6d] via-[#e6efe4]">
        <div className="  p-6  mx-auto flex justify-center">
          <div className="max-w-[500px] ">
            <h4 className="text-[36px] font-bold mb-2">Etwas abonnieren*</h4>
            <h4 className="text-[36px] font-bold  mb-[40px]">
              __Unser Newsletter
            </h4>
            <p className="mb-4 text-gray-700 w-[300px] ">
              Get weekly updates about our product on your email, no spam
              guaranteed we promise
            </p>
          </div>
          <div className="  w-[400px] relative ">
            <form className="flex items-center absolute top-[120px] ml-4 ">
              <div className="relative flex-1">
                <input
                  type="email"
                  placeholder="youremail123@gmail.com"
                  className="w-[500px] py-6 px-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <button
                type="submit"
                className="bg-gray-500 text-white py-4 px-6  hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 absolute top-8 right-0"
              >
                ABONNIEREN
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormSend;
