"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Drawer } from "antd";

import {
  Menu as MenuIcon,
  PhoneIcon,
  X,
  ChevronDown,
} from "lucide-react";
import { SlInfo } from "react-icons/sl";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { GrHomeRounded } from "react-icons/gr";
import { IoBriefcaseOutline } from "react-icons/io5";

import { images } from "@/constants/images";
import { motion } from "framer-motion";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from "@/components/ui/navigation-menu";
import { services } from "@/constants";

const Header = () => {

  const [open, setOpen] = useState(false);
  const path = usePathname();
  const [windowWidth, setWindowWidth] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const isArabic = path.includes("/ar");

  // Helper function to check if a link is active
  const isActiveLink = (linkPath: string | undefined) => {
    if (!linkPath) return false;
    return path === linkPath || path.startsWith(`${linkPath}/`);
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
  const onClose = () => {
    setOpen(false);
  };



  // Desktop Navigation Component
  const DesktopNav = () => (
    <nav className="hidden lg:flex items-center">
      <NavigationMenu>
        <NavigationMenuList className="flex space-x-3 xl:space-x-6 bg-background">
          {/* Home */}
          <NavigationMenuItem
          >
            <Link
              href="/home"
              className={`text-sm xl:text-base font-medium px-2 xl:px-3 py-2 rounded-md transition-all duration-300  ${
                isActiveLink("/home")
                  ? "text-primary-color1 "
                  : "text-gray-300 hover:text-primary-color1"
              }`}
              style={{ direction: isArabic ? "rtl" : "ltr" }}
            >
              Home
            </Link>
          </NavigationMenuItem>

          {/* About */}
          <NavigationMenuItem>
            <Link
              href="/about-us"
              className={`text-sm xl:text-base font-medium px-2 xl:px-3 py-2 rounded-md transition-all duration-300  ${
                isActiveLink("/about-us")
                  ? "text-primary-color1 "
                  : "text-gray-300 hover:text-primary-color1"
              }`}
              style={{ direction: isArabic ? "rtl" : "ltr" }}
            >
              About Us
            </Link>
          </NavigationMenuItem>

          {/* Services Dropdown */}
          <NavigationMenuItem>
            <NavigationMenuTrigger
              className={`text-sm xl:text-base font-medium rounded-md bg-[#0B192C] transition-all duration-300  ${
                isActiveLink("/services")
                  ? "text-primary-color1 "
                  : "text-gray-300 hover:text-primary-color1"
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
                className={`grid gap-2 p-4 xl:p-6 bg-slate-900 rounded-xl shadow-xl border border-gray-700 ${
                  windowWidth >= 1280
                    ? "w-[800px] md:grid-cols-2"
                    : windowWidth >= 1024
                    ? "w-[600px] md:grid-cols-2"
                    : "w-[500px] grid-cols-1"
                }`}
              >
                {services.map((service, index) => (
                  <motion.div
                    key={index}
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
                        href={service.link!}
                        className={`block select-none space-y-1 p-3 xl:p-4 no-underline outline-none transition-all duration-300 hover:bg-darkMod-300 h-full rounded-lg ${
                          isActiveLink(service?.link)
                            ? "bg-darkMod-300"
                            : ""
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <motion.div className="shrink-0 p-2 xl:p-3 group-hover:rotate-3 rounded-xl group-hover:bg-primary-color1/20 transition-all duration-300">
                            <Image
                              src={service.image}
                              width={windowWidth >= 1280 ? 42 : 36}
                              height={windowWidth >= 1280 ? 42 : 36}
                              alt={service.title}
                              className={`${
                                isActiveLink(service.link)
                                  ? "text-primary-color1"
                                  : "text-gray-400"
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
                                  : "text-white group-hover:text-primary-color1"
                              } transition-colors duration-300`}
                            >
                              {service.title}
                            </h3>
                            <p
                              className={`text-xs leading-relaxed ${
                                isActiveLink(service.link)
                                  ? "text-gray-300"
                                  : "text-gray-400"
                              } transition-all duration-300 group-hover:text-gray-300`}
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
                  </motion.div>
                ))}
              </motion.div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Our Projects */}
          <NavigationMenuItem>
            <Link
              href="/projects"
              className={`text-sm xl:text-base font-medium px-2 xl:px-3 py-2 rounded-md transition-all duration-300  ${
                isActiveLink("/projects")
                  ? "text-primary-color1 "
                  : "text-gray-300 hover:text-primary-color1"
              }`}
              style={{ direction: isArabic ? "rtl" : "ltr" }}
            >
              Our Projects
            </Link>
          </NavigationMenuItem>

          {/* Contact */}
          <NavigationMenuItem>
            <Link
              href="/contact-us"
              className={`text-sm xl:text-base font-medium px-2 xl:px-3 py-2 rounded-md transition-all duration-300  ${
                isActiveLink("/contact-us")
                  ? "text-primary-color1 "
                  : "text-gray-300 hover:text-primary-color1"
              }`}
              style={{ direction: isArabic ? "rtl" : "ltr" }}
            >
              Contact Us
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );

// Mobile Drawer Component
const MobileDrawer = () => {
  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <Drawer
      title={
        <div className="flex justify-between items-center bg-background w-full">
          <Link
            href="/home"
            className="flex items-center gap-2"
            onClick={handleLinkClick}
          >
            <Image
              src={images.logo}
              width={80}
              height={40}
              alt="Future X logo"
              priority
              className="object-contain"
            />
          </Link>
          <button
            onClick={onClose}
            className="p-1 rounded-md transition-colors duration-300"
          >
            <X className="text-blue-400 w-5 h-5" />
          </button>
        </div>
      }
      placement={isArabic ? "right" : "left"}
      onClose={onClose}
      open={open}
      width={windowWidth >= 768 ? 350 : 280}
      closable={false}
      className="bg-background"
      styles={{
        wrapper: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)'
        },
        content: {
          backgroundColor: '#081029',
        },
        body: { 
          padding: 0,
          backgroundColor: '#081029',
        },
        header: {
          borderBottom: "1px solid #1e293b",
          padding: "16px 20px",
          backgroundColor: '#081029',
        },
      }}
    >
      <div className="flex flex-col h-full bg-background">
        <div className="flex-1 overflow-y-auto py-4">
          <nav className="space-y-2 px-4">
            {/* Home */}
            <Link
              href="/home"
              onClick={handleLinkClick}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                isActiveLink("/home")
                  ? "text-primary-color1"
                  : "text-gray-300 hover:text-primary-color1"
              }`}
            >
              <GrHomeRounded className="w-5 h-5" />
              <span className="font-medium">Home</span>
            </Link>

            {/* About */}
            <Link
              href="/about-us"
              onClick={handleLinkClick}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                isActiveLink("/about-us")
                  ? "text-primary-color1"
                  : "text-gray-300 hover:text-primary-color1"
              }`}
            >
              <SlInfo className="w-5 h-5" />
              <span className="font-medium">About Us</span>
            </Link>

              <div className="relative">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  // Toggle dropdown manually
                  const dropdown = document.getElementById('services-dropdown');
                  if (dropdown) {
                    dropdown.classList.toggle('hidden');
                  }
                }}
                className={`flex items-center justify-between w-full px-4 py-3 rounded-lg transition-all duration-300 ${
                  isActiveLink("/services")
                    ? "text-primary-color1"
                    : "text-gray-300 hover:text-primary-color1"
                }`}
              >
                <div className="flex items-center gap-3">
                  <MdOutlineMiscellaneousServices className="w-5 h-5" />
                  <span className="font-medium">Our Services</span>
                </div>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {/* Custom dropdown content */}
              <div
                id="services-dropdown"
                className="hidden ml-3 mt-1 space-y-1 rounded-lg p-2"
              >
                {services.map((service, index) => (
                  <Link
                    key={index}
                    href={service.link!}
                    onClick={() => {
                      handleLinkClick();
                      // Close dropdown
                      const dropdown = document.getElementById('services-dropdown');
                      if (dropdown) {
                        dropdown.classList.add('hidden');
                      }
                    }}
                    className={`flex items-center gap-3 py-2 px-3 rounded-md transition-all duration-300 text-sm ${
                      isActiveLink(service.link)
                        ? "text-primary-color1 bg-primary-color1/10"
                        : "text-gray-300 hover:text-primary-color1 hover:bg-primary-color1/5"
                    }`}
                  >
                    <Image
                      src={service.image}
                      width={20}
                      height={20}
                      alt={service.title}
                      className="shrink-0"
                    />
                    <span className="font-medium">{service.title}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Projects */}
            <Link
              href="/projects"
              onClick={handleLinkClick}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                isActiveLink("/projects")
                  ? "text-primary-color1"
                  : "text-gray-300 hover:text-primary-color1"
              }`}
            >
              <IoBriefcaseOutline className="w-5 h-5" />
              <span className="font-medium">Our Projects</span>
            </Link>

            {/* Contact */}
            <Link
              href="/contact-us"
              onClick={handleLinkClick}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                isActiveLink("/contact-us")
                  ? "text-primary-color1"
                  : "text-gray-300 hover:text-primary-color1"
              }`}
            >
              <PhoneIcon className="w-5 h-5" />
              <span className="font-medium">Contact Us</span>
            </Link>
          </nav>
        </div>
      </div>
    </Drawer>
  );
};

  if (!isClient) {
    return (
      <header className="fixed top-0 w-full h-16 bg-background z-50 shadow-md">
      </header>
    );
  }

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 bg-background border-b ${
        isScrolled
          ? "border-primary-color1/20 shadow-lg"
          : "border-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center h-14 sm:h-16 lg:h-20 xl:h-24 px-3 sm:px-4 lg:px-6 xl:px-8">
        <Link
          href="/home"
          className="flex items-center justify-center focus:!border-none border-none shrink-0"
        >
          <Image
            src={images.logo}
            width={132}
            height={132}
            alt="logo"
            className="size-32 p-4 md:size-44"
          />
        </Link>

        {/* Desktop Navigation */}
        <DesktopNav />

        {/* Mobile Navigation Button */}
        <div className="flex lg:hidden items-center gap-2 sm:gap-4">
          <button
            className="text-blue-400 focus:outline-none p-1 rounded-md  transition-colors duration-300"
            onClick={showDrawer}
            aria-label="Open navigation menu"
          >
            <MenuIcon className="w-6 h-6 sm:w-7 sm:h-7" />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <MobileDrawer />
    </header>
  );
};

export default Header;