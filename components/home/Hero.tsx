"use client";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative mx-auto flex w-full flex-col items-start justify-center overflow-hidden  py-10 ">
      <div className="absolute inset-0 -z-10 overflow-hidden">
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
          className="absolute left-10 top-1/4 h-32 w-32 rounded-full blur-xl"
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
          className="absolute right-20 top-2/3 h-40 w-40 rounded-full bg-purple-500/10 blur-xl"
        />

        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-[length:60px_60px] opacity-10 dark:opacity-5" />
      </div>

      <div className="relative z-10 w-full px-6 py-10 md:pl-16 md:py-20 lg:pl-24">
        <motion.h1
          initial={{ x: -35, y: 0, opacity: 0 }}
          whileInView={{ x: 0, y: 0, opacity: 1 }}
          transition={{ duration: 2, delay: 0.2, type: "spring" }}
          className="relative z-10 max-w-4xl text-left text-2xl  font-semibold text-black sm:text-3xl lg:text-5xl dark:text-white"
        >
          WhereDigital Innovation
          <br />
          Meets Reality
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5, type: "spring" }}
          className="relative z-10 max-w-3xl py-6 text-left text-lg font-normal sm:text-xl lg:text-2xl text-gray-600 dark:text-neutral-400"
        >
          Building transformative digital experiences that propel businesses
          forward.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8, type: "spring" }}
          className="relative z-10 mt-2 text-left"
        >
          <span className="text-sm font-medium text-primary-color1">
            #FutureReadySolutions
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="relative z-10 mt-12 flex flex-wrap items-center gap-6"
        >
          <button
            className="rounded-full border-2 border-primary-color1 
            bg-primary-color1/80
           px-8 py-3 font-medium text-white transition-colors 
           duration-300 hover:bg-primary-color1/70"
          >
            Explore Now
          </button>

          <button
            className="border border-primary-color1  
          bg-primary-color1/80 text-white 
          rounded-full px-8 py-3 font-medium hover:bg-primary-color1/70  
          transition-colors duration-300  "
          >
            Contact Support
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
