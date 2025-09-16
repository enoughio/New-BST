import ResourcesCard from "@/components/ResourcesCard";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div>
      <nav className="w-full h-[8vh]  bg-blue-300 text-center">This is Nav</nav>
      <main className="w-full h-full px-2 text-center md:px-30 ">
        
        <header className="max-w-[94%] ml-8 font-space-grotesk flex flex-col justify-start items-start ">

          <div className="flex justify-center items-center gap-4">
            <Image
              src={"/resourcesicon.png"}
              alt="Resources Icon"
              width={40}
              height={40}
              className="mr-auto"
            />
            <h1 className=" text-5xl font-bold ">Resources</h1>
          </div>

          <p className="m-0 p-0 text-sm leading-none text-start">
            Explore our resources to help you improve your communication skills
            and become a better storyteller
          </p>
        </header>

        <section className="w-full h-auto flex flex-col justify-start items-center gap-6 py-10 ">
            <ResourcesCard img='/r1.png' title={'Podcast'} dl1={'Live Expert Session at'} dl2={'Bharat Storytellers'} />
            <ResourcesCard img='/r2.png' title={'Learning'} dl1={'Learning Resources to improve '} dl2={'your communication skill'}/>
            <ResourcesCard img='/r3.png' title={'Notes, PDF'} dl1={'Notes and Resources to'} dl2={'Help you prepare for your speech'}/>
        </section>

      </main>
    </div>
  );
};

export default page;
