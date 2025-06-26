"use client";

import ConsultationForm from "@/components/forms/ConsultationForm";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { images } from "@/constants/images";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import Image from "next/image";

const words = [
  { text: "Book" },
  { text: "your" },
  {
    text: "perfect",
    className: "text-primary-color1 dark:text-primary-color1/80 ",
  },
  { text: "consultation" },
];

export default function page() {
  return (
    <div className=" lg:grid lg:grid-cols-7 px-3 xl:px-20  py-5 sm:py-10">
      <motion.div
        initial={{ opacity: 0, x: -140 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.3, delay: 0.3, type: "spring" }}
        className="hidden lg:col-span-3 -mt-4 items-center lg:flex"
      >
        <motion.div
          className=""
          whileHover={{ scale: 1.02 }}
          transition={{
            type: "spring",
            duration: 0.3,
            stiffness: 400,
            damping: 10,
          }}
        >
          <Image
            src={images.consolution}
            width={450}
            height={400}
            alt="Consultation illustration"
            className="hover:scale-105 transition-transform duration-300"
          />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className=" scrollbar-hide  w-full lg:col-span-4 mx-auto "
      >
        <Card className="max-h-[80vh] overflow-y-auto dark:border-gray-700 border-none transition-shadow duration-300 scrollbar-hide">
          <CardHeader className="">
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="flex flex-col items-center justify-center space-y-2"
            >
              <TypewriterEffectSmooth words={words} className="mb-1" />
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-zinc-600 text-sm sm:text-[16px] dark:text-zinc-300 text-center max-w-md flex items-center"
              >
                <Sparkles className="h-4 w-4 mr-2" />
                Fill out the form below and we'll get back to you shortly
              </motion.p>
            </motion.div>
          </CardHeader>

          <CardContent className="p-8 ">
            <ConsultationForm />
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
