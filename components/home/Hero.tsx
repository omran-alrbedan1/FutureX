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
    <div className="relative mx-auto w-full overflow-hidden min-h-screen ">
      {/* Main Content */}
      <div className="relative z-10 w-full px-6 md:px-24 lg:px-28 mx-auto pt-24 md:pt-32">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"  // Changed from "visible" to "show" to match your utility
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
        >
          {/* Left Column - Text Content */}
          <div className="space-y-10">
            {/* Animated Headline */}
            <motion.div variants={textVariants}>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] text-white">
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
              className="text-lg md:text-xl text-gray-300 leading-relaxed"
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
          </div>

          {/* Right Column - 3D Checkmark Logo */}
          <motion.div
            initial="hidden"
            animate="show"
            whileHover="hover"
            className="relative h-[500px] lg:h-[600px] -mt-52 flex items-center justify-center lg:justify-end"
          >
            <div className="relative w-96 h-96">
              <div className="relative w-full h-full flex items-center justify-center">
                <motion.div
                  variants={fadeInOpacity(0.5, 1)}
                  initial="hidden"
                  animate="show"
                >
                  <Image
                    src={images.hero}
                    height={220}
                    width={280}
                    alt="hero"
                    className="drop-shadow-2xl"
                  />
                </motion.div>

                {/* Floating Particles Animation */}
                <motion.div
                  className="absolute top-10 left-10 w-4 h-4 bg-blue-400/30 rounded-full"
                  animate={{
                    y: [0, -20, 0],
                    x: [0, 10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="absolute bottom-20 right-10 w-3 h-3 bg-cyan-300/30 rounded-full"
                  animate={{
                    y: [0, 15, 0],
                    x: [0, -15, 0],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                />
                <motion.div
                  className="absolute top-1/3 right-1/4 w-2 h-2 bg-blue-300/20 rounded-full"
                  animate={{
                    y: [0, -10, 0],
                    x: [0, -10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.3,
                  }}
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Buttons and Text */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="flex flex-col md:flex-row max-w-7xl mx-auto items-center justify-between -mt-16 gap-8 md:gap-0"
      >
        <div className="flex flex-col sm:flex-row items-center gap-4">
          {/* Primary Button with Animation */}
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

          {/* Secondary Button with Animation */}
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
              Start Your Demo 1
            </Link>
          </motion.div>
        </div>

        {/* Animated Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="max-w-md md:mr-32"
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