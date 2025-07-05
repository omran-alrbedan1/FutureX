"use client";
import Loader from "@/components/Loader";
import { Card } from "@/components/ui/card";
import { TeamMemberCard } from "@/components/team-card";
import { motion } from "framer-motion";
import { Suspense } from "react";

const AboutPage = () => {
  const teamMembers = [
    {
      name: "John Doe",
      role: "CEO & Founder",
      image: "/images/image1.jpg",
    },
    {
      name: "Jane Smith",
      role: "CTO",
      image: "/images/profileImage.jpg",
    },
    {
      name: "Robert Johnson",
      role: "Lead Designer",
      image: "/images/image2.jpg",
    },
    {
      name: "John Doe",
      role: "CEO & Founder",
      image: "/images/image3.jpg",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <main className="min-h-[100vh] overflow-y-auto relative">
      <section className="bg-gradient-to-r  py-20 max-sm:py-10 px-4 ">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-12 text-center"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              {" "}
              <span className="bg-gradient-to-r from-primary-color1 via-primary-color1 to-primary-color2 bg-clip-text text-transparent">
                About Future X
              </span>
            </h1>
            <p className="text-sm md:text-lg max-w-4xl mx-auto">
              We're a passionate team of innovators, creators, and strategists
              dedicated to transforming businesses through exceptional digital
              solutions.
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
          >
            <motion.div
              variants={item}
              whileHover={{
                y: -5,
                transition: { duration: 0.3 },
              }}
            >
              <Card className="p-6 text-center border-none relative overflow-hidden group transition-all duration-300 hover:shadow-lg hover:shadow-primary-color1/10 dark:hover:shadow-primary-color1/40">
                <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <svg
                    className="w-16 h-16 text-primary-color1/20"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1"
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 mb-4 flex items-center justify-center bg-blue-100 dark:bg-primary-color1/30 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-6 h-6 text-primary-color1 "
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg md:text-lg xl:text-2xl font-bold mb-2 text-gray-800 dark:text-gray-200">
                    150+
                  </h3>
                  <p className="text-sm uppercase text-gray-600 dark:text-gray-300 tracking-wider">
                    Projects Completed
                  </p>
                </div>
              </Card>
            </motion.div>

            <motion.div
              variants={item}
              whileHover={{
                y: -5,
                transition: { duration: 0.3 },
              }}
            >
              <Card className="p-6 text-center border-none relative overflow-hidden group transition-all duration-300 hover:shadow-lg hover:shadow-primary-color1/10 dark:hover:shadow-primary-color1/40">
                <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <svg
                    className="w-16 h-16 text-primary-color1/20"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1"
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 mb-4 flex items-center justify-center bg-blue-100 dark:bg-primary-color1/30 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-6 h-6 text-primary-color1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg md:text-lg xl:text-2xl font-bold mb-2 text-gray-800 dark:text-gray-200">
                    50+
                  </h3>
                  <p className="text-sm uppercase text-gray-600 dark:text-gray-300 tracking-wider">
                    Happy Clients
                  </p>
                </div>
              </Card>
            </motion.div>

            <motion.div
              variants={item}
              whileHover={{
                y: -5,
                transition: { duration: 0.3 },
              }}
            >
              <Card className="p-6 text-center border-none relative overflow-hidden group transition-all duration-300 hover:shadow-lg hover:shadow-primary-color1/10 dark:hover:shadow-primary-color1/40">
                <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <svg
                    className="w-16 h-16 text-primary-color1/20"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 mb-4 flex items-center justify-center bg-blue-100 dark:bg-primary-color1/30 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-6 h-6 text-primary-color1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg md:text-lg xl:text-2xl font-bold mb-2 text-gray-800 dark:text-gray-200">
                    5+
                  </h3>
                  <p className="text-sm uppercase text-gray-600 dark:text-gray-300 tracking-wider">
                    Years Experience
                  </p>
                </div>
              </Card>
            </motion.div>

            <motion.div
              variants={item}
              whileHover={{
                y: -5,
                transition: { duration: 0.3 },
              }}
            >
              <Card className="p-6 text-center border-none relative overflow-hidden group transition-all duration-300 hover:shadow-lg hover:shadow-primary-color1/10 dark:hover:shadow-primary-color1/40">
                <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <svg
                    className="w-16 h-16 text-primary-color1/20"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1"
                      d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 mb-4 flex items-center justify-center bg-blue-100 dark:bg-primary-color1/30 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-6 h-6 text-primary-color1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg md:text-lg xl:text-2xl font-bold mb-2 text-gray-800 dark:text-gray-200">
                    98%
                  </h3>
                  <p className="text-sm uppercase text-gray-600 dark:text-gray-300 tracking-wider">
                    Client Satisfaction
                  </p>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-10 px-4 ">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-start">
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center mb-8 sm:mt-4">
              <h2 className="text-3xl md:text-4xl font-bold  ">
                {" "}
                <span className="bg-gradient-to-r from-primary-color1 via-primary-color1 to-primary-color2 bg-clip-text text-transparent">
                  Who We Are
                </span>
              </h2>
            </div>

            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="flex items-start"
              >
                <p className="text-gray-700 dark:text-gray-300">
                  At FutureX, we don't just develop software or offer tech
                  services — we craft digital experiences that redefine what's
                  possible. We are a leading Arab technology company, born from
                  a deep passion for innovation and a clear vision to deliver
                  smart digital solutions that serve the local market and
                  compete globally. We believe that every bold idea deserves to
                  become a real, high-impact product — built with precision,
                  creativity, and purpose.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="flex items-start"
              >
                <p className="text-gray-700 dark:text-gray-300">
                  We've evolved alongside the digital landscape, delivering
                  successful projects and maintaining excellence in all we do.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="flex items-start"
              >
                <p className="text-gray-700 dark:text-gray-300">
                  Today, we're trusted partners for businesses navigating the
                  digital age, combining technical expertise with creative
                  innovation.
                </p>
              </motion.div>
            </div>
          </motion.div>
          <motion.div
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-w-16 aspect-h-9 group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-color1/10 to-primary-color1/20 rounded-2xl pointer-events-none" />

              <video
                className="w-full h-full object-cover"
                poster="/images/video-poster.jpg"
                controls={false}
                loop
                muted
                autoPlay
              >
                <source src="/videos/company-showcase.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              <div className=" flex items-center justify-center  transition-all duration-300">
                <motion.button
                  className="w-20 h-20 rounded-full  bg-primary-color1/80 flex items-center justify-center text-white shadow-xl transform transition-all hover:scale-110 hover:shadow-2xl"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => {
                    e.preventDefault();
                    // e.currentTarget.closest("div").querySelector("video").play();
                    // e.currentTarget
                    //   .closest("div")
                    //   .querySelector("video").controls = true;
                    e.currentTarget.style.display = "none";
                  }}
                >
                  <svg
                    className="w-8 h-8"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </motion.button>
              </div>

              <motion.div
                className="absolute -top-8 -left-8 w-24 h-24 rounded-full bg-primary-color1/10 backdrop-blur-sm"
                animate={{
                  y: [0, -15, 0],
                  opacity: [0.3, 0.6, 0.3],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute -bottom-8 -right-8 w-28 h-28 rounded-full bg-primary-color1/10 backdrop-blur-sm"
                animate={{
                  y: [0, 15, 0],
                  opacity: [0.3, 0.6, 0.3],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.5,
                }}
              />

              <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-primary-color1/30 rounded-tl-2xl" />
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-primary-color1/30 rounded-br-2xl" />
            </div>

            <motion.div
              className="mt-4 text-center text-gray-500 dark:text-gray-400 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              See our journey in 90 seconds
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center">
              <span className="bg-gradient-to-r from-primary-color1 via-primary-color1 to-primary-color2 bg-clip-text text-transparent">
                Our Values
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 text-center mb-12 max-w-2xl mx-auto">
              The principles that guide everything we do and define who we are
              as a company.
            </p>

            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {/* Innovation First Card */}
              <motion.div
                variants={item}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="border-none shadow-none p-6 hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1">
                  <motion.div
                    className="bg-blue-100 dark:bg-blue-900/30 w-12 h-12 rounded-full flex items-center justify-center mb-4"
                    whileHover={{
                      scale: 1.1,
                      rotate: 10,
                      transition: { duration: 0.3 },
                    }}
                  >
                    <motion.svg
                      className="w-6 h-6 text-primary-color1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      whileHover={{
                        scale: 1.2,
                        rotate: 20,
                        transition: { duration: 0.3 },
                      }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      ></path>
                    </motion.svg>
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-3">
                    Innovation First
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    We embrace cutting-edge technologies and creative solutions
                    to stay ahead of the curve.
                  </p>
                </Card>
              </motion.div>

              {/* Client-Centric Card */}
              <motion.div
                variants={item}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="border-none shadow-none p-6 hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1">
                  <motion.div
                    className="bg-green-100 dark:bg-green-900/30 w-12 h-12 rounded-full flex items-center justify-center mb-4"
                    whileHover={{
                      scale: 1.1,
                      transition: { duration: 0.3 },
                    }}
                  >
                    <motion.svg
                      className="w-6 h-6 text-green-600 dark:text-green-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      whileHover={{
                        scale: [1, 1.2, 1.1],
                        transition: { duration: 0.5 },
                      }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      ></path>
                    </motion.svg>
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-3">Client-Centric</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Your success is our priority. We build lasting partnerships
                    through exceptional service.
                  </p>
                </Card>
              </motion.div>

              {/* Quality Driven Card */}
              <motion.div
                variants={item}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="border-none shadow-none p-6 hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1">
                  <motion.div
                    className="bg-yellow-100 dark:bg-yellow-900/30 w-12 h-12 rounded-full flex items-center justify-center mb-4"
                    whileHover={{
                      scale: 1.1,
                      transition: { duration: 0.3 },
                    }}
                  >
                    <motion.svg
                      className="w-6 h-6 text-yellow-600 dark:text-yellow-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      whileHover={{
                        y: [0, -5, 0, -5, 0],
                        transition: { duration: 0.8 },
                      }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 15l8-8m0 0l-8-8m8 8H4"
                      ></path>
                    </motion.svg>
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-3">Quality Driven</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    We maintain the highest standards in every project, ensuring
                    excellence in delivery.
                  </p>
                </Card>
              </motion.div>

              {/* Results Focused Card */}
              <motion.div
                variants={item}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="border-none shadow-none p-6 hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1">
                  <motion.div
                    className="bg-blue-100 dark:bg-primary-color1/30 w-12 h-12 rounded-full flex items-center justify-center mb-4"
                    whileHover={{
                      scale: 1.1,
                      transition: { duration: 0.3 },
                    }}
                  >
                    <motion.svg
                      className="w-6 h-6 text-primary-color1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      whileHover={{
                        scale: [1, 1.3, 1.1],
                        transition: { duration: 0.5 },
                      }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      ></path>
                    </motion.svg>
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-3">
                    Results Focused
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    We measure success by the tangible impact we create for your
                    business growth.
                  </p>
                </Card>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-10 px-4 bg-gray-50 dark:bg-gray-900/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="grid md:grid-cols-2 "
            >
              <motion.div variants={item} className="space-y-8">
                <Card className="p-8 border-none shadow-none  transition-all duration-300">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-primary-color1/10 w-12 h-12 rounded-full flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-primary-color1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold">Our Vision</h3>
                  </div>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-gray-600 dark:text-gray-400"
                  >
                    To become the #1 technology partner in the Arab world by
                    offering integrated, creative, and results-driven digital
                    services.
                  </motion.p>
                </Card>
              </motion.div>
              <motion.div variants={item} className="space-y-8">
                <Card className="p-8 border-none shadow-none  transition-all duration-300">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-primary-color1/10 w-12 h-12 rounded-full flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-primary-color1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold">Our Mission</h3>
                  </div>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-gray-600 dark:text-gray-400"
                  >
                    To be the bridge between vision and reality — between
                    ambition and execution — and to shape a smarter, more
                    human-centered technological future.
                  </motion.p>
                </Card>
              </motion.div>

              <motion.div variants={item} className="md:col-span-2">
                <Card className="p-8 border-none shadow-none  transition-all duration-300">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-primary-color1/10 w-12 h-12 rounded-full flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-primary-color1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        ></path>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold">Why FutureX?</h3>
                  </div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="space-y-4"
                  >
                    <p className="text-gray-600 dark:text-gray-400">
                      Our approach is unique: We begin with deep understanding,
                      then innovate, test, and deliver with excellence.
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-gray-600 dark:text-gray-400">
                      <motion.li
                        initial={{ x: -10, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        We master the details: We don't just complete projects —
                        we perfect them.
                      </motion.li>
                      <motion.li
                        initial={{ x: -10, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                      >
                        We build long-term partnerships: We grow with our
                        clients, every step of the way.
                      </motion.li>
                      <motion.li
                        initial={{ x: -10, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.5 }}
                      >
                        Our team is complete: A powerhouse of developers,
                        designers, and consultants committed to building
                        scalable, impactful solutions.
                      </motion.li>
                    </ul>
                  </motion.div>
                </Card>
              </motion.div>

              <motion.div variants={item} className="md:col-span-2">
                <Card className="p-8 border-none shadow-none transition-all duration-300">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-primary-color1/10 w-12 h-12 rounded-full flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-primary-color1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                        />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold">What We Offer</h3>
                  </div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <ul className="grid md:grid-cols-2 gap-4 list-disc pl-6 text-gray-600 dark:text-gray-400">
                      <motion.li
                        initial={{ x: -10, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        Mobile app development (iOS & Android) using Flutter and
                        Native tools
                      </motion.li>
                      <motion.li
                        initial={{ x: -10, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.35 }}
                      >
                        Custom web apps and SaaS platforms
                      </motion.li>
                      <motion.li
                        initial={{ x: -10, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                      >
                        UX/UI design focused on comfort, clarity, and conversion
                      </motion.li>
                      <motion.li
                        initial={{ x: -10, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.45 }}
                      >
                        Internal systems (ERP, CRM, booking systems, membership
                        platforms)
                      </motion.li>
                      <motion.li
                        initial={{ x: -10, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.5 }}
                      >
                        Tailored solutions for startups and entrepreneurs
                      </motion.li>
                      <motion.li
                        initial={{ x: -10, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.55 }}
                      >
                        Ongoing technical support, maintenance, and performance
                        optimization
                      </motion.li>
                    </ul>
                  </motion.div>
                </Card>
              </motion.div>

              <motion.div variants={item} className="md:col-span-2">
                <Card className="p-8 border-none shadow-none  transition-all duration-300">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-primary-color1/10 w-12 h-12 rounded-full flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-primary-color1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold">
                      Social Media Services
                    </h3>
                  </div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="space-y-4"
                  >
                    <p className="text-gray-600 dark:text-gray-400">
                      We believe that a brand's digital presence goes far beyond
                      development — it's about meaningful engagement.
                    </p>
                    <ul className="grid md:grid-cols-2 gap-4 list-disc pl-6 text-gray-600 dark:text-gray-400">
                      <motion.li
                        initial={{ x: -10, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        Professional digital content creation
                      </motion.li>
                      <motion.li
                        initial={{ x: -10, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.35 }}
                      >
                        Social media account management
                      </motion.li>
                      <motion.li
                        initial={{ x: -10, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                      >
                        Ad campaign planning & execution
                      </motion.li>
                      <motion.li
                        initial={{ x: -10, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.45 }}
                      >
                        Performance analytics and strategy refinement
                      </motion.li>
                      <motion.li
                        initial={{ x: -10, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.5 }}
                      >
                        Designing visuals and promo videos with artistic
                        excellence
                      </motion.li>
                    </ul>
                  </motion.div>
                </Card>
              </motion.div>

              <motion.div variants={item} className="md:col-span-2">
                <Card className="p-8 border-none shadow-none  transition-all duration-300">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-primary-color1/10 w-12 h-12 rounded-full flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-primary-color1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold">
                      What FutureX Represents
                    </h3>
                  </div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="space-y-4"
                  >
                    <p className="text-gray-600 dark:text-gray-400">
                      FutureX is more than a company — It's a mindset, an
                      identity, and a culture based on:
                    </p>
                    <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                      <motion.li
                        initial={{ x: -10, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="flex items-start"
                      >
                        <span className="inline-block mr-2 mt-1 w-2 h-2 rounded-full bg-primary-color1"></span>
                        <span>
                          <strong>Innovation First:</strong> Constantly pushing
                          boundaries to create groundbreaking solutions
                        </span>
                      </motion.li>
                      <motion.li
                        initial={{ x: -10, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.35 }}
                        className="flex items-start"
                      >
                        <span className="inline-block mr-2 mt-1 w-2 h-2 rounded-full bg-primary-color1"></span>
                        <span>
                          <strong>Arab Digital Excellence:</strong> Proudly
                          regional with global standards
                        </span>
                      </motion.li>
                      <motion.li
                        initial={{ x: -10, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="flex items-start"
                      >
                        <span className="inline-block mr-2 mt-1 w-2 h-2 rounded-full bg-primary-color1"></span>
                        <span>
                          <strong>Human-Centric Approach:</strong> Technology
                          that serves people, not the other way around
                        </span>
                      </motion.li>
                      <motion.li
                        initial={{ x: -10, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.45 }}
                        className="flex items-start"
                      >
                        <span className="inline-block mr-2 mt-1 w-2 h-2 rounded-full bg-primary-color1"></span>
                        <span>
                          <strong>Collaborative Growth:</strong> We succeed when
                          our clients and partners succeed
                        </span>
                      </motion.li>
                      <motion.li
                        initial={{ x: -10, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="flex items-start"
                      >
                        <span className="inline-block mr-2 mt-1 w-2 h-2 rounded-full bg-primary-color1"></span>
                        <span>
                          <strong>Relentless Improvement:</strong> Never
                          satisfied with "good enough"
                        </span>
                      </motion.li>
                      <motion.li
                        initial={{ x: -10, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.55 }}
                        className="flex items-start"
                      >
                        <span className="inline-block mr-2 mt-1 w-2 h-2 rounded-full bg-primary-color1"></span>
                        <span>
                          <strong>Authentic Creativity:</strong> Original ideas
                          that make real impact
                        </span>
                      </motion.li>
                      <motion.li
                        initial={{ x: -10, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="flex items-start"
                      >
                        <span className="inline-block mr-2 mt-1 w-2 h-2 rounded-full bg-primary-color1"></span>
                        <span>
                          <strong>Tech with Purpose:</strong> Every solution
                          must solve real problems
                        </span>
                      </motion.li>
                    </ul>
                  </motion.div>
                </Card>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default function Page() {
  return (
    <Suspense fallback={<Loader />}>
      <AboutPage />
    </Suspense>
  );
}
