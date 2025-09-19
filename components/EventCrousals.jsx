import React from 'react'
import Image from "next/image";

const EventCrousals = () => {
  return (
        <section className="border w-[90%] mx-auto my-4 rounded-3xl overflow-hidden">
          <div className="relative  mx-auto  overflow-hidden">
            {/* Background image */}
            <div className="relative h-[55vh] md:h-[65vh] lg:h-[60vh]">
              <Image
                src="/r3.png"
                alt="Event hero"
                fill
                className="object-cover"
                priority
              />
              {/* Dark gradient overlay for legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

              {/* Top badge */}
              <div className="absolute top-6 left-6">
                <span className="inline-block bg-white/90 text-gray-900 text-sm md:text-base font-medium px-4 py-2 rounded-xl">
                  Upcoming Event
                </span>
              </div>



              {/* Bottom content */}
              <div className="absolute inset-x-0 bottom-6 px-6 md:px-10">
                {/* Info pill */}
                <div className="inline-flex items-center gap-6  backdrop-blur-3xl text-white  px-4 py-2 rounded-full shadow-md">
                  <div className="flex items-center gap-2 text-[.8rem] ">
                    <span className="inline-block w-3 h-3 rounded bg-gray-900"></span>
                    <span>24 Jan 2024</span>
                  </div>
                  
                  <div className="w-px h-5 bg-gray-300 hidden sm:block"></div>
                  <div className="flex items-center gap-2 text-[.8rem] ">
                    <span className="inline-block w-3 h-3 rounded bg-gray-900"></span>
                    <span>10:00AM - 2:00PM</span>
                  </div>
                </div>

                {/* Title */}
                <h2 className="mt-4 text-white font-semibold text-3xl sm:text-4xl leading-tight">
                  Annual Storytelling Conference 2023
                </h2>

                {/* Location */}
                <div className="mt-3 flex items-center gap-3 text-white text-lg">
                  <span className="inline-block w-6 h-6 rounded-full bg-white/90"></span>
                  <span>Grand Hotel Chennai</span>
                </div>
              </div>
            </div>
          </div>
        </section>
  )
}

export default EventCrousals