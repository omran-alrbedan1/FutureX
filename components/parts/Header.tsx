"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Drawer, Menu } from "antd";

import { Menu as MenuIcon, PhoneIcon, X, User } from "lucide-react";
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
    link: "/services/mobile-app",
  },
  {
    id: 2,
    title: "Web Application Development",
    description:
      "Custom platforms to manage your business from anywhere using Laravel, Node.js, React, and ASP.NET.",
    image: icons.web_application,
    link: "/services/web-app",
  },
  {
    id: 3,
    title: "Printing Services",
    description:
      "High-quality printing services including business cards, brochures, banners, and promotional materials.",
    image: icons.printer,
    link: "/services/printing",
  },
  {
    id: 4,
    title: "UI/UX Design",
    description:
      "Creating designs that make users comfortable and confident in your product.",
    image: icons.figma,
    link: "/services/ui-ux",
  },
  {
    id: 5,
    title: "Custom Software Systems",
    description:
      "ERP, CRM, hospital/clinic systems, school systems, and POS solutions.",
    image: icons.system,
    link: "/services/software",
  },
  {
    id: 6,
    title: "Digital Marketing",
    description:
      "Social media management, targeted ads, and professional marketing campaigns.",
    image: icons.digital,
    link: "/services/marketing",
  },
];

const Header = () => {
  const t = useTranslations("header");
  const [open, setOpen] = useState(false);
  const path = usePathname();
  const [windowWidth, setWindowWidth] = useState(0);
  const [isClient, setIsClient] = useState(false);
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

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [open]);

  const showDrawer = () => setOpen(true);
  const onClose = () => setOpen(false);

  if (!isClient) {
    return (
      <header className="fixed top-0 w-full h-16 bg-white dark:bg-darkMod-200 z-50 shadow-md">
        <div className="flex justify-between items-center h-full px-6">
          <div className="w-32 h-10 bg-gray-200 dark:bg-gray-700 rounded"></div>
          <div className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded"></div>
        </div>
      </header>
    );
  }

  return (
    <header className="fixed top-0 w-full dark:bg-darkMod-200 bg-white z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center h-16 lg:h-24 px-4 lg:px-8">
        <Link
          href="/home"
          className="flex items-center focus:!border-none border-none"
        >
          <Image
            src={images.logo}
            width={windowWidth > 1024 ? 150 : 50}
            height={windowWidth > 1024 ? 160 : 30}
            alt="logo"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-4">
          <nav className="flex items-center">
            <ul className="flex space-x-6">
              {/* Home */}
              <li>
                <Link
                  href="/home"
                  className={`text-[16px] font-medium px-3 py-2 rounded-md transition-colors ${
                    isActiveLink("/en/home")
                      ? "text-primary-color1"
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
                  className={`text-[16px] font-medium px-3 py-2 rounded-md transition-colors ${
                    isActiveLink("/en/about-us")
                      ? "text-primary-color1 fontsm"
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
                      className={`text-[16px] font-medium rounded-md transition-colors ${
                        isActiveLink("/en/services")
                          ? "text-primary-color1"
                          : "text-gray-700 dark:text-gray-300 hover:text-primary-color1"
                      }`}
                    >
                      Our Services
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <motion.ul
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="grid w-[400px] gap-2 p-6 md:w-[600px] md:grid-cols-2 lg:w-[800px] shadow-xl bg-white dark:bg-darkMod-200 rounded-xl border border-gray-100 dark:border-gray-700"
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
                                className={`block select-none space-y-1 p-4 no-underline outline-none transition-all duration-300 hover:bg-gray-50 dark:hover:bg-darkMod-300 h-full ${
                                  isActiveLink(service.link)
                                    ? "bg-gray-50 dark:bg-darkMod-300"
                                    : ""
                                }`}
                              >
                                <div className="flex items-start gap-4">
                                  <motion.div className="shrink-0 p-3 group-hover:rotate-3 rounded-xl bg-primary-color1/10 group-hover:bg-primary-color1/20 transition-all duration-300">
                                    <Image
                                      src={service.image}
                                      width={42}
                                      height={42}
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

                                  <div className="flex-1 space-y-2">
                                    <h3
                                      className={`text-sm font-semibold ${
                                        isActiveLink(service.link)
                                          ? "text-primary-color1"
                                          : "text-gray-900 dark:text-white group-hover:text-primary-color1"
                                      } transition-colors duration-300`}
                                    >
                                      {service.title}
                                    </h3>
                                    <motion.div
                                      initial={{ height: 40 }}
                                      className="overflow-hidden"
                                    >
                                      <p
                                        className={`text-xs leading-relaxed leading max-w-32 ${
                                          isActiveLink(service.link)
                                            ? "text-gray-700 dark:text-gray-300"
                                            : "text-gray-600 dark:text-gray-400"
                                        } transition-all duration-300 group-hover:text-gray-700 dark:group-hover:text-gray-300`}
                                      >
                                        {service.description}
                                      </p>
                                    </motion.div>
                                  </div>
                                </div>

                                {/* Active link indicator */}
                                {isActiveLink(service.link) && (
                                  <div className="absolute top-0 right-0 w-1 h-full bg-primary-color1 rounded-l-full" />
                                )}

                                {/* Subtle hover effect */}
                                <motion.div
                                  className="absolute inset-0 -z-10 bg-gradient-to-br from-primary-color1/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                  initial={{ scale: 0.9 }}
                                />
                              </Link>
                            </NavigationMenuLink>
                          </motion.li>
                        ))}
                      </motion.ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              {/* Our Projects */}
              <li>
                <Link
                  href="/projects"
                  className={`text-[16px] font-medium px-3 py-2 rounded-md transition-colors ${
                    isActiveLink("/en/projects")
                      ? "text-primary-color1"
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
                  className={`text-[16px] font-medium px-3 py-2 rounded-md transition-colors ${
                    isActiveLink("/contact-us")
                      ? "text-primary-color1"
                      : "text-gray-700 dark:text-gray-300 hover:text-primary-color1"
                  }`}
                  style={{ direction: isArabic ? "rtl" : "ltr" }}
                >
                  {t("contact")}
                </Link>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-4 mb-2 ml-4">
            <ThemeToggler />
          </div>
        </div>

        <div className="flex lg:hidden items-center gap-4">
          <button
            className="text-primary-color1 focus:outline-none"
            onClick={showDrawer}
          >
            <MenuIcon className="w-8 h-8" />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {/* <Drawer
        title={
          <div className="flex justify-between items-center">
            <Link href="/home" className="flex items-center gap-1">
              <Image
                src={images.logo}
                width={50}
                height={40}
                alt="logo"
                priority
              />
              <p className="ml-3 text-lg font-bold text-primary-color1">
                Optimal
                <span className="text-[#005078] ml-2 dark:text-white-100">
                  Path
                </span>
              </p>
            </Link>
            <button onClick={onClose}>
              <X className="text-primary-color1" />
            </button>
          </div>
        }
        placement={isArabic ? "right" : "left"}
        onClose={onClose}
        open={open}
        width={300}
        closable={false}
        className={`dark:bg-darkMod-200 bg-white ${
          isArabic ? "rtl-drawer" : ""
        }`}
        footer={
          <div className="flex items-center justify-between px-4 py-3 border-t border-gray-200 dark:border-gray-700">
            <ThemeToggler />
          </div>
        }
      >
        <div className="flex flex-col h-full pt-4">
          <Menu
            mode="inline"
            items={[
              {
                key: "/home",
                icon: <GrHomeRounded className="w-5 h-5" />,
                label: (
                  <Link
                    href="/home"
                    className={`text-[16px] font-medium ${
                      isActiveLink("/home")
                        ? "text-primary-color1"
                        : "text-gray-800 dark:text-gray-200"
                    }`}
                    style={{ direction: isArabic ? "rtl" : "ltr" }}
                  >
                    {t("home")}
                  </Link>
                ),
              },
              {
                key: "/about-us",
                icon: <SlInfo className="w-5 h-5" />,
                label: (
                  <Link
                    href="/about-us"
                    className={`text-[16px] font-medium ${
                      isActiveLink("/about-us")
                        ? "text-primary-color1"
                        : "text-gray-800 dark:text-gray-200"
                    }`}
                    style={{ direction: isArabic ? "rtl" : "ltr" }}
                  >
                    {t("about")}
                  </Link>
                ),
              },
              {
                key: "/services",
                icon: <MdOutlineMiscellaneousServices className="w-5 h-5" />,
                label: (
                  <Link
                    href="/services"
                    className={`text-[16px] font-medium ${
                      isActiveLink("/services")
                        ? "text-primary-color1"
                        : "text-gray-800 dark:text-gray-200"
                    }`}
                    style={{ direction: isArabic ? "rtl" : "ltr" }}
                  >
                    Our Services
                  </Link>
                ),
              },
              {
                key: "/career",
                icon: <IoBriefcaseOutline className="w-5 h-5" />,
                label: (
                  <Link
                    href="/career"
                    className={`text-[16px] font-medium ${
                      isActiveLink("/career")
                        ? "text-primary-color1"
                        : "text-gray-800 dark:text-gray-200"
                    }`}
                    style={{ direction: isArabic ? "rtl" : "ltr" }}
                  >
                    {t("career")}
                  </Link>
                ),
              },
              {
                key: "/contact-us",
                icon: <PhoneIcon className="w-5 h-5" />,
                label: (
                  <Link
                    href="/contact-us"
                    className={`text-[16px] font-medium ${
                      isActiveLink("/contact-us")
                        ? "text-primary-color1"
                        : "text-gray-800 dark:text-gray-200"
                    }`}
                    style={{ direction: isArabic ? "rtl" : "ltr" }}
                  >
                    {t("contact")}
                  </Link>
                ),
              },
              {
                key: "/profile",
                icon: <User className="w-5 h-5" />,
                label: (
                  <Link
                    href="/profile"
                    className={`text-[16px] font-medium ${
                      isActiveLink("/profile")
                        ? "text-primary-color1"
                        : "text-gray-800 dark:text-gray-200"
                    }`}
                    style={{ direction: isArabic ? "rtl" : "ltr" }}
                  >
                    Profile
                  </Link>
                ),
              },
            ]}
            selectedKeys={[path]}
            className={`border-r-0 [&_.ant-menu-item]:!h-12 [&_.ant-menu-submenu-title]:!h-12 ${
              isArabic ? "rtl-menu" : ""
            }`}
            style={{ direction: isArabic ? "rtl" : "ltr" }}
          />
        </div>
      </Drawer> */}
    </header>
  );
};

export default Header;
