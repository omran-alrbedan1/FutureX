"use client";
import { motion } from "framer-motion";

interface TitleProps {
  title: string;
  paragraph?: string;
  titleClassName?: string;
  paragraphClassName?: string;
  containerClassName?: string;
  animationType?: "fade" | "slide" | "zoom";
  delay?: number;
}

const   Title: React.FC<TitleProps> = ({
  title,
  paragraph,
  titleClassName = "",
  paragraphClassName = "",
  delay = 0.2,
}) => {
  const variants = {
    fade: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
  };

  return (
    <motion.div
      className={`flex flex-col items-center text-center`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      transition={{ staggerChildren: 0.2 }}
    >
      <motion.h2
        variants={variants.fade}
        transition={{ duration: 0.6, delay }}
        className={`text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-white via-white to-primary   bg-clip-text text-transparent ${titleClassName}`}
      >
        {title}
      </motion.h2>

      {paragraph && (
        <motion.p
          variants={variants.fade}
          transition={{ duration: 0.6, delay: delay + 0.2 }}
          className={`mt-4 text-md md:text-lg text-muted-foreground dark:text-gray-400 max-w-2xl ${paragraphClassName}`}
        >
          {paragraph}
        </motion.p>
      )}
    </motion.div>
  );
};

export default Title;
