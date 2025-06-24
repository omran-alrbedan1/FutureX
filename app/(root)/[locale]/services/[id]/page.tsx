"use client";

import { AnimatedProjects } from "@/components/ui/animated-testimonials";
import { icons } from "@/constants/icons";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  FaMobileAlt,
  FaPaintBrush,
  FaRocket,
  FaSearch,
  FaShieldAlt,
  FaSync,
} from "react-icons/fa";

const ServiceDetails = () => {
  const service = {
    id: 1,
    title: "Mobile App Development",
    description:
      "We specialize in Flutter to develop commercial, reliable, and efficient mobile applications for iOS and Android. Our team delivers high-performance apps with beautiful UI/UX that drive business growth.",
    longDescription: [
      "Cross-platform development using Flutter for consistent performance across iOS and Android",
      "Custom app development tailored to your business requirements",
      "Integration with backend systems and third-party APIs",
      "Rigorous testing to ensure bug-free performance",
      "App store deployment and post-launch support",
    ],
    image: icons.mobile_application,
    link: "/services/mobile-app",
    features: [
      {
        icon: <FaMobileAlt className="text-primary-color1" />,
        title: "Cross-Platform",
        description: "Single codebase for both iOS and Android",
      },
      {
        icon: <FaRocket className="text-primary-color1" />,
        title: "High Performance",
        description: "60fps smooth animations and fast load times",
      },
      {
        icon: <FaPaintBrush className="text-primary-color1" />,
        title: "Beautiful UI",
        description: "Custom designs that match your brand",
      },
      {
        icon: <FaShieldAlt className="text-primary-color1" />,
        title: "Secure",
        description: "Enterprise-grade security measures",
      },
      {
        icon: <FaSync className="text-primary-color1" />,
        title: "Real-time Sync",
        description: "Instant data updates across devices",
      },
      {
        icon: <FaSearch className="text-primary-color1" />,
        title: "App Store Optimization",
        description: "Higher visibility in app stores",
      },
    ],
    technologies: [
      "Flutter",
      "Dart",
      "Firebase",
      "REST APIs",
      "BLoC Pattern",
      "GetX",
    ],
  };

  const relatedProjects = [
    {
      id: 1,
      title: "E-Commerce App",
      description: "A complete shopping solution for your business",
      detailedDescription: [
        "Built with Flutter for cross-platform compatibility",
        "Integrated with Firebase for real-time updates",
        "Secure payment gateway integration",
        "Admin dashboard for product management",
        "Customer reviews and ratings system",
      ],
      image: "/images/hero1.jpg",
      tags: ["Flutter", "Firebase", "Payment Gateway"],
    },
    {
      id: 2,
      title: "Fitness Tracker",
      description: "Comprehensive health and fitness companion",
      detailedDescription: [
        "Workout planning and progress tracking",
        "Nutrition and calorie intake monitoring",
        "Integration with wearable devices",
        "Personalized exercise recommendations",
        "Social features for community motivation",
      ],
      image: "/images/hero2.jpg",
      tags: ["Dart", "BLoC", "Health API"],
    },
    {
      id: 3,
      title: "Business Dashboard",
      description: "Powerful analytics for your enterprise",
      detailedDescription: [
        "Real-time data visualization",
        "Custom reporting tools",
        "Team collaboration features",
        "Data export in multiple formats",
        "Role-based access control",
      ],
      image: "/images/hero3.jpg",
      tags: ["GetX", "Charts", "REST API"],
    },
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const listItem = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 pt-40 ">
      <div className="max-w-6xl mx-auto">
        <motion.div className="flex flex-col md:flex-row items-center gap-8 mb-16">
          <motion.div
            initial={{ x: "-50", y: 0, opacity: 0 }}
            whileInView={{ x: 0, y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2, once: true }}
            className="w-full md:w-1/3 flex justify-center"
          >
            <div className="p-6 rounded-2xl ">
              <Image
                src={service.image}
                alt={service.title}
                width={200}
                height={200}
                className="w-36 h-36 object-contain"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 0, y: 100, opacity: 0 }}
            whileInView={{ x: 0, y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3, once: true }}
            className="w-full md:w-2/3"
          >
            <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-4">
              {service.title}
            </h1>
            <p className="text-sm lg:text-md text-gray-600 dark:text-gray-300 mb-6">
              {service.description}
            </p>
            <motion.div variants={container} className="flex flex-wrap gap-3">
              {service.technologies.map((tech, index) => (
                <motion.span
                  key={index}
                  variants={listItem}
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full text-sm"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        <div className="mb-16">
          <motion.h2
            initial={{ x: "-30px", y: 0, opacity: 0 }}
            whileInView={{ x: 0, y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2, once: true }}
            className="text-lg sm:text-2xl font-semibold text-gray-800 dark:text-white mb-6"
          >
            Our Mobile App Development Services
          </motion.h2>
          <ul className="space-y-3">
            {service.longDescription.map((item, index) => (
              <motion.li
                key={index}
                initial={{ x: 0, y: 30, opacity: 0 }}
                whileInView={{ x: 0, y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 * index, once: true }}
                className="flex items-start"
              >
                <svg
                  className="w-5 h-5 text-primary-color1 mt-1 mr-3"
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
                <span className="text-gray-700 dark:text-gray-300">{item}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        <div className="mb-16">
          <motion.h2
            initial={{ x: "-30px", y: 0, opacity: 0 }}
            whileInView={{ x: 0, y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2, once: true }}
            className="text-lg text-2xl font-semibold text-gray-800 dark:text-white mb-6"
          >
            Key Features
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {service.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ x: 0, y: 50, opacity: 0 }}
                whileInView={{ x: 0, y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 * index, once: true }}
                className="p-4 bg-white dark:bg-gray-900 rounded-lg border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-md bg-blue-100 dark:bg-blue-900/30">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ x: 0, y: 50, opacity: 0 }}
          whileInView={{ x: 0, y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2, once: true }}
        >
          <div className="text-start mb-12">
            <h2 className="text-lg lg:text-2xl font-semibold text-gray-900 dark:text-white mb-3">
              Our Mobile App Projects
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl ">
              Explore some of our recent Flutter mobile application developments
            </p>
          </div>

          <AnimatedProjects projects={relatedProjects} />
        </motion.div>

        <motion.div
          initial={{ x: 0, y: 50, opacity: 0 }}
          whileInView={{ x: 0, y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2, once: true }}
          className="text-center pt-5"
        >
          <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to build your mobile app?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Let's discuss how we can create a powerful mobile solution for your
            business.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-primary-color1 hover:bg-primary-color1/90 text-white rounded-lg font-medium  transition-all duration-300 shadow-lg hover:shadow-xl dark:shadow-primary-color1/20"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default ServiceDetails;
