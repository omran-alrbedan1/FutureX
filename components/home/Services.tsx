"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { services } from "@/constants";
import Link from "next/link";
import { fadeIn, staggerContainer, textVariant } from "@/utils/motion";

export default function Services() {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
      variants={staggerContainer(0.2, 0.1)}
      className="w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 mx-auto py-12 sm:py-16 md:py-20"
    >
      {/* Title Section */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-8 xl:gap-12 w-full mb-10 sm:mb-12 md:mb-16">
        <motion.div
          variants={textVariant(0.1)}
          className="text-sm sm:text-base font-semibold text-white whitespace-nowrap"
        >
          | Our Services |
        </motion.div>
        
        <motion.h2 
          variants={textVariant(0.2)}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl font-bold text-white leading-tight"
        >
          Trusted by <span className="text-blue-500">industry </span>
          <br className="hidden sm:block" />
          leaders
        </motion.h2>
        
        <motion.p
          variants={textVariant(0.3)}
          className="text-sm sm:text-base md:text-lg text-gray-300 flex-1 max-w-xl lg:max-w-2xl mx-auto lg:mx-0"
        >
          We provide cutting-edge technology solutions designed to help businesses grow, scale, and innovate in a digital-first world.
        </motion.p>
      </div>
      
      {/* Services Grid */}
      <motion.div
        variants={staggerContainer(0.1, 0.2)}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 w-full"
      >
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            variants={fadeIn("up", "spring", index * 0.1, 0.8)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-30px" }}
            whileHover={{ y: -8 }}
            transition={{
              duration: 0.3,
              ease: "easeOut"
            }}
            className="group h-full"
          >
            <Link
              href={`services/${service.id}`}
              className="block h-full"
            >
              {/* Updated Card Design */}
              <div className="relative h-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl sm:rounded-2xl overflow-hidden p-5 sm:p-6 md:p-7 lg:p-8 shadow-lg transition-all duration-300 group-hover:shadow-2xl border border-gray-700 group-hover:border-blue-500">
                {/* Icon Container */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{
                    delay: index * 0.1 + 0.3,
                    duration: 0.5,
                    ease: [0.34, 1.56, 0.64, 1],
                  }}
                  whileHover={{
                    scale: 1.15,
                    rotate: 8,
                    transition: { duration: 0.3 }
                  }}
                  className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-opacity-15 flex items-center justify-center mb-5 sm:mb-6 overflow-hidden group-hover:bg-opacity-25 transition-all duration-300"
                >
                  {/* Icon Background Glow */}
                  <div className="absolute inset-0 bg-opacity-5 blur-xl" />
                  
                  <Image
                    src={service.image}
                    className="size-10 sm:size-12 relative z-10"
                    height={40}
                    width={40}
                    alt={service.title}
                  />
                </motion.div>

                {/* Service Title */}
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-white group-hover:text-blue-400 transition-colors line-clamp-2">
                  {service.title}
                </h3>
                
                {/* Service Description */}
                <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6 leading-relaxed line-clamp-3 sm:line-clamp-4">
                  {service.description}
                </p>

                {/* Learn More Link */}
                <motion.div
                  initial={{ x: -10, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{
                    delay: index * 0.1 + 0.4,
                    duration: 0.5
                  }}
                  whileHover={{ x: 5 }}
                  className="inline-flex items-center text-blue-400 font-medium sm:font-semibold group/link text-sm sm:text-base"
                >
                  <span className="mr-2">Learn More</span>
                  <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 transition-transform group-hover/link:translate-x-1" />
                </motion.div>

                {/* Hover Effect Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />

                {/* Decorative Corner */}
                <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 w-6 h-6 sm:w-8 sm:h-8 border-b-2 border-r-2 border-gray-600 rounded-bl-lg sm:rounded-bl-xl opacity-50 group-hover:opacity-100 group-hover:border-blue-400 transition-all duration-300" />
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}