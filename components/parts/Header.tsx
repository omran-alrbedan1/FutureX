"use client";

import LanguageSwitcher from "@/components/elements/Switcher";
import { ThemeToggler } from "@/components/ui/ThemeToggler";
import { images } from "@/constants/images";
import { SearchOutlined } from "@ant-design/icons";
import { Dropdown, Input, Menu } from "antd";
import { Heart, MessageCircle, User, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { FaChevronDown } from "react-icons/fa6";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  FaBriefcase,
  FaBuilding,
  FaCar,
  FaHome,
  FaLaptop,
  FaTools,
} from "react-icons/fa";
import { IoAddSharp } from "react-icons/io5";

const Header = () => {
  const t = useTranslations("header");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const path = usePathname();
  const [windowWidth, setWindowWidth] = useState(0);
  const [isClient, setIsClient] = useState(false);

  const isArabic = path.includes("/ar");

  useEffect(() => {
    setIsClient(true);
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth >= 1024 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const menuStyle = {
    borderRadius: "12px",
    padding: "16px 8px",
    borderRight: "none",
  };

  const iconMap = {
    home: <FaHome />,
    properties: <FaBuilding />,
    cars: <FaCar />,
    electronics: <FaLaptop />,
    jobs: <FaBriefcase />,
    services: <FaTools />,
  };

  const categories: Record<
    string,
    { items: { labelKey: string; href: string }[] }
  > = {
    properties: {
      items: [
        { labelKey: "forSale", href: "/properties/sale" },
        { labelKey: "forRent", href: "/properties/rent" },
        { labelKey: "forExchange", href: "/properties/exchange" },
        { labelKey: "apartments", href: "/properties/apartments" },
        { labelKey: "villas", href: "/properties/villas" },
      ],
    },
    cars: {
      items: [
        { labelKey: "carsForSale", href: "/cars/sale" },
        { labelKey: "carsForRent", href: "/cars/rent" },
        { labelKey: "spareParts", href: "/cars/parts" },
      ],
    },
    electronics: {
      items: [
        { labelKey: "phones", href: "/electronics/phones" },
        { labelKey: "computers", href: "/electronics/computers" },
        { labelKey: "appliances", href: "/electronics/appliances" },
      ],
    },
  };

  const renderCategoryDropdownWithIcon = (
    categoryKey: string,
    categoryLabelKey: string,
    IconComponent: React.ReactNode
  ) => {
    const menuItems = categories[categoryKey].items.map((item, index) => ({
      key: index,
      label: <Link href={item.href}>{t(item.labelKey)}</Link>,
    }));

    return (
      <Dropdown
        menu={{
          items: menuItems,
        }}
        placement={isArabic ? "bottomRight" : "bottomLeft"}
      >
        <div className="flex items-center cursor-pointer px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-primary-color1 group relative">
          <span className="mr-1 rtl:ml-1">{IconComponent}</span>
          {t(categoryLabelKey)}
          <span className="inline-block ml-1 rtl:mr-1 transition-transform duration-300 group-hover:rotate-180">
            <FaChevronDown size={10} />
          </span>
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary-color1 transition-all duration-300 group-hover:w-full"></span>
        </div>
      </Dropdown>
    );
  };

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
    <header className="bg-white dark:bg-darkMod-200 shadow-sm sticky top-0 z-50 shadow-gray-200 dark:shadow-gray-700">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            <Link href="/home" className="flex items-center">
              <Image
                src={images.logo}
                alt={t("platformName")}
                width={50}
                height={50}
                className=" object-contain"
              />
            </Link>
          </div>
          <button
            className="md:hidden group p-2 mt-3 focus:outline-none"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <div className="relative w-7 h-7">
              <span
                className={`absolute block h-[3px] w-7 bg-primary-color1 transition-all duration-300 ease-out ${
                  isMenuOpen
                    ? "rotate-45 translate-y-[0.35rem]"
                    : "-translate-y-2"
                }`}
              ></span>
              <span
                className={`absolute block h-[3px] w-7 bg-primary-color1 transition-all duration-300 ease-out ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`absolute block h-[3px] w-7 bg-primary-color1 transition-all duration-300 ease-out ${
                  isMenuOpen
                    ? "-rotate-45 translate-y-[-0.35rem]"
                    : "translate-y-2"
                }`}
              ></span>
            </div>
          </button>

          <div className="hidden md:flex flex-1 mx-2 max-w-xl">
            <Input
              placeholder={t("searchPlaceholder")}
              size="large"
              className="w-full"
              allowClear
              style={{
                borderRadius: "9999px",
                overflow: "hidden",
                height: "45px",
              }}
              prefix={
                <SearchOutlined
                  className="rtl:pl-2 ltr:pr-2"
                  style={{
                    color: "#9CA3AF",
                    transition: "all 0.3s ease",
                  }}
                />
              }
            />
          </div>

          <div className="hidden md:flex items-center space-x-3 rtl:space-x-reverse ">
            <button className="p-2 text-gray-400 hover:text-primary-color1  sm:inline-flex">
              <Heart className="w-5 h-5" />
            </button>

            <button className="p-2 text-gray-400 hover:text-primary-color1  sm:inline-flex">
              <MessageCircle className="w-5 h-5" />
            </button>

            <button className="p-2 text-gray-400 hover:text-primary-color1">
              <User className="w-5 h-5" />
            </button>

            <div className="max-md:hidden flex items-center justify-center gap-3">
              <ThemeToggler />
              <LanguageSwitcher />
            </div>
            <button className="hidden md:flex items-center rounded-[9px] space-x-1 rtl:space-x-reverse bg-primary-color1 text-white px-4 py-[6px]  hover:bg-primary-color1/90">
              <IoAddSharp className="w-4 h-4" />
              <span>{t("postAd")}</span>
            </button>
          </div>
        </div>

        <nav className="hidden md:flex items-center space-x-6 rtl:space-x-reverse mt-2 py-2 border-t border-gray-200 dark:border-gray-700">
          <Link
            href="/home"
            className="flex items-center text-gray-700 dark:text-gray-300 hover:text-primary-color1 font-medium text-sm py-2 relative group"
          >
            <FaHome className="w-4 h-4 mr-1 rtl:ml-1 text-gray-500 dark:text-gray-400" />
            {t("home")}
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary-color1 transition-all duration-300 group-hover:w-full"></span>
          </Link>

          {renderCategoryDropdownWithIcon(
            "properties",
            "realEstate",
            <FaBuilding />
          )}

          {renderCategoryDropdownWithIcon("cars", "cars", <FaCar />)}

          {renderCategoryDropdownWithIcon(
            "electronics",
            "electronics",
            <FaLaptop />
          )}

          <Link
            href="/jobs"
            className="flex items-center text-gray-700 dark:text-gray-300 hover:text-primary-color1 font-medium text-sm py-2 relative group"
          >
            <FaBriefcase className="w-4 h-4 mr-1 rtl:ml-1 text-gray-500 dark:text-gray-400" />
            {t("jobs")}
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary-color1 transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link
            href="/services"
            className="flex items-center text-gray-700 dark:text-gray-300 hover:text-primary-color1 font-medium text-sm py-2 relative group"
          >
            <FaTools className="w-4 h-4 mr-1 rtl:ml-1 text-gray-500 dark:text-gray-400" />
            {t("services")}
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary-color1 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </nav>
      </div>

      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-700 ease-in-out ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMenu}
      >
        <div
          className={`absolute top-0 ${
            isArabic ? "right-0" : "left-0"
          } h-full w-72 bg-white dark:bg-darkMod-200 shadow-lg transition-transform duration-700 ease-in-out ${
            isMenuOpen
              ? "translate-x-0"
              : isArabic
              ? "translate-x-full"
              : "-translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center p-4 shadow-sm shadow-gray-200 dark:shadow-gray-700">
            <Link href="/home" className="flex items-center">
              <Image
                src={images.logo}
                alt={t("platformName")}
                width={40}
                height={40}
              />
            </Link>
            <button onClick={toggleMenu}>
              <X className="text-gray-600 dark:text-gray-300" />
            </button>
          </div>

          <div className="p-4">
            <div className="relative mb-4">
              <Input
                placeholder={t("search")}
                size="middle"
                className="w-full h-9"
                allowClear
                style={{
                  borderRadius: "9999px",
                  overflow: "hidden",
                }}
                prefix={
                  <SearchOutlined
                    className="rtl:pl-2 ltr:pr-2"
                    style={{
                      color: "#9CA3AF",
                      transition: "all 0.3s ease",
                    }}
                  />
                }
              />
            </div>

            <Menu
              mode="inline"
              style={menuStyle}
              items={[
                {
                  key: "home",
                  icon: iconMap.home,
                  label: (
                    <Link href="/home" className="font-medium">
                      {t("home")}
                    </Link>
                  ),
                },
                {
                  key: "properties",
                  icon: iconMap.properties,
                  label: t("realEstate"),
                  children: categories.properties.items.map(
                    (item: any, index: number) => ({
                      key: `properties-${index}`,
                      label: (
                        <Link href={item.href} className="font-medium">
                          {t(item.labelKey)}
                        </Link>
                      ),
                    })
                  ),
                },
                {
                  key: "cars",
                  icon: iconMap.cars,
                  label: t("cars"),
                  children: categories.cars.items.map(
                    (item: any, index: number) => ({
                      key: `cars-${index}`,
                      label: (
                        <Link href={item.href} className="font-medium">
                          {t(item.labelKey)}
                        </Link>
                      ),
                    })
                  ),
                },
                {
                  key: "electronics",
                  icon: iconMap.electronics,
                  label: t("electronics"),
                  children: categories.electronics.items.map(
                    (item: any, index: number) => ({
                      key: `electronics-${index}`,
                      label: (
                        <Link href={item.href} className="font-medium">
                          {t(item.labelKey)}
                        </Link>
                      ),
                    })
                  ),
                },
                {
                  key: "jobs",
                  icon: iconMap.jobs,
                  label: (
                    <Link href="/jobs" className="font-medium">
                      {t("jobs")}
                    </Link>
                  ),
                },
                {
                  key: "services",
                  icon: iconMap.services,
                  label: (
                    <Link href="/services" className="font-medium">
                      {t("services")}
                    </Link>
                  ),
                },
              ]}
              inlineIndent={12}
              className="custom-menu"
            />
            <div className="flex  items-center justify-between mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
              <ThemeToggler />
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
