"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Title from "../parts/Title";
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

export default function Services() {
  const t = useTranslations("ourServices");

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="flex flex-col w-full items-center px-5 sm:px-10 md:px-16 mx-auto mb-16 md:mb-20"
    >
      <Title
        title="Our Services"
        paragraph="Trusted by industry leaders"
        titleClassName="font-serif"
        paragraphClassName="text-gray-600"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full mt-12">
        {services.map((service, index) => {
          return (
            <Link href={`services/${service.id}`}>
              <motion.div
                key={service.id}
                initial={{ x: "-100px", y: 0, opacity: 0 }}
                whileInView={{ x: 0, y: 0, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                  delay: index * 0.2,
                }}
                className="group"
              >
                <div className="relative h-full bg-white rounded-xl overflow-hidden p-6 shadow-sm transition-all duration-300 group-hover:shadow-md dark:bg-gray-900 border border-gray-100 dark:border-gray-700">
                  <motion.div
                    variants={iconVariants}
                    className={`w-14 h-14 rounded-lg ${service.color} bg-opacity-10 flex items-center justify-center mb-6`}
                  >
                    <Image
                      src={service.image}
                      className="size-32"
                      height={32}
                      width={32}
                      alt={service.title}
                    />
                  </motion.div>
                  <div className="h-12 w-1 bg-primary-color2 absolute top-8 -left-0.5 rounded-full group-hover:animate-bounce" />

                  <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {service.description}
                  </p>
                  <motion.a
                    href={service.link}
                    className="inline-flex items-center text-primary-color1 font-medium hover:text-primary-color2 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    Learn more
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </motion.a>
                </div>
              </motion.div>
            </Link>
          );
        })}
      </div>
    </motion.section>
  );
}
