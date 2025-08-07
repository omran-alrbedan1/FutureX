"use client";
import Sliders from "@/components/parts/Slider";
import { Button } from "@/components/ui/moving-border";
import { SparklesCore } from "@/components/ui/sparkles";
import { projects, sliders } from "@/constants";
import { images } from "@/constants/images";
import { motion, useAnimate } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Page = () => {
  const [scope] = useAnimate();
  const router = useRouter();

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const staggerItems = {
    visible: { transition: { staggerChildren: 0.1 } },
  };

  return (
    <div ref={scope} className="overflow-hidden max-sm:-mt-6">
      {/* Hero Section */}
      <section className="relative h-[50vh] sm:h-[60vh] flex items-center justify-center">
        <Sliders sliders={sliders} />

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-black/60" />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="bg-clip-text text-transparent bg-gradient-to-r from-primary-color1 to-primary-color2"
              >
                Our Creative
              </motion.span>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-white ml-3"
              >
                Projects
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-xl text-gray-300 mb-8 leading-relaxed"
            >
              Where{" "}
              <span className="text-primary-color1 font-semibold">
                innovation
              </span>{" "}
              meets{" "}
              <span className="text-primary-color2 font-semibold">
                execution
              </span>{" "}
              — explore our curated collection.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800 dark:text-white"
          >
            Selected <span className="text-primary-color1">Works</span> That
            Define <span className="text-primary-color2">Excellence</span>
          </motion.h2>

          <motion.div
            variants={staggerItems}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Button
                  borderRadius="1.25rem"
                  duration={6000 + index * 500}
                  onClick={() => router.push(`/projects/${project.id}`)}
                  className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-700 p-0 h-full group"
                >
                  <div className="relative h-full rounded-xl overflow-hidden transition-all duration-300 group-hover:shadow-2xl">
                    <div className="relative h-56 overflow-hidden">
                      <Image
                        src={project.image}
                        fill
                        alt={project.title}
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    <div className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-primary-color1/10 text-primary-color1">
                          {project.category}
                        </span>
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          0{index + 1}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white group-hover:text-primary-color1 transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-gray-600 dark:text-gray-300 mb-5 line-clamp-2">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
        className="py-20 bg-gradient-to-br text-center from-gray-900 relative overflow-hidden via-gray-800 to-gray-900"
      >
        {/* Main decorative image */}
        <motion.div
          className="absolute bottom-8 right-8 z-10"
          initial={{ scale: 0.8, opacity: 0, rotate: -5 }}
          whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ delay: 0.5, type: "spring" }}
        >
          <Image
            src={images.agreement}
            height={240}
            width={240}
            alt="work illustration"
            className="max-lg:hidden object-contain relative z-10  hover:opacity-100 transition-opacity duration-300"
          />
        </motion.div>

        <div className="max-w-4xl mx-auto px-5 relative z-20">
          <motion.h2
            className="text-4xl md:text-5xl font-serif font-bold text-white mb-6"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, type: "spring" }}
          >
            Let&rsquo;s create something{" "}
            <span className="relative inline-block">
              <span className="relative z-10">amazing</span>
              <motion.span
                className="absolute -bottom-1 left-0 w-full h-2  z-0 bg-gradient-to-l from-primary-color1 to-primary-color2 mt-2"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ delay: 0.4, duration: 0.8, ease: "backOut" }}
              />
            </span>
          </motion.h2>

          <motion.p
            className="text-xl text-gray-300 mb-10 mx-auto max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Ready to bring your vision to life? We&rsquo;d love to hear about
            your project and collaborate on something extraordinary.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block"
          >
            <button
              onClick={() => router.push("/consultation")}
              className="px-6 py-3 text-lg font-semibold bg-gradient-to-r from-primary-color1/60 to-primary-color1 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Start your project
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="group-hover:translate-x-1 transition-transform"
                >
                  →
                </motion.span>
              </span>
            </button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Page;
