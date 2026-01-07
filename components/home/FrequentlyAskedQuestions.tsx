"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  RiCustomerService2Line
} from "react-icons/ri";
import { motion } from "framer-motion";
import Title from "../parts/Title";
import { useRouter } from "next/navigation";
import { FAQs } from "@/constants";

const FrequentlyAskedQuestions = () => {
  const router = useRouter();

  return (
    <div className="">
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
              className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
            >
              {FAQs.map((faq, index) => {
                const Icon = faq.icon;
                return (
                  <AccordionItem
                    key={index}
                    value={faq.value}
                    className="overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-lg border border-gray-700  data-[state=open]:border-blue-500 group transition-all duration-300 hover:shadow-xl"
                  >

                    <AccordionTrigger className="p-6 md:p-8 hover:no-underline text-left group-hover:bg-gradient-to-br from-blue-900/10 to-cyan-900/10 transition-colors">
                      <div className="flex items-center gap-4 w-full">
                        <div
                          className={`text-white bg-primary w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110`}
                        >
                            <Icon className="text-xl"/>
                        </div>
                        <h3 className="text-lg md:text-xl font-bold   text-white flex-1 text-left  group-hover:text-blue-400 transition-colors">
                          {faq.question}
                        </h3>
                      </div>
                    </AccordionTrigger>

                    <AccordionContent className="p-6 md:p-8 pt-0">
                      <div className="pl-16">
                        <div className="h-px w-20 bg-gradient-to-r from-blue-500 to-transparent mb-4" />
                        <p className="text-gray-300 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                )
              })}
            </Accordion>
          </motion.div>


          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, type: "spring", stiffness: 100 }}
            viewport={{ once: true, margin: "-20px" }}
            onClick={() => router.push("/contact-us")}
            className="mt-12 group relative overflow-hidden"
          >
            <div className="text-center mt-12">
              <a
                href="#contact"
                className="
      group inline-flex items-center gap-3 
      font-medium px-6 py-3 rounded-full
      border border-primary/30
    bg-[#1A1A24]/90
      text-primary-foreground
      hover:bg-[#232330]
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