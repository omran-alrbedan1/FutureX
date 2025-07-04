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
              className="dark:bg-gray-900  text-black border border-gray-200 dark:border-none p-0 overflow-hidden"
            >
              <div className="relative h-full bg-white rounded-xl overflow-hidden shadow-sm transition-all duration-300 group-hover:shadow-xl dark:bg-gray-900 border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm">
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
        <div className="text-center mt-4">
          <a
            href="#contact"
            className="
          group inline-flex items-center gap-3 
          font-medium px-6 py-3 rounded-full
          border border-primary/20 dark:border-primary/30
          bg-white/90 dark:bg-[#1A1A24]/90
          text-primary dark:text-primary-foreground
          hover:bg-white dark:hover:bg-[#232330]
          hover:shadow-md hover:border-primary/40
          backdrop-blur-sm
          transition-all duration-300
        "
          >
            See More Projects
            <span className="ml-1 transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </motion.div>
    </motion.section>
  );
}
