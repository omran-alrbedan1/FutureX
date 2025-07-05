import {
  Folder,
  User,
  Calendar,
  Smartphone,
  Server,
  ShieldCheck,
  Globe,
  CreditCard,
  MapPin,
  Bell,
  Clock,
  Map,
  PackageCheck,
  Users,
  Headphones,
  Code,
  BarChart,
  ShoppingCart,
  Settings,
  FileText,
  Layout,
  Database,
  Mail,
} from "lucide-react";

export const projects = [
  {
    id: 1,
    title: "Tigree - Food Delivery",
    description:
      "Food delivery app designed specifically for Palestine with real-time order tracking",
    longDescription:
      "Tigree is revolutionizing food delivery in Palestine with cutting-edge technology tailored to local needs. Our platform bridges the gap between hungry customers and local restaurants through an intuitive mobile experience featuring real-time tracking, seamless payments, and exceptional support.",
    category: "Mobile App",
    features: [
      {
        title: "Restaurant Discovery",
        description: "Find local restaurants by location",
        icon: <MapPin className="w-5 h-5" />,
      },
      {
        title: "Live Tracking",
        description: "Real-time order tracking from kitchen to door",
        icon: <Map className="w-5 h-5" />,
      },
      {
        title: "Smart Notifications",
        description: "Interactive updates at every order stage",
        icon: <Bell className="w-5 h-5" />,
      },
      {
        title: "Customer Support",
        description: "24/7 support with quick resolution",
        icon: <Headphones className="w-5 h-5" />,
      },
    ],
    image: "/images/hero1.jpg",
    link: "/projects/tigree",
    client: "Various Restaurants",
    year: 2023,
    challenges: [
      "Inconsistent addressing systems in some areas",
      "High expectations for delivery times",
      "Diverse payment preferences (cash vs digital)",
    ],
    solutions: [
      "GPS-powered location tracking with landmark references",
      "Hyperlocal delivery partner network",
      "Flexible payment options including cash on delivery",
    ],
    techStack: [
      { name: "React Native", icon: <Smartphone className="w-4 h-4" /> },
      { name: "Node.js", icon: <Server className="w-4 h-4" /> },
      { name: "Firebase", icon: <ShieldCheck className="w-4 h-4" /> },
      { name: "Google Maps API", icon: <Globe className="w-4 h-4" /> },
      { name: "Stripe Payments", icon: <CreditCard className="w-4 h-4" /> },
    ],
    screenshots: [
      {
        title: "Discover Local Cuisine",
        description:
          "Browse hundreds of local restaurants with intuitive filters for cuisine, price, and delivery time",
        image: "/images/hero1.jpg",
        icon: <MapPin className="w-6 h-6" />,
      },
      {
        title: "Real-Time Tracking",
        description:
          "Watch your order progress from preparation to delivery with live rider tracking",
        image: "/images/hero2.jpg",
        icon: <Clock className="w-6 h-6" />,
      },
      {
        title: "Instant Updates",
        description:
          "Get notified at every stage with options to contact the restaurant or rider",
        image: "/images/hero3.jpg",
        icon: <Bell className="w-6 h-6" />,
      },
      {
        title: "Secure Checkout",
        description:
          "Multiple payment options including cash on delivery with order protection",
        image: "/images/hero4.jpg",
        icon: <PackageCheck className="w-6 h-6" />,
      },
    ],
    tags: ["Food Tech", "Delivery", "Startup"],
  },
  {
    id: 2,
    title: "Glogo - Beauty Services",
    description:
      "Beauty salon booking platform connecting women with top salons in Palestine",
    longDescription:
      "Glogo transforms the beauty industry in Palestine by providing a seamless platform for discovering and booking beauty services. Our solution empowers both customers and salon owners with advanced booking management, personalized recommendations, and quality assurance systems.",
    category: "Mobile App",
    features: [
      {
        title: "Salon Discovery",
        description: "Find top-rated salons by specialty and location",
        icon: <MapPin className="w-5 h-5" />,
      },
      {
        title: "Instant Booking",
        description: "Real-time appointment scheduling",
        icon: <Calendar className="w-5 h-5" />,
      },
      {
        title: "Service Catalog",
        description: "Detailed service menus with pricing",
        icon: <Folder className="w-5 h-5" />,
      },
      {
        title: "Beauty Community",
        description: "Share looks and get inspiration",
        icon: <Users className="w-5 h-5" />,
      },
    ],
    image: "/images/hero2.jpg",
    link: "/projects/glogo",
    client: "Beauty Industry Network",
    year: 2023,
    challenges: [
      "Last-minute cancellations",
      "Quality consistency across salons",
      "Payment security concerns",
    ],
    solutions: [
      "Automated reminders and confirmation system",
      "Verified salon program with quality standards",
      "Secure in-app payments with escrow",
    ],
    techStack: [
      { name: "Flutter", icon: <Smartphone className="w-4 h-4" /> },
      { name: "Firebase", icon: <ShieldCheck className="w-4 h-4" /> },
      { name: "Node.js", icon: <Server className="w-4 h-4" /> },
      { name: "Stripe", icon: <CreditCard className="w-4 h-4" /> },
    ],
    screenshots: [
      {
        title: "Salon Listings",
        description: "Browse salons with ratings, photos and services",
        image: "/images/hero2.jpg",
        icon: <MapPin className="w-6 h-6" />,
      },
      {
        title: "Booking Flow",
        description: "Simple 3-step booking process",
        image: "/images/hero3.jpg",
        icon: <Calendar className="w-6 h-6" />,
      },
      {
        title: "Service Details",
        description: "Complete information about each service",
        image: "/images/hero4.jpg",
        icon: <Folder className="w-6 h-6" />,
      },
    ],
    tags: ["Beauty Tech", "Booking System"],
  },
  {
    id: 3,
    title: "Passporty - Travel Agency",
    description:
      "Digital platform for travel agencies offering comprehensive tourism packages",
    longDescription:
      "Passporty modernizes travel agencies in Palestine with a complete digital solution for managing tours, bookings, and customer relationships. Our platform handles everything from itinerary planning to payment processing, helping agencies compete in the digital age.",
    category: "Web Application",
    features: [
      {
        title: "Tour Packages",
        description: "Curated travel experiences with detailed itineraries",
        icon: <Globe className="w-5 h-5" />,
      },
      {
        title: "Multi-Language",
        description: "Support for Arabic, English and Hebrew",
        icon: <Users className="w-5 h-5" />,
      },
      {
        title: "Booking System",
        description: "Integrated reservation management",
        icon: <Calendar className="w-5 h-5" />,
      },
      {
        title: "Campaign Manager",
        description: "Create and track marketing campaigns",
        icon: <Code className="w-5 h-5" />,
      },
    ],
    image: "/images/hero3.jpg",
    link: "/projects/passporty",
    client: "Palestine Travel Association",
    year: 2022,
    challenges: [
      "Complex visa requirements",
      "Seasonal demand fluctuations",
      "High customer service expectations",
    ],
    solutions: [
      "Automated document checklist system",
      "Dynamic pricing engine",
      "Integrated customer support portal",
    ],
    techStack: [
      { name: "React.js", icon: <Code className="w-4 h-4" /> },
      { name: "Node.js", icon: <Server className="w-4 h-4" /> },
      { name: "MongoDB", icon: <ShieldCheck className="w-4 h-4" /> },
      { name: "Google Translate API", icon: <Globe className="w-4 h-4" /> },
    ],
    screenshots: [
      {
        title: "Tour Packages",
        description: "Browse international and local tour packages",
        image: "/images/hero3.jpg",
        icon: <Globe className="w-6 h-6" />,
      },
      {
        title: "Itinerary Planner",
        description: "Detailed day-by-day travel plans",
        image: "/images/hero4.jpg",
        icon: <Calendar className="w-6 h-6" />,
      },
      {
        title: "Customer Portal",
        description: "Manage bookings and documents",
        image: "/images/hero1.jpg",
        icon: <Users className="w-6 h-6" />,
      },
    ],
    tags: ["Tourism", "Booking System"],
  },
  {
    id: 4,
    title: "Perfecto - Kitchen Manufacturing",
    description:
      "Digital platform connecting customers with kitchen manufacturers and showrooms",
    longDescription:
      "Perfecto revolutionizes kitchen design and manufacturing in Palestine with a digital-first approach. Our platform bridges the gap between homeowners and manufacturers, offering 3D design tools, material selection, and project management all in one place.",
    category: "Hybrid App",
    features: [
      {
        title: "3D Design Tool",
        description: "Visualize your dream kitchen in 3D",
        icon: <Code className="w-5 h-5" />,
      },
      {
        title: "Material Catalog",
        description: "Browse thousands of materials and finishes",
        icon: <Folder className="w-5 h-5" />,
      },
      {
        title: "Project Tracking",
        description: "Monitor your kitchen manufacturing progress",
        icon: <Clock className="w-5 h-5" />,
      },
      {
        title: "Expert Consultation",
        description: "Connect with kitchen design specialists",
        icon: <Users className="w-5 h-5" />,
      },
    ],
    image: "/images/hero3.jpg",
    link: "/projects/perfecto",
    client: "Home Solutions Inc.",
    year: 2023,
    challenges: [
      "Custom manufacturing complexity",
      "High customer expectations for visualization",
      "Long project timelines",
    ],
    solutions: [
      "Interactive 3D configurator with real-time pricing",
      "Augmented reality preview feature",
      "Milestone-based project tracking",
    ],
    techStack: [
      { name: "React Native", icon: <Smartphone className="w-4 h-4" /> },
      { name: "Three.js", icon: <Code className="w-4 h-4" /> },
      { name: "Node.js", icon: <Server className="w-4 h-4" /> },
      { name: "MongoDB", icon: <ShieldCheck className="w-4 h-4" /> },
    ],
    screenshots: [
      {
        title: "Design Studio",
        description: "Create your perfect kitchen layout",
        image: "/images/hero4.jpg",
        icon: <Code className="w-6 h-6" />,
      },
      {
        title: "Material Selection",
        description: "Choose from premium materials",
        image: "/images/hero1.jpg",
        icon: <Folder className="w-6 h-6" />,
      },
      {
        title: "Project Dashboard",
        description: "Track your kitchen manufacturing",
        image: "/images/hero2.jpg",
        icon: <Clock className="w-6 h-6" />,
      },
    ],
    tags: ["E-commerce", "Manufacturing"],
  },
  {
    id: 5,
    title: "FutureX ERP",
    description:
      "Comprehensive enterprise resource planning system for industrial companies",
    longDescription:
      "FutureX ERP provides industrial manufacturers with a complete digital transformation solution, integrating all business operations from supply chain to financial management. Our platform offers real-time visibility, predictive analytics, and process automation for manufacturing excellence.",
    category: "Web Application",
    features: [
      {
        title: "Operations Dashboard",
        description: "Real-time monitoring of production metrics",
        icon: <BarChart className="w-5 h-5" />,
      },
      {
        title: "Inventory Management",
        description: "Track materials across multiple warehouses",
        icon: <ShoppingCart className="w-5 h-5" />,
      },
      {
        title: "Production Planning",
        description: "Optimize manufacturing schedules",
        icon: <Settings className="w-5 h-5" />,
      },
      {
        title: "Financial Reporting",
        description: "Generate comprehensive business reports",
        icon: <FileText className="w-5 h-5" />,
      },
    ],
    image: "/images/hero1.jpg",
    link: "/projects/futurex-erp",
    client: "Manufacturing Partners",
    year: 2022,
    challenges: [
      "Legacy system integration",
      "Complex manufacturing workflows",
      "Data silos across departments",
    ],
    solutions: [
      "Custom API connectors for legacy systems",
      "Visual workflow builder",
      "Unified data warehouse",
    ],
    techStack: [
      { name: "Angular", icon: <Layout className="w-4 h-4" /> },
      { name: "Java Spring", icon: <Server className="w-4 h-4" /> },
      { name: "PostgreSQL", icon: <Database className="w-4 h-4" /> },
      { name: "Kubernetes", icon: <Settings className="w-4 h-4" /> },
    ],
    screenshots: [
      {
        title: "Production Dashboard",
        description: "Monitor factory output in real-time",
        image: "/images/hero1.jpg",
        icon: <BarChart className="w-6 h-6" />,
      },
      {
        title: "Inventory Overview",
        description: "Track raw materials and finished goods",
        image: "/images/hero2.jpg",
        icon: <ShoppingCart className="w-6 h-6" />,
      },
      {
        title: "Order Management",
        description: "Process customer orders efficiently",
        image: "/images/hero3.jpg",
        icon: <FileText className="w-6 h-6" />,
      },
    ],
    tags: ["Enterprise Software", "Management"],
  },
  {
    id: 6,
    title: "FutureX CRM",
    description:
      "Customer relationship management system with task and support ticket features",
    longDescription:
      "FutureX CRM empowers businesses to build stronger customer relationships through intelligent contact management, sales pipeline tracking, and customer service tools. Our platform centralizes all customer interactions and provides actionable insights to drive growth.",
    category: "Web Application",
    features: [
      {
        title: "Contact Management",
        description: "Centralized customer database",
        icon: <User className="w-5 h-5" />,
      },
      {
        title: "Sales Pipeline",
        description: "Visualize and track deals",
        icon: <BarChart className="w-5 h-5" />,
      },
      {
        title: "Task Automation",
        description: "Automate follow-ups and reminders",
        icon: <Clock className="w-5 h-5" />,
      },
      {
        title: "Support Tickets",
        description: "Track and resolve customer issues",
        icon: <Headphones className="w-5 h-5" />,
      },
    ],
    image: "/images/hero2.jpg",
    link: "/projects/futurex-crm",
    client: "Various Businesses",
    year: 2023,
    challenges: [
      "Disconnected customer data",
      "Inefficient sales processes",
      "Poor customer service visibility",
    ],
    solutions: [
      "Unified customer profiles",
      "Sales process automation",
      "Integrated support ticketing",
    ],
    techStack: [
      { name: "React.js", icon: <Code className="w-4 h-4" /> },
      { name: "Node.js", icon: <Server className="w-4 h-4" /> },
      { name: "MongoDB", icon: <Database className="w-4 h-4" /> },
      { name: "Twilio API", icon: <Mail className="w-4 h-4" /> },
    ],
    screenshots: [
      {
        title: "Contact Dashboard",
        description: "Manage all customer interactions",
        image: "/images/hero2.jpg",
        icon: <User className="w-6 h-6" />,
      },
      {
        title: "Sales Pipeline",
        description: "Visualize your sales funnel",
        image: "/images/hero3.jpg",
        icon: <BarChart className="w-6 h-6" />,
      },
      {
        title: "Support Center",
        description: "Resolve customer issues efficiently",
        image: "/images/hero4.jpg",
        icon: <Headphones className="w-6 h-6" />,
      },
    ],
    tags: ["CRM", "Business Tools"],
  },
];

export const getProjectById = (id: number) => {
  return projects.find((project) => project.id === id);
};
