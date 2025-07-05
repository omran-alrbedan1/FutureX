import { icons } from "@/constants/icons";
import {
  FaMobileAlt,
  FaRocket,
  FaPaintBrush,
  FaShieldAlt,
  FaSync,
  FaSearch,
  FaServer,
  FaDesktop,
  FaDatabase,
  FaPrint,
  FaTruck,
  FaUser,
  FaPalette,
  FaCogs,
  FaChartLine,
  FaHashtag,
  FaAd,
} from "react-icons/fa";

export const services = [
  {
    id: 1,
    title: "Mobile App Development",
    shortDescription:
      "We specialize in Flutter to develop commercial, reliable, and efficient mobile applications for iOS and Android.",
    longDescription: [
      "Cross-platform development using Flutter for consistent performance across iOS and Android",
      "Custom app development tailored to your business requirements",
      "Integration with backend systems and third-party APIs",
      "Rigorous testing to ensure bug-free performance",
      "App store deployment and post-launch support",
    ],
    image: icons.mobile_application,
    link: "/services/mobile-app",
    features: [
      {
        icon: <FaMobileAlt className="text-primary-color1" />,
        title: "Cross-Platform",
        description: "Single codebase for both iOS and Android",
      },
      {
        icon: <FaRocket className="text-primary-color1" />,
        title: "High Performance",
        description: "60fps smooth animations and fast load times",
      },
      {
        icon: <FaPaintBrush className="text-primary-color1" />,
        title: "Beautiful UI",
        description: "Custom designs that match your brand",
      },
      {
        icon: <FaShieldAlt className="text-primary-color1" />,
        title: "Secure",
        description: "Enterprise-grade security measures",
      },
      {
        icon: <FaSync className="text-primary-color1" />,
        title: "Real-time Sync",
        description: "Instant data updates across devices",
      },
      {
        icon: <FaSearch className="text-primary-color1" />,
        title: "App Store Optimization",
        description: "Higher visibility in app stores",
      },
    ],
    technologies: [
      "Flutter",
      "Dart",
      "Firebase",
      "REST APIs",
      "BLoC Pattern",
      "GetX",
    ],
    relatedProjects: [
      {
        id: 1,
        title: "E-Commerce App",
        description: "A complete shopping solution for your business",
        detailedDescription: [
          "Built with Flutter for cross-platform compatibility",
          "Integrated with Firebase for real-time updates",
          "Secure payment gateway integration",
          "Admin dashboard for product management",
          "Customer reviews and ratings system",
        ],
        image: "/images/hero1.jpg",
        tags: ["Flutter", "Firebase", "Payment Gateway"],
      },
      {
        id: 2,
        title: "Fitness Tracker",
        description: "Comprehensive health and fitness companion",
        detailedDescription: [
          "Workout planning and progress tracking",
          "Nutrition and calorie intake monitoring",
          "Integration with wearable devices",
          "Personalized exercise recommendations",
          "Social features for community motivation",
        ],
        image: "/images/hero2.jpg",
        tags: ["Dart", "BLoC", "Health API"],
      },
    ],
  },
  {
    id: 2,
    title: "Web Application Development",
    shortDescription:
      "Custom platforms to manage your business from anywhere using Laravel, Node.js, React, and ASP.NET.",
    longDescription: [
      "Full-stack web application development",
      "Responsive design for all devices",
      "Database design and optimization",
      "API development and integration",
      "Performance optimization and security hardening",
    ],
    image: icons.web_application,
    link: "/services/web-app",
    features: [
      {
        icon: <FaServer className="text-primary-color1" />,
        title: "Backend Development",
        description: "Robust server-side logic and APIs",
      },
      {
        icon: <FaDesktop className="text-primary-color1" />,
        title: "Frontend Development",
        description: "Interactive and responsive user interfaces",
      },
      {
        icon: <FaDatabase className="text-primary-color1" />,
        title: "Database Design",
        description: "Optimized data storage solutions",
      },
    ],
    technologies: [
      "Laravel",
      "Node.js",
      "React",
      "ASP.NET",
      "MySQL",
      "MongoDB",
    ],
    relatedProjects: [
      {
        id: 3,
        title: "Business Management Platform",
        description: "All-in-one solution for business operations",
        image: "/images/web1.jpg",
        tags: ["Laravel", "React", "MySQL"],
      },
    ],
  },
  {
    id: 3,
    title: "Printing Services",
    shortDescription:
      "High-quality printing services including business cards, brochures, banners, and promotional materials.",
    longDescription: [
      "Premium quality printing on various materials",
      "Fast turnaround times",
      "Design assistance available",
      "Bulk order discounts",
    ],
    image: icons.printer,
    link: "/services/printing",
    color: "from-purple-500 to-purple-600",
    features: [
      {
        icon: <FaPrint className="text-primary-color1" />,
        title: "High Quality",
        description: "Crisp, vibrant prints every time",
      },
      {
        icon: <FaTruck className="text-primary-color1" />,
        title: "Fast Delivery",
        description: "Quick turnaround times",
      },
    ],
    technologies: ["Offset Printing", "Digital Printing", "Large Format"],
    relatedProjects: [],
  },
  {
    id: 4,
    title: "UI/UX Design",
    shortDescription:
      "Creating designs that make users comfortable and confident in your product.",
    longDescription: [
      "User research and persona development",
      "Wireframing and prototyping",
      "Usability testing",
      "Design system creation",
    ],
    image: icons.figma,
    link: "/services/ui-ux",
    color: "from-pink-500 to-pink-600",
    features: [
      {
        icon: <FaUser className="text-primary-color1" />,
        title: "User-Centered",
        description: "Designs focused on user needs",
      },
      {
        icon: <FaPalette className="text-primary-color1" />,
        title: "Beautiful Interfaces",
        description: "Aesthetically pleasing designs",
      },
    ],
    technologies: ["Figma", "Adobe XD", "Sketch", "User Testing"],
    relatedProjects: [],
  },
  {
    id: 5,
    title: "Custom Software Systems",
    shortDescription:
      "ERP, CRM, hospital/clinic systems, school systems, and POS solutions.",
    longDescription: [
      "Tailored software solutions",
      "Workflow automation",
      "Reporting and analytics",
      "Integration with existing systems",
    ],
    image: icons.system,
    link: "/services/software",
    features: [
      {
        icon: <FaCogs className="text-primary-color1" />,
        title: "Custom Solutions",
        description: "Built specifically for your needs",
      },
      {
        icon: <FaChartLine className="text-primary-color1" />,
        title: "Business Intelligence",
        description: "Powerful reporting tools",
      },
    ],
    technologies: ["Java", ".NET", "Python", "SQL"],
    relatedProjects: [],
  },
  {
    id: 6,
    title: "Digital Marketing",
    shortDescription:
      "Social media management, targeted ads, and professional marketing campaigns.",
    longDescription: [
      "Social media strategy",
      "Content creation",
      "PPC campaign management",
      "Analytics and reporting",
    ],
    image: icons.digital,
    link: "/services/marketing",
    features: [
      {
        icon: <FaHashtag className="text-primary-color1" />,
        title: "Social Media",
        description: "Increased engagement",
      },
      {
        icon: <FaAd className="text-primary-color1" />,
        title: "Targeted Ads",
        description: "Reach your ideal customers",
      },
    ],
    technologies: ["Google Ads", "Facebook Ads", "SEO", "Google Analytics"],
    relatedProjects: [],
  },
];

export const getServiceById = (id: number) => {
  return services.find((service) => service.id === id);
};

export const getAllServices = () => {
  return services.map(
    ({ id, title, shortDescription, image, link, color }) => ({
      id,
      title,
      description: shortDescription,
      image,
      link,
      color,
    })
  );
};
