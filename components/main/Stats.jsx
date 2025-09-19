import React from 'react';

const statsData = [
  {
    value: '200+',
    label: 'Happy Members',
  },
  {
    value: '90+',
    label: 'Successful Meetings',
  },
  {
    value: '8+',
    label: 'Years of Experience',
  },
];

const Stats = () => {
  return (
    <section className="bg-[var(--primary)] rounded-[48px] py-10 px-4 md:px-10 flex flex-row justify-between items-center w-full max-w-[85%] mx-auto shadow-lg relative">
      {statsData.map((stat, idx) => (
        <div key={stat.value} className="flex-1 flex flex-col items-center justify-center relative">
          {/* Top sparkle */}
          <span className="absolute -top-6 left-1/2 -translate-x-1/2">
            <Sparkle />
          </span>
          {/* Stat value */}
          <span className="text-white text-[56px] md:text-[64px] font-bold tracking-tight drop-shadow-lg" style={{ WebkitTextStroke: '2px #fff', color: '#D73037' }}>
            {stat.value}
          </span>
          {/* Stat label */}
          <span className="text-white text-lg md:text-xl font-medium mt-2 text-center">
            {stat.label}
          </span>
          {/* Bottom sparkle */}
          <span className="absolute -bottom-6 left-1/2 -translate-x-1/2">
            <Sparkle />
          </span>
          {/* Divider */}
          {idx < statsData.length - 1 && (
            <span className="absolute top-0 right-0 h-full w-px bg-white opacity-40 flex flex-col justify-between items-center">
              <span className="mt-8"><Sparkle /></span>
              <span className="flex-1" />
              <span className="mb-8"><Sparkle /></span>
            </span>
          )}
        </div>
      ))}
    </section>
  );
};

function Sparkle() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L13.09 8.26L19 9.27L14.5 13.14L15.82 19.02L12 15.77L8.18 19.02L9.5 13.14L5 9.27L10.91 8.26L12 2Z" fill="white"/>
    </svg>
  );
}

export default Stats;