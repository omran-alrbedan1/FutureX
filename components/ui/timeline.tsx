"use client";
import { motion, useScroll, useTransform, useMotionValue } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const dotPositions = useRef<number[]>([]);
  const currentHeight = useMotionValue(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);

      const dots = ref.current.querySelectorAll(".timeline-dot");
      dotPositions.current = Array.from(dots).map((dot) => {
        const dotRect = dot.getBoundingClientRect();
        return dotRect.top - rect.top;
      });
    }
  }, [ref, data]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 20%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  useEffect(() => {
    return heightTransform.onChange((value) => {
      currentHeight.set(value);
    });
  }, [heightTransform, currentHeight]);

  return (
    <div
      className="w-full bg-white dark:bg-neutral-950 font-sans"
      ref={containerRef}
    >
      <div ref={ref} className="relative max-w-5xl mx-auto pb-10">
        {data.map((item, index) => {
          const isActive = useTransform(
            currentHeight,
            (h) => h >= (dotPositions.current[index] || 0)
          );

          return (
            <div key={index} className="flex flex-col pt-10 pl-12 relative">
              <motion.div
                className="timeline-dot absolute left-0 top-14 h-6 w-6 rounded-full bg-white dark:bg-black flex items-center justify-center z-10 border-2 border-neutral-200 dark:border-neutral-700"
                style={{
                  borderColor: useTransform(isActive, (active) =>
                    active ? "#2e6399" : "#e5e7eb"
                  ),
                }}
              >
                <motion.div
                  className="h-2 w-2 rounded-full"
                  style={{
                    backgroundColor: useTransform(isActive, (active) =>
                      active ? "#2e6399" : "#9ca3af"
                    ),
                  }}
                />
              </motion.div>

              {/* Title */}
              <h3 className="text-lg md:text-xl font-semibold text-neutral-700 dark:text-neutral-300 mb-4">
                {item.title}
              </h3>

              <div className="pl-2">
                <div className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {item.content}
                </div>
              </div>
            </div>
          );
        })}

        <div
          style={{ height: `${height}px` }}
          className="absolute left-3 top-0 w-[2px] bg-gradient-to-b from-transparent via-neutral-200 dark:via-neutral-700 to-transparent"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-primary-color1 to-purple-500 rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
