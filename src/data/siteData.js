// ── COMPANY INFO ── Edit your details here
export const COMPANY = {
  name: "Innotech-Solutions",
  tagline: "Technology. Innovation. Transformation.",
  email: "info@innotech-solutions.in",
  phone: "+91 00000000000",
  whatsapp: "",
  address: "Indore, Madhya Pradesh, India",
  hours: "Mon–Sat: 9 AM – 9 PM IST",
  socials: {
    linkedin: "https://www.linkedin.com/company/innotechsolutionsofficial/?viewAsMember=true",
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
      section: "AI & IT Services",

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
          label: "AI Services",
          href: "/services/ai-services",
        },

        {
          label: "Industrial Internet of Things",
          href: "/services/industrial-internet-of-things",
        },

        // {
        //   label: "AI & Coding Training for Schools",
        //   href: "/services/ai-coding-training-schools",
        // },

        // {
        //   label: "Business Automation Solutions",
        //   href: "/services/business-automation-solutions",
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
    tags: ["Startups", "Businesses", "Personal Brands"],
    gradient: "from-cyan-400 to-blue-500",
    detailPath: "/services/web-development",
  },
  {
    icon: "fas fa-mobile-screen",
    title: "Application Development",
    desc: "Native and cross-platform mobile apps for iOS and Android with beautiful UX and powerful backend integration.",
    tags: ["Startups", "E-Commerce", "Service Businesses"],
    gradient: "from-purple-500 to-pink-500",
    detailPath: "/services/application-development",
  },
  {
    icon: "fas fa-brain",
    title: "AI Services",
    desc: "Custom AI solutions for healthcare, education, business workflows, analytics, support assistants, and smart decision-making.",
    tags: ["Healthcare", "Education", "Enterprises"],
    gradient: "from-orange-400 to-red-500",
    detailPath: "/services/ai-services",
  },
  {
    icon: "fas fa-microchip",
    title: "Industrial Internet of Things",
    desc: "Connected industrial IoT systems for sensors, machines, gateways, dashboards, alerts, and real-time operational visibility.",
    tags: ["Manufacturing", "Factories", "Industries"],
    gradient: "from-cyan-400 to-green-500",
    detailPath: "/services/industrial-internet-of-things",
  },
  // {
  //   icon: "fas fa-graduation-cap",
  //   title: "AI & Coding Training for Schools",
  //   desc: "Practical AI, coding, robotics, and project-based technology training for schools, colleges, and student innovation programs.",
  //   tags: ["Schools", "Colleges", "Training Centers"],
  //   gradient: "from-pink-500 to-purple-600",
  //   detailPath: "/services/ai-coding-training-schools",
  // },
  // {
  //   icon: "fas fa-gears",
  //   title: "Business Automation Solutions",
  //   desc: "Workflow automation, custom dashboards, reporting systems, CRM tools, and internal software that reduce manual business work.",
  //   tags: ["SMEs", "Growing Businesses", "Enterprises"],
  //   gradient: "from-orange-400 to-green-500",
  //   detailPath: "/services/business-automation-solutions",
  // },
];

export const WHY_CHOOSE_US = [
  {
    icon: "fas fa-layer-group",
    title: "End-To-End Technology Solutions",
    desc: "From websites and mobile apps to AI, automation, and Industrial IoT — everything under one technology partner.",
  },

  {
    icon: "fas fa-lightbulb",
    title: "Business-Focused Innovation",
    desc: "We build practical solutions that improve efficiency, customer experience, and business growth.",
  },

  {
    icon: "fas fa-rocket",
    title: "Scalable & Future-Ready",
    desc: "Modern technologies and scalable architectures designed to support your long-term digital transformation.",
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

// export const IOT_FEATURES = [
//   {
//     icon: "fas fa-chart-line",
//     title: "Analytics Dashboards",
//     desc: "Real-time industrial analytics dashboards for production monitoring, KPI tracking, and operational insights.",
//     image:
//       "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
//   },

//   {
//     icon: "fas fa-robot",
//     title: "AI-Based Automation",
//     desc: "Smart AI-driven automation systems designed to improve manufacturing efficiency and reduce manual operations.",
//     image:
//       "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1200&auto=format&fit=crop",
//   },

//   {
//     icon: "fas fa-microchip",
//     title: "IoT Monitoring Systems",
//     desc: "Industrial IoT solutions with live sensor monitoring, machine connectivity, and real-time operational tracking.",
//     image:
//       "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
//   },

//   {
//     icon: "fas fa-screwdriver-wrench",
//     title: "Predictive Maintenance",
//     desc: "AI-powered maintenance systems for fault prediction, downtime reduction, and machine health monitoring.",
//     image:
//       "https://images.unsplash.com/photo-1581092921461-eab10380b8e0?q=80&w=1200&auto=format&fit=crop",
//   },

//   {
//     icon: "fas fa-boxes-stacked",
//     title: "Smart Tool Management",
//     desc: "Digital tool tracking and management systems with live monitoring, usage tracking, and inventory optimization.",
//     image:
//       "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop",
//   },

//   {
//     icon: "fas fa-network-wired",
//     title: "Connected Manufacturing",
//     desc: "Integrated digital manufacturing solutions connecting machines, systems, and industrial operations seamlessly.",
//     image:
//       "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=1200&auto=format&fit=crop",
//   },
// ];

// export const IOT_PAGE_IMAGES = {
//   hero:
//     "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop",
//   intro:
//     "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop",
//   why:
//     "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1600&auto=format&fit=crop",
// };

// export const IOT_WORK_SPEAK_SECTION = {
//   eyebrow: "We Will Let Our Work Speak First",
//   title: "From discovery to execution",
//   services: [
//     {
//       title: "IoT App Development",
//       desc: "We create web and mobile interfaces for connected devices so teams can monitor equipment, view live status, receive alerts, and control workflows from one clean application.",
//     },
//     {
//       title: "Device Integration",
//       desc: "We connect sensors, gateways, controllers, and industrial devices into a reliable data flow using practical protocols and APIs suited to your hardware environment.",
//     },
//     {
//       title: "Edge Computing Solutions",
//       desc: "We design edge-based processing for faster local decisions, reduced latency, and stable operations even when cloud connectivity is limited or intermittent.",
//     },
//     {
//       title: "IoT Analytics",
//       desc: "We turn sensor and machine data into useful insights through dashboards, trend analysis, alert rules, and predictive indicators that help teams monitor performance and act earlier.",
//     },
//   ],
// };

// export const IOT_APPROACH_STEPS = [
//   {
//     title: "Requirement Discovery",
//     desc: "We understand your machines, workflows, data points, and automation goals before planning the right industrial solution.",
//   },
//   {
//     title: "Device & Sensor Planning",
//     desc: "We identify practical sensors, controllers, gateways, and connectivity options suited to your industrial environment.",
//   },
//   {
//     title: "Connectivity & Data Flow",
//     desc: "We connect devices using reliable communication patterns such as MQTT, Wi-Fi, Bluetooth, APIs, and cloud-ready pipelines.",
//   },
//   {
//     title: "Dashboard & Analytics",
//     desc: "We convert live industrial data into dashboards, alerts, reports, and insights that are easy for teams to act on.",
//   },
//   {
//     title: "Testing & Deployment",
//     desc: "We validate data accuracy, system reliability, security, and real-world performance before final deployment.",
//   },
//   {
//     title: "Support & Scale",
//     desc: "We help improve alerts, expand devices, refine dashboards, and scale the system as your operations grow.",
//   },
// ];


// AI Service Page Content

// AI Services Page Content
export const AI_SERVICE_PAGES = {
  eyebrow: "AI Services",
  title: "Practical AI Solutions For Modern Work",
  subtitle:
    "We provide AI solutions across business, healthcare, education, support, analytics, documents, and internal operations from one clear service page.",
  heroImage:
    "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1600&auto=format&fit=crop",
  introTitle: "AI Solutions Built Around",
  introAccent: " Your Workflow",
  intro:
    "AI works best when it is connected to clear business problems. We study your operations, customer journeys, data sources, and team needs to create useful AI systems.",
  introSecond:
    "Instead of making separate pages for every industry, we keep AI Services as one complete offering and explain where we can apply AI for your organization.",
  introImage:
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop",
  points: [
    "AI solutions for healthcare, education, operations, and customer support.",
    "Business process mapping, data readiness, and implementation planning.",
    "AI assistants, document intelligence, analytics, and reporting tools.",
    "Custom AI features integrated into websites, apps, and dashboards.",
  ],
  servicesTitle: "Where We Provide AI",
  servicesIntro:
    "One AI service, multiple practical fields of application based on your business needs.",
  services: [
    {
      icon: "fas fa-heart-pulse",
      title: "Healthcare AI",
      desc: "Patient support assistants, appointment workflows, report summaries, admin dashboards, and healthcare operations automation.",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop",
    },
    {
      icon: "fas fa-industry",
      title: "Business & Industrial AI",
      desc: "Predictive insights, production analytics, anomaly alerts, quality support, and operational decision dashboards.",
      image:
        "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=1200&auto=format&fit=crop",
    },
    {
      icon: "fas fa-comments",
      title: "Customer Support AI",
      desc: "Website assistants, inquiry handling, lead qualification, FAQ support, and guided customer service workflows.",
      image:
        "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=1200&auto=format&fit=crop",
    },
    {
      icon: "fas fa-file-lines",
      title: "Document Intelligence",
      desc: "AI tools for summarizing, extracting, classifying, and routing reports, forms, invoices, and internal documents.",
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1200&auto=format&fit=crop",
    },
    {
      icon: "fas fa-chart-line",
      title: "AI Analytics",
      desc: "Dashboards, trend analysis, forecasting, KPI insights, and reporting systems that help teams make faster decisions.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    },
    {
      icon: "fas fa-user-gear",
      title: "Internal AI Assistants",
      desc: "Private AI tools that help teams search knowledge, draft responses, prepare reports, and complete repetitive work.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
    },
  ],
  whyTitle: "Why Choose Our AI Services?",
  whyIntro:
    "We focus on clear business outcomes, not AI buzzwords. Every AI feature is planned around the workflow it needs to improve.",
  whyImage:
    "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1600&auto=format&fit=crop",
  whyPoints: [
    "One complete AI service for multiple fields.",
    "Custom AI features for your website, app, or dashboard.",
    "Healthcare, education, business, and operational AI use cases.",
    "Practical data and workflow planning before development.",
    "Privacy-aware and role-based implementation approach.",
    "Scalable architecture for future AI expansion.",
  ],
};

// AI & Coding Training for Schools Page Content
export const AI_CODING_TRAINING_PAGE = {
  eyebrow: "AI & Coding Training for Schools",
  title: "Future-Ready AI And Coding Programs",
  subtitle:
    "We provide practical AI, coding, robotics, and technology training programs for schools, colleges, and student innovation labs.",
  heroImage:
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop",
  introTitle: "Practical Learning For",
  introAccent: " Future Skills",
  intro:
    "Students learn best when technology is hands-on. Our programs introduce AI, coding, robotics, web basics, app concepts, and problem-solving through guided projects.",
  introSecond:
    "We design workshops and training modules for school levels, college batches, innovation clubs, and career-oriented technology programs.",
  introImage:
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop",
  points: [
    "AI awareness, prompt basics, and real-world AI use cases.",
    "Coding fundamentals through practical student projects.",
    "Robotics, IoT, and automation-based learning modules.",
    "Workshops for schools, colleges, clubs, and innovation labs.",
  ],
  servicesTitle: "Training Programs",
  servicesIntro:
    "Structured training options for institutions that want students to learn modern technology with practical exposure.",
  services: [
    {
      icon: "fas fa-brain",
      title: "AI Basics For Students",
      desc: "Introductory AI sessions covering everyday AI, responsible usage, prompts, tools, and practical classroom activities.",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop",
    },
    {
      icon: "fas fa-code",
      title: "Coding Workshops",
      desc: "Hands-on coding sessions with HTML, CSS, JavaScript, Python basics, logic building, and mini projects.",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
    },
    {
      icon: "fas fa-robot",
      title: "Robotics & IoT Projects",
      desc: "Project-based learning with sensors, controllers, simple robotics, automation ideas, and connected devices.",
      image:
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1200&auto=format&fit=crop",
    },
    {
      icon: "fas fa-laptop-code",
      title: "Web & App Foundations",
      desc: "Basic training in website structure, app thinking, UI flow, and how digital products are planned and built.",
      image:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1200&auto=format&fit=crop",
    },
    {
      icon: "fas fa-lightbulb",
      title: "Innovation Lab Support",
      desc: "Support for school technology clubs, project mentoring, lab activities, and student innovation showcases.",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
    },
    {
      icon: "fas fa-user-graduate",
      title: "Career Awareness Sessions",
      desc: "Guidance sessions on technology careers, AI skills, coding paths, project portfolios, and future opportunities.",
      image:
        "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1200&auto=format&fit=crop",
    },
  ],
  whyTitle: "Why Choose Our Training Programs?",
  whyIntro:
    "We make modern technology easier for students to understand through projects, simple explanations, and practical classroom delivery.",
  whyImage:
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop",
  whyPoints: [
    "Hands-on activities instead of only theory.",
    "Programs for schools, colleges, and student clubs.",
    "AI, coding, robotics, IoT, and web foundations.",
    "Project-based learning for better engagement.",
    "Flexible workshop and training formats.",
    "Mentorship for student projects and innovation events.",
  ],
};

// Business Automation Page Content
export const BUSINESS_AUTOMATION_PAGE = {
  eyebrow: "Business Automation Solutions",
  title: "Automate Repetitive Business Work",
  subtitle:
    "We build custom automation, dashboards, reporting tools, CRM workflows, and internal systems that help teams save time and work with clarity.",
  heroImage:
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop",
  introTitle: "Simplify Operations With",
  introAccent: " Smart Systems",
  intro:
    "Many business teams lose time in repeated manual tasks, scattered spreadsheets, follow-ups, reports, and disconnected tools.",
  introSecond:
    "We create practical automation systems that connect your forms, dashboards, notifications, customer records, reports, and internal workflows.",
  introImage:
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1600&auto=format&fit=crop",
  points: [
    "Custom dashboards for operations, sales, and reporting.",
    "Workflow automation for repetitive team tasks.",
    "CRM, lead, follow-up, and customer management tools.",
    "Role-based internal systems for daily business work.",
  ],
  servicesTitle: "Automation Services",
  servicesIntro:
    "Business automation solutions designed around your current workflow and growth needs.",
  services: [
    {
      icon: "fas fa-chart-pie",
      title: "Business Dashboards",
      desc: "Custom dashboards for KPIs, sales activity, operations, tasks, leads, reports, and management visibility.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    },
    {
      icon: "fas fa-filter-circle-dollar",
      title: "Lead Management Systems",
      desc: "Lead capture, qualification, follow-up tracking, customer notes, reminders, and simple CRM workflows.",
      image:
        "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1200&auto=format&fit=crop",
    },
    {
      icon: "fas fa-file-lines",
      title: "Report Automation",
      desc: "Automated reports from forms, sheets, databases, and internal workflows so teams can reduce manual reporting work.",
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1200&auto=format&fit=crop",
    },
    {
      icon: "fas fa-gears",
      title: "Workflow Automation",
      desc: "Connect approvals, notifications, assignments, forms, spreadsheets, and dashboards into smoother workflows.",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
    },
    {
      icon: "fas fa-users-gear",
      title: "Internal Team Portals",
      desc: "Role-based portals for teams to manage tasks, records, customers, requests, approvals, and daily operations.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
    },
    {
      icon: "fas fa-plug",
      title: "Tool Integration",
      desc: "Integrate websites, forms, databases, CRMs, spreadsheets, and notification tools into one reliable data flow.",
      image:
        "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1200&auto=format&fit=crop",
    },
  ],
  whyTitle: "Why Choose Our Automation Solutions?",
  whyIntro:
    "We build practical systems that reduce manual work, improve visibility, and help teams operate with fewer disconnected tools.",
  whyImage:
    "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1600&auto=format&fit=crop",
  whyPoints: [
    "Custom workflows based on your real process.",
    "Dashboards that make daily work easier to track.",
    "Reduced manual reporting and repetitive tasks.",
    "CRM and lead systems for growing teams.",
    "Role-based access for internal business tools.",
    "Integrations with websites, apps, sheets, and databases.",
  ],
};

// Industrial IoT Page Content
export const industrialIoT = {
  // ---------- HERO ----------
  eyebrow: "Industrial Internet Of Things",
  title: "Manufacturing analytics and shop-floor automation",
  subtitle:
    "Connect your equipment, PLCs, and sensors into one Industrial IoT system. Automate factory operations, unlock real-time visibility, and turn shop-floor data into action.",
  ctaLabel: "GET STARTED",
  heroImage:
  "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1600",
  heroOverlayImages: [
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=400&auto=format&fit=crop",
  ],

  // // ---------- TRUSTED BY STRIP ----------
  // trustedByLabel: "Trusted by",
  // trustedByLogos: [
  //   { name: "Orbex Systems" },
  //   { name: "Velatrix" },
  //   { name: "Northgate Industries" },
  //   { name: "Unilume Manufacturing" },
  //   { name: "Ferro Dynamics" },
  // ],

  // ---------- WHAT / WHY / HOW TABS ----------
  infoTabs: {
    tabs: ["What", "Why", "How"],
    what: [
      {
        question: "What is an Industrial IoT solution?",
        answer:
          "An Industrial IoT (IIoT) solution monitors, collects, and analyzes real-time data from your equipment, turning raw sensor signals into meaningful shop-floor insights.",
      },
      {
        question: "What is Industry 4.0?",
        answer:
          "Industry 4.0 is the integration of connected sensors, automation, and intelligent software to modernize manufacturing and industrial processes end to end.",
      },
    ],
    why: {
      heading: "Why do you need IIoT?",
      subheading: "IIoT is built to scale with your operations. It helps teams:",
      leftPoints: [
        "Turn real-time machine data into decisions",
        "Spot issues early and prevent costly downtime",
        "Drive continuous improvement across every line",
      ],
      rightPoints: [
        "Apply shop-floor expertise at scale",
        "Improve efficiency while reducing operating costs",
      ],
    },
    how: {
      heading: "How do I get started?",
      steps: [
        "Share your requirements with our team",
        "We assess your site, machines, and existing setup",
        "We walk you through a tailored demo of the platform",
        "We propose a solution built around your goals",
      ],
      ctaLabel: "REQUEST DEMO",
    },
  },

// ---------- SOLUTIONS WE DELIVER ----------
manufacturingTypesTitle: "Solutions We Deliver",

manufacturingTypesIntro:
  "We help manufacturers collect machine data, connect industrial equipment, and build real-time dashboards for better visibility and decision-making.",

manufacturingTypes: [
  {
    title: "Industrial Data Collection",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=900&auto=format&fit=crop",
    items: [
      "PLC Data Acquisition",
      "Machine Monitoring",
      "Industrial IoT Integration",
      "Modbus Communication",
      "Profinet Connectivity",
      "Data Logging",
      "Real-Time Data Collection",
      "Gateway Integration",
    ],
  },
  {
    title: "Industrial Dashboards & Analytics",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&auto=format&fit=crop",
    items: [
      "Production Dashboards",
      "OEE Dashboards",
      "Machine Performance Analytics",
      "Downtime Monitoring",
      "Live KPI Tracking",
      "Cloud Dashboards",
      "Custom Reporting",
      "Industry 4.0 Visualization",
    ],
  },
],
  // ---------- PLATFORM SECTION: COLLECT / CONNECT / CUSTOMIZE ----------
  platformTitle: "Inside the IIoT platform",
  platformSubtitle:
    "A closer look at how data moves from your machines to meaningful action.",
  platformTabs: [
    {
      key: "collect",
      label: "Collect",
      images: [
        "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=900&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=900&auto=format&fit=crop",
      ],
      items: [
        {
          title: "Connect seamlessly",
          desc:
            "Support for multiple brands and data-collection protocols across legacy and modern machines — scale from a few units to a few hundred.",
        },
        {
          title: "Collect data from devices and controllers",
          desc:
            "Plug into PLC/SCADA systems, sensors, and gateways using MODBUS, OPC-UA, RTU, MTConnect, Profibus, Profinet, EtherNet/IP, and more.",
        },
        {
          title: "Collect a range of data types",
          desc:
            "Monitor sensor values, machine status, alarms, overrides, load averages, speeds, temperatures, and diagnostic parameters.",
        },
        {
          title: "High-frequency data collection",
          desc:
            "Capture real-time data at high frequency from CNC and precision controls, ready to feed machine-learning models.",
        },
        {
          title: "Configure and manage sensors remotely",
          desc:
            "Integrate external sensors or connect older equipment via digital/analog I/O, and manage everything from one web interface.",
        },
      ],
      brandsLabel: "Brands we support",
      brands: ["Siemens", "Mitsubishi", "Schneider", "ABB", "Fanuc", "Mazak", "Hitachi", "Beckhoff", "Delta", "Allen Bradley"],
      protocolsLabel: "Protocols we support",
      protocols: ["MQTT", "OPC-UA", "Modbus", "Profinet", "Profibus", "BACnet", "CANbus", "EtherCAT", "SNMP", "CoAP", "MTConnect", "EtherNet/IP"],
    },
    {
      key: "connect",
      label: "Connect",
      images: [
        "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=900&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=900&auto=format&fit=crop",
      ],
      items: [
        {
          title: "Edge computing",
          desc:
            "Run localized actions and data filtering at the edge — refine what's sent for analytics and push updates without a site visit.",
        },
        {
          title: "Secure data aggregation",
          desc:
            "Bring data together from multiple sources on a secure, scalable infrastructure with built-in data management tools.",
        },
        {
          title: "Telemetry and reporting",
          desc:
            "Sync equipment data for consistent reporting and AI-based analytics across sensor values, statuses, alarms, and loads.",
        },
        {
          title: "Remote management",
          desc:
            "Manage and control machines remotely, applying changes from anywhere with a click — no site visit required.",
        },
        {
          title: "Secure cloud integration and storage",
          desc:
            "Stream and store data securely from the edge to the cloud over HTTPS/MQTT for fast, scalable access.",
        },
      ],
    },
    {
      key: "customize",
      label: "Customize",
      images: [
        "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=900&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=900&auto=format&fit=crop",
      ],
      items: [
        {
          title: "Integrate with other applications and APIs",
          desc:
            "Connect machine data to your digital factory via REST APIs — link to your CRM, ERP, BI tools, and more.",
        },
        {
          title: "Create workflows",
          desc:
            "Build rule-based workflows on shop-floor data to trigger manual actions or automated system responses.",
        },
        {
          title: "Real-time insights",
          desc:
            "Give technicians live and historical condition monitoring with color-coded alerts for preventative maintenance.",
        },
        {
          title: "Integrate AI with analytics",
          desc:
            "Use performance reports to identify bottlenecks, assess OEE, and gain visibility into every production line.",
        },
        {
          title: "Build your own IIoT solutions",
          desc:
            "Develop custom apps with your own UI and integrate them with third-party tools for quality control, inventory, and more.",
        },
      ],
    },
  ],

  // ---------- 10 SHOP-FLOOR AUTOMATION CATEGORIES (TABS) ----------
  automationTitle: "One platform for complete shop-floor automation",
   automationCategories: [
  {
    key: "machine-monitoring",
    label: "Machine Monitoring Dashboards",
    heading: "Real-time machine performance visibility",
    intro: "Monitor machine health, uptime, downtime, and production data from a centralized dashboard.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=900",
    items: [
      { title: "Live Machine Status", desc: "Track running, idle, and fault conditions in real time." },
      { title: "Downtime Analysis", desc: "Identify production losses and machine stoppages." },
      { title: "Performance Monitoring", desc: "Measure output, cycle time, and machine efficiency." },
      { title: "Remote Access", desc: "Monitor factory equipment from anywhere." },
    ],
  },

  {
    key: "production-monitoring",
    label: "Production Monitoring Dashboards",
    heading: "Complete shop-floor visibility",
    intro: "Monitor production lines and improve operational efficiency.",
    image: "https://images.unsplash.com/photo-1567789884554-0b844b597180?w=900",
    items: [
      { title: "Production Tracking", desc: "Monitor actual production against targets." },
      { title: "Cycle Time Monitoring", desc: "Identify process bottlenecks quickly." },
      { title: "Operator Performance", desc: "Track productivity and operational efficiency." },
      { title: "Live Dashboards", desc: "Visualize production KPIs in real time." },
    ],
  },

  {
    key: "oee-dashboard",
    label: "OEE Dashboard",
    heading: "Improve equipment effectiveness",
    intro: "Track availability, performance, and quality from one dashboard.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900",
    items: [
      { title: "Availability Tracking", desc: "Measure machine uptime accurately." },
      { title: "Performance Analysis", desc: "Monitor production efficiency continuously." },
      { title: "Quality Monitoring", desc: "Track rejection and rework rates." },
      { title: "OEE Reporting", desc: "Generate actionable production reports." },
    ],
  },

  {
    key: "asset-tracking",
    label: "Asset & Tool Tracking Technology",
    heading: "Know where your assets are",
    intro: "Track tools, equipment, and critical assets across the plant.",
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=900",
    items: [
      { title: "Tool Management", desc: "Monitor tool usage and availability." },
      { title: "Asset Tracking", desc: "Track equipment location in real time." },
      { title: "Inventory Visibility", desc: "Improve stock and spare management." },
      { title: "Usage History", desc: "Analyze asset utilization trends." },
    ],
  },

  {
    key: "energy-monitoring",
    label: "Energy Monitoring Dashboards",
    heading: "Reduce energy costs",
    intro: "Monitor power consumption and identify opportunities for savings.",
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=900",
    items: [
      { title: "Power Monitoring", desc: "Track energy usage across machines." },
      { title: "Consumption Analysis", desc: "Identify energy-intensive operations." },
      { title: "Cost Optimization", desc: "Reduce unnecessary energy expenses." },
      { title: "Utility Reporting", desc: "Generate energy performance reports." },
    ],
  },

  {
    key: "industry4",
    label: "Industry 4.0 Integration",
    heading: "Connect machines to the cloud",
    intro: "Enable smart factory transformation using Industrial IoT technologies.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=900",
    items: [
      { title: "PLC Integration", desc: "Connect Siemens, Mitsubishi, ABB and other PLCs." },
      { title: "IoT Gateways", desc: "Collect and transfer machine data securely." },
      { title: "Cloud Dashboards", desc: "Access production data anywhere." },
      { title: "Custom Solutions", desc: "Build Industry 4.0 systems tailored to your plant." },
    ],
  },
],
  // ---------- "DETERMINE CAUSE & EFFECT" FEATURE GRID ----------
  // insightsTitle: "Make your machines and processes more efficient",
  // insightsCtaLabel: "REQUEST DEMO",
  // insightsSubtitle:
  //   "Get clear visibility into machine, line, and building-level energy, health, usage, and performance — plus the maintenance and analytical insight to act on it.",
  // insightsFeatures: [
  //   {
  //     title: "Seamless connectivity",
  //     desc: "Connect any device, sensor, or machine regardless of brand or protocol for a smooth production process.",
  //   },
  //   {
  //     title: "Workflows",
  //     desc: "Automate the shop floor with triggers and actions based on machine or operator data.",
  //   },
  //   {
  //     title: "Smart alerts and notifications",
  //     desc: "Get notified of production shortfalls, rejection spikes, downtime, and setup changes.",
  //   },
  //   {
  //     title: "Data security and privacy",
  //     desc: "Keep your IIoT data and devices secure with built-in authentication and authorization.",
  //   },
  //   {
  //     title: "Data acquisition",
  //     desc: "Collect large-scale, real-time data from traditional and modern machines alike.",
  //   },
  //   {
  //     title: "Intuitive data visualization",
  //     desc: "Build custom dashboards with pre-built widgets for output, availability, and more.",
  //   },
  //   {
  //     title: "Analytics and reporting",
  //     desc: "Drill into performance, availability, and quality data to assess shop-floor OEE.",
  //   },
  //   {
  //     title: "Data modeling",
  //     desc: "Define how machine data should be processed and what actions it should trigger.",
  //   },
  //   {
  //     title: "Business app integrations",
  //     desc: "Connect ERP, billing, helpdesk, and other systems to streamline operations.",
  //   },
  //   {
  //     title: "Mobile app",
  //     desc: "Give your team a custom mobile experience for data-driven decisions on the floor.",
  //   },
  // ],

  // ---------- BENEFITS GRID ----------
  // benefitsTitle: "Get more out of your manufacturing operations",
  // benefitsGroups: [
  //   { heading: "Increase", items: ["Asset life cycle", "Machine efficiency", "Revenue"] },
  //   { heading: "Improve", items: ["Operator retention", "Machine performance", "Product quality"] },
  //   { heading: "Optimize", items: ["Machine utilization", "Maintenance cycles", "Production"] },
  //   { heading: "Transform", items: ["Your business", "Manufacturing operations", "Workforce efficiency"] },
  //   { heading: "Reduce", items: ["Downtime", "Energy consumption", "Maintenance & replacement costs"] },
  // ],

  // ---------- PARTNER PROGRAM ----------
  // partnerProgram: {
  //   eyebrow: "IIoT partner program",
  //   title: "Envision, unite, prosper",
  //   desc:
  //     "A successful industrial transformation depends on a strong partner ecosystem. Our network brings together specialists who create real value for customers across discrete manufacturing.",
  //   image:
  //     "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=1200&auto=format&fit=crop",
  //   ctaLabel: "BECOME A PARTNER",
  // },

  // ---------- TESTIMONIALS ----------
  // testimonialsTitle: "What our partners say",
  // testimonials: [
  //   {
  //     quote:
  //       "Being part of a forward-looking platform like this has let us put real effort into driving adoption across the industry. We see huge room for growth ahead.",
  //     name: "Arvind Menon",
  //     role: "CEO, Northgate Industries",
  //   },
  //   {
  //     quote:
  //       "This is a genuinely powerful platform for building custom IoT solutions fast. It's shortened our time to market and opened doors across multiple verticals.",
  //     name: "Daniel Reyes",
  //     role: "CEO, Ferro Dynamics",
  //   },
  // ],

  // ---------- FAQ ----------
  faqTitle: "Frequently asked questions",
  faqs: [
    {
      q: "What role does IIoT play in manufacturing?",
      a: "IIoT connects devices and systems to improve efficiency, visibility, and decision-making through real-time data collection, analysis, and automation.",
    },
    {
      q: "How is IoT changing the manufacturing industry?",
      a: "It's improved asset utilization, workforce efficiency, predictive maintenance, quality control, and overall productivity across the sector.",
    },
    {
      q: "What manufacturing challenges does IIoT solve?",
      a: "From equipment reliability and inventory management to quality control, energy efficiency, and workforce planning — IIoT addresses challenges end to end.",
    },
    {
      q: "What's the difference between IoT and IIoT?",
      a: "IIoT is a subset of IoT focused specifically on manufacturing — connecting machines and industrial processes to boost efficiency and productivity.",
    },
    {
      q: "Is this a platform or a packaged solution?",
      a: "It's a platform — the foundation for building and customizing end-to-end solutions for your digital transformation goals.",
    },
    {
      q: "Can it be retrofitted to existing infrastructure?",
      a: "Yes — it's designed to integrate with the equipment and systems you already have.",
    },
    {
      q: "How do I get started?",
      a: "Reach out to our team. We'll assess your current setup, equipment, and sensors to recommend the right path forward.",
    },
    {
      q: "How do I become a solution partner?",
      a: "Fill out our partner enquiry form and our team will follow up to discuss next steps.",
    },
    {
      q: "Who can join the partner program?",
      a: "System integrators, resellers, hardware partners, implementation partners, MSPs, and solution providers are all welcome.",
    },
    {
      q: "Can the solution be customized for my customers?",
      a: "Yes — it's fully customizable and can be bundled with any hardware or third-party application.",
    },
  ],

  // ---------- FINAL CTA ----------
  finalCta: {
    title: "Kickstart your industrial machine monitoring",
    ctaLabel: "GET STARTED",
    image:
      "https://images.unsplash.com/photo-1581091870627-3b58a59a8e62?q=80&w=1200&auto=format&fit=crop",
  },
};
  

//  Web Development Page Content
export const Web_Development_Description = [
{
  icon: "fas fa-building",
  title: "Business & Corporate Websites",
  desc: "Professional websites designed to establish credibility, showcase services, and generate business leads.",
  features: [
    "Professional Branding",
    "Lead Generation",
    "Mobile Responsive",
    "SEO Ready Structure"
  ],
  freeIncluded: "Digital Business Card QR",
  timeline: "2–4 Weeks",
  price: "Starting From ₹20,000",
},

{
  icon: "fas fa-shopping-cart",
  title: "E-Commerce Websites",
  desc: "Scalable online stores with secure payments, inventory management, and customer-friendly shopping experiences.",
  features: [
    "Secure Payments",
    "Product Management",
    "Order Tracking",
    "Customer Dashboard"
  ],
  freeIncluded: "WhatsApp Order Support",
  timeline: "3–6 Weeks",
  price: "Starting From ₹35,000",
},

{
  icon: "fas fa-graduation-cap",
  title: "School & Coaching Platforms",
  desc: "Modern educational websites with learning tools, student management, and online examination capabilities.",
  features: [
    "Course Management",
    "Student Dashboard",
    "Online Assessments",
    "Progress Tracking"
  ],
  freeIncluded: "Secure Online Examination Platform",
  timeline: "3–5 Weeks",
  price: "Starting From ₹30,000",
},

{
  icon: "fas fa-hospital",
  title: "Healthcare & Clinic Websites",
  desc: "Professional healthcare portals with appointment booking and patient engagement features.",
  features: [
    "Appointment Booking",
    "Doctor Profiles",
    "Patient Enquiries",
    "Mobile Friendly Design"
  ],
  freeIncluded: "Online Appointment System",
  timeline: "2–5 Weeks",
  price: "Starting From ₹25,000",
},

{
  icon: "fas fa-home",
  title: "Real Estate Websites",
  desc: "Property listing platforms designed to showcase projects and generate qualified buyer enquiries.",
  features: [
    "Property Listings",
    "Photo Galleries",
    "Lead Management",
    "Location Integration"
  ],
  freeIncluded: "Property QR System",
  timeline: "3–6 Weeks",
  price: "Starting From ₹40,000",
},

{
  icon: "fas fa-briefcase",
  title: "Job Portal & Recruitment Websites",
  desc: "Smart hiring platforms connecting employers and candidates through efficient recruitment workflows.",
  features: [
    "Job Listings",
    "Application Tracking",
    "Employer Dashboard",
    "Candidate Management"
  ],
  freeIncluded: "Candidate Tracking System",
  timeline: "4–6 Weeks",
  price: "Starting From ₹45,000",
},
];

//  App Development Page Content
export const App_Dev_Description = [
  {
    icon: "fas fa-briefcase",
    title: "Business Mobile Apps",
    desc: "Custom mobile applications for businesses, startups, service providers, and corporate organizations.",
    features: [
      "Custom Features",
      "User Management",
      "Push Notifications",
      "Analytics Dashboard"
    ],
    freeIncluded: "App Publishing Support",
    timeline: "6–10 Weeks",
    price: "₹40,000 – ₹2,00,000",
  },

  {
    icon: "fas fa-shopping-cart",
    title: "E-Commerce Apps",
    desc: "Feature-rich shopping applications with secure payments, order management, and customer engagement tools.",
    features: [
      "Secure Payments",
      "Order Tracking",
      "Product Management",
      "Customer Dashboard"
    ],
    freeIncluded: "WhatsApp Order Integration",
    timeline: "8–12 Weeks",
    price: "₹60,000 – ₹3,00,000",
  },

  {
    icon: "fas fa-graduation-cap",
    title: "Education & Coaching Apps",
    desc: "Learning platforms for schools, colleges, coaching institutes, and online training providers.",
    features: [
      "Course Management",
      "Live Classes",
      "Student Dashboard",
      "Progress Tracking"
    ],
    freeIncluded: "Secure Online Examination Platform",
    timeline: "8–12 Weeks",
    price: "₹55,000 – ₹2,50,000",
  },

  {
    icon: "fas fa-heartbeat",
    title: "Healthcare Apps",
    desc: "Healthcare and wellness applications with appointment booking, patient management, and teleconsultation.",
    features: [
      "Appointment Booking",
      "Patient Records",
      "Teleconsultation",
      "Health Tracking"
    ],
    freeIncluded: "Appointment Management Dashboard",
    timeline: "10–14 Weeks",
    price: "₹80,000 – ₹4,00,000",
  },

  {
    icon: "fas fa-home",
    title: "Booking & Service Apps",
    desc: "Apps for hotels, travel agencies, salons, gyms, restaurants, and service-based businesses.",
    features: [
      "Online Booking",
      "Service Management",
      "Customer Notifications",
      "Reviews & Ratings"
    ],
    freeIncluded: "QR Booking System",
    timeline: "6–10 Weeks",
    price: "₹50,000 – ₹2,50,000",
  },

  {
    icon: "fas fa-industry",
    title: "Industrial & IoT Apps",
    desc: "Smart industrial applications for monitoring, automation, tracking, and operational visibility.",
    features: [
      "Real-Time Monitoring",
      "IoT Integration",
      "Live Dashboards",
      "Analytics & Reports"
    ],
    freeIncluded: "Dashboard Setup Consultation",
    timeline: "8–16 Weeks",
    price: "₹75,000 – ₹5,00,000",
  },
];
// export const UI_Web_Design_Description = [
//   {
//     title: "Website UI Design",
//     desc: "Modern and responsive website interfaces focused on branding, usability, and customer engagement.",
//     image:
//       "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
//   },

//   {
//     title: "Mobile App UI/UX",
//     desc: "Creative mobile application designs with smooth navigation and user-friendly experiences.",
//     image:
//       "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1200&auto=format&fit=crop",
//   },

//   {
//     title: "Dashboard Design",
//     desc: "Professional admin dashboards and management panels with clean layouts and modern UI systems.",
//     image:
//       "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
//   },

//   {
//     title: "Brand Identity Design",
//     desc: "Creative branding solutions including typography, color systems, layouts, and visual identity.",
//     image:
//       "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=1200&auto=format&fit=crop",
//   },
// ];

// export const DIGITAL_MARKETING_SERVICES = [
//   {
//     icon: "fas fa-magnifying-glass-chart",
//     title: "Search Engine Optimization",
//     desc: "Improve website visibility and Google rankings with professional SEO strategies and performance optimization.",
//     image:
//       "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?q=80&w=1200&auto=format&fit=crop",
//   },

//   {
//     icon: "fas fa-bullhorn",
//     title: "Social Media Marketing",
//     desc: "Creative social media campaigns for Instagram, Facebook, LinkedIn, and other platforms to grow your brand presence.",
//     image:
//       "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1200&auto=format&fit=crop",
//   },

//   {
//     icon: "fas fa-chart-line",
//     title: "Performance Marketing",
//     desc: "Data-driven marketing campaigns focused on lead generation, customer engagement, and business growth.",
//     image:
//       "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
//   },

//   {
//     icon: "fas fa-envelope-open-text",
//     title: "Email Marketing",
//     desc: "Professional email marketing campaigns designed to improve customer communication and conversion rates.",
//     image:
//       "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop",
//   },

//   {
//     icon: "fas fa-pen-nib",
//     title: "Content Marketing",
//     desc: "High-quality content creation for blogs, websites, social media, and branding to increase audience engagement.",
//     image:
//       "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1200&auto=format&fit=crop",
//   },

//   {
//     icon: "fas fa-ad",
//     title: "Google & Meta Ads",
//     desc: "Targeted advertising campaigns using Google Ads and Meta Ads to increase reach, traffic, and conversions.",
//     image:
//       "https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=1200&auto=format&fit=crop",
//   },
// ];

// export const TRAINING_PROGRAMS = [
//   {
//     icon: "fas fa-code",
//     title: "Web Development Training",
//     desc: "Hands-on training in modern website development using React.js, HTML, CSS, JavaScript, and responsive design.",
//     image:
//       "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
//   },

//   {
//     icon: "fas fa-mobile-screen",
//     title: "Application Development",
//     desc: "Learn mobile and application development with real-world projects using Flutter, React Native, and Firebase.",
//     image:
//       "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1200&auto=format&fit=crop",
//   },

//   {
//     icon: "fas fa-robot",
//     title: "AI & Robotics Training",
//     desc: "Practical AI and robotics training with automation concepts, smart systems, and industrial applications.",
//     image:
//       "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1200&auto=format&fit=crop",
//   },

//   {
//     icon: "fas fa-microchip",
//     title: "IoT & Embedded Systems",
//     desc: "Build IoT and embedded projects using Arduino, ESP32, Raspberry Pi, and real-time monitoring systems.",
//     image:
//       "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
//   },

//   {
//     icon: "fas fa-industry",
//     title: "Industrial Automation",
//     desc: "Industrial automation training covering PLC, HMI, SCADA, sensors, and smart manufacturing systems.",
//     image:
//       "https://images.unsplash.com/photo-1567789884554-0b844b597180?q=80&w=1200&auto=format&fit=crop",
//   },

//   {
//     icon: "fas fa-user-graduate",
//     title: "Internship & Mentorship",
//     desc: "Industry-focused internship and mentorship programs designed to improve practical skills and career growth.",
//     image:
//       "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
//   },
// ];
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
  "Custom websites and mobile applications built for growth",
  "AI-powered solutions to automate tasks and improve decisions",
  "Industrial IoT systems for real-time monitoring and visibility",
  "Practical AI and coding programs for schools and colleges",
];

export const TRAINING_TOOLS = ["🤖 Arduino","🍓 Raspberry Pi","🐍 Python","🧠 TensorFlow","📡 ESP32","⚡ PLC","☁️ Cloud IoT","🦾 ROS","📊 Jupyter"];

export const TRAINING_STATS = [
  { num: 100, label: "Students Trained" },
  { num: 2,   label: "Schools & Colleges" },
  { num: 12,  label: "Workshops Done" },
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
  { stars: 5, text: "Innotech Solutions transformed our manufacturing plant. The IoT dashboard saved us from 3 major breakdowns in the first month. Exceptional expertise.", name: "Rajesh Kumar",     role: "GM Operations, AutoParts Industries", initials: "RK", grad: "from-cyan-400 to-blue-500" },
  { stars: 5, text: "The website they built tripled our organic traffic in 4 months. Clean code, beautiful design, and the digital marketing strategy was spot on!", name: "Priya Sharma",      role: "Founder, TechStart Solutions",        initials: "PS", grad: "from-purple-500 to-pink-500" },
  { stars: 5, text: "The robotics workshop at our school was outstanding. Students were completely engaged. We've seen a 60% increase in tech interest since.", name: "Anjali Mishra",     role: "Principal, DPS Bhopal",               initials: "AM", grad: "from-green-400 to-blue-500" },
  { stars: 5, text: "Their AI integration helped us automate 70% of data processing. What took 8 hours now runs in under 30 minutes. Game-changing results.", name: "Vikram Gupta",      role: "CTO, DataFlow Analytics",             initials: "VG", grad: "from-orange-400 to-red-500" },
  { stars: 5, text: "From concept to deployment in 6 weeks — fast, professional, and quality-focused. The mobile app has 4.8 stars on both stores.", name: "Neha Singh",        role: "CEO, FieldForce Pvt Ltd",             initials: "NS", grad: "from-cyan-400 to-green-400" },
  { stars: 5, text: "Innotech set up our complete STEM innovation lab. The quality and ongoing support has made us a model institution in the state.", name: "Dr. Dinesh Tiwari", role: "HOD CS, NIT Bhopal",                  initials: "DT", grad: "from-purple-500 to-blue-500" },
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
  Services: ["Web Development","Mobile Apps","AI Services","Industrial IoT","AI & Coding Training"],
  Solutions: ["Business Automation","Machine Monitoring","Predictive Analytics","Smart Dashboards","Sensor Dashboards"],
  Company:  ["About Us","Portfolio","Testimonials","Industries","Contact Us"],
};


// Tech stack used for Website Development Page
export const Web_Tech_Stack = [
    {
      category: "Frontend",
      icon: "fas fa-laptop-code",
      color: "from-violet-500/10 to-violet-500/5",
      border: "border-violet-200",
      iconColor: "text-violet-500",
      tagBorder: "border-violet-200",
      tagText: "text-violet-700",
      tagBg: "bg-violet-50",
      items: ["React", "Next.js", "Vue.js", "TypeScript"],
    },
    {
      category: "Backend",
      icon: "fas fa-server",
      color: "from-sky-500/10 to-sky-500/5",
      border: "border-sky-200",
      iconColor: "text-sky-500",
      tagBorder: "border-sky-200",
      tagText: "text-sky-700",
      tagBg: "bg-sky-50",
      items: ["Node.js", "Python", "PHP", "Express"],
    },
    {
      category: "Database & Cloud",
      icon: "fas fa-cloud",
      color: "from-emerald-500/10 to-emerald-500/5",
      border: "border-emerald-200",
      iconColor: "text-emerald-500",
      tagBorder: "border-emerald-200",
      tagText: "text-emerald-700",
      tagBg: "bg-emerald-50",
      items: ["MongoDB", "PostgreSQL", "AWS", "Vercel"],
    },
  ];


// Tech stack used for  App Development Page
  export const App_Tech_Stack = [
    {
      category: "Mobile Frameworks",
      icon: "fas fa-mobile-alt",
      color: "from-[#0ea5e9]/15 to-[#0ea5e9]/5",
      border: "border-sky-200",
      iconColor: "text-[#0ea5e9]",
      tagBorder: "border-sky-200",
      tagText: "text-sky-700",
      tagBg: "bg-sky-50",
      items: ["React Native", "Flutter", "Swift", "Kotlin"],
    },
    {
      category: "Backend & APIs",
      icon: "fas fa-server",
      color: "from-violet-500/15 to-violet-500/5",
      border: "border-violet-200",
      iconColor: "text-violet-500",
      tagBorder: "border-violet-200",
      tagText: "text-violet-700",
      tagBg: "bg-violet-50",
      items: ["Node.js", "Firebase", "GraphQL", "REST APIs"],
    },
    {
      category: "Cloud & DevOps",
      icon: "fas fa-cloud-upload-alt",
      color: "from-emerald-500/15 to-emerald-500/5",
      border: "border-emerald-200",
      iconColor: "text-emerald-500",
      tagBorder: "border-emerald-200",
      tagText: "text-emerald-700",
      tagBg: "bg-emerald-50",
      items: ["AWS", "GCP", "CI/CD", "Docker"],
    },
  ];
