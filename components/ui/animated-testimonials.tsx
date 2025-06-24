"use client";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

type Project = {
  id: number;
  title: string;
  description: string;
  detailedDescription: string[];
  image: string;
  tags: string[];
};

export const AnimatedProjects = ({
  projects,
  autoplay = false,
}: {
  projects: Project[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 font-sans antialiased">
      <div className="relative grid grid-cols-1  md:grid-cols-2 gap-24">
        <div className="relative h-80 w-full">
          <AnimatePresence>
            {projects.map((project, index) => (
              <motion.div
                key={project.image}
                initial={{
                  opacity: 0,
                  scale: 0.9,
                  z: -100,
                  rotate: randomRotateY(),
                }}
                animate={{
                  opacity: isActive(index) ? 1 : 0.7,
                  scale: isActive(index) ? 1 : 0.95,
                  z: isActive(index) ? 0 : -100,
                  rotate: isActive(index) ? 0 : randomRotateY(),
                  zIndex: isActive(index) ? 40 : project.id + 2 - index,
                  y: isActive(index) ? [0, -80, 0] : 0,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.9,
                  z: 100,
                  rotate: randomRotateY(),
                }}
                transition={{
                  duration: 0.4,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 origin-bottom mr-8"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={500}
                  draggable={false}
                  className="h-full w-full rounded-3xl object-cover object-center"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        <div className="flex flex-col justify-between py-4">
          <motion.div
            key={active}
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              {projects[active].title}
            </h3>
            <div className="flex flex-wrap gap-2 my-4">
              {projects[active].tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-medium rounded-full bg-primary-color1/10 text-primary-color1"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Short description with animation */}
            <motion.p className="text-gray-600 dark:text-gray-300 mb-2">
              {projects[active].description}
            </motion.p>

            {/* Detailed description with bullet points */}
            <ul className="space-y-2 mb-6">
              {projects[active].detailedDescription?.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="flex items-start text-gray-600 dark:text-gray-300"
                >
                  <svg
                    className="w-4 h-4 mt-1 mr-2 text-primary-color1 flex-shrink-0"
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
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>

            <Link
              href={`/projects/${projects[active].id}`}
              className="inline-flex items-center text-primary-color1 hover:text-primary-color2 transition-colors duration-300 font-medium"
            >
              View Project <FaExternalLinkAlt className="ml-2" />
            </Link>
          </motion.div>
          <div className="flex gap-4 pt-8">
            <button
              onClick={handlePrev}
              className="group/button flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800 hover:bg-gray-200 dark:hover:bg-neutral-700 transition-colors"
            >
              <IconArrowLeft className="h-5 w-5 text-gray-700 dark:text-gray-300 transition-transform duration-300 group-hover/button:-translate-x-1" />
            </button>
            <button
              onClick={handleNext}
              className="group/button flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800 hover:bg-gray-200 dark:hover:bg-neutral-700 transition-colors"
            >
              <IconArrowRight className="h-5 w-5 text-gray-700 dark:text-gray-300 transition-transform duration-300 group-hover/button:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
