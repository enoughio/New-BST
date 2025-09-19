import Image from "next/image";
import React from "react";

const GetToKnowUs = () => {
  return (
    <div className="md:w-[87%] w-[96%] max-h-[40vh] p-4 md:px-13 bg-gray-100 rounded-2xl mx-auto md:my-10 my-2  flex justify-around items-center">
      <div className=" md:px-5 md:w-[70%] px-3 w-full flex flex-col justify-start items-start gap-4">
        <h1 className="text-4xl font-bold text-center ">
          Get to know us
        </h1>
        <p className="text-xs md:w-[70%]">
          At Bharat Storytellers, we believe every voice has the power to
          inspire. We’re more than just a public speaking club—we’re a community
          that empowers people of all ages to speak with confidence, share their
          stories, and leave a lasting impact.
        </p>
        
        <button className="bg-gray-800 rounded-lg py-3 px-4 text-white"> Discover Our Story </button>
      </div>

      <div>
        <Image
            src={"/home/knowus.png"}
            alt="Get to know us image"
            width={380}
            height={380}
            priority
            className="md:block hidden "
        />

      </div>
    </div>
  );
};

export default GetToKnowUs;
