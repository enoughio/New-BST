import Image from "next/image";
import React from "react";

const WhyChosoeUs = () => {
  return (
    <div className="md:px-20 md:pt-5  h-auto  font-space-grotesk">
      <header className="flex md:flex-row flex-col px-4 justify-start md:justify-center items-center md:gap-10 ">
        <div className="w-full ">
          <h1 className="text-5xl md:text-6xl font-bold mb-10">Why</h1>
          <h1 className="text-5xl md:text-6xl font-bold  -mt-10 text-nowrap">
            Choose Us?
          </h1>
        </div>

        <p className="w-full md:max-w-[64%] leading-tight font-medium">
          We don’t just teach public speaking — we transform speakers. With
          proven methods, supportive coaches, and a community that celebrates
          every step, we help you gain skills that last a lifetime.
        </p>
      </header>

      <div className="lg:w-full md:h-[70vh] grid-container gap-4 p-2 md:p-5 font-syne text-white">
        <div className="box1 rounded-4xl max-h-[270px] lg:rounded-[70px] py-6  md:py-9 overflow-hidden flex flex-col justify-center items-center gap-4  border-black border-b-10 border-r-10">
          <h1 className="text-[1.3rem] sm:text-[1.7rem] md:text-[2rem] leading-none font-bold px-5 md:px-7">
            Personalized Growth Path
          </h1>
          <div className="flex justify-start items-center ">
            <Image
              src={"/home/rings.png"}
              alt="rings"
              width={100}
              height={100}
              className="-translate-x-5 w-[150px] object-contain h-[80px]"
            />
            <p className="text-[.8rem] md:text-[1rem] leading-tight pr-5">
              Get tailored feedback, progress tracking, and guidance so you can
              overcome challenges and grow at your own pace.
            </p>
          </div>
        </div>

        <div className="box2 rounded-[50px] relative flex py-4 md:py-5 px-  md:px-2 lg:py-7 justify-center items-center gap-6 border-[var(--secondary)] border-b-10 border-r-10 ">
          <div className="flex flex-col justify-center items-center md:gap-3 w-[87%] overflow-hidden text-black ">
            <h1 className="text-[1.7rem] lg:text-[2rem] leading-none font-bold w-full">
              Practice That Feels Real
            </h1>

            <div className="flex  justify-center items-center">
              <p className="text-[.8rem] md:text-[1rem]  leading-tight max-w-[85%]">
                Build confidence through real-world simulations, live audiences,
                and interactive workshops designed to make you stage-ready.
              </p>
              <Image
                src={"/home/practice.png"}
                alt="practice"
                width={100}
                height={100}
                className="object-contain w-[70px] md:w-[90px] lg:w-[110px] h-[120px]"
              />
            </div>
          </div>
        </div>

        <div className="box3  rounded-[60px]  border-black border-b-10 border-r-10 p-7 ">
          <div className="">
            <div>
              <h1 className="text-[1.7rem] md:text-[2rem]  lg:text-[2.5rem] leading-none font-bold w-full">
                Exper Mentors Who Care
              </h1>
              <div className="flex justify-center items-start py-3 gap-2">
                <div className="h-16 w-16 bg-[var(--primary)] flex justify-center items-center rounded-full mt-3 mb-5 ">
                  <Image
                    src={"/home/arrow.png"}
                    alt="mentor"
                    width={14}
                    height={14}
                    className="object-cover w-8 h-8 rounded-full"
                  />
                </div>
                <p className="w-[76%] max-h-[40%] text-sm pt-3">
                  Learn from seasoned speakers and coaches who have guided
                  hundreds of individuals to find their authentic voice.
                </p>
              </div>
            </div>

            <div className="flex justify-around items-center mt-2 gap-2">
              <div>
                <h1 className="text-xl">And More</h1>
                <div className="flex ">
                  <Image
                    src={"/r2.png"}
                    alt="r2"
                    width={100}
                    height={100}
                    className="object-contain w-10 h-10 border-2 border-black rounded-full"
                  />
                  <Image
                    src={"/r2.png"}
                    alt="r2"
                    width={100}
                    height={100}
                    className="object-contain w-10 h-10 border-2 border-black -translate-x-5 rounded-full"
                  />
                  <Image
                    src={"/r2.png"}
                    alt="r2"
                    width={100}
                    height={100}
                    className="object-contain w-10 h-10 border-2 border-black -translate-x-10 rounded-full"
                  />
                  <Image
                    src={"/r2.png"}
                    alt="r2"
                    width={100}
                    height={100}
                    className="object-contain w-10 h-10 border-2 border-black -translate-x-15 rounded-full"
                  />
                </div>
              </div>
              <div>
                <Image
                  src={"/home/more.png"}
                  alt="more"
                  width={100}
                  height={100}
                  className="object-contain w-[70px] md:w-[90px] lg:w-[110px] h-[120px]"
                />
              </div>
            </div>
          </div>

          <div></div>
        </div>
      </div>
    </div>
  );
};

export default WhyChosoeUs;
