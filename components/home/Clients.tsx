"use client";
import { InfiniteMovingCards } from "../ui/InfiniteMovingCards";
import { icons } from "@/constants/icons";
import Title from "../parts/Title";
import { motion } from "framer-motion";

const Clients = () => {
  // Mock clients data
  const clients = [
    {
      id: 1,
      url: "https://example.com/client1",
      title: "TechNova Solutions",
      image: icons.clients,
    },
    {
      id: 2,
      url: "https://example.com/client2",
      title: "Global Enterprises",
      image: icons.clients,
    },
    {
      id: 3,
      url: "https://example.com/client3",
      title: "FutureX",
      image: icons.clients,
    },
    {
      id: 4,
      url: "https://example.com/client4",
      title: "OptimaPath",
      image: icons.clients,
    },
    {
      id: 5,
      url: "https://example.com/client5",
      title: "Quantum Innovations",
      image: icons.clients,
    },
    {
      id: 6,
      url: "https://example.com/client6",
      title: "Vertex Systems",
      image: icons.clients,
    },
  ];

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
