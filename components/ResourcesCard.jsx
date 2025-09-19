import Image from "next/image";
import React from "react";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

const ResourcesCard = ({
  img, title, dl1, dl2
}) => {
  return (
    <div className="w-full max-w-[1690px] max-h-[700px] sm:w-[90%] rounded-2xl bg-[#F7F7F7] flex flex-col justify-start items-center sm:flex-row border border-b-4">
      <div className="max-w-[1690px] max-h-[700px]  w-full h-[200px] sm:w-2/4 sm:h-[45vh] relative ">
        <Image
          src={img}
          alt="Resources Image"
          fill
          className="object-fill  rounded-t-2xl md:rounded-l-2xl md:rounded-t-none "
        />
      </div>
      
      <div className="w-full sm:max-w-1/2 md:pl-20 flex justify-start items-center ">
        <div className="flex flex-col justify-start items-start mb-10 ">
          <h1 className="text-[2rem] md:text-[3rem] text-nowrap font-bold">{title}</h1>
          <div className={`${montserrat.className} flex flex-col justify-start text-[.9rem] md:text-[.8rem] text-start items-start`}>
            <p>{dl1} <br className="sm:block hidden" /> {dl2}</p>
          </div>
        </div>
      </div>

      

    </div>
  );
};

export default ResourcesCard;
