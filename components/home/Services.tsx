"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { services } from "@/constants";
import Link from "next/link";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.15,
    },
  },
};

const iconVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      delay: 0.3,
      duration: 0.5,
      ease: [0.34, 1.56, 0.64, 1],
    },
  },
  hover: {
    scale: 1.15,
    rotate: 8,
    transition: {
      duration: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
  hover: {
    y: -8,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

export default function Services() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="flex flex-col w-full items-center px-5 sm:px-10 md:px-16 mx-auto mb-16 md:mb-20"
    >
{/* Title Section */}
      <div className="flex flex-col md:flex-row  items-start md:items-center gap-8 md:gap-12 w-full mb-12 md:mb-16 px-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sm font-semibold text-gray-500 dark:text-gray-400 whitespace-nowrap"
        >
          | Our Services |
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl  font-bold text-gray-900 dark:text-white"
        >
          Trusted by <span className="text-blue-500">industry </span><br/>leaders
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-base md:text-lg text-gray-600 dark:text-gray-300 flex-1 max-w-lg mx-auto"
        >
          We provide cutting-edge technology solutions designed to help businesses grow, scale, and innovate in a digital-first world.
        </motion.p>
      </div>
      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full">
        {services.map((service, index) => (
          <Link
            key={service.id}
            href={`services/${service.id}`}
            className="block h-full"
          >
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
              className="group h-full"
            >
              {/* Updated Card Design */}
              <div className="relative h-full bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl overflow-hidden p-7 md:p-8 shadow-lg transition-all duration-300 group-hover:shadow-2xl border border-gray-200 dark:border-gray-700 group-hover:border-blue-300 dark:group-hover:border-blue-500">
                
                
                {/* Icon Container */}
                <motion.div
                  variants={iconVariants}
                  className={`relative w-16 h-16 rounded-2xl ${service.color} bg-opacity-15 flex items-center justify-center mb-6 overflow-hidden group-hover:bg-opacity-25 transition-all duration-300`}
                >
                  {/* Icon Background Glow */}
                  <div className={`absolute inset-0 ${service.color} bg-opacity-5 blur-xl`} />
                  
                  <Image
                    src={service.image}
                    className="size-12 relative z-10"
                    height={52}
                    width={52}
                    alt={service.title}
                  />
                </motion.div>

                {/* Service Title */}
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>
                
                {/* Service Description */}
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Learn More Link */}
                <motion.div
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 font-semibold group/link"
                  whileHover={{ x: 5 }}
                >
                  <span className="mr-2">Learn More</span>
                  <ChevronRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                </motion.div>

                {/* Hover Effect Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />

                {/* Decorative Corner */}
                <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-gray-300 dark:border-gray-600 rounded-bl-xl opacity-50 group-hover:opacity-100 group-hover:border-blue-400 transition-all duration-300" />
              </div>
            </motion.div>
          </Link>
        ))}
      </div>

    </motion.section>
  );
}