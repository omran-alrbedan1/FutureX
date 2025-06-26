// @ts-nocheck
"use client";
import { Suspense } from "react";
import Loader from "@/components/Loader";
import Animate from "@/components/animation/Animate";
import { getTranslations } from "next-intl/server";
import { Timeline } from "@/components/ui/timeline";
import Image from "next/image";
import { motion } from "framer-motion";

const AboutPage = async () => {
  const timelineData = [
    {
      title: "Who We Are",
      content: (
        <Animate x="0" y="20px" delay={0.2} duration={0.8} once={true}>
          <div className="space-y-4">
            <Animate x="0" y="20px" delay={0.4} duration={0.8} once={true}>
              <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed">
                At FutureX, we don't just develop software or offer tech
                services — we craft digital experiences that redefine what's
                possible.
              </p>
            </Animate>
            <Animate x="0" y="20px" delay={0.5} duration={0.8} once={true}>
              <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed">
                We are a leading Arab technology company, born from a deep
                passion for innovation and a clear vision to deliver smart
                digital solutions that serve the local market and compete
                globally. We believe that every bold idea deserves to become a
                real, high-impact product — built with precision, creativity,
                and purpose.
              </p>
            </Animate>
          </div>
        </Animate>
      ),
    },
    {
      title: "Our Vision",
      content: (
        <Animate x="0" y="20px" delay={0.4} duration={0.8} once={true}>
          <div className="space-y-4">
            <Animate x="0" y="20px" delay={0.6} duration={0.8} once={true}>
              <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed">
                To become the #1 technology partner in the Arab world by
                offering integrated, creative, and results-driven digital
                services.
              </p>
            </Animate>
          </div>
        </Animate>
      ),
    },
    {
      title: "Our Mission",
      content: (
        <Animate x="0" y="20px" delay={0.6} duration={0.8} once={true}>
          <div className="space-y-4">
            <Animate x="0" y="20px" delay={0.8} duration={0.8} once={true}>
              <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed">
                To be the bridge between vision and reality — between ambition
                and execution — and to shape a smarter, more human-centered
                technological future.
              </p>
            </Animate>
          </div>
        </Animate>
      ),
    },
    {
      title: "Why FutureX?",
      content: (
        <Animate x="0" y="20px" delay={0.8} duration={0.8} once={true}>
          <div className="space-y-4">
            <Animate x="0" y="20px" delay={0.5} duration={0.8} once={true}>
              <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed">
                Our approach is unique: We begin with deep understanding, then
                innovate, test, and deliver with excellence.
              </p>
            </Animate>
            <Animate x="0" y="20px" delay={0.6} duration={0.8} once={true}>
              <ul
                key="values"
                className="list-disc pl-6 space-y-2 mt-3 text-gray-500 dark:text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed"
              >
                <li>
                  We master the details: We don't just complete projects — we
                  perfect them.
                </li>
                <li>
                  We build long-term partnerships: We grow with our clients,
                  every step of the way.
                </li>
                <li>
                  Our team is complete: A powerhouse of developers, designers,
                  and consultants committed to building scalable, impactful
                  solutions.
                </li>
              </ul>
            </Animate>
          </div>
        </Animate>
      ),
    },
    {
      title: "What We Offer",
      content: (
        <Animate x="0" y="20px" delay={0.8} duration={0.8} once={true}>
          <div className="space-y-4">
            <Animate x="0" y="20px" delay={0.6} duration={0.8} once={true}>
              <ul
                key="services"
                className="list-disc pl-6 space-y-2 mt-3 text-gray-500 dark:text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed"
              >
                <li>
                  Mobile app development (iOS & Android) using Flutter and
                  Native tools
                </li>
                <li>Custom web apps and SaaS platforms</li>
                <li>
                  UX/UI design focused on comfort, clarity, and conversion
                </li>
                <li>
                  Internal systems (ERP, CRM, booking systems, membership
                  platforms)
                </li>
                <li>Tailored solutions for startups and entrepreneurs</li>
                <li>
                  Ongoing technical support, maintenance, and performance
                  optimization
                </li>
              </ul>
            </Animate>
          </div>
        </Animate>
      ),
    },
    {
      title: "Social Media Services",
      content: (
        <Animate x="0" y="20px" delay={0.8} duration={0.8} once={true}>
          <div className="space-y-4">
            <Animate x="0" y="20px" delay={0.5} duration={0.8} once={true}>
              <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed">
                We believe that a brand's digital presence goes far beyond
                development — it's about meaningful engagement.
              </p>
            </Animate>
            <Animate x="0" y="20px" delay={0.6} duration={0.8} once={true}>
              <ul
                key="social-media"
                className="list-disc pl-6 space-y-2 mt-3 text-gray-500 dark:text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed"
              >
                <li>Professional digital content creation</li>
                <li>Social media account management</li>
                <li>Ad campaign planning & execution</li>
                <li>Performance analytics and strategy refinement</li>
                <li>
                  Designing visuals and promo videos with artistic excellence
                </li>
              </ul>
            </Animate>
          </div>
        </Animate>
      ),
    },
    {
      title: "What FutureX Represents",
      content: (
        <Animate x="0" y="20px" delay={0.8} duration={0.8} once={true}>
          <div className="space-y-4">
            <Animate x="0" y="20px" delay={0.5} duration={0.8} once={true}>
              <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed">
                FutureX is more than a company — It's a mindset, an identity,
                and a culture based on:
              </p>
            </Animate>
            <Animate x="0" y="20px" delay={0.6} duration={0.8} once={true}>
              <ul
                key="culture"
                className="list-disc pl-6 space-y-2 mt-3 text-gray-500 dark:text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed"
              >
                <li>
                  <strong>Innovation First:</strong> Constantly pushing
                  boundaries to create groundbreaking solutions
                </li>
                <li>
                  <strong>Arab Digital Excellence:</strong> Proudly regional
                  with global standards
                </li>
                <li>
                  <strong>Human-Centric Approach:</strong> Technology that
                  serves people, not the other way around
                </li>
                <li>
                  <strong>Collaborative Growth:</strong> We succeed when our
                  clients and partners succeed
                </li>
                <li>
                  <strong>Relentless Improvement:</strong> Never satisfied with
                  "good enough"
                </li>
                <li>
                  <strong>Authentic Creativity:</strong> Original ideas that
                  make real impact
                </li>
                <li>
                  <strong>Tech with Purpose:</strong> Every solution must solve
                  real problems
                </li>
              </ul>
            </Animate>
          </div>
        </Animate>
      ),
    },
  ];

  return (
    <main className="min-h-[100vh] overflow-y-auto relative">
      <div className="relative h-[60vh] flex items-center justify-center">
        <Image src={"/images/hero1.jpg"} alt="about_us_image" fill />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-black/60" />

        <div className="relative z-10 text-center px-4">
          <Animate x="0" y="20px" delay={0.2} duration={0.8} once>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-6 md:mb-8"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl shadow-xl font-bold mb-2 md:mb-4">
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="bg-clip-text text-transparent bg-gradient-to-r  from-primary-color2 to-primary-color2/70"
                >
                  About
                </motion.span>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="bg-clip-text ml-2 text-transparent bg-gradient-to-r from-primary-color2 to-primary-color2/70 "
                >
                  Us
                </motion.span>
              </h1>
            </motion.div>
          </Animate>
          <Animate x="0" y="20px" delay={0.4} duration={0.8} once>
            <p className="text-lg md:text-xl text-primary-color1 max-w-2xl mx-auto">
              Where the Future Becomes a Tangible Experience
            </p>
          </Animate>
        </div>
      </div>

      <section className=" mx-auto px-4">
        <div className="relative w-full sm:pt-20 pb-10 px-5 md:px-10 lg:px-20">
          <div className="max-w-[90rem] mx-auto">
            <Timeline data={timelineData} />
          </div>
        </div>
      </section>
    </main>
  );
};

export default function Page() {
  return (
    <Suspense fallback={<Loader />}>
      <AboutPage />
    </Suspense>
  );
}
