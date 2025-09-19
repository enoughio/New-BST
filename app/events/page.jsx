
import EventCrousals from "@/components/EventCrousals";
import Image from "next/image";


const events = () => {
  return (      
      <main className="bg-gray-500  min-h-screen max-w-screen">
        
        <div className="flex justify-start items-center bg-red-300 ">

          <Image
            src="/eventicon.png"
            alt="events icon"
            width={40}
            height={40}
            className="w-[40px] h-[40px] object-cover"
          />
          <h1 className="font-bold text-5xl mb-1">Events</h1>
        </div>

        <EventCrousals />

      </main>

  );
};

export default events;
