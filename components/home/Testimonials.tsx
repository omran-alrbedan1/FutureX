"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { RiStarFill, RiStarHalfFill, RiUser3Fill } from "react-icons/ri";
import { motion } from "framer-motion";
import Title from "../parts/Title";
const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote:
        "Future X transformed our business with their AI analytics platform. We've seen a 42% increase in operational efficiency and gained valuable insights ",
      name: "Emily Richardson",
      title: "CTO, Quantum Innovations",
      rating: 5,
    },
    {
      id: 2,
      quote:
        "The VR training solution developed by Future X has revolutionized how we onboard new employees. Training time has been reduced by 60%",
      name: "Michael Donovan",
      title: "Director of Operations",
      rating: 5,
    },
    {
      id: 3,
      quote:
        "Future X's cybersecurity solution has given us peace of mind. Their proactive approach to threat detection has prevented several potential breaches.",
      name: "Sarah Jennings",
      title: "CISO, Global Financial Group",
      rating: 4.5,
    },
    {
      id: 4,
      quote:
        "The cloud migration executed by Future X was flawless. They minimized disruption to our operations and delivered on time and within budget",
      name: "Robert Chen",
      title: "IT Director",
      rating: 5,
    },
  ];

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<RiStarFill key={`full-${i}`} className="text-yellow-400" />);
    }

    if (hasHalfStar) {
      stars.push(<RiStarHalfFill key="half" className="text-yellow-400" />);
    }

    return stars;
  };

  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-[#0B0B11]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <Title
            title="What Clients Say About Us"
            paragraph="Hear from our clients about their experiences working with our team
            and the impact of our solutions."
            titleClassName="font-serif"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <AutoAdvancingTestimonialCarousel
            testimonials={testimonials}
            renderStars={renderStars}
          />
        </motion.div>
      </div>
    </section>
  );
};

const AutoAdvancingTestimonialCarousel = ({
  testimonials,
  renderStars,
}: {
  testimonials: any[];
  renderStars: (rating: number) => React.ReactNode;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!isHovered) {
      intervalRef.current = setInterval(() => {
        const nextButton = document.querySelector(
          ".testimonial-next"
        ) as HTMLElement;
        if (nextButton) {
          nextButton.click();
        }
      }, 3000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isHovered]);

  return (
    <div
      className="w-full max-w-6xl mx-auto relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <div className="relative">
          <CarouselContent className="">
            {testimonials.map((testimonial) => (
              <CarouselItem
                key={testimonial.id}
                className="pl-4 basis-full md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1 ">
                  <div
                    className="
                    bg-white dark:bg-gray-900
                    p-8 rounded-lg h-full
                    shadow-md dark:shadow-none
                    border border-gray-100 dark:border-gray-800
                  "
                  >
                    <div className="flex items-center mb-6">
                      <div className="flex">
                        {renderStars(testimonial.rating)}
                      </div>
                    </div>
                    <p
                      className="
                      text-gray-600 dark:text-gray-300 
                      mb-6 text-lg leading-relaxed
                    "
                    >
                      "{testimonial.quote}"
                    </p>
                    <div className="flex items-center">
                      <div
                        className="
                        w-12 h-12 
                        bg-gray-100 dark:bg-gray-800 
                        rounded-full flex items-center justify-center mr-4
                      "
                      >
                        <RiUser3Fill className="text-gray-500 dark:text-gray-400" />
                      </div>
                      <div>
                        <h4
                          className="
                          text-lg font-semibold 
                          text-gray-900 dark:text-white
                        "
                        >
                          {testimonial.name}
                        </h4>
                        <p className="text-gray-500 dark:text-gray-400">
                          {testimonial.title}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="absolute left-0 top-1/2 hover:text-primary-500 hover:scale-125 transition-all duration-300 -translate-y-1/2 -translate-x-12 hidden md:flex" />
          <CarouselNext className="testimonial-next absolute right-0 top-1/2 hover:text-primary-500 hover:scale-125 transition-all duration-300 -translate-y-1/2 translate-x-12 hidden md:flex" />
        </div>
      </Carousel>
    </div>
  );
};

export default Testimonials;
