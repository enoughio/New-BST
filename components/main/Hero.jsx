import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <main className="h-screen max-w-[100vw]  relative pt-17  px-6   font-space-grotesk">
      <header className="text-5xl lg:text-6xl font-bold md:w-full ">
        <h1>We help you become everyone's favorite speaker!</h1>
      </header>

      <section >


        <div className="absolute top-[50vh] left-25 w-1/6 text-sm leading-tight">
          <p>
            Discover the art of storytelling, public speaking and communication
            with Bharat Storytellers. Gain confidence, refine your skills, and
            shine on stage!
          </p>
        </div>

        <div className="absolute md:bottom-0 md:right-0 ">
          <Image
            src={"/home/herolg.png"}
            alt="Many young people moaving towards a goal representing community growth"
            width={1100}
            height={650}
            priority
            className=" w-[1000px] h-[680px] object-fill"
          />
        </div>
      </section>

      <div className="w-[50%]  flex gap-6 p-2 text-white absolute -bottom-18 right-[22%]  ">
        <button className="max-w-[350px] w-[270px] rounded-xl bg-[var(--forground)] py-3.5">Explore Programs </button>
        <button className="max-w-[350px] w-[270px] rounded-xl bg-[var(--primary)] py-3.5">Become a Member</button>
      </div>
    </main>
  );
};

export default Hero;
