"use client";
import Image from "next/image";
import React, { useEffect, useMemo, useRef, useState } from "react";

/**
 * StackedCarousel — auto-playing stacked/fading carousel with optional prev/next controls.
 *
 * Renders a layered stack of slides where the top card fades/up-animates to reveal the next.
 * Autoplays every `intervalMs` milliseconds and pauses while the mouse is over the component.
 * If `slides` is empty or not provided, a built-in set of three default slides is used.
 *
 * @param {Object[]} slides - Array of slide objects with shape { image: string, title?: string, date?: string, time?: string, location?: string, badge?: string }.
 * @param {string} [heightClass="h-[55vh] md:h-[65vh] lg:h-[75vh]"] - Tailwind height utility classes applied to the carousel area.
 * @param {number} [intervalMs=4000] - Autoplay interval in milliseconds.
 * @returns {JSX.Element} The rendered carousel component.
 */
export default function StackedCarousel({
  slides,
  heightClass = "h-[55vh] md:h-[65vh] lg:h-[75vh]",
  intervalMs = 4000,
}) {
  const defaultSlides = useMemo(
    () => [
      {
        image: "/contactimg.png",
        title: "Annual Storytelling Conference 2025",
        date: "24 Jan 2025",
        time: "10:00AM - 2:00PM",
        location: "Grand Hotel Chennai",
        badge: "Upcoming Event",
      },
      {
        image: "/contactimg.png",
        title: "Fireside: Narrative Design",
        date: "12 Feb 2025",
        time: "6:00PM - 8:00PM",
        location: "Bangalore Auditorium",
        badge: "Featured",
      },
      {
        image: "/contactimg.png",
        title: "Workshop: Voice & Presence",
        date: "03 Mar 2025",
        time: "9:00AM - 12:00PM",
        location: "Delhi Convention Center",
        badge: "Workshop",
      },
    ],
    []
  );

  const data = slides?.length ? slides : defaultSlides;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [leaving, setLeaving] = useState(null); // index that's animating out
  const [hiddenIdx, setHiddenIdx] = useState(null); // keep previous slide hidden for one cycle
  const lastIndexRef = useRef(0);
  const transitionMs = 700;

  // autoplay
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % data.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [data.length, intervalMs, paused]);

  // Track leaving slide for upward vanish animation
  useEffect(() => {
    const prev = lastIndexRef.current;
    if (prev !== index) {
      setLeaving(prev);
      setHiddenIdx(prev);
      const t1 = setTimeout(() => setLeaving(null), transitionMs);
      // keep previous slide hidden roughly until next tick
      const safeDelay = Math.max(transitionMs + 50, Math.min(intervalMs - 50, intervalMs));
      const t2 = setTimeout(() => setHiddenIdx(null), safeDelay);
      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
      };
    }
  }, [index, intervalMs]);

  useEffect(() => {
    lastIndexRef.current = index;
  }, [index]);

  const go = (dir) => {
    setIndex((i) => {
      if (dir === "prev") return (i - 1 + data.length) % data.length;
      return (i + 1) % data.length;
    });
  };

  return (
    <div
      className="relative w-[96%] mx-auto mt-6 rounded-3xl"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className={`relative ${heightClass} rounded-3xl overflow-hidden`}>
        {/* Slides stacked */}
        {data.map((s, i) => {
          if (i === hiddenIdx) {
            return null; // don't render the previous top slide in the stack for one cycle
          }
          const dist = (i - index + data.length) % data.length; // 0 active, 1 next, 2 nextNext
          // map distance -> styles
          let z = 0,
            scale = "scale-100",
            translate = "translate-y-0",
            opacity = "opacity-0",
            pointer = "pointer-events-none";

          if (i === leaving) {
            // The slide that was on top now animates upward and fades out
            z = 40;
            scale = "scale-[1.02]";
            translate = "-translate-y-8 md:-translate-y-10";
            opacity = "opacity-0";
          } else if (dist === 0) {
            z = 30;
            scale = "scale-100";
            translate = "translate-y-0";
            opacity = "opacity-100";
            pointer = "pointer-events-auto";
          } else if (dist === 1) {
            z = 20;
            scale = "scale-[0.96]";
            translate = "translate-y-4 md:translate-y-6";
            opacity = "opacity-80";
          } else if (dist === 2) {
            z = 10;
            scale = "scale-[0.92]";
            translate = "translate-y-8 md:translate-y-12";
            opacity = "opacity-60";
          }

          return (
            <div
              key={i}
              className={`absolute inset-0 ${opacity} ${scale} ${translate} ${pointer} ${i === leaving || dist === 0 ? "transition-all duration-700 ease-out" : "transition-none"} will-change-transform will-change-opacity`}
              style={{ zIndex: z }}
            >
              <Image src={s.image} alt={s.title || "Event slide"} fill className="object-cover" priority={i === index} />
              {/* Overlay for legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

              {/* Top-left badge */}
              {s.badge && (
                <div className="absolute top-5 left-5">
                  <span className="inline-block bg-white/90 text-gray-900 text-xs sm:text-sm md:text-base font-medium px-3 py-1.5 rounded-xl">
                    {s.badge}
                  </span>
                </div>
              )}

              {/* Bottom content */}
              <div className="absolute inset-x-0 bottom-6 px-5 md:px-8">
                {/* Info pill */}
                {(s.date || s.time) && (
                  <div className="inline-flex items-center gap-6 bg-white/90 text-gray-900 backdrop-blur px-4 md:px-6 py-2.5 rounded-full shadow-md">
                    {s.date && (
                      <div className="flex items-center gap-2 text-xs sm:text-sm md:text-base">
                        <span className="inline-block w-4 h-4 rounded bg-gray-900" />
                        <span>{s.date}</span>
                      </div>
                    )}
                    {s.time && (
                      <>
                        <div className="w-px h-4 bg-gray-300 hidden sm:block" />
                        <div className="flex items-center gap-2 text-xs sm:text-sm md:text-base">
                          <span className="inline-block w-4 h-4 rounded bg-gray-900" />
                          <span>{s.time}</span>
                        </div>
                      </>
                    )}
                  </div>
                )}

                {/* Title */}
                {s.title && (
                  <h3 className="mt-3 text-white font-bold text-2xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
                    {s.title}
                  </h3>
                )}

                {/* Location */}
                {s.location && (
                  <div className="mt-2 flex items-center gap-3 text-white text-base md:text-xl">
                    <span className="inline-block w-5 h-5 rounded-full bg-white/90" />
                    <span>{s.location}</span>
                  </div>
                )}
              </div>
            </div>
          );
        })}

        {/* Controls */}
        <button
          aria-label="Previous"
          onClick={() => go("prev")}
          className="absolute left-4 top-1/2 -translate-y-1/2 size-11 md:size-12 bg-white/80 hover:bg-white text-gray-900 rounded-full grid place-items-center shadow-md"
        >
          <span className="-ml-0.5 text-xl">←</span>
        </button>
        <button
          aria-label="Next"
          onClick={() => go("next")}
          className="absolute right-4 top-1/2 -translate-y-1/2 size-11 md:size-12 bg-white/80 hover:bg-white text-gray-900 rounded-full grid place-items-center shadow-md"
        >
          <span className="ml-0.5 text-xl">→</span>
        </button>
      </div>
    </div>
  );
}
