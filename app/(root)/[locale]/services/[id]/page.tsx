"use client";

import { AnimatedProjects } from "@/components/ui/animated-testimonials";
import { getServiceById } from "@/constants/services";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect } from "react";

const ServiceDetails = () => {
  const { id } = useParams();
  const service = getServiceById(Number(id));
  const controls = useAnimation();

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            404
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Service not found
          </p>
          <Link
            href="/services"
            className="mt-6 inline-block px-6 py-3 bg-primary-color1 text-white rounded-lg font-medium hover:bg-primary-color1/90 transition-colors"
          >
            Browse Services
          </Link>
        </div>
      </div>
    );
  }

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  const iconHover = {
    scale: 1.1,
    rotate: 5,
    transition: { type: "spring", stiffness: 300 },
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 sm:pt-20">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={container}
          className="flex flex-col md:flex-row items-center gap-8 mb-10"
        >
          <motion.div
            variants={item}
            className="w-full md:w-1/3 flex justify-center"
          >
            <div className="sm:p-6 rounded-2xl ">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  width={200}
                  height={200}
                  className="w-32 h-32 sm:w-36 sm:h-36 object-contain"
                />
              </motion.div>
            </div>
          </motion.div>

          <motion.div variants={item} className="w-full md:w-2/3">
            <motion.h1
              variants={fadeIn}
              className="text-2xl md:text-2xl font-bold mb-4 dark:text-white text-transparent "
            >
              {service.title}
            </motion.h1>
            <motion.p
              variants={fadeIn}
              className="sm:text-lg text-gray-600 dark:text-gray-300 mb-6"
            >
              {service.shortDescription}
            </motion.p>
            <motion.div
              variants={container}
              className="flex flex-wrap gap-3 mt-6"
            >
              {service.technologies.map((tech, index) => (
                <motion.span
                  key={index}
                  variants={item}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 bg-gradient-to-r from-primary-color1/10 to-primary-color2/10 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium backdrop-blur-sm"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
          className="mb-10  p-2 sm:p-8 rounded-3xl backdrop-blur-sm  "
        >
          <motion.h2
            variants={fadeIn}
            className="text-xl md:text-2xl font-bold mb-8 dark:text-white"
          >
            Our {service.title} Services
          </motion.h2>
          <ul className="space-y-4">
            {service.longDescription.map((item, index) => (
              <motion.li
                key={index}
                // variants={item}
                className="flex items-start group"
              >
                <motion.div
                  whileHover={iconHover}
                  className="flex-shrink-0 mt-1 mr-4"
                >
                  <svg
                    className="w-4 h-4 sm:w-6 sm:h-6 text-primary-color1 group-hover:text-primary-color2 transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </motion.div>
                <span className="text-gray-700 dark:text-gray-300 sm:text-lg">
                  {item}
                </span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
          className="mb-16"
        >
          <motion.h2
            variants={fadeIn}
            className="text-2xl md:text-3xl font-bold mb-8 sm:text-center bg-clip-text text-transparent bg-gradient-to-r from-primary-color1 via-primary-color1 to-primary-color2"
          >
            Key Features
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
            {service.features.map((feature, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ y: -5 }}
                className="p-6  shadow-hidden hover:shadow-lg transition-all duration-300 group dark:bg-gray-900"
              >
                <motion.div
                  whileHover={iconHover}
                  className="p-3 rounded-lg bg-gradient-to-r from-primary-color1/10 to-primary-color2/10 w-fit mb-4"
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-primary-color1 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {service.relatedProjects && service.relatedProjects.length > 0 ? (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={container}
            className="sm:mb-16"
          >
            <div className="sm:text-center mb-12">
              <motion.h2
                variants={fadeIn}
                className="text-2xl md:text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary-color1 via-primary-color1 to-primary-color2"
              >
                Our {service.title} Projects
              </motion.h2>
              <motion.p
                variants={fadeIn}
                className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto sm:text-lg"
              >
                Explore some of our recent {service.title.toLowerCase()}{" "}
                developments
              </motion.p>
            </div>

            <AnimatedProjects
              //@ts-ignore
              projects={service.relatedProjects}
            />
          </motion.div>
        ) : (
          <></>
        )}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={container}
          className="text-center pt-10 sm:pt-0"
        >
          <motion.div
            variants={fadeIn}
            className="bg-gradient-to-r from-primary-color1/10 to-primary-color1/10 p-8 rounded-3xl border border-gray-100 dark:border-gray-800 backdrop-blur-sm"
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-4">
              Ready to {service.title.toLowerCase()}?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto sm:text-lg">
              Let's discuss how we can create a powerful solution for your
              business.
            </p>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link
                href="/contact-us"
                className="inline-block px-8 py-3 sm:py-4 bg-primary-color1 text-white rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl dark:shadow-primary-color1/30"
              >
                Contact Us
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ServiceDetails;
