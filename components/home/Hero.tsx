"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const Hero = () => {
  return (
    <div className="relative mx-auto flex w-full flex-col items-center justify-center overflow-hidden py-20">
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Floating circles (dynamic) */}
        <motion.div
          animate={{
            x: [0, 20, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-10 top-1/4 h-32 w-32 rounded-full bg-primary-color1/10 blur-xl"
        />
        <motion.div
          animate={{
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-20 top-2/3 h-40 w-40 rounded-full bg-primary-color2/10 blur-xl"
        />

        {/* Grid overlay (subtle) */}
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-[length:60px_60px] opacity-10 dark:opacity-5" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-4 py-10 md:py-20">
        <h1 className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold text-black md:text-4xl lg:text-7xl dark:text-slate-300">
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
              className={cn(
                "mr-2 inline-block hover:scale-105 transition-transform",
                word.className
              )}
            >
              {word.text}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="relative z-10 mx-auto max-w-xl py-4 text-center text-lg font-normal text-gray-600 dark:text-neutral-400"
        >
          Building transformative digital experiences that propel businesses
          forward.
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="block mt-2 text-sm text-primary-color1"
          >
            #FutureReadySolutions
          </motion.span>
        </motion.p>

        {/* Buttons with glow effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-6"
        >
          <button className="group relative w-60 transform overflow-hidden rounded-lg bg-primary-color1 px-6 py-3 font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <span className="relative z-10">Explore Now</span>
            <span className="absolute inset-0 bg-gradient-to-r from-primary-color1 to-primary-color2 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </button>

          <button className="group relative w-60 transform overflow-hidden rounded-lg border border-primary-color1 bg-white px-6 py-3 font-medium text-primary-color1 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:bg-black dark:text-white">
            <span className="relative z-10">Contact Support</span>
            <span className="absolute inset-0 bg-primary-color1/10 transition-opacity duration-300 group-hover:opacity-100" />
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
