"use client";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import { BackgroundBeamsWithCollision } from "../ui/background-beams-with-collision";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Title from "../parts/Title";

const Hero = () => {
  const words = [
    { text: "Where" },
    { text: "Digital", className: "text-primary-color1" },
    { text: "Innovation" },
    { text: "Meets" },
    {
      text: "Reality",
      className: "text-primary-color2 dark:text-primary-color2",
    },
  ];

  return (
    <div className="relative min-h-[100vh] w-full overflow-hidden bg-background">
      <BackgroundBeamsWithCollision className="h-[110vh] mt-6 ">
        <div className="container mx-auto h-full flex flex-col lg:flex-row items-center justify-between px-4 md:px-8 gap-4 md:gap-8">
          {/* Text Content - Left Side */}
          <div className="z-20 text-center lg:text-left lg:w-1/2 relative pt-16 md:pt-0">
            {/* FUTURE X Logo Animation */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mb-6 md:mb-8"
            >
              <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold mb-2 md:mb-4">
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="bg-clip-text text-transparent bg-gradient-to-r from-[#183459] to-primary-color1"
                >
                  FUTURE
                </motion.span>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="bg-clip-text text-transparent bg-gradient-to-r from-primary-color2 to-primary-color2/70 dark:from-secondary dark:to-secondary/70"
                >
                  X
                </motion.span>
              </h1>
            </motion.div>

            {/* Typewriter Effect - Appears after logo */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="px-2 sm:px-0"
            >
              <TypewriterEffectSmooth
                words={words}
                className="text-lg md:text-xl lg:text-2xl font-medium text-foreground/80 dark:text-foreground/90"
                cursorClassName="h-6 md:h-8 bg-primary-color1"
              />
            </motion.div>

            {/* Description Text - Appears after typewriter */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.5, duration: 0.8 }}
              className="mt-4 md:mt-6 text-muted-foreground max-w-2xl mx-auto lg:mx-0 text-sm sm:text-base md:text-lg leading-relaxed px-4 sm:px-0"
            >
              Building transformative digital experiences that propel businesses
              forward and turn visionary ideas into tangible solutions.
            </motion.p>

            {/* Buttons - Appear last */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.2, duration: 0.8 }}
              className="mt-8 md:mt-12 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start px-4 sm:px-0"
            >
              <Button
                className="bg-gradient-to-r from-primary-color1 to-primary-color1/90 hover:from-primary-color1/90 hover:to-primary-color1 text-white font-semibold px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5 rounded-full 
                shadow-lg transition-all duration-300 hover:scale-105 text-sm sm:text-base md:text-lg group"
                size="lg"
              >
                <span className="group-hover:translate-x-1 transition-transform duration-300">
                  Get Started
                </span>
                <ArrowRight className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              <Button
                variant="outline"
                className="border-2 border-primary-color1/30 hover:text-primary-color1 hover:border-primary-color1/80 text-foreground hover:bg-foreground/5 font-semibold px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5 
                rounded-full shadow-lg transition-all duration-300 hover:scale-105 text-sm sm:text-base md:text-lg backdrop-blur-sm dark:border-secondary/30 dark:hover:border-secondary/80 dark:text-secondary-foreground"
                size="lg"
              >
                Our Work
              </Button>
            </motion.div>
          </div>

          {/* Image - Right Side - Hidden on mobile */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 1.2 }}
            className="hidden lg:block lg:w-1/3 relative h-full"
          >
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-full max-w-xl">
              <div className="relative">
                <Image
                  src="/images/futurex.jpg"
                  alt="Digital Solutions"
                  width={600}
                  height={600}
                  quality={100}
                  className="object-cover rounded-full shadow-primary-color1/40 overflow-hidden border-4 border-foreground/10 transition-all duration-500 shadow-2xl"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* Mobile Image - Appears below content on small screens */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.5, duration: 0.8 }}
            className="lg:hidden w-full mt-8 px-4"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <Image
                src="/images/futurex.jpg"
                alt="Digital Solutions"
                fill
                quality={100}
                className="object-cover rounded-full shadow-primary-color1/40 overflow-hidden border-4 border-foreground/10 transition-all duration-500 shadow-xl"
                priority
              />
            </div>
          </motion.div>
        </div>
      </BackgroundBeamsWithCollision>
    </div>
  );
};

export default Hero;
