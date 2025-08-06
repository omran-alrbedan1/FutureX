"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Drawer, Menu } from "antd";

import {
  Menu as MenuIcon,
  PhoneIcon,
  X,
  User,
  ChevronDown,
} from "lucide-react";
import { SlInfo } from "react-icons/sl";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { GrHomeRounded } from "react-icons/gr";
import { IoBriefcaseOutline } from "react-icons/io5";
import { ThemeToggler } from "@/components/ui/ThemeToggler";
import { useTranslations } from "next-intl";

import { images } from "@/constants/images";
import { icons } from "@/constants/icons";
import { motion, AnimatePresence } from "framer-motion";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const services = [
  {
    id: 1,
    title: "Mobile App Development",
    description:
      "We specialize in Flutter to develop commercial, reliable, and efficient mobile applications for iOS and Android.",
    image: icons.mobile_application,
    link: "/services/1",
  },
  {
    id: 2,
    title: "Web Application Development",
    description:
      "Custom platforms to manage your business from anywhere using Laravel, Node.js, React, and ASP.NET.",
    image: icons.web_application,
    link: "/services/2",
  },
  {
    id: 3,
    title: "Printing Services",
    description:
      "High-quality printing services including business cards, brochures, banners, and promotional materials.",
    image: icons.printer,
    link: "/services/3",
  },
  {
    id: 4,
    title: "UI/UX Design",
    description:
      "Creating designs that make users comfortable and confident in your product.",
    image: icons.figma,
    link: "/services/4",
  },
  {
    id: 5,
    title: "Custom Software Systems",
    description:
      "ERP, CRM, hospital/clinic systems, school systems, and POS solutions.",
    image: icons.system,
    link: "/services/5",
  },
  {
    id: 6,
    title: "Digital Marketing",
    description:
      "Social media management, targeted ads, and professional marketing campaigns.",
    image: icons.digital,
    link: "/services/6",
  },
];

const Header = () => {
  const t = useTranslations("header");
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const path = usePathname();
  const [windowWidth, setWindowWidth] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  const isArabic = path.includes("/ar");

  // Helper function to check if a link is active
  const isActiveLink = (linkPath: string) => {
    return path === linkPath || path.startsWith(`en/${linkPath}/`);
  };

  useEffect(() => {
    setIsClient(true);
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth >= 1024 && open) {
        setOpen(false);
      }
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [open]);

  const showDrawer = () => setOpen(true);
  const onClose = () => setOpen(false);

  if (!isClient) {
    return (
      <header className="fixed top-0 w-full h-16 bg-white dark:bg-darkMod-200 z-50 shadow-md">
        <div className="flex justify-between items-center h-full px-4 sm:px-6">
          <div className="w-24 sm:w-32 h-8 sm:h-10 bg-gray-200 dark:bg-gray-700 rounded"></div>
          <div className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded"></div>
        </div>
      </header>
    );
  }

  return (
    <header
      className={`fixed top-0 w-full dark:bg-[#0B192C] bg-white z-50 transition-all duration-300 ${
        isScrolled
          ? "shadow-lg backdrop-blur-md bg-white/95 dark:bg-[#0B192C]/95"
          : "shadow-md"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center h-14 sm:h-16 lg:h-20 xl:h-24 px-3 sm:px-4 lg:px-6 xl:px-8">
        {/* Logo Section - Responsive */}
        <Link
          href="/home"
          className="flex items-center justify-center focus:!border-none border-none shrink-0"
        >
          <Image
            src={images.logo2}
            width={
              windowWidth >= 1280
                ? 80
                : windowWidth >= 1024
                ? 65
                : windowWidth >= 768
                ? 45
                : 35
            }
            height={
              windowWidth >= 1280
                ? 80
                : windowWidth >= 1024
                ? 65
                : windowWidth >= 768
                ? 45
                : 35
            }
            alt="Future X logo"
            priority
            className="transition-all duration-300"
          />
          <h2
            className={`ml-1 sm:ml-2 font-semibold bg-gradient-to-r from-primary-color1 via-primary-color1 to-primary-color2 bg-clip-text text-transparent transition-all duration-300 ${
              windowWidth >= 1280
                ? "text-2xl xl:text-3xl"
                : windowWidth >= 1024
                ? "text-xl lg:text-2xl"
                : windowWidth >= 768
                ? "text-lg"
                : "text-base"
            }`}
          >
            Future X
          </h2>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-2 xl:gap-4">
          <nav className="flex items-center">
            <ul className="flex space-x-3 xl:space-x-6">
              {/* Home */}
              <li>
                <Link
                  href="/home"
                  className={`text-sm xl:text-base font-medium px-2 xl:px-3 py-2 rounded-md transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-800 ${
                    isActiveLink("/en/home")
                      ? "text-primary-color1 "
                      : "text-gray-700 dark:text-gray-300 hover:text-primary-color1"
                  }`}
                  style={{ direction: isArabic ? "rtl" : "ltr" }}
                >
                  {t("home")}
                </Link>
              </li>

              {/* About */}
              <li>
                <Link
                  href="/about-us"
                  className={`text-sm xl:text-base font-medium px-2 xl:px-3 py-2 rounded-md transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-800 ${
                    isActiveLink("/en/about-us")
                      ? "text-primary-color1 "
                      : "text-gray-700 dark:text-gray-300 hover:text-primary-color1"
                  }`}
                  style={{ direction: isArabic ? "rtl" : "ltr" }}
                >
                  {t("about")}
                </Link>
              </li>

              {/* Services Dropdown */}
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger
                      className={`text-sm xl:text-base font-medium rounded-md dark:bg-[#0B192C] transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-800 ${
                        isActiveLink("/en/services")
                          ? "text-primary-color1 "
                          : "text-gray-700 dark:text-gray-300 hover:text-primary-color1"
                      }`}
                    >
                      Our Services
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="!border-none">
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className={`grid gap-2 p-4 xl:p-6 bg-white dark:bg-slate-900 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 ${
                          windowWidth >= 1280
                            ? "w-[800px] md:grid-cols-2"
                            : windowWidth >= 1024
                            ? "w-[600px] md:grid-cols-2"
                            : "w-[500px] grid-cols-1"
                        }`}
                      >
                        {services.map((service, index) => (
                          <motion.li
                            key={service.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                              duration: 0.3,
                              ease: "easeOut",
                              delay: index * 0.1,
                            }}
                            whileHover={{ scale: 1.02 }}
                            className="relative overflow-hidden rounded-lg group"
                          >
                            <NavigationMenuLink asChild>
                              <Link
                                href={service.link}
                                className={`block select-none space-y-1 p-3 xl:p-4 no-underline outline-none transition-all duration-300 hover:bg-gray-50 dark:hover:bg-darkMod-300 h-full rounded-lg ${
                                  isActiveLink(service.link)
                                    ? "bg-gray-50 dark:bg-darkMod-300"
                                    : ""
                                }`}
                              >
                                <div className="flex items-start gap-3">
                                  <motion.div className="shrink-0 p-2 xl:p-3 group-hover:rotate-3 rounded-xl  group-hover:bg-primary-color1/20 transition-all duration-300">
                                    <Image
                                      src={service.image}
                                      width={windowWidth >= 1280 ? 42 : 36}
                                      height={windowWidth >= 1280 ? 42 : 36}
                                      alt={service.title}
                                      className={`${
                                        isActiveLink(service.link)
                                          ? "text-primary-color1"
                                          : "text-gray-600 dark:text-gray-400"
                                      }`}
                                      priority={false}
                                      loading="lazy"
                                    />
                                  </motion.div>

                                  <div className="flex-1 space-y-1 xl:space-y-2">
                                    <h3
                                      className={`text-xs xl:text-sm font-semibold ${
                                        isActiveLink(service.link)
                                          ? "text-primary-color1"
                                          : "text-gray-900 dark:text-white group-hover:text-primary-color1"
                                      } transition-colors duration-300`}
                                    >
                                      {service.title}
                                    </h3>
                                    <p
                                      className={`text-xs leading-relaxed ${
                                        isActiveLink(service.link)
                                          ? "text-gray-700 dark:text-gray-300"
                                          : "text-gray-600 dark:text-gray-400"
                                      } transition-all duration-300 group-hover:text-gray-700 dark:group-hover:text-gray-300`}
                                    >
                                      {service.description}
                                    </p>
                                  </div>
                                </div>

                                {/* Active link indicator */}
                                {isActiveLink(service.link) && (
                                  <div className="absolute top-0 right-0 w-1 h-full bg-primary-color1 rounded-l-full" />
                                )}
                              </Link>
                            </NavigationMenuLink>
                          </motion.li>
                        ))}
                      </motion.div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              {/* Our Projects */}
              <li>
                <Link
                  href="/projects"
                  className={`text-sm xl:text-base font-medium px-2 xl:px-3 py-2 rounded-md transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-800 ${
                    isActiveLink("/en/projects")
                      ? "text-primary-color1 "
                      : "text-gray-700 dark:text-gray-300 hover:text-primary-color1"
                  }`}
                  style={{ direction: isArabic ? "rtl" : "ltr" }}
                >
                  {t("ourProjects")}
                </Link>
              </li>

              {/* Contact */}
              <li>
                <Link
                  href="/en/contact-us"
                  className={`text-sm xl:text-base font-medium px-2 xl:px-3 py-2 rounded-md transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-800 ${
                    isActiveLink("/contact-us")
                      ? "text-primary-color1 "
                      : "text-gray-700 dark:text-gray-300 hover:text-primary-color1"
                  }`}
                  style={{ direction: isArabic ? "rtl" : "ltr" }}
                >
                  {t("contact")}
                </Link>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-2 xl:gap-4 ml-2 xl:ml-4">
            <ThemeToggler />
          </div>
        </div>

        {/* Mobile/Tablet Navigation Button */}
        <div className="flex lg:hidden items-center gap-2 sm:gap-4">
          <div className="hidden md:block">
            <ThemeToggler />
          </div>
          <button
            className="text-primary-color1 focus:outline-none p-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
            onClick={showDrawer}
            aria-label="Open navigation menu"
          >
            <MenuIcon className="w-6 h-6 sm:w-7 sm:h-7" />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <Drawer
        title={
          <div className="flex justify-between items-center w-full">
            <Link
              href="/home"
              className="flex items-center gap-2"
              onClick={onClose}
            >
              <Image
                src={images.logo2}
                width={40}
                height={40}
                alt="Future X logo"
                priority
              />
              <h2 className="text-lg font-bold bg-gradient-to-r from-primary-color1 via-primary-color1 to-primary-color2 bg-clip-text text-transparent">
                Future X
              </h2>
            </Link>
            <button
              onClick={onClose}
              className="p-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
            >
              <X className="text-primary-color1 w-5 h-5" />
            </button>
          </div>
        }
        placement={isArabic ? "right" : "left"}
        onClose={onClose}
        open={open}
        width={windowWidth >= 768 ? 350 : 280}
        closable={false}
        className={`dark:bg-darkMod-200 bg-white ${
          isArabic ? "rtl-drawer" : ""
        }`}
        styles={{
          body: { padding: 0 },
          header: {
            borderBottom: "1px solid #e5e7eb",
            padding: "16px 20px",
          },
        }}
        footer={
          <div className="flex items-center justify-between px-6 py-4 border-t border-gray-200 dark:border-gray-700 md:hidden">
            <ThemeToggler />
          </div>
        }
      >
        <div className="flex flex-col h-full">
          <div className="flex-1 overflow-y-auto py-4">
            {/* Mobile Navigation Menu */}
            <nav className="space-y-2 px-4">
              {/* Home */}
              <Link
                href="/home"
                onClick={onClose}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                  isActiveLink("/home")
                    ? "text-primary-color1 "
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
              >
                <GrHomeRounded className="w-5 h-5" />
                <span className="font-medium">{t("home")}</span>
              </Link>

              {/* About */}
              <Link
                href="/about-us"
                onClick={onClose}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                  isActiveLink("/about-us")
                    ? "text-primary-color1 "
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
              >
                <SlInfo className="w-5 h-5" />
                <span className="font-medium">{t("about")}</span>
              </Link>

              {/* Services with Submenu */}
              <div className="space-y-2">
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className={`flex items-center justify-between w-full px-4 py-3 rounded-lg transition-all duration-300 ${
                    isActiveLink("/services")
                      ? "text-primary-color1 "
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <MdOutlineMiscellaneousServices className="w-5 h-5" />
                    <span className="font-medium">Our Services</span>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${
                      servicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="ml-6 space-y-1"
                    >
                      {services.map((service) => (
                        <Link
                          key={service.id}
                          href={service.link}
                          onClick={onClose}
                          className={`flex items-center gap-3  py-2 rounded-lg transition-all duration-300 text-sm ${
                            isActiveLink(service.link)
                              ? "text-primary-color1 bg-primary-color1/5"
                              : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800/50"
                          }`}
                        >
                          <Image
                            src={service.image}
                            width={20}
                            height={20}
                            alt={service.title}
                            className="shrink-0"
                          />
                          <span>{service.title}</span>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Projects */}
              <Link
                href="/projects"
                onClick={onClose}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                  isActiveLink("/projects")
                    ? "text-primary-color1 "
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
              >
                <IoBriefcaseOutline className="w-5 h-5" />
                <span className="font-medium">{t("ourProjects")}</span>
              </Link>

              {/* Contact */}
              <Link
                href="/en/contact-us"
                onClick={onClose}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                  isActiveLink("/contact-us")
                    ? "text-primary-color1 "
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
              >
                <PhoneIcon className="w-5 h-5" />
                <span className="font-medium">{t("contact")}</span>
              </Link>
            </nav>
          </div>
        </div>
      </Drawer>
    </header>
  );
};

export default Header;
