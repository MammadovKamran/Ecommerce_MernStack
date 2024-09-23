/** @format */

import { EnvelopeIcon } from "@heroicons/react/24/outline"; // İstediğiniz ikonu buradan import edin

const NewsLetterSection = () => {
  return (
    <div className="bg-newsletter-image bg-cover bg-no-repeat p-10 lg:p-28  rounded-lg mb-8 flex flex-col items-start  ">
      <div className="mb-4 lg:mb-0 flex flex-col items-start">
        <div className=" flex mb-1 items-center">
          <span className="rounded-full w-7 h-7 bg-blue-500 flex items-center justify-center mr-2">
            <EnvelopeIcon className="w-4 h-4 text-white " />
          </span>
          <span className="text-xs text-blue-700 font-bold">Newsletter</span>
        </div>
        <h2 className="text-3xl font-bold">Get weekly update</h2>
      </div>
      <form className="flex  flex-col items-start md:flex-row  w-full lg:w-auto py-7">
        <input
          type="email"
          placeholder="example@gmail.com"
          className="px-4 py-2 border border-gray-300  rounded-lg  w-full lg:w-80"
        />
        <button
          type="submit"
          className="bg-black text-white px-6 py-2  lg:w-26 mt-3 rounded-md text-base md:mx-4 md:mt-0  "
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default NewsLetterSection;
