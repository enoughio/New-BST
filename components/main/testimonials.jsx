"use client";

import React, { useState } from "react";

const testimonialData = [
  {
    text: `”I am in to leadership roles since 2010 in my professional life and somehow i was not been able to communicate in a precise way with my team, With BST i had learned to deliver my s speech in a stipulated time and keep my audience interested in listening to me.”`,
    name: "Piyush kacchi",
    title: "Seasoned Banker",
  },
  // Add more testimonials as needed
  {
    text: `”I always searched for a stage to learn and I found it with Bharat Storytellers. Here I got the people who encourages me and give their feedback so that I can improve myself. I know I am still not perfect but I can tell that I am a better speaker today.”`,
    name: "Vasanthi Rayapati",
    title: "Student at MANIT",
  },
  {
    text: `”
Joining Bharat Storytellers transformed my public speaking. The supportive environment refined my storytelling, making workshops engaging. I now master gestures, pauses, and impactful delivery!”`,
    name: "Utkrishti Katheriya",
    title: "Counselling Psychologist",
  },
];

const Testimonials = () => {
  const [active, setActive] = useState(1);

  const handlePrev = () => {
    setActive((prev) => (prev === 0 ? testimonialData.length - 1 : prev - 1));
  };
  const handleNext = () => {
    setActive((prev) => (prev === testimonialData.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="md:px-15  h-auto max-h-screen  font-space-grotesk my-10">
      <header className="w-[90%] mx-auto flex md:flex-row flex-col px-4 justify-start md:justify-center items-center md:gap-10 ">
        <div className="w-full ">
          <h1 className="text-5xl md:text-7xl font-bold mb-10">
            Testimonials
          </h1>
        </div>

        <p className="w-full md:max-w-[75%] leading-tight text-sm font-medium">
          We don’t just teach public speaking — we transform speakers. With
          proven methods, supportive coaches, and a community that celebrates
          every step, we help you gain skills that last a lifetime.
        </p>
      </header>

      <section className="bg-[#191A23] rounded-[48px]  py-12 px-4 md:px-16 flex flex-col items-center justify-center w-[90%] mx-auto">
        <div className="flex flex-row gap-8 w-full justify-center items-center overflow-hidden">
          {/* Previous card (hidden on mobile) */}
          <div className="hidden md:flex flex-1 justify-end">
            <TestimonialCard
              testimonial={
                testimonialData[
                  active === 0 ? testimonialData.length - 1 : active - 1
                ]
              }
            />
          </div>
          {/* Active card */}
          <div className="flex-1 max-w-xl">
            <TestimonialCard testimonial={testimonialData[active]} active />
          </div>
          {/* Next card (hidden on mobile) */}
          <div className="hidden md:flex flex-1 justify-start">
            <TestimonialCard
              testimonial={
                testimonialData[(active + 1) % testimonialData.length]
              }
            />
          </div>
        </div>

        {/* Navigation & Dots */}
        <div className="flex items-center justify-center gap-8 mt-10 w-full">
          <button
            aria-label="Previous"
            onClick={handlePrev}
            className="text-3xl text-[#6B6C7B] hover:text-[#D73037] transition-colors"
          >
            &#8592;
          </button>
          <div className="flex gap-2">
            {testimonialData.map((_, idx) => (
              <span
                key={idx}
                className={`w-4 h-4 rounded-full border border-[#D73037] flex items-center justify-center ${
                  active === idx ? "bg-[#D73037]" : "bg-[#191A23]"
                }`}
              >
                <span
                  className="w-2 h-2 rounded-full bg-white block"
                  style={{ opacity: active === idx ? 1 : 0 }}
                ></span>
              </span>
            ))}
          </div>
          <button
            aria-label="Next"
            onClick={handleNext}
            className="text-3xl text-[#6B6C7B] hover:text-[#D73037] transition-colors"
          >
            &#8594;
          </button>
        </div>
      </section>
    </div>
  );
};

function TestimonialCard({ testimonial, active }) {
  if (!testimonial) return null;
  return (
    <div
      className={`border border-[#D73037] rounded-[48px] bg-transparent p-8 text-white relative min-h-[220px] flex flex-col justify-between ${
        active ? "" : "opacity-60 scale-95"
      }`}
      style={{ boxSizing: "border-box" }}
    >
      <p className="text-base md:text-lg font-medium mb-8">
        {testimonial.text}
      </p>
      <div>
        <span className="text-[#D73037] font-semibold text-lg">
          {testimonial.name}
        </span>
        <div className="text-[#E4E5EA] text-base">{testimonial.title}</div>
      </div>
      {/* Speech bubble arrow */}
      <span className="absolute left-1/2 -bottom-6 -translate-x-1/2 w-8 h-8 bg-transparent">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 0C24.8366 0 32 7.16344 32 16H0C0 7.16344 7.16344 0 16 0Z"
            fill="#191A23"
            stroke="#D73037"
            strokeWidth="2"
          />
        </svg>
      </span>
    </div>
  );
}

export default Testimonials;
