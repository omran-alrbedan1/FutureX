"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

const Slider = ({ sliders }: { sliders: any }) => {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const startAutoPlay = () => {
      intervalRef.current = setInterval(() => {
        if (!isPaused) {
          setCurrentIndex((prev) => (prev + 1) % sliders.length);
        }
      }, 4200);
    };

    startAutoPlay();
    return () => clearInterval(intervalRef.current);
  }, [sliders.length, isPaused]);

  const handleSlideClick = () => {
    if (sliders[currentIndex].url) {
      router.push(sliders[currentIndex].url);
    }
  };

  return (
    <div
      ref={sliderRef}
      className="absolute  inset-0 h-full w-full overflow-hidden"
    >
      <div
        style={{
          backgroundImage: `url(${sliders[currentIndex].backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 h-full w-full transition-all duration-1000"
        onClick={handleSlideClick}
      />
      <div className="absolute inset-0 bg-black/70 z-0"></div>
    </div>
  );
};

export default Slider;
