"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SliderProps } from "@/types";
import { useTranslations } from "next-intl";

const Slider = ({ sliders }: { sliders: SliderProps[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout>();
  const t = useTranslations("ourServices");

  useEffect(() => {
    const startAutoPlay = () => {
      intervalRef.current = setInterval(() => {
        if (!isPaused) {
          setCurrentIndex((prev) => (prev + 1) % sliders.length);
        }
      }, 3500);
    };

    startAutoPlay();
    return () => clearInterval(intervalRef.current);
  }, [sliders.length, isPaused]);

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  // Handle drag (swipe)
  const handleDragEnd = (event: any, info: any) => {
    const offset = info.offset.x;
    if (offset < -100) {
      setCurrentIndex((prev) => (prev + 1) % sliders.length);
    } else if (offset > 100) {
      setCurrentIndex((prev) => (prev - 1 + sliders.length) % sliders.length);
    }
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % sliders.length);
    }, 4000);
  };

  return (
    <div
      ref={sliderRef}
      style={{
        backgroundImage: `url(${sliders[currentIndex].backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="relative h-full w-full  overflow-hidden transition-all duration-1000 shadow-2xl"
      onMouseLeave={handleMouseLeave}
    >
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      {/* Slider content */}
      <motion.div
        className="w-full h-full flex justify-center items-center relative z-10"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        onDragEnd={handleDragEnd}
        dragElastic={0.5}
      ></motion.div>
    </div>
  );
};

export default Slider;
