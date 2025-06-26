"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Title from "../parts/Title";
import { ArrowUpRight, ChevronsRight } from "lucide-react";
import Image from "next/image";
import { projects } from "@/constants";
import { Button } from "../ui/moving-border";
import { useRouter } from "next/navigation";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

export default function Works() {
  const t = useTranslations("ourWorks");
  const router = useRouter();

  const latestProjects = projects.slice(0, 6);

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="flex flex-col w-full items-center px-5 sm:px-10 md:px-16 mx-auto mb-16 md:mb-24"
    >
      <Title
        title="Our Works"
        paragraph="Explore our portfolio of successful projects"
        titleClassName="font-serif"
        paragraphClassName="text-gray-600"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 max-w-7xl mt-12">
        {latestProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative"
          >
            <Button
              borderRadius="1rem"
              duration={5000 + Math.random() * 2000}
              onClick={() => router.push(`/projects/${project.id}`)}
              className="dark:bg-slate-900  text-black border border-gray-200 dark:border-none p-0 overflow-hidden"
            >
              <div className="relative h-full bg-white rounded-xl overflow-hidden shadow-sm transition-all duration-300 group-hover:shadow-xl dark:bg-gray-800/70 border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm">
                {/* Image with shine effect */}
                <motion.div
                  className="relative overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={project.image}
                    width={600}
                    height={400}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                </motion.div>

                {/* Content */}
                <div className="p-6 relative z-10">
                  {/* Category badge with animation */}
                  <motion.span
                    className="inline-block px-3 py-1 text-xs font-semibold rounded-full mb-3 bg-primary-color1/10 text-primary-color1"
                    whileHover={{ scale: 1.05 }}
                  >
                    {project.category}
                  </motion.span>

                  <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white group-hover:text-primary-color1 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* View Project Link with animated arrow */}
                  <motion.div
                    className="flex items-center"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <a
                      href={"/"}
                      className="inline-flex items-center font-medium text-primary-color1 hover:text-primary-color2 transition-colors"
                    >
                      View Project
                      <motion.span
                        initial={{ x: 0 }}
                        animate={{ x: 0 }}
                        whileHover={{ x: 3 }}
                        transition={{ type: "spring", stiffness: 500 }}
                      >
                        <ArrowUpRight className="w-4 h-4 ml-1" />
                      </motion.span>
                    </a>
                  </motion.div>
                </div>
              </div>
            </Button>
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, type: "spring", stiffness: 100 }}
        viewport={{ once: true, margin: "-20px" }}
        onClick={() => router.push("/projects")}
        className="mt-12 group relative overflow-hidden"
      >
        <div className="relative z-10 flex items-center gap-2 border border-primary-color2 rounded-full px-6 py-3 cursor-pointer bg-transparent  transition-colors duration-300">
          <motion.span
            className="text-primary-color1 font-medium text-lg"
            transition={{ type: "spring", stiffness: 400 }}
          >
            See More Projects
          </motion.span>

          <motion.div
            className="relative w-5 h-5"
            animate={{
              x: [0, 4, 0],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: [0.4, 0, 0.2, 1],
            }}
          >
            <ChevronsRight className="absolute inset-0 w-full h-full text-primary-color1" />
            <ChevronsRight
              className="absolute inset-0 w-full h-full text-primary-color2"
              style={{ opacity: 0 }}
            />
          </motion.div>
        </div>

        {/* Animated border effect */}
        <motion.span
          className="absolute inset-0 rounded-full border-2 border-transparent pointer-events-none"
          initial={{ opacity: 0 }}
          whileHover={{
            opacity: 1,
            borderColor: "rgba(var(--primary-color2), 0.3)",
          }}
          transition={{ duration: 0.4 }}
        />
      </motion.div>
    </motion.section>
  );
}
