// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { useTranslations } from "next-intl";
// import { FaPhoneAlt } from "react-icons/fa";
// import { MdEmail } from "react-icons/md";
// import { FaApple, FaGooglePlay } from "react-icons/fa";
// import { images } from "@/constants/images";
// import { usePathname } from "next/navigation";

// const Footer = () => {
//   const t = useTranslations("footer");
//   const path = usePathname();
//   const isArabic = path.includes("/ar");

//   const supportLinks = [
//     {
//       title: t("phoneSupport"),
//       icon: <FaPhoneAlt className="text-lg" />,
//       text: "+910 1AEEEVE",
//     },
//     {
//       title: t("emailSupport"),
//       icon: <MdEmail className="text-lg" />,
//       text: "support@4sale.tech",
//     },
//   ];

//   const quickLinks = [
//     {
//       title: t("information"),
//       links: [
//         { text: t("aboutUs"), href: "/about" },
//         { text: t("termsConditions"), href: "/terms" },
//         { text: t("privacyPolicy"), href: "/privacy" },
//         { text: t("resetPassword"), href: "/reset-password" },
//         { text: t("contactUs"), href: "/contact" },
//         { text: t("blog"), href: "/blog" },
//         { text: t("careers"), href: "/careers" },
//       ],
//     },
//     {
//       title: t("myAccount"),
//       links: [
//         { text: t("accountInfo"), href: "/account" },
//         { text: t("myAds"), href: "/my-ads" },
//         { text: t("favorites"), href: "/favorites" },
//         { text: t("messages"), href: "/messages" },
//         { text: t("notifications"), href: "/notifications" },
//       ],
//     },
//     {
//       title: t("help"),
//       links: [
//         { text: t("transactions"), href: "/transactions" },
//         { text: t("electronics"), href: "/electronics" },
//         { text: t("cars"), href: "/cars" },
//         { text: t("properties"), href: "/properties" },
//         { text: t("jobs"), href: "/jobs" },
//       ],
//     },
//   ];

//   const appStores = [
//     {
//       name: "AppStore",
//       icon: <FaApple className="text-xl" />,
//       url: "#",
//     },
//     {
//       name: "Google Play",
//       icon: <FaGooglePlay className="text-xl" />,
//       url: "#",
//     },
//   ];

//   return (
//     <footer
//       className={`bg-white dark:bg-darkMod-200 pt-10 pb-6 border-t border-gray-200 dark:border-gray-700 ${
//         isArabic ? "text-right" : "text-left"
//       }`}
//     >
//       <div className="container mx-auto px-4">
//         {/* Support Section */}
//         <div className="mb-8">
//           <h3 className="text-lg font-semibold mb-4 dark:text-white">
//             {t("weAreHereToHelp")}
//           </h3>
//           <p className="text-gray-600 dark:text-gray-300 mb-6">
//             {t("contactThroughSupport")}
//           </p>

//           <div className="flex flex-wrap gap-6">
//             {supportLinks.map((item, index) => (
//               <div key={index} className="flex items-start">
//                 <span className="text-primary-color1 dark:text-primary-color2 mt-1 mr-3">
//                   {item.icon}
//                 </span>
//                 <div>
//                   <h4 className="font-medium dark:text-white">{item.title}</h4>
//                   <p className="text-gray-600 dark:text-gray-300">
//                     {item.text}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Quick Links */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
//           {quickLinks.map((section, index) => (
//             <div key={index}>
//               <h4 className="font-semibold mb-4 text-lg dark:text-white">
//                 {section.title}
//               </h4>
//               <ul className="space-y-3">
//                 {section.links.map((link, linkIndex) => (
//                   <li key={linkIndex}>
//                     <Link
//                       href={link.href}
//                       className="text-gray-600 dark:text-gray-300 hover:text-primary-color1 transition-colors"
//                     >
//                       {link.text}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>

//         {/* App Info & Copyright */}
//         <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-200 dark:border-gray-700 pt-6">
//           <div className="mb-4 md:mb-0">
//             <div
//               className={`flex items-center ${
//                 isArabic ? "flex-row-reverse" : ""
//               }`}
//             >
//               <Image
//                 src={images.logo}
//                 width={40}
//                 height={40}
//                 alt={t("platformName")}
//                 className={isArabic ? "ml-2" : "mr-2"}
//               />
//               <h2 className="text-xl font-bold text-primary-color1 dark:text-primary-color2">
//                 {t("platformName")}
//               </h2>
//             </div>
//             <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm">
//               {t("downloadAppDescription")}
//             </p>
//             <p className="text-gray-500 dark:text-gray-400 text-xs mt-2">
//               {t("copyright")}
//             </p>
//           </div>

//           <div className="flex gap-4">
//             {appStores.map((store, index) => (
//               <Link
//                 key={index}
//                 href={store.url}
//                 className="flex items-center justify-center gap-2 bg-gray-100 dark:bg-darkMod-300 hover:bg-gray-200 dark:hover:bg-darkMod-400 px-4 py-2 rounded-lg transition-colors"
//               >
//                 {store.icon}
//                 <span>{store.name}</span>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

"use client";

import { images } from "@/constants/images";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaApple, FaGooglePlay, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const t = useTranslations("footer");
  const path = usePathname();
  const isArabic = path.includes("/ar");

  const supportLinks = [
    {
      title: t("phoneSupport"),
      icon: <FaPhoneAlt className="text-sm" />,
      text: "+910 1AEEEVE",
    },
    {
      title: t("emailSupport"),
      icon: <MdEmail className="text-sm" />,
      text: "support@4sale.tech",
    },
  ];

  const quickLinks = [
    {
      title: t("information"),
      links: [
        { text: t("aboutUs"), href: "/about" },
        { text: t("termsConditions"), href: "/terms" },
        { text: t("privacyPolicy"), href: "/privacy" },
      ],
    },
    {
      title: t("myAccount"),
      links: [
        { text: t("accountInfo"), href: "/account" },
        { text: t("myAds"), href: "/my-ads" },
        { text: t("favorites"), href: "/favorites" },
      ],
    },
    {
      title: t("help"),
      links: [
        { text: t("contactUs"), href: "/contact" },
        { text: t("blog"), href: "/blog" },
        { text: t("careers"), href: "/careers" },
      ],
    },
  ];

  const appStores = [
    {
      name: "AppStore",
      icon: <FaApple className="text-lg" />,
      url: "#",
    },
    {
      name: "Google Play",
      icon: <FaGooglePlay className="text-lg" />,
      url: "#",
    },
  ];

  return (
    <footer
      className={`bg-white dark:bg-darkMod-200 py-6 border-t border-gray-200 dark:border-gray-700 text-sm ${
        isArabic ? "text-right" : "text-left"
      }`}
    >
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-6">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <div
              className={`flex items-center ${
                isArabic ? "flex-row-reverse" : ""
              } mb-3`}
            >
              <Image
                src={images.logo}
                width={32}
                height={32}
                alt={t("platformName")}
                className={isArabic ? "ml-2" : "mr-2"}
              />
              <h2 className="text-lg font-bold text-primary-color1 dark:text-primary-color2">
                {t("platformName")}
              </h2>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4 text-xs">
              {t("downloadAppDescription")}
            </p>

            {/* Support Links - Moved here for better space utilization */}
            <div className="space-y-3">
              {supportLinks.map((item, index) => (
                <div key={index} className="flex items-center">
                  <span className="text-primary-color1 dark:text-primary-color2 mr-2">
                    {item.icon}
                  </span>
                  <div>
                    <p className="text-gray-600 dark:text-gray-300 text-xs">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          {quickLinks.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold mb-3 dark:text-white">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-gray-600 dark:text-gray-300 hover:text-primary-color1 transition-colors text-xs"
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
          <p className="text-gray-500 dark:text-gray-400 text-xs mb-3 md:mb-0">
            {t("copyright")}
          </p>

          <div className="flex gap-3">
            {appStores.map((store, index) => (
              <Link
                key={index}
                href={store.url}
                className="flex items-center justify-center gap-1 bg-gray-100 dark:bg-darkMod-300 hover:bg-gray-200 dark:hover:bg-darkMod-400 px-3 py-1 rounded-md transition-colors text-xs"
              >
                {store.icon}
                <span>{store.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
