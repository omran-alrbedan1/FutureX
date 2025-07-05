"use client";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { getProjectById } from "@/constants/projects";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  Calendar,
  ExternalLink,
  Folder,
  ShieldCheck,
  User,
} from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const Page = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const { id } = useParams();
  const project = getProjectById(Number(id));
  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            404
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Project not found
          </p>
          <Link
            href="/projects"
            className="mt-6 inline-block px-6 py-3 bg-primary-color1 text-white rounded-lg font-medium hover:bg-primary-color1/90 transition-colors"
          >
            Browse Projects
          </Link>
        </div>
      </div>
    );
  }

  useEffect(() => {
    setMounted(true);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } },
  };

  const slideUp = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const slideInLeft = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const slideInRight = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const scaleUp = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5, ease: "backOut" },
    },
  };

  if (!mounted) return null;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial="hidden"
        animate="visible"
        className={`min-h-screen py-12 px-4 sm:px-6 lg:px-8 ${
          theme === "dark"
            ? "bg-gray-900 text-gray-100"
            : "bg-gray-50 text-gray-900"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div variants={slideUp}>
            <Link
              href="/projects"
              className={`inline-flex items-center mb-8 
                text-zinc-600 dark:text-zinc-300 transition-colors duration-300`}
            >
              <motion.div
                whileHover={{ x: -3 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <ArrowLeft className="mr-2" size={18} />
              </motion.div>
              Back to Projects
            </Link>
          </motion.div>

          <motion.section
            variants={container}
            className="mb-20 md:mb-28 relative"
          >
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
              <motion.div
                variants={slideInLeft}
                className="md:w-1/2 relative z-10"
              >
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <h1 className="text-2xl md:text-3xl font-bold mb-6 bg-clip-text text-transparent bg-primary-color1">
                    {project.title}
                  </h1>
                </motion.div>
                <motion.p
                  variants={fadeIn}
                  className={`text-xl mb-8 ${
                    theme === "dark" ? "text-zinc-300" : "text-zinc-600"
                  }`}
                >
                  {project.description}
                </motion.p>

                <motion.div
                  variants={container}
                  className="flex flex-wrap gap-6 mb-10"
                >
                  {[
                    {
                      label: "Category",
                      value: project.category,
                      icon: <Folder className="w-4 h-4" />,
                      color: "text-blue-500",
                      hoverColor: "bg-blue-100/80 dark:bg-blue-900/30",
                    },
                    {
                      label: "Client",
                      value: project.client,
                      icon: <User className="w-4 h-4" />,
                      color: "text-purple-500",
                      hoverColor: "bg-purple-100/80 dark:bg-purple-900/30",
                    },
                    {
                      label: "Year",
                      value: project.year,
                      icon: <Calendar className="w-4 h-4" />,
                      color: "text-green-500",
                      hoverColor: "bg-green-100/80 dark:bg-green-900/30",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      variants={slideUp}
                      className="group relative"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="flex items-center gap-4">
                        <motion.div
                          className={`p-3 rounded-full ${item.hoverColor} transition-colors duration-300`}
                          whileHover={{
                            rotate: 10,
                            scale: 1.1,
                          }}
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 10,
                          }}
                        >
                          <motion.div
                            className={item.color}
                            whileHover={{
                              scale: 1.2,
                              rotate: [0, -5, 5, -5, 0],
                            }}
                            transition={{
                              duration: 0.6,
                              repeat: 1,
                            }}
                          >
                            {item.icon}
                          </motion.div>
                        </motion.div>

                        <div className="space-y-1">
                          <p
                            className={`text-xs tracking-wider ${
                              theme === "dark"
                                ? "text-gray-400"
                                : "text-gray-500"
                            }`}
                          >
                            {item.label}
                          </p>
                          <motion.p
                            className={`text-[14px] md:text-sm font-medium ${
                              theme === "dark"
                                ? "text-gray-100"
                                : "text-gray-900"
                            }`}
                            whileHover={{ x: 5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            {item.value}
                          </motion.p>
                        </div>
                      </div>

                      <motion.div
                        className={`absolute bottom-0 h-0.5 ${item.color} opacity-0`}
                        initial={{ width: 0 }}
                        whileHover={{
                          width: "100%",
                          opacity: 0.7,
                        }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div variants={slideUp}>
                  <motion.a
                    href="#"
                    whileHover={{ y: -2, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`inline-flex  items-center px-5 sm:px-6 py-2 sm:py-3 rounded-[7px] font-medium transition-all duration-300 
                      bg-primary-color1 hover:bg-primary-color1/90 text-white shadow-lg hover:shadow-indigo-500/20`}
                  >
                    Visit Project
                    <ExternalLink className="ml-2" size={16} />
                  </motion.a>
                </motion.div>
              </motion.div>

              <motion.div className="md:w-1/2 max-sm:mt-10 max-sm:mx-3 rounded-[5px] relative overflow-hidden shadow-xl">
                <motion.img
                  whileHover={{ scale: 1.05, rotate: 0.3 }}
                  transition={{
                    type: "spring",
                    duration: 0.3,
                    stiffness: 400,
                    damping: 10,
                  }}
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={500}
                  className="w-full h-auto object-cover"
                />
              </motion.div>
            </div>
          </motion.section>

          <motion.section
            variants={container}
            className="grid md:grid-cols-3 gap-12 mb-20"
          >
            <motion.div variants={slideInLeft} className="md:col-span-2">
              <motion.h2
                variants={slideUp}
                className="text-2xl font-bold mb-6 flex items-center"
              >
                <span className="w-2 h-8 bg-primary-color1 rounded-full mr-3"></span>
                Project Overview
              </motion.h2>
              <motion.p
                variants={fadeIn}
                className={`text-lg mb-8 leading-relaxed ${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                }`}
              >
                {project.longDescription}
              </motion.p>

              <motion.div variants={container} className="space-y-12">
                <motion.div variants={slideUp}>
                  <motion.h3 className="text-xl font-semibold mb-4 flex items-center">
                    <ShieldCheck className="w-5 h-5 mr-2 text-primary-color1" />
                    Solutions
                  </motion.h3>
                  <ul className="">
                    {project.solutions.map((solution, index) => (
                      <motion.li
                        key={index}
                        variants={fadeIn}
                        className={`flex items-start p-2 rounded-lg ${
                          theme === "dark" ? "bg-gray-800/50" : "bg-gray-50"
                        }`}
                      >
                        <span className="flex-shrink-0 mt-1 mr-3 text-primary-color1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                          </svg>
                        </span>
                        <span>{solution}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div variants={slideInRight} className="space-y-10">
              {/* Key Features Section */}
              <motion.div variants={scaleUp}>
                <motion.h3 className="text-xl font-semibold mb-6 flex items-center">
                  <span className="w-2 h-8 bg-primary-color1 rounded-full mr-3"></span>
                  Key Features
                </motion.h3>
                <ul className="space-y-6">
                  {project.features.map((feature, index) => (
                    <motion.li
                      key={index}
                      variants={slideUp}
                      whileHover={{
                        x: 8,
                        transition: { type: "spring", stiffness: 300 },
                      }}
                      className="flex items-start group"
                    >
                      <motion.span
                        whileHover={{ scale: 1.1 }}
                        className="flex-shrink-0 p-2 mr-4 text-primary-color1 transition-all duration-200 group-hover:text-indigo-600"
                      >
                        {feature.icon}
                      </motion.span>
                      <div className="border-l-2 border-primary-color1/20 pl-4 group-hover:border-primary-color1/50 transition-all duration-300">
                        <h4 className="font-medium text-gray-800 dark:text-gray-200 group-hover:text-primary-color1 transition-colors duration-200">
                          {feature.title}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                          {feature.description}
                        </p>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Technology Stack Section */}
              <motion.div variants={scaleUp}>
                <motion.h3 className="text-xl font-semibold mb-6 flex items-center">
                  <span className="w-2 h-8 bg-primary-color1 rounded-full mr-3"></span>
                  Technology Stack
                </motion.h3>
                <div className="flex flex-wrap gap-4">
                  {project.techStack.map((tech, index) => (
                    <motion.div
                      key={index}
                      variants={slideUp}
                      whileHover={{
                        y: -4,
                        scale: 1.05,
                        transition: { type: "spring", stiffness: 400 },
                      }}
                      className="flex items-center px-4 py-2 rounded-lg cursor-default"
                    >
                      <motion.span
                        whileHover={{ rotate: 10 }}
                        className="mr-2 text-lg text-primary-color1"
                      >
                        {tech.icon}
                      </motion.span>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {tech.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </motion.section>

          <motion.section variants={fadeIn} className="mb-28">
            <motion.h3 className="text-xl font-semibold mb-6 flex items-center">
              <span className="w-2 h-8 bg-primary-color1 rounded-full mr-3"></span>
              ScreenShots
            </motion.h3>
            <div className="  rounded-2xl  overflow-hidden">
              <StickyScroll content={project.screenshots} />
            </div>
          </motion.section>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Page;
