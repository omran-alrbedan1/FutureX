"use client";
import { images } from "@/constants/images";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn, FaWhatsapp
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineMail, MdOutlinePhoneIphone } from "react-icons/md";

const Footer = () => {
  const socialLinks = [
    { icon: <FaWhatsapp className="text-lg" />, href: "https://wa.me/962780185759" },
    { icon: <FaFacebookF className="text-lg" />, href: "https://www.facebook.com/profile.php?id=61585221237420" },
    { icon: <FaInstagram className="text-lg" />, href: "https://www.linkedin.com/company/110596484/admin/page-posts/published" },
    { icon: <FaLinkedinIn className="text-lg" />, href: "https://www.instagram.com/futurex.jo?igsh=NmdqZ2tnb3FwM3o4" },
  ];

  return (
    <footer className="relative pt-10 pb-16 border-t border-gray-800">
      <div className="container mx-auto px-6 sm:pb-5">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Logo and Description Section */}
          <div className="space-y-6">
            <div className="flex items-start justify-start flex-col gap-4">
              <Link
                href="/home"
                className=" flex items-start justify-start focus:!border-none border-none "
              >
                <Image
                  src={images.logo}
                  width={130}
                  height={100}
                  alt="logo"
                  priority
                  className="lg:-mt-2"
                />
           
              </Link>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                Your trusted partner for innovative solutions and exceptional
                services that drive business growth.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex space-x-3">
              {socialLinks.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  target="_blank"
                  className="p-2.5 rounded-full border border-gray-600 dark:border-gray-500 text-gray-700 dark:text-gray-200 hover:bg-blue-500 hover:border-blue-500 hover:text-white transition-all duration-300"
                >
                  {item.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Us Section */}
          <div className="lg:col-span-2">
            <div className="flex flex-col gap-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white relative pb-2 inline-block">
                Contact Us
                <span className="absolute bottom-0 left-0 w-16 h-0.5 bg-blue-500"></span>
              </h3>
              
              {/* Contact Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Location */}
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800">
                    <FaLocationDot className="text-lg text-gray-700 dark:text-gray-300" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                      Jordan - Amman
                    </span>
                  </div>
                </div>

                {/* Email 1 */}
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800">
                    <MdOutlineMail className="text-lg text-gray-700 dark:text-gray-300" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm text-gray-600 dark:text-gray-300">
                      Waleedalbarghouthi2@gmail.com
                    </span>
                  </div>
                </div>

                {/* Email 2 */}
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800">
                    <MdOutlineMail className="text-lg text-gray-700 dark:text-gray-300" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm text-gray-600 dark:text-gray-300">
                      futxtech@gmail.com
                    </span>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800">
                    <MdOutlinePhoneIphone className="text-lg text-gray-700 dark:text-gray-300" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm text-gray-600 dark:text-gray-300">
                      +962 780 185 759
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="flex w-[90%] items-center justify-center absolute bottom-[8px] md:bottom-[12px] left-1/2 -translate-x-1/2">
        <div className="text-gray-600 dark:text-gray-300 mx-3 text-sm text-center md:text-left">
          &copy; {new Date().getFullYear()}{" "}
          <span className="text-primary-color1 inline-block font-semibold">
            FUTURE <span className="text-blue-500">X</span>
          </span>
          . All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;