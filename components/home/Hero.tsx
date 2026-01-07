"use client";
import { images } from "@/constants/images";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { motionAnimations } from "@/utils/motion";

const Hero = () => {
  const {
    fadeIn,
    staggerContainer,
    fadeInOpacity
  } = motionAnimations;

  const containerVariants = staggerContainer(0.2, 0.3);
  const textVariants = fadeIn("left", "spring", 0.1, 0.8);
  const itemVariants = fadeIn("up", "spring", 0.2, 0.8);
  
  const buttonVariants = {
    hidden: fadeIn("up", "spring", 0, 0.5).hidden,
    visible: fadeIn("up", "spring", 0.3, 0.5).show,
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <div className="relative mx-auto w-full overflow-hidden mb-32">
      {/* Main Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 md:px-12 lg:px-24 mx-auto md:pt-20 pt-12 ">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center"
        >
          {/* Left Column - Text Content */}
          <div className="space-y-6 md:space-y-8 lg:space-y-10 order-2 lg:order-1">
            {/* Animated Headline */}
            <motion.div variants={textVariants}>
              <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight sm:leading-[1.1] text-white">
                Building the Future
                <br />
                <motion.span
                  className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{
                    backgroundSize: "200% 200%",
                  }}
                >
                  of Technology
                </motion.span>
              </h1>
            </motion.div>

            {/* Animated Description */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed"
            >
              At Future X, we transform ideas into reality through cutting-edge
              mobile apps, stunning web development, innovative tech solutions,
              and premium printing services. Your vision, our expertise –
              limitless possibilities.
            </motion.p>

            {/* Animated Divider Line */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "80px" }}
              transition={{ delay: 1, duration: 1, ease: "easeOut" }}
              className="h-px bg-gradient-to-r from-blue-500 to-transparent"
            ></motion.div>

            {/* Mobile-Only Buttons (shown below text on small screens) */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 lg:hidden">
              <motion.div
                variants={buttonVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                whileTap="tap"
              >
                <Link
                  href="/consultation"
                  className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-5 py-3 sm:px-6 sm:py-3.5 rounded-full font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/50 text-base sm:text-lg flex items-center justify-center gap-2 w-full sm:w-auto"
                >
                  Start Your Project
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="text-lg sm:text-xl"
                  >
                    →
                  </motion.span>
                </Link>
              </motion.div>

              <motion.div
                variants={buttonVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                whileTap="tap"
                transition={{ delay: 0.1 }}
              >
                <Link
                  href="/projects"
                  className="text-white px-5 py-3 sm:px-6 sm:py-3.5 font-semibold hover:text-gray-200 transition-all duration-300 rounded-full bg-gradient-to-r from-gray-800/50 to-gray-900/30 border border-gray-700/50 hover:border-gray-600 text-base sm:text-lg backdrop-blur-sm flex items-center justify-center w-full sm:w-auto"
                >
                  View Our Projects
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Right Column - Image with responsive adjustments */}
          <motion.div
            initial="hidden"
            animate="show"
            whileHover="hover"
            className="relative h-[200px] xs:h-[220px] sm:h-[180px] md:h-[250px] lg:h-[300px] xl:h-[400px] flex items-center justify-center lg:justify-end order-1 lg:order-2 -mt-8 sm:-mt-12 md:-mt-16 lg:-mt-0"
          >
              <div className="relative w-full h-full flex items-center justify-center">
                <motion.div
                  variants={fadeInOpacity(0.5, 1)}
                  initial="hidden"
                  animate="show"
                  className="w-full h-full flex items-center justify-center"
                >
                  <Image
                    src={images.hero}
                    fill
                    alt="hero"
                    className="object-contain drop-shadow-2xl"
                    priority
                  />
                </motion.div>

                {/* Floating Particles - Responsive positioning */}
                <motion.div
                  className="absolute top-4 left-4 sm:top-6 sm:left-6 md:top-8 md:left-8 w-3 h-3 sm:w-4 sm:h-4 bg-blue-400/30 rounded-full"
                  animate={{
                    y: [0, -15, 0],
                    x: [0, 8, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="absolute bottom-12 right-4 sm:bottom-16 sm:right-6 md:bottom-20 md:right-10 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-cyan-300/30 rounded-full"
                  animate={{
                    y: [0, 12, 0],
                    x: [0, -12, 0],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                />
                <motion.div
                  className="absolute top-1/4 right-1/4 w-2 h-2 sm:w-2.5 sm:h-2.5 bg-blue-300/20 rounded-full"
                  animate={{
                    y: [0, -8, 0],
                    x: [0, -8, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.3,
                  }}
                />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Section - Hidden on mobile, shown on larger screens */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="hidden lg:flex max-w-7xl mx-auto items-center justify-between px-6 md:px-12 lg:px-24 mt-8 md:mt-12 lg:mt-4 xl:mt-8 gap-8"
      >
        <div className="flex flex-col sm:flex-row items-center gap-4">
          {/* Primary Button */}
          <motion.div
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            whileTap="tap"
          >
            <Link
              href="/consultation"
              className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/50 text-lg flex items-center gap-2"
            >
              Start Your Project
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="text-xl"
              >
                →
              </motion.span>
            </Link>
          </motion.div>

          {/* Secondary Button */}
          <motion.div
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            whileTap="tap"
            transition={{ delay: 0.1 }}
          >
            <Link
              href="/projects"
              className="text-white px-6 py-3 md:px-8 md:py-4 font-semibold hover:text-gray-200 transition-all duration-300 rounded-full bg-gradient-to-r from-gray-800/50 to-gray-900/30 border border-gray-700/50 hover:border-gray-600 text-lg backdrop-blur-sm"
            >
              View Our Projects
            </Link>
          </motion.div>
        </div>

        {/* Animated Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="max-w-md"
        >
          <motion.p
            animate={{
              textShadow: [
                "0 0 5px rgba(59, 130, 246, 0.2), 0 0 10px rgba(59, 130, 246, 0.1)",
                "0 0 15px #3b82f6, 0 0 30px #3b82f6, 0 0 45px #3b82f6, 0 0 60px #3b82f6, 0 0 75px #3b82f6",
                "0 0 5px rgba(59, 130, 246, 0.2), 0 0 10px rgba(59, 130, 246, 0.1)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="text-sm font-medium text-blue-400 uppercase tracking-wider mb-2"
          >
            "Web Application Development"
          </motion.p>
          <p className="text-base text-gray-400">
            Custom platforms to manage your business
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;