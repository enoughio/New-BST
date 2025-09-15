import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <div className="bg-[#f2f2f2] text-black ">
      <nav className="w-screen h-[10vh] bg-blue-300 text-center">
        This is Nav
      </nav>

      {/* rr */}
      <section className="mx-[5rem] mt-4 ">
        <header>
          <div className="flex justify-center items-center font-space-grotesk gap-4 ">
            <h1 className="font-medium text-4xl">Contact Us</h1>
            <Image src={"/contacICON.png"} alt="" width={40} height={40} />
          </div>
        </header>

        <main className="flex mt-4 flex-col md:flex-row justify-center items-center h-full">

          <div class="relative  p-8 rounded-[2rem] shadow-xl max-w-md   bg-[#F7F7F7]  border md:h-[40vw] md:w-[33vw]">
              <h2 class="text-xl font-semibold text-gray-900 mb-2">GET IN TOUCH</h2>
            <p class="text-gray-600 mb-6 text-[.9rem] leading-5">
              Reach out with inquiries about tickets, partnerships, or event
              details.
            </p>

            <form class="flex flex-col gap-8">
              <div className="space-y-3">

              <input
                type="text"
                placeholder="Name"
                class="w-full border-b border-gray-400 focus:outline-none focus:border-black py-1 bg-transparent placeholder-gray-400"
                />
              <input
                type="email"
                placeholder="Email"
                class="w-full border-b border-gray-400 focus:outline-none focus:border-black py-1 bg-transparent placeholder-gray-400"
                />
              <input
                type="text"
                placeholder="Subject"
                class="w-full border-b border-gray-400 focus:outline-none focus:border-black py-1 bg-transparent placeholder-gray-400"
              />
                </div>
              <textarea
                placeholder="Message"
                rows="1"
                class="w-full border-b border-gray-400 focus:outline-none focus:border-black py-1 bg-transparent placeholder-gray-400 resize-none"
                ></textarea>

              <button
                type="submit"
                class=" bg-blue-900 text-white font-medium rounded-full px-6 py-3 w-fit hover:bg-blue-800 transition"
              >
                Send message
              </button>
            </form>
          </div>

          <div className=" max-w-[60vw] max-h-[60vh] md:h-[44vw] md:w-[35vw]  ">
            <img
              src={"/image.png"}
              alt="Contact Image"
              // width={450}
              // height={720}
              // fill
              className="object-cover"
            />
          </div>


        </main>
      </section>
    </div>
  );
};

export default Contact;
