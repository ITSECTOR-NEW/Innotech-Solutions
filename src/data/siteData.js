// ── COMPANY INFO ── Edit your details here
export const COMPANY = {
  name: "Innotech Solutions",
  tagline: "Technology. Innovation. Transformation.",
  email: "info@innotech-solutions.in",
  phone: "+91 7803956101",
  whatsapp: "7803956101",
  address: "Indore, Madhya Pradesh, India",
  hours: "Mon–Sat: 9 AM – 9 PM IST",
  socials: {
    linkedin: "#",
    twitter: "#",
    instagram: "#",
    youtube: "#",
    github: "#",
  },
};

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
{
  label: "Services",

  dropdown: [
    {
      section: "IT Services",

      items: [
        {
          label: "Web Development",
          href: "/services/web-development",
        },

        {
          label: "Application Development",
          href: "/services/application-development",
        },

        {
          label: "UI/UX & Web Designing",
          href: "/services/ui-ux-web-designing",
        },

        {
          label: "Industrial AI Solutions",
          href: "/services/industrial-ai-solutions",
        },

        {
          label: "Digital Marketing",
          href: "/services/digital-marketing",
        },
      ],
    },

    {
      section: "Academic Support",

      items: [
        {
          label: "Student Training Programs",
          href: "/services/student-training-programs",
        },

        // {
        //   label: "IoT & Robotics Training",
        //   href: "/services/iot-robotics-training",
        // },

        // {
        //   label: "Student Counselling",
        //   href: "/services/student-counselling",
        // },
      ],
    },

    {
      section: "",

      items: [
        {
          label: "View Full Services",
          href: "/#services",
        },
      ],
    },
  ],
},

  // { href: "#iot", label: "IoT 4.0" },
  // { href: "#training", label: "Training" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#contact", label: "Contact" },
];

// export const HERO_STATS = [
//   { num: 5, suffix: "+", label: "Projects Done" },
//   { num: 4,  suffix: "+", label: "Happy Clients" },
//   { num: 2,   suffix: "+", label: "Years Active" },
//   { num: 1,  suffix: "+", label: "Industries" },
// ];

export const SERVICES = [
  {
    icon: "fas fa-code",
    title: "Web Development",
    desc: "High-performance websites and web apps built with modern frameworks. From landing pages to complex enterprise portals.",
    tags: ["React.js", "Next.js", "Node.js", "TypeScript"],
    gradient: "from-cyan-400 to-blue-500",
    detailPath: "/services/web-development",
  },
  {
    icon: "fas fa-mobile-screen",
    title: "Mobile App Development",
    desc: "Native and cross-platform mobile apps for iOS and Android with beautiful UX and powerful backend integration.",
    tags: ["React Native", "Flutter", "Firebase"],
    gradient: "from-purple-500 to-pink-500",
    detailPath: "/services/application-development",
  },
  {
    icon: "fas fa-pen-ruler",
    title: "UI/UX & Web Designing",
    desc: "Stunning, user-centric interfaces that convert. We craft digital experiences that delight users and drive business outcomes.",
    tags: ["Figma", "Prototyping", "Branding"],
    gradient: "from-orange-400 to-red-500",
    detailPath: "/services/ui-ux-web-designing",
  },
  {
    icon: "fas fa-network-wired",
    title: "Industrial AI Solutions",
    desc: "Smart factory solutions with real-time monitoring, PLC/SCADA integration, sensor networks, and predictive maintenance.",
    tags: ["SCADA", "PLC", "Sensors", "MQTT"],
    gradient: "from-cyan-400 to-green-500",
    detailPath: "/services/industrial-ai-solutions",
  },
  // {
  //   icon: "fas fa-robot",
  //   title: "Robotics & AI Automation",
  //   desc: "Industrial robotic systems, AI-powered automation pipelines, and machine learning integration for smarter manufacturing.",
  //   tags: ["Machine Learning", "Computer Vision", "RPA"],
  //   gradient: "from-purple-500 to-blue-500",
  // },
  {
    icon: "fas fa-brain",
    title: "Digital Marketing",
    desc: "Embed powerful AI into your existing systems. Chatbots, predictive analytics, NLP, and process intelligence.",
    tags: ["OpenAI", "NLP", "Analytics"],
    gradient: "from-pink-500 to-purple-600",
    detailPath: "/services/digital-marketing",
  },
  {
    icon: "fas fa-graduation-cap",
    title: "School & College Training",
    desc: "Hands-on STEM programs for schools and colleges in Robotics, IoT, AI, and Automation. Career counselling included.",
    tags: ["Robotics", "AI/IoT", "STEM", "Workshops"],
    gradient: "from-orange-400 to-green-500",
    detailPath: "/services/student-training-programs",
  },
  // {
  //   icon: "fas fa-chart-line",
  //   title: "Smart Tool Management",
  //   desc: "Intelligent tool tracking for manufacturing plants — reduce downtime, optimize asset utilization with RFID systems.",
  //   tags: ["RFID", "Dashboard", "Analytics"],
  //   gradient: "from-blue-500 to-cyan-400",
  // },
];

export const WHY_CHOOSE_US = [
  {
    icon: "fas fa-laptop-code",
    title: "Extensive Experience",
    desc: "Successfully delivered modern websites, applications, and digital solutions for businesses and startups.",
  },

  {
    icon: "fas fa-hand-holding-dollar",
    title: "Cost Effective Solutions",
    desc: "Professional digital services at affordable pricing without compromising quality and performance.",
  },

  {
    icon: "fas fa-globe",
    title: "Global Client Support",
    desc: "Providing reliable solutions and long-term support to clients across multiple industries.",
  },
];

// export const WHY_POINTS = [
//   {
//     num: "01",
//     title: "Full-Stack Expertise",
//     desc: "From frontend development to industrial automation and AI solutions — we handle complete digital transformation services.",
//   },

//   {
//     num: "02",
//     title: "Industry-Level Solutions",
//     desc: "We build practical and scalable solutions for businesses, startups, industries, and educational organizations.",
//   },

//   {
//     num: "03",
//     title: "Creative & Modern Design",
//     desc: "Professional UI/UX design and responsive development focused on performance, branding, and user experience.",
//   },

//   {
//     num: "04",
//     title: "Long-Term Support",
//     desc: "We provide maintenance, updates, technical guidance, and continuous support after project deployment.",
//   },

//   {
//     num: "05",
//     title: "Training & Innovation",
//     desc: "Industry-oriented training programs and innovative project development for students and professionals.",
//   },
// ];

// export const WHY_STATS = [
//   {
//     icon: "fas fa-project-diagram",
//     num: 40,
//     label: "Projects Delivered",
//   },

//   {
//     icon: "fas fa-smile",
//     num: 20,
//     label: "Satisfied Clients",
//   },

//   {
//     icon: "fas fa-award",
//     num: 2,
//     label: "Industry Awards",
//   },

//   {
//     icon: "fas fa-graduation-cap",
//     num: 100,
//     label: "Students Trained",
//   },
// ];

export const IOT_FEATURES = [
  {
    icon: "fas fa-chart-line",
    title: "Analytics Dashboards",
    desc: "Real-time industrial analytics dashboards for production monitoring, KPI tracking, and operational insights.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
  },

  {
    icon: "fas fa-robot",
    title: "AI-Based Automation",
    desc: "Smart AI-driven automation systems designed to improve manufacturing efficiency and reduce manual operations.",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1200&auto=format&fit=crop",
  },

  {
    icon: "fas fa-microchip",
    title: "IoT Monitoring Systems",
    desc: "Industrial IoT solutions with live sensor monitoring, machine connectivity, and real-time operational tracking.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
  },

  {
    icon: "fas fa-screwdriver-wrench",
    title: "Predictive Maintenance",
    desc: "AI-powered maintenance systems for fault prediction, downtime reduction, and machine health monitoring.",
    image:
      "https://images.unsplash.com/photo-1581092921461-eab10380b8e0?q=80&w=1200&auto=format&fit=crop",
  },

  {
    icon: "fas fa-boxes-stacked",
    title: "Smart Tool Management",
    desc: "Digital tool tracking and management systems with live monitoring, usage tracking, and inventory optimization.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop",
  },

  {
    icon: "fas fa-network-wired",
    title: "Connected Manufacturing",
    desc: "Integrated digital manufacturing solutions connecting machines, systems, and industrial operations seamlessly.",
    image:
      "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=1200&auto=format&fit=crop",
  },
];

export const IOT_PAGE_IMAGES = {
  hero:
    "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop",
  intro:
    "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop",
  why:
    "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1600&auto=format&fit=crop",
};

export const IOT_APPROACH_STEPS = [
  {
    title: "Requirement Discovery",
    desc: "We understand your machines, workflows, data points, and automation goals before planning the right industrial solution.",
  },
  {
    title: "Device & Sensor Planning",
    desc: "We identify practical sensors, controllers, gateways, and connectivity options suited to your industrial environment.",
  },
  {
    title: "Connectivity & Data Flow",
    desc: "We connect devices using reliable communication patterns such as MQTT, Wi-Fi, Bluetooth, APIs, and cloud-ready pipelines.",
  },
  {
    title: "Dashboard & Analytics",
    desc: "We convert live industrial data into dashboards, alerts, reports, and insights that are easy for teams to act on.",
  },
  {
    title: "Testing & Deployment",
    desc: "We validate data accuracy, system reliability, security, and real-world performance before final deployment.",
  },
  {
    title: "Support & Scale",
    desc: "We help improve alerts, expand devices, refine dashboards, and scale the system as your operations grow.",
  },
];

export const Web_Development_Description = [
  {
    icon: "fas fa-building",
    title: "Business Websites",
    desc: "Professional business and corporate websites designed to improve branding, customer engagement, and digital presence.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
  },

  {
    icon: "fas fa-cart-shopping",
    title: "E-Commerce Websites",
    desc: "Modern online store solutions with product management, payment gateway integration, and responsive shopping experiences.",
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1200&auto=format&fit=crop",
  },

  {
    icon: "fas fa-graduation-cap",
    title: "Educational Portals",
    desc: "Interactive educational websites and learning management platforms for schools, institutes, and training centers.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
  },

  {
    icon: "fas fa-plane-departure",
    title: "Travel Websites",
    desc: "Travel and booking platforms with destination management, online reservations, and customer-friendly interfaces.",
    image:
      "https://images.unsplash.com/photo-1502920917128-1aa500764ce7?q=80&w=1200&auto=format&fit=crop",
  },

  {
    icon: "fas fa-briefcase",
    title: "Job Portal Systems",
    desc: "Advanced recruitment and hiring platforms with job listings, applicant tracking, and management systems.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop",
  },

  {
    icon: "fas fa-newspaper",
    title: "News & Media Websites",
    desc: "Dynamic news portals and media platforms with content publishing, category management, and modern layouts.",
    image:
      "https://images.unsplash.com/photo-1495020689067-958852a7765e?q=80&w=1200&auto=format&fit=crop",
  },
];

export const App_Dev_Description = [
  {
    icon: "fas fa-mobile-screen-button",
    title: "Business Applications",
    desc: "Custom business applications designed to streamline operations, improve productivity, and enhance workflow management.",
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1200&auto=format&fit=crop",
  },

  {
    icon: "fas fa-cart-shopping",
    title: "E-Commerce Apps",
    desc: "Modern e-commerce mobile applications with secure payment integration, product management, and smooth user experiences.",
    image:
      "https://images.unsplash.com/photo-1607082350899-7e105aa886ae?q=80&w=1200&auto=format&fit=crop",
  },

  {
    icon: "fas fa-graduation-cap",
    title: "Educational Applications",
    desc: "Interactive learning and training applications for schools, institutes, coaching centers, and online education platforms.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
  },

  {
    icon: "fas fa-hospital",
    title: "Healthcare Applications",
    desc: "Healthcare and appointment management applications focused on patient engagement, booking, and digital records.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop",
  },

  {
    icon: "fas fa-truck-fast",
    title: "Delivery & Booking Apps",
    desc: "On-demand delivery and booking applications with real-time tracking, notifications, and order management systems.",
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop",
  },

  {
    icon: "fas fa-comments",
    title: "Social & Chat Applications",
    desc: "Modern social networking and chat applications with real-time communication and engaging user interfaces.",
    image:
      "https://images.unsplash.com/photo-1611605698335-8b1569810432?q=80&w=1200&auto=format&fit=crop",
  },
];
export const UI_Web_Design_Description = [
  {
    title: "Website UI Design",
    desc: "Modern and responsive website interfaces focused on branding, usability, and customer engagement.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
  },

  {
    title: "Mobile App UI/UX",
    desc: "Creative mobile application designs with smooth navigation and user-friendly experiences.",
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1200&auto=format&fit=crop",
  },

  {
    title: "Dashboard Design",
    desc: "Professional admin dashboards and management panels with clean layouts and modern UI systems.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
  },

  {
    title: "Brand Identity Design",
    desc: "Creative branding solutions including typography, color systems, layouts, and visual identity.",
    image:
      "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=1200&auto=format&fit=crop",
  },
];

export const DIGITAL_MARKETING_SERVICES = [
  {
    icon: "fas fa-magnifying-glass-chart",
    title: "Search Engine Optimization",
    desc: "Improve website visibility and Google rankings with professional SEO strategies and performance optimization.",
    image:
      "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?q=80&w=1200&auto=format&fit=crop",
  },

  {
    icon: "fas fa-bullhorn",
    title: "Social Media Marketing",
    desc: "Creative social media campaigns for Instagram, Facebook, LinkedIn, and other platforms to grow your brand presence.",
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1200&auto=format&fit=crop",
  },

  {
    icon: "fas fa-chart-line",
    title: "Performance Marketing",
    desc: "Data-driven marketing campaigns focused on lead generation, customer engagement, and business growth.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
  },

  {
    icon: "fas fa-envelope-open-text",
    title: "Email Marketing",
    desc: "Professional email marketing campaigns designed to improve customer communication and conversion rates.",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop",
  },

  {
    icon: "fas fa-pen-nib",
    title: "Content Marketing",
    desc: "High-quality content creation for blogs, websites, social media, and branding to increase audience engagement.",
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1200&auto=format&fit=crop",
  },

  {
    icon: "fas fa-ad",
    title: "Google & Meta Ads",
    desc: "Targeted advertising campaigns using Google Ads and Meta Ads to increase reach, traffic, and conversions.",
    image:
      "https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=1200&auto=format&fit=crop",
  },
];

export const TRAINING_PROGRAMS = [
  {
    icon: "fas fa-code",
    title: "Web Development Training",
    desc: "Hands-on training in modern website development using React.js, HTML, CSS, JavaScript, and responsive design.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
  },

  {
    icon: "fas fa-mobile-screen",
    title: "Application Development",
    desc: "Learn mobile and application development with real-world projects using Flutter, React Native, and Firebase.",
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1200&auto=format&fit=crop",
  },

  {
    icon: "fas fa-robot",
    title: "AI & Robotics Training",
    desc: "Practical AI and robotics training with automation concepts, smart systems, and industrial applications.",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1200&auto=format&fit=crop",
  },

  {
    icon: "fas fa-microchip",
    title: "IoT & Embedded Systems",
    desc: "Build IoT and embedded projects using Arduino, ESP32, Raspberry Pi, and real-time monitoring systems.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
  },

  {
    icon: "fas fa-industry",
    title: "Industrial Automation",
    desc: "Industrial automation training covering PLC, HMI, SCADA, sensors, and smart manufacturing systems.",
    image:
      "https://images.unsplash.com/photo-1567789884554-0b844b597180?q=80&w=1200&auto=format&fit=crop",
  },

  {
    icon: "fas fa-user-graduate",
    title: "Internship & Mentorship",
    desc: "Industry-focused internship and mentorship programs designed to improve practical skills and career growth.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
  },
];
export const CLIENTS = [
  {
    name: "Local Business Teams",
    image:
      "https://cdn-icons-png.flaticon.com/512/3135/3135706.png",
  },

  {
    name: "Education Institutes",
    image:
      "https://cdn-icons-png.flaticon.com/512/3976/3976625.png",
  },

  {
    name: "Startup Founders",
    image:
      "https://cdn-icons-png.flaticon.com/512/3281/3281289.png",
  },

  {
    name: "Industrial Units",
    image:
      "https://cdn-icons-png.flaticon.com/512/3256/3256217.png",
  },

  {
    name: "Service Providers",
    image:
      "https://cdn-icons-png.flaticon.com/512/3050/3050525.png",
  },
];

export const BUSINESS_STATS = [
  {
    number: "8+",
    label: "Active Clients",
    border: "border-pink-300",
  },

  {
    number: "10+",
    label: "Live Solutions",
    border: "border-yellow-300",
  },

  {
    number: "4+",
    label: "Business Domains",
    border: "border-cyan-300",
  },

  {
    number: "2+",
    label: "Years Building",
    border: "border-red-300",
  },
];

export const BUSINESS_POINTS = [
  "Website, app, and automation ideas mapped to real business workflows.",
  "Clear digital roadmap for leads, operations, reporting, and customer support.",
  "Modern UI/UX improvements that make your services easier to understand.",
  "Scalable technology guidance for startups, institutes, and local businesses.",
];

export const TRAINING_TOOLS = ["🤖 Arduino","🍓 Raspberry Pi","🐍 Python","🧠 TensorFlow","📡 ESP32","⚡ PLC","☁️ Cloud IoT","🦾 ROS","📊 Jupyter"];

export const TRAINING_STATS = [
  { num: 2000, label: "Students Trained" },
  { num: 45,   label: "Schools & Colleges" },
  { num: 120,  label: "Workshops Done" },
  { num: 95,   label: "% Satisfaction" },
];

// export const TECH_STACK = [
//   { emoji: "⚛️", name: "React.js" },
//   { emoji: "▲",  name: "Next.js" },
//   { emoji: "🎨", name: "Tailwind CSS" },
//   { emoji: "🟦", name: "TypeScript" },
//   { emoji: "🟢", name: "Node.js" },
//   { emoji: "🔥", name: "Firebase" },
//   { emoji: "🐘", name: "PostgreSQL" },
//   { emoji: "🍃", name: "MongoDB" },
//   { emoji: "🐍", name: "Python" },
//   { emoji: "🤖", name: "Arduino" },
//   { emoji: "🍓", name: "Raspberry Pi" },
//   { emoji: "☁️", name: "AWS / Azure" },
// ];

export const PORTFOLIO_ITEMS = [
  { cat: "iot",      emoji: "🏭", title: "Smart Factory Monitoring System",    desc: "Real-time production monitoring with PLC integration, OEE tracking, and predictive maintenance alerts.", catLabel: "Industrial IoT",      bg: "from-cyan-500/10 to-green-500/10" },
  { cat: "web",      emoji: "🛒", title: "Industrial Supply E-Commerce Portal", desc: "B2B e-commerce platform for industrial components with real-time inventory and ERP integration.",         catLabel: "Web Development",      bg: "from-blue-500/10 to-purple-500/10" },
  { cat: "robotics", emoji: "🦾", title: "Automated Quality Inspection System", desc: "Computer vision-based quality control robot for detecting defects with 99.2% accuracy.",                  catLabel: "Robotics & AI",        bg: "from-purple-500/10 to-pink-500/10" },
  { cat: "iot",      emoji: "📊", title: "Energy Management IoT Platform",      desc: "Multi-site energy monitoring tracking consumption and cost optimization across 12 facilities.",             catLabel: "IoT Dashboard",        bg: "from-green-500/10 to-cyan-500/10" },
  { cat: "web",      emoji: "📱", title: "Field Service Management App",        desc: "React Native app for managing field technicians and asset maintenance with offline capability.",            catLabel: "Mobile Development",   bg: "from-orange-500/10 to-red-500/10" },
  { cat: "robotics", emoji: "🎓", title: "STEM Innovation Lab — Gov. School",   desc: "Complete STEM lab setup with robotics kits, IoT boards, and curriculum for 500+ students.",              catLabel: "Education & Training", bg: "from-cyan-500/10 to-blue-500/10" },
];

export const TESTIMONIALS = [
  { stars: 5, text: "Innotix Solution transformed our manufacturing plant. The IoT dashboard saved us from 3 major breakdowns in the first month. Exceptional expertise.", name: "Rajesh Kumar",     role: "GM Operations, AutoParts Industries", initials: "RK", grad: "from-cyan-400 to-blue-500" },
  { stars: 5, text: "The website they built tripled our organic traffic in 4 months. Clean code, beautiful design, and the digital marketing strategy was spot on!", name: "Priya Sharma",      role: "Founder, TechStart Solutions",        initials: "PS", grad: "from-purple-500 to-pink-500" },
  { stars: 5, text: "The robotics workshop at our school was outstanding. Students were completely engaged. We've seen a 60% increase in tech interest since.", name: "Anjali Mishra",     role: "Principal, DPS Bhopal",               initials: "AM", grad: "from-green-400 to-blue-500" },
  { stars: 5, text: "Their AI integration helped us automate 70% of data processing. What took 8 hours now runs in under 30 minutes. Game-changing results.", name: "Vikram Gupta",      role: "CTO, DataFlow Analytics",             initials: "VG", grad: "from-orange-400 to-red-500" },
  { stars: 5, text: "From concept to deployment in 6 weeks — fast, professional, and quality-focused. The mobile app has 4.8 stars on both stores.", name: "Neha Singh",        role: "CEO, FieldForce Pvt Ltd",             initials: "NS", grad: "from-cyan-400 to-green-400" },
  { stars: 5, text: "Innotix set up our complete STEM innovation lab. The quality and ongoing support has made us a model institution in the state.", name: "Dr. Dinesh Tiwari", role: "HOD CS, NIT Bhopal",                  initials: "DT", grad: "from-purple-500 to-blue-500" },
];

// export const INDUSTRIES = [
//   { emoji: "🏭", title: "Manufacturing",  desc: "Smart factory automation, quality control, and production optimization" },
//   { emoji: "🎓", title: "Education",      desc: "STEM labs, digital classrooms, and EdTech platform development" },
//   { emoji: "🏥", title: "Healthcare",     desc: "Medical IoT, patient management systems, and diagnostic automation" },
//   { emoji: "🚚", title: "Logistics",      desc: "Fleet tracking, warehouse automation, and supply chain visibility" },
//   { emoji: "⚡", title: "Energy",         desc: "Smart grid monitoring, renewable energy management systems" },
//   { emoji: "🏗️", title: "Construction",  desc: "Site monitoring IoT, project management apps, and safety systems" },
//   { emoji: "🏪", title: "Retail",         desc: "E-commerce platforms, inventory IoT, and customer analytics" },
//   { emoji: "🚀", title: "Startups",       desc: "MVP development, technical co-founding, and scale-up support" },
// ];

export const FOOTER_LINKS = {
  Services: ["Web Development","Mobile Apps","UI/UX Design","Digital Marketing","AI Integration"],
  Solutions: ["Industrial IoT","SCADA Systems","Predictive Maintenance","Smart Factory","Student Training"],
  Company:  ["About Us","Portfolio","Testimonials","Industries","Contact Us"],
};
