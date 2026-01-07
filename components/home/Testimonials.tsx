"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { RiStarFill, RiUser3Fill } from "react-icons/ri";
import { motion } from "framer-motion";
import Title from "../parts/Title";
import { testimonials } from "@/constants";
const Testimonials = () => {
 

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);

    for (let i = 0; i < fullStars; i++) {
      stars.push(<RiStarFill key={`full-${i}`} className="text-primary text-xl mr-1" />);
    }

  
    return stars; 
  };

  return (
    <section id="testimonials" className="py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 md:mb-16"
        >
          <Title
            title="What Clients Say About Us"
            paragraph="Hear from our clients about their experiences working with our team
            and the impact of our solutions."
            titleClassName="font-serif text-2xl md:text-3xl lg:text-4xl"
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
      className="w-full max-w-6xl mx-auto relative px-2 sm:px-0"
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
          <CarouselContent className="-ml-2 sm:-ml-4">
            {testimonials.map((testimonial,index) => (
              <CarouselItem
                key={index}
                className="pl-2 sm:pl-4 basis-full md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1 sm:p-2">
                  <div
                    className="
                    bg-gray-900
                    p-6 sm:p-8 rounded-lg h-full
                    border border-gray-800
                    min-h-[320px] sm:min-h-[360px] flex flex-col justify-between
                  "
                  >
                    <div>
                      <div className="flex items-center mb-4 sm:mb-6">
                        <div className="flex">
                          {renderStars(testimonial.rating)}
                        </div>
                      </div>
                      <p
                        className="
                        text-gray-300 
                        mb-6 text-base sm:text-lg leading-relaxed
                        line-clamp-4 sm:line-clamp-5
                      "
                      >
                        "{testimonial.quote}"
                      </p>
                    </div>
                    
                    <div className="flex items-center mt-4">
                      <div
                        className="
                        w-10 h-10 sm:w-12 sm:h-12
                        bg-gray-800 
                        rounded-full flex items-center justify-center mr-3 sm:mr-4
                        flex-shrink-0
                      "
                      >
                        <RiUser3Fill className="text-gray-400 text-lg sm:text-xl" />
                      </div>
                      <div className="min-w-0">
                        <h4
                          className="
                          text-base sm:text-lg font-semibold 
                          text-white
                          truncate
                        "
                        >
                          {testimonial.name}
                        </h4>
                        <p className="text-gray-400 text-sm sm:text-base truncate">
                          {testimonial.title}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="absolute left-0 top-1/2 hover:text-primary-500 hover:scale-125 transition-all duration-300 -translate-y-1/2 -translate-x-6 sm:-translate-x-8 md:-translate-x-12 flex sm:hidden md:flex" />
          <CarouselNext className="testimonial-next absolute right-0 top-1/2 hover:text-primary-500 hover:scale-125 transition-all duration-300 -translate-y-1/2 translate-x-6 sm:translate-x-8 md:translate-x-12 flex sm:hidden md:flex" />
        </div>
      </Carousel>
    </div>
  );
};

export default Testimonials;