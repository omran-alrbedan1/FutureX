import { FaCode } from "react-icons/fa";
import { icons } from "./icons";
import {
  RiCustomerService2Line,
  RiShieldKeyholeLine,
  RiTimeLine,
} from "react-icons/ri";
import { images } from "./images";



export const services = [
  {
    id: 1,
    title: "Mobile App Development",
    description:
      "We specialize in Flutter to develop commercial, reliable, and efficient mobile applications for iOS and Android.",
    image: icons.mobile_application,
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
    color: "from-purple-500 to-purple-600",
  },
  {
    id: 4,
    title: "UI/UX Design",
    description:
      "Creating designs that make users comfortable and confident in your product.",
    image: icons.figma,
    link: "/services/ui-ux",
    color: "from-pink-500 to-pink-600",
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

export const projects = [
  {
    id: 1,
    title: "Tigree - Food Delivery",
    description:
      "Food delivery app designed specifically for Palestine with real-time order tracking",
    category: "Mobile App",
    features: [
      "Restaurant listings by location",
      "Live order tracking",
      "Interactive notification system",
      "Full customer support",
    ],
    image: "/images/hero1.png",
    link: "/projects/tigree",
    client: "Various Restaurants",
    year: 2023,
    tags: ["Food Tech", "Delivery", "Startup"],
  },
  {
    id: 2,
    title: "Glogo - Beauty Services",
    description:
      "Beauty salon booking platform connecting women with top salons in Palestine",
    category: "Mobile App",
    features: [
      "Browse salons by city and specialty",
      "Instant appointment booking",
      "Customer reviews and ratings",
      "Personalized offers",
    ],
    image: "/images/hero2.jpg",
    link: "/projects/glogo",
    client: "Beauty Industry Network",
    year: 2023,
    tags: ["Beauty Tech", "Booking System"],
  },
  {
    id: 3,
    title: "Passporty - Travel Agency",
    description:
      "Digital platform for travel agencies offering comprehensive tourism packages",
    category: "Web Application",
    features: [
      "Tour package browsing",
      "Direct booking system",
      "Multi-language support",
      "Travel campaign management",
    ],
    image: "/images/hero3.jpg",
    link: "/projects/passporty",
    client: "Palestine Travel Association",
    year: 2022,
    tags: ["Tourism", "Booking System"],
  },
  {
    id: 4,
    title: "Perfecto - Kitchen Manufacturing",
    description:
      "Digital platform connecting customers with kitchen manufacturers and showrooms",
    category: "Hybrid App",
    features: [
      "Interactive design catalog",
      "Order tracking system",
      "Home inspection scheduling",
      "ERP integration",
    ],
    image: "/images/hero3.jpg",
    link: "/projects/perfecto",
    client: "Home Solutions Inc.",
    year: 2023,
    tags: ["E-commerce", "Manufacturing"],
  },
  {
    id: 5,
    title: "FutureX ERP",
    description:
      "Comprehensive enterprise resource planning system for industrial companies",
    category: "Web Application",
    features: [
      "Operations management",
      "Integrated accounting",
      "Real-time analytics",
      "Inventory control",
    ],
    image: "/images/hero1.jpg",
    link: "/projects/futurex-erp",
    client: "Manufacturing Partners",
    year: 2022,
    tags: ["Enterprise Software", "Management"],
  },
  {
    id: 6,
    title: "FutureX CRM",
    description:
      "Customer relationship management system with task and support ticket features",
    category: "Web Application",
    features: [
      "Client management",
      "Task tracking",
      "Multi-channel support",
      "Performance analytics",
    ],
    image: "/images/hero2.jpg",
    link: "/projects/futurex-crm",
    client: "Various Businesses",
    year: 2023,
    tags: ["CRM", "Business Tools"],
  },
  {
    id: 7,
    title: "FutureX CRM",
    description:
      "Customer relationship management system with task and support ticket features",
    category: "Web Application",
    features: [
      "Client management",
      "Task tracking",
      "Multi-channel support",
      "Performance analytics",
    ],
    image: "/images/hero2.jpg",
    link: "/projects/futurex-crm",
    client: "Various Businesses",
    year: 2023,
    tags: ["CRM", "Business Tools"],
  },
  {
    id: 8,
    title: "FutureX CRM",
    description:
      "Customer relationship management system with task and support ticket features",
    category: "Web Application",
    features: [
      "Client management",
      "Task tracking",
      "Multi-channel support",
      "Performance analytics",
    ],
    image: "/images/hero2.jpg",
    link: "/projects/futurex-crm",
    client: "Various Businesses",
    year: 2023,
    tags: ["CRM", "Business Tools"],
  },
  {
    id: 9,
    title: "FutureX CRM",
    description:
      "Customer relationship management system with task and support ticket features",
    category: "Web Application",
    features: [
      "Client management",
      "Task tracking",
      "Multi-channel support",
      "Performance analytics",
    ],
    image: "/images/hero2.jpg",
    link: "/projects/futurex-crm",
    client: "Various Businesses",
    year: 2023,
    tags: ["CRM", "Business Tools"],
  },
];

export const sliders = [
  {
    image: "/images/hero1.jpg",
    url: "/",
  },
  {
    image: "/images/hero2.jpg",
    url: "/",
  },
  {
    image: "/images/hero3.jpg",
    url: "/",
  },
  {
    image: "/images/hero4.jpg",
    url: "/",
  },
  {
    image: "/images/hero5.jpg",
    url: "/",
  },
  {
    image: "/images/hero6.jpg",
    url: "/",
  },
];

export const FAQs = [
  {
    value: "technologies",
    question: "What technologies do you specialize in?",
    answer:
      "We specialize in artificial intelligence, machine learning, cloud computing, AR/VR development, and cybersecurity solutions. Our team stays at the forefront of technological advancements to deliver innovative solutions.",
    icon: FaCode,
  },
  {
    value: "support",
    question: "Do you offer ongoing support?",
    answer:
      "Yes, we provide comprehensive maintenance and support packages including regular updates, monitoring, security patches, and technical support to ensure your solution evolves with your business needs.",
    icon: RiCustomerService2Line,
  },
  {
    value: "security",
    question: "How do you ensure data security?",
    answer:
      "We implement end-to-end encryption, secure authentication, regular security audits, and comply with international standards like GDPR and ISO 27001 to ensure your data remains protected.",
    icon: RiShieldKeyholeLine,
  },
  {
    value: "timeline",
    question: "What's your project timeline?",
    answer:
      "Project timelines vary by scope and complexity. Small projects typically take 4-8 weeks, while enterprise solutions may span 3-6 months. We'll provide a detailed timeline during consultation.",
    icon: RiTimeLine,
  },
];

export const testimonials = [
  {
    id: 1,
    quote:
      "Future X transformed our business with their AI analytics platform. We've seen a 42% increase in operational efficiency and gained valuable insights ",
    name: "Emily Richardson",
    title: "CTO, Quantum Innovations",
    rating: 5,
  },
  {
    id: 2,
    quote:
      "The VR training solution developed by Future X has revolutionized how we onboard new employees. Training time has been reduced by 60%",
    name: "Michael Donovan",
    title: "Director of Operations",
    rating: 5,
  },
  {
    id: 3,
    quote:
      "Future X's cybersecurity solution has given us peace of mind. Their proactive approach to threat detection has prevented several potential breaches.",
    name: "Sarah Jennings",
    title: "CISO, Global Financial Group",
    rating: 5,
  },
  {
    id: 4,
    quote:
      "The cloud migration executed by Future X was flawless. They minimized disruption to our operations and delivered on time and within budget",
    name: "Robert Chen",
    title: "IT Director",
    rating: 5,
  },
];

export const clients = [
  {
    id: 1,
    title: "Tigree",
    image: images.tigree,
  },
  {
    id: 2,
    title: "Glogo",
    image: images.glogo,
  },
  {
    id: 3,
    title: "Litaskunu",
    image: images.litaskunu,
  },
  {
    id: 4,
    title: "OptimaPath",
    image: images.optimal,
  },
  {
    id: 5,
    title: "Passporty",
    image: images.passporty,
  },
  {
    id: 6,
    title: "Perfecto",
    image: images.perfecto  ,
  },

];
