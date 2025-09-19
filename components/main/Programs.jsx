import Image from "next/image";
import React from "react";

const Programs = () => {
  return (
    <div className="md:px-10 md:pt-5 h-auto min-h-screen  font-space-grotesk">
      <header className="w-[90%] mx-auto flex md:flex-row flex-col px-4 justify-start md:justify-center items-center md:gap-10 ">
        <div className="w-full ">
          <h1 className="text-5xl md:text-6xl font-bold mb-10">Our</h1>
          <h1 className="text-5xl md:text-6xl font-bold  -mt-10 text-nowrap">
            Programs
          </h1>
        </div>

        <p className="w-full md:max-w-[75%] leading-tight text-md font-medium">
          We don’t just teach public speaking — we transform speakers. With
          proven methods, supportive coaches, and a community that celebrates
          every step, we help you gain skills that last a lifetime.
        </p>
      </header>

      <section className="Programs  w-[90%]  mx-auto p-2 md:p-8">
        <div className="layout-container p-5 gap-5 w-[90%]">
          <div className="green rounded-2xl p-2 md:p-5 border-2 bg-white border-[var(--primary)] relative border-b-8 border-r-8  h-[220px] md:h-[270px] bg-[url('/home/g1.png')] bg-no-repeat bg-right-bottom bg-[length:200px_150px] md:bg-[length:250px_250px] ">
            <h1 className="text-2xl font-bold">Young <br /> Orators</h1>
          </div>

          <div className="red rounded-2xl p-2 md:p-7 border-2 bg-white border-[var(--secondary)] relative border-b-8 border-r-8 h-[220px] md:h-[270px] bg-[url('/home/g2.png')] bg-no-repeat bg-right-bottom bg-[length:400px_150px] md:bg-[length:500px_250px]">
             <h1 className="text-2xl font-bold">Storytellers <br /> Club</h1>
          </div>

          <div className="purple rounded-2xl p-2 md:p-5 border-2 bg-white border-[var(--secondary)]  relative border-b-8 border-r-8 h-[220px] md:h-[270px] bg-[url('/home/g4.png')] bg-no-repeat bg-right-bottom bg-[length:200px_150px] md:bg-[length:250px_250px] ">
            <h1 className="text-2xl font-bold">Young Leaders</h1>
          </div>

          <div className="brown rounded-2xl p-2 md:p-7 border-2 bg-white border-[var(--primary)] relative border-b-8 border-r-8  h-[220px] md:h-[270px] bg-[url('/home/g3.png')] bg-no-repeat bg-right-bottom bg-[length:400px_150px] md:bg-[length:500px_250px]">
             <h1 className="text-2xl font-bold"> workshops </h1>

          </div>
        
        </div>
      </section>
    </div>
  );
};

export default Programs;
