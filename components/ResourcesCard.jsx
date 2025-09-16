import Image from "next/image";
import React from "react";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

const ResourcesCard = ({
  img, title, dl1, dl2
}) => {
  return (
    <div className="w-full sm:w-[94%] rounded-2xl bg-[#F7F7F7] flex flex-col justify-center items-center sm:flex-row border border-b-4">
      <div className="w-full h-[200px] sm:w-2/3 sm:h-[45vh] relative ">
        <Image
          src={img}
          alt="Resources Image"
          fill
          className="object-contain rounded-t-2xl md:rounded-l-2xl md:rounded-t-none"
        />
      </div>
      <div className="w-full sm:w-1/3 h-auto flex justify-center items-center">
        <div className="flex flex-col gap-2 justify-start items-start mb-10">
          <h1 className="text-[2rem] md:text-[2.5rem] font-bold">{title}</h1>
          <div className={`${montserrat.className} flex flex-col justify-start text-[.9rem] md:text-[.8rem] text-start items-start`}>
            <p>{dl1} <br className="sm:block hidden" /> {dl2}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcesCard;
