import ContactForm from "@/components/ContactForm";
import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <div className="bg-[#f2f2f2] max-w-screen text-black section">
  
      <section className="md:mx-[5rem] my-4 ">
        <header>
          <div className="flex justify-center items-center font-space-grotesk gap-4 ">
            <h1 className="font-medium text-4xl">Contact Us</h1>
            <Image src={"/contacICON.png"} alt="" width={40} height={40} />
          </div>
        </header>

        <main className="flex mt-8  flex-col md:flex-row justify-center items-center h-full w-full">
          {/*mobile image */}
          <div className=" flex md:hidden w-full md:max-w-[70vw] max-h-[53vh] md:h-[44vw] md:w-[35vw]  ">
            <img
              src={"/contactimage.png"}
              alt="Contact Image"
              // width={450}
              // height={720}
              // fill
              className="object-contain"
            />
          </div>

          {/* form */}
          <div className="relative  p-8 rounded-[2rem] shadow-xl  bg-[#F7F7F7]  border border-r-8 border-b-8 min-h-fit sm:max-w-[70vw] md:h-[40vw] md:w-[33vw]">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              GET IN TOUCH
            </h2>
            <p className="text-gray-600 mb-6 text-[.9rem] leading-5">
              Reach out with inquiries about tickets, partnerships, or event
              details.
            </p>

            <ContactForm />

          </div>

          {/* desktop contactimage */}
          <div className=" hidden md:flex max-w-[60vw] max-h-[60vh] md:h-[44vw] md:w-[35vw]  ">
            <img
              src={"/contactimage.png"}
              alt="Contact Image"
              // width={450}
              // height={720}
              // fill
              className="object-contain"
            />
          </div>
        </main>

        {/* contact details */}
        <div className="md:px-12 py-5  md:w-full flex flex-col md:flex-row  justify-center md:justify-between items-center ">
          <div className="w-[70%] font-syne md:w-[30%]  py-4  flex flex-col gap-4">
            <div className="">
              <h1 className=" font-bold text-2xl">Phone</h1>
              <p>+91 8871317382</p>
            </div>

            <div className=" ">
              <h1 className="font-bold text-2xl">Email</h1>
              <p>info@bharatstorytellers.com</p>
            </div>
          </div>

          <div className="w-[70%] md:w-[60%] py-4 font-syne ">
            <h1 className="font-bold text-2xl pb-2">Address</h1>
            <p className="leading-5 pr-2 text-sm">
              First Floor, Bharat Storytellers, B-66, near Chetak Bridge, Near
              Chetak Bridge, Chetak Bridge, Housing Board Colony, Kasturba
              Nagar, Bhopal, Madhya Pradesh 462022
            </p>
          </div>
        </div>
      </section>
      <footer className="w-full h-[40vh]  bg-red-400 rounded-t-2xl"></footer>
    </div>
  );
};

export default Contact;
