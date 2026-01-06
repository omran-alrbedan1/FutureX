"use client";
import { InfiniteMovingCards } from "../ui/InfiniteMovingCards";
import Title from "../parts/Title";
import { motion } from "framer-motion";
import { images } from "@/constants/images";
import { clients } from "@/constants";

const Clients = () => {

  return (
    <div className="overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Title
          title="Our Clients"
          paragraph="Partnering with forward-thinking organizations worldwide"
          titleClassName="font-serif"
          paragraphClassName="text-gray-600"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <InfiniteMovingCards
          items={clients}
          direction="right"
          speed="normal"
          className="mt-8"
        />
      </motion.div>
    </div>
  );
};

export default Clients;
