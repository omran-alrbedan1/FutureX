"use client";
import { images } from "@/constants/images";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineMail, MdOutlinePhoneIphone } from "react-icons/md";
import { RiTelegramFill } from "react-icons/ri";
import { FaTools, FaProjectDiagram, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/utils/motion";
import { Info } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      icon: (
        <svg
          viewBox="0 0 24 24"
          aria-label="X"
          role="img"
          className="w-5 h-5"
          fill="currentColor"
        >
          <g>
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
          </g>
        </svg>
      ),
      href: "/",
    },
    { icon: <RiTelegramFill className="text-xl" />, href: "/" },
    { icon: <FaFacebookF className="text-lg" />, href: "/" },
    { icon: <FaInstagram className="text-lg" />, href: "/" },
    { icon: <FaLinkedinIn className="text-lg" />, href: "/" },
  ];

  const contactItems = [
    {
      icon: <FaLocationDot className="text-xl dark:text-gray-400" />,
      text: "   Jordan - Amman",
    },
    {
      icon: <MdOutlineMail className="text-xl dark:text-gray-400" />,
      text: "futxtech@gmail.com",
    },
    {
      icon: <MdOutlineMail className="text-xl dark:text-gray-400" />,
      text: "Waleedalbarghouthi2@gmail.com",
    },
    {
      icon: <MdOutlinePhoneIphone className="text-xl dark:text-gray-400" />,
      text: " +962 780 185 759",
    },
  ];

  const quickLinks = [
    {
      name: "About Us",
      href: "/about",
      icon: <Info className=" size-5" />,
    },
    {
      name: "Our Services",
      href: "/services",
      icon: <FaTools className="text-sm" />,
    },
    {
      name: "Our Projects",
      href: "/projects",
      icon: <FaProjectDiagram className="text-sm" />,
    },
    {
      name: "Contact Us",
      href: "/contact",
      icon: <FaEnvelope className="text-sm" />,
    },
  ];

  return (
    <footer className="relative  pt-16 pb-12 border-t border-gray-300 dark:border-gray-700 dark:bg-darkMod-700">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="space-y-16">
            <div className="flex items-center justify-center  flex-col -mt-10">
              <Image
                src={images.logo}
                width={120}
                height={120}
                className="size-10 md:size-24 lg:size-44 -mb-8"
                alt="Optimal Path Logo"
              />
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                Your trusted partner for innovative solutions and exceptional
                services that drive business growth.
              </p>
            </div>

            <div className="flex space-x-3 mt-44">
              {socialLinks.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  target="_blank"
                  className="p-2 rounded-full bg-white dark:bg-darkMod-400 text-gray-700 dark:text-gray-200 hover:bg-primary-color1 hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg transform hover:-translate-y-1"
                >
                  {item.icon}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-12 after:h-1 after:bg-gradient-to-r from-primary-color1 to-primary-color2">
              Contact Us
            </h3>
            <ul className="space-y-4">
              {contactItems.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-primary-color1 dark:text-primary-color2 mt-0.5 mr-3">
                    {item.icon}
                  </span>
                  <span className="text-gray-600 dark:text-gray-300 text-sm">
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <motion.div
            variants={staggerContainer(0.1, 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="space-y-3"
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-12 after:h-1 after:bg-gradient-to-r from-primary-color1 to-primary-color2">
              Quick Links
            </h3>

            <ul className="space-y-0">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  variants={fadeIn("right", "tween", 0.2 + index * 0.1, 0.5)}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link
                    href={link.href}
                    className="group flex items-center p-1.5 rounded-lg transition-all duration-300 hover:bg-white/10 hover:shadow-sm dark:hover:bg-darkMod-400/50"
                  >
                    <motion.span
                      className="text-primary-color1  dark:text-gray-400 mr-3 text-lg"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      {link.icon}
                    </motion.span>

                    <span className="text-gray-600 dark:text-gray-300 flex-1">
                      {link.name}
                    </span>

                    <motion.span
                      className="text-xs text-primary-color1 opacity-0 group-hover:opacity-100"
                      initial={{ x: -10 }}
                      whileInView={{ x: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </motion.span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>

      <div className="flex w-[90%] textgray items-center justify-center absolute bottom-[8px] md:bottom-[12px] left-1/2 -translate-x-1/2">
        <span className="basis-[1px] flex-grow h-[1px] md:h-[1.5px] bg-gradient-to-r from-primary-color1 to-primary-color2 " />
        <div className="text-gray-600 dark:text-gray-300  mx-3 text-sm text-center md:text-left">
          &copy; {new Date().getFullYear()}{" "}
          <p className="text-primary-color1 inline-block font-semibold ">
            FUTURE <span className="text-primary-color2">X</span>
          </p>
          . All rights reserved.
        </div>
        <span className="basis-[1px] flex-grow h-[1px] md:h-[1.5px] bg-gradient-to-r from-primary-color2 to-primary-color1" />
      </div>
    </footer>
  );
};

export default Footer;
