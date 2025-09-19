import React from 'react';
import Image from 'next/image';

const BottomCTA = () => {
  return (
    <section className="flex flex-col md:flex-row justify-start items-start gap-8 w-full px-6 max-w-6xl mx-auto ">
      {/* Left Card */}
      <div className="h-[90%]  bg-[var(--primary)] rounded-[40px] w-full shadow-lg p-8 flex flex-col justify-between relative  min-w-[50%]">
        <div>
          <h2 className="text-white text-2xl md:text-3xl font-bold mb-6 leading-tight">Visit Bharat Storytellers and<br />Become a member today!</h2>
          <button className="border-2 border-white rounded-full px-8 py-3 text-white text-lg font-bold mb-4 hover:bg-white hover:text-[var(--primary)] transition-colors">START YOUR JOURNEY</button>
          <div className="text-white text-base mt-2">Be a part of our club</div>
        </div>
      </div>

      {/* Right Card */}
      <div className="flex-1 bg-[#D73037] rounded-[40px] shadow-lg p-8 w-full flex flex-col justify-between relative min-h-[300px]">
        <div className="flex justify-center items-center mb-6  w-[300px] h-[270px] overflow-hidden">
          <Image
            src="/home/gd.png"
            alt="Find a club illustration"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="text-white text-2xl md:text-3xl font-bold mb-2">Find a club</h2>
          <div className="text-white text-base">Nearest to you within seconds!</div>
        </div>
      </div>
    </section>
  );
};

export default BottomCTA;