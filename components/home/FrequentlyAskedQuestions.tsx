"use client";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  RiCustomerService2Line,
  RiShieldKeyholeLine,
  RiTimeLine,
} from "react-icons/ri";
import { FaCode } from "react-icons/fa";
import { motion } from "framer-motion";
import Title from "../parts/Title";
import { useRouter } from "next/navigation";

const FrequentlyAskedQuestions = () => {
  const router = useRouter();
  const faqs = [
    {
      value: "technologies",
      question: "What technologies do you specialize in?",
      answer:
        "We specialize in artificial intelligence, machine learning, cloud computing, AR/VR development, and cybersecurity solutions. Our team stays at the forefront of technological advancements to deliver innovative solutions.",
      icon: <FaCode className="w-5 h-5" />,
      iconBg: "bg-blue-100 dark:bg-blue-900/30",
      iconColor: "text-blue-600 dark:text-blue-400",
    },
    {
      value: "support",
      question: "Do you offer ongoing support?",
      answer:
        "Yes, we provide comprehensive maintenance and support packages including regular updates, monitoring, security patches, and technical support to ensure your solution evolves with your business needs.",
      icon: <RiCustomerService2Line className="w-5 h-5" />,
      iconBg: "bg-purple-100 dark:bg-purple-900/30",
      iconColor: "text-purple-600 dark:text-purple-400",
    },
    {
      value: "security",
      question: "How do you ensure data security?",
      answer:
        "We implement end-to-end encryption, secure authentication, regular security audits, and comply with international standards like GDPR and ISO 27001 to ensure your data remains protected.",
      icon: <RiShieldKeyholeLine className="w-5 h-5" />,
      iconBg: "bg-orange-100 dark:bg-orange-900/30",
      iconColor: "text-orange-600 dark:text-orange-400",
    },
    {
      value: "timeline",
      question: "What's your project timeline?",
      answer:
        "Project timelines vary by scope and complexity. Small projects typically take 4-8 weeks, while enterprise solutions may span 3-6 months. We'll provide a detailed timeline during consultation.",
      icon: <RiTimeLine className="w-5 h-5" />,
      iconBg: "bg-green-100 dark:bg-green-900/30",
      iconColor: "text-green-600 dark:text-green-400",
    },
  ];

  return (
    <div className="bg-white dark:bg-[#0B0B11]">
      <section id="faq" className="pb-10 relative overflow-hidden">
        <div className="container mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <Title
              title="Frequently Asked Questions"
              paragraph=" Find answers to common questions about our services and solutions."
              titleClassName="font-serif"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <Accordion
              type="single"
              collapsible
              className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {faqs.map((faq) => (
                <AccordionItem
                  key={faq.value}
                  value={faq.value}
                  className=" overflow-hidden border-none bg-zinc-50 dark:bg-gray-900 !rounded-lg hover:border-primary/50 transition-colors data-[state=open]:border-primary/50"
                >
                  <AccordionTrigger className="p-6 hover:no-underline text-left">
                    <div className="flex items-center gap-4 w-full">
                      <div
                        className={`${faq.iconBg} ${faq.iconColor} w-10 h-10 rounded-lg flex items-center justify-center shrink-0`}
                      >
                        {faq.icon}
                      </div>
                      <h3 className="text-lg font-semibold text-foreground flex-1 text-left">
                        {faq.question}
                      </h3>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 pt-2">
                    <div className="pl-14">
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, type: "spring", stiffness: 100 }}
            viewport={{ once: true, margin: "-20px" }}
            onClick={() => router.push("https://wa.me/962780185759")}
            className="mt-12 group relative overflow-hidden"
          >
            <div className="text-center mt-12">
              <a
                href="#contact"
                className="
      group inline-flex items-center gap-3 
      font-medium px-6 py-3 rounded-full
      border border-primary/20 dark:border-primary/30
      bg-white/90 dark:bg-[#1A1A24]/90
      text-primary dark:text-primary-foreground
      hover:bg-white dark:hover:bg-[#232330]
      hover:shadow-md hover:border-primary/40
      backdrop-blur-sm
      transition-all duration-300
    "
              >
                <RiCustomerService2Line className="w-5 h-5" />
                Have more questions? Contact our support team
                <span className="ml-1 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FrequentlyAskedQuestions;
