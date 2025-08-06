"use client";
import { images } from "@/constants/images";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Hero = () => {
  const router = useRouter();
  return (
    <div className="relative mx-auto flex w-full items-center justify-between -mt-6 overflow-hidden  min-h-screen ">
      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl px-6 md:px-12 lg:px-16 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Main Headline */}
            <div className="animate-slide-in-left">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-gray-900 dark:text-white">
                Building the
                <br />
                <span className="text-primary bg-clip-text ">Future</span>
                <br />
                of Technology
              </h1>
            </div>

            {/* Description Text */}
            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-lg animate-slide-in-left-delay">
              At Future X, we transform ideas into reality through cutting-edge
              mobile apps, stunning web development, innovative tech solutions,
              and premium printing services. Your vision, our expertise –
              limitless possibilities.
            </p>

            {/* Button Group */}
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-in-left-delay-2">
              {/* Primary Button */}
              <button
                onClick={() => router.push("/consultation")}
                className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform"
              >
                Start Your Project
              </button>

              {/* Secondary Button */}
              <button
                onClick={() => router.push("/projects")}
                className="flex items-center gap-2 text-gray-700 dark:text-gray-400 px-8 py-4 font-semibold hover:text-primary transition-colors duration-300 group border-2 border-gray-200 rounded-lg hover:border-primary"
              >
                View Our Projects
                <span className="transform group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </button>
            </div>
          </div>

          {/* Right Column - Floating Images */}
          <div className="relative h-[600px] hidden lg:block">
            {/* Top Right - Gaming/Social Scene (Two people with tablet) */}
            <div className="absolute top-0 right-0 w-80 h-56 rounded-2xl overflow-hidden shadow-2xl transform rotate-2 hover:scale-105 hover:rotate-4 transition-all duration-500 animate-float-1">
              <Image
                src={images.hero4}
                alt="Future X - Mobile and Web Development"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Left Side - Woman with laptop (Coffee shop scene) */}
            <div className="absolute top-32 left-0 w-64 h-80 rounded-2xl overflow-hidden shadow-2xl transform -rotate-3 hover:scale-105 hover:-rotate-5 transition-all duration-500 animate-float-2">
              <Image
                src={images.hero1}
                alt="Future X - Mobile and Web Development"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Bottom Center - Office workspace with team */}
            <div className="absolute bottom-8 left-20 w-72 h-44 rounded-2xl overflow-hidden shadow-2xl transform rotate-1 hover:scale-105 hover:rotate-3 transition-all duration-500 animate-float-3">
              <Image
                src={images.hero2}
                alt="Future X - Mobile and Web Development"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Right Middle - Person in green (Portrait style) */}
            <div
              className="absolute top-48 right-8 w-48 h-64 rounded-2xl overflow-hidden shadow-2xl transform rotate-3 hover:scale-105 hover:rotate-5 transition-all duration-500 animate-float-1"
              style={{ animationDelay: "1s" }}
            >
              <Image
                src={images.hero3}
                alt="Future X - Mobile and Web Development"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes float1 {
          0%,
          100% {
            transform: translateY(0px) rotate(3deg);
          }
          50% {
            transform: translateY(-20px) rotate(3deg);
          }
        }

        @keyframes float2 {
          0%,
          100% {
            transform: translateY(0px) rotate(-2deg);
          }
          50% {
            transform: translateY(15px) rotate(-2deg);
          }
        }

        @keyframes float3 {
          0%,
          100% {
            transform: translateY(0px) rotate(1deg);
          }
          50% {
            transform: translateY(-10px) rotate(1deg);
          }
        }

        @keyframes floatDot1 {
          0%,
          100% {
            transform: translateY(0px);
            opacity: 0.5;
          }
          50% {
            transform: translateY(-20px);
            opacity: 1;
          }
        }

        @keyframes floatDot2 {
          0%,
          100% {
            transform: translateY(0px);
            opacity: 0.3;
          }
          50% {
            transform: translateY(15px);
            opacity: 0.8;
          }
        }

        @keyframes floatDot3 {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.4;
          }
          50% {
            transform: translateY(-10px) translateX(5px);
            opacity: 0.9;
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 1.2s ease-out 0.3s both;
        }

        .animate-slide-in-left {
          animation: slideInLeft 1.2s ease-out 0.3s both;
        }

        .animate-slide-in-left-delay {
          animation: slideInLeft 1s ease-out 0.6s both;
        }

        .animate-slide-in-left-delay-2 {
          animation: slideInLeft 1s ease-out 0.9s both;
        }

        .animate-float-1 {
          animation: float1 4s ease-in-out infinite;
        }

        .animate-float-2 {
          animation: float2 3s ease-in-out infinite 1s;
        }

        .animate-float-3 {
          animation: float3 5s ease-in-out infinite 2s;
        }

        .animate-float-dot-1 {
          animation: floatDot1 4s ease-in-out infinite;
        }

        .animate-float-dot-2 {
          animation: floatDot2 3s ease-in-out infinite 1s;
        }

        .animate-float-dot-3 {
          animation: floatDot3 5s ease-in-out infinite 2s;
        }
      `}</style>
    </div>
  );
};

export default Hero;
