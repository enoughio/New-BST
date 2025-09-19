import React from "react";
import Image from "next/image";

const HeroContact = () => {
  return (
    <div className="px-25">
      <section className="w-full px-4 py-4 md:px-10  md:py-10 max-h-[60vh]">
        <h1 className="text-5xl md:text-6xl font-bold mb-8 ">Contact Us</h1>
        <div className="bg-[#f5f5f5] rounded-[48px] flex flex-col md:flex-row items-center justify-between p-8 md:p-16 gap-8">
          {/* Contact Form */}
          <form className="flex-1 flex flex-col gap-6 max-w-xl w-full max-h-[60%]">
            <div>
              <label
                htmlFor="name"
                className="block text-base font-medium mb-2"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Name"
                className="w-full border border-black rounded-lg px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-[var(--primary)] bg-white"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-base font-medium mb-2"
              >
                Email*
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                className="w-full border border-black rounded-lg px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-[var(--primary)] bg-white"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-base font-medium mb-2"
              >
                Message*
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Message"
                className="w-full border border-black rounded-lg px-4 py-3 text-base h-32 resize-none focus:outline-none focus:ring-2 focus:ring-[var(--primary)] bg-white"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#191A23] text-white rounded-lg py-4 text-lg font-medium mt-2 hover:bg-[var(--primary)] transition-colors"
            >
              Send Message
            </button>
          </form>

          {/* Illustration */}
          <div className="flex-1 flex items-center justify-center relative min-h-[300px] h-full w-1/2 overflow-hidden">
            <Image
              src="/home/contact.png"
              alt="Contact illustration"
              width={350}
              height={350}
              className="object-cover w-[300px] h-[300px] md:w-[500px] md:h-[500px] translate-x-[50%] "
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroContact;
