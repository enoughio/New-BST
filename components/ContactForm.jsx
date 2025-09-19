import React from 'react'

const ContactForm = () => {
  return (
                <form className="flex flex-col gap-8 ">
              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full border-b border-black focus:outline-none focus:border-black py-1 bg-transparent placeholder-gray-600"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full border-b border-black focus:outline-none focus:border-black py-1 bg-transparent placeholder-gray-600"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full border-b border-black focus:outline-none focus:border-black py-1 bg-transparent placeholder-gray-600"
                />
              </div>
              <textarea
                placeholder="Message"
                rows="1"
                className="w-full border-b border-black focus:outline-none focus:border-black py-1 bg-transparent placeholder-gray-600 resize-none"
              ></textarea>

              <button
                type="submit"
                className=" bg-blue-900 text-white font-medium rounded-full px-6 py-3 w-fit hover:bg-blue-800 transition"
              >
                Send message
              </button>
            </form>
  )
}

export default ContactForm