"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Slider from "./Slider";

const Hero = () => {
  const sliders = [
    {
      backgroundImage: "/images/hero1.jpg",
    },
    {
      backgroundImage: "/images/hero2.jpg",
    },
    {
      backgroundImage: "/images/hero3.jpg",
    },

    {
      backgroundImage: "/images/hero4.jpg",
    },
    {
      backgroundImage: "/images/hero5.jpg",
    },
    {
      backgroundImage: "/images/hero6.jpg",
    },
  ];

  return (
    <div className="relative mx-auto my-10 flex w-full flex-col items-center justify-center min-h-[90vh] mb-24">
      <Slider sliders={sliders} />

      {/* Content */}
      <div className="relative z-10 px-4 py-10 md:py-20 w-full">
        <h1 className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold text-white md:text-4xl lg:text-7xl dark:text-slate-300 [text-shadow:_0_1px_4px_rgb(0_0_0_/_50%)]">
          {[
            { text: "Where" },
            { text: "Digital", className: "text-primary-color1" },
            { text: "Innovation" },
            { text: "Meets" },
            {
              text: "Reality",
              className: "text-primary-color2 dark:text-primary-color2",
            },
          ].map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              transition={{
                duration: 0.3,
                delay: index * 0.1,
                ease: "easeInOut",
              }}
              className={cn("mr-2 inline-block", word.className)}
            >
              {word.text}
            </motion.span>
          ))}
        </h1>
        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 0.8,
          }}
          className="relative z-10 mx-auto max-w-xl py-4 text-center text-lg font-normal text-gray-200 dark:text-neutral-400 [text-shadow:_0_1px_3px_rgb(0_0_0_/_60%)]"
        >
          Building transformative digital experiences that propel businesses
          forward and turn visionary ideas into tangible solutions.
        </motion.p>

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 1,
          }}
          className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <button className="w-60 transform rounded-lg bg-primary-color1 px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-color1">
            Explore Now
          </button>
          <button className="w-60 transform rounded-lg border border-primary-color1 bg-white px-6 py-2 font-medium text-primary-color1 transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100 dark:border-gray-700 dark:bg-black dark:text-white dark:hover:bg-gray-900">
            Contact Support
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
