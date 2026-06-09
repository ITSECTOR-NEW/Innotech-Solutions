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

        {
          label: "AI & Coding Training for Schools",
          href: "/services/ai-coding-training-schools",
        },

        {
          label: "Business Automation Solutions",
          href: "/services/business-automation-solutions",
        },
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
    icon: "fas fa-brain",
    title: "AI Services",
    desc: "Custom AI solutions for healthcare, education, business workflows, analytics, support assistants, and smart decision-making.",
    tags: ["AI Apps", "Analytics", "Automation"],
    gradient: "from-orange-400 to-red-500",
    detailPath: "/services/ai-services",
  },
  {
    icon: "fas fa-microchip",
    title: "Industrial Internet of Things",
    desc: "Connected industrial IoT systems for sensors, machines, gateways, dashboards, alerts, and real-time operational visibility.",
    tags: ["IIoT", "Sensors", "Dashboards"],
    gradient: "from-cyan-400 to-green-500",
    detailPath: "/services/industrial-internet-of-things",
  },
  // {
  //   icon: "fas fa-robot",
  //   title: "Robotics & AI Automation",
  //   desc: "Industrial robotic systems, AI-powered automation pipelines, and machine learning integration for smarter manufacturing.",
  //   tags: ["Machine Learning", "Computer Vision", "RPA"],
  //   gradient: "from-purple-500 to-blue-500",
  // },
  {
    icon: "fas fa-graduation-cap",
    title: "AI & Coding Training for Schools",
    desc: "Practical AI, coding, robotics, and project-based technology training for schools, colleges, and student innovation programs.",
    tags: ["AI Basics", "Coding", "Workshops"],
    gradient: "from-pink-500 to-purple-600",
    detailPath: "/services/ai-coding-training-schools",
  },
  {
    icon: "fas fa-gears",
    title: "Business Automation Solutions",
    desc: "Workflow automation, custom dashboards, reporting systems, CRM tools, and internal software that reduce manual business work.",
    tags: ["Automation", "Dashboards", "CRM"],
    gradient: "from-orange-400 to-green-500",
    detailPath: "/services/business-automation-solutions",
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

export const IOT_WORK_SPEAK_SECTION = {
  eyebrow: "We Will Let Our Work Speak First",
  title: "From discovery to execution",
  services: [
    {
      title: "IoT App Development",
      desc: "We create web and mobile interfaces for connected devices so teams can monitor equipment, view live status, receive alerts, and control workflows from one clean application.",
    },
    {
      title: "Device Integration",
      desc: "We connect sensors, gateways, controllers, and industrial devices into a reliable data flow using practical protocols and APIs suited to your hardware environment.",
    },
    {
      title: "Edge Computing Solutions",
      desc: "We design edge-based processing for faster local decisions, reduced latency, and stable operations even when cloud connectivity is limited or intermittent.",
    },
    {
      title: "IoT Analytics",
      desc: "We turn sensor and machine data into useful insights through dashboards, trend analysis, alert rules, and predictive indicators that help teams monitor performance and act earlier.",
    },
  ],
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

export const AI_SERVICE_PAGES = {
  "ai-services": {
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
  },
  "ai-coding-training-schools": {
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
  },
  "business-automation-solutions": {
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
  },
  "industrial-internet-of-things": {
    eyebrow: "Industrial Internet of Things",
    title: "Connected Industrial IoT Systems",
    subtitle:
      "We build IIoT solutions that connect machines, sensors, gateways, cloud dashboards, and alerts for real-time industrial visibility.",
    heroImage:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop",
    introTitle: "Connect Machines With",
    introAccent: " Real-Time Data",
    intro:
      "Industrial Internet of Things helps teams monitor equipment, collect sensor data, track production, and identify issues before they become costly downtime.",
    introSecond:
      "We design practical IIoT systems with sensors, PLC connectivity, edge gateways, cloud dashboards, alerts, and analytics that fit your plant workflow.",
    introImage:
      "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=1600&auto=format&fit=crop",
    points: [
      "Sensor, machine, PLC, and gateway connectivity.",
      "Real-time dashboards for machine and production data.",
      "Alerts for downtime, threshold breaches, and faults.",
      "Cloud-ready data pipelines for analytics and reporting.",
    ],
    servicesTitle: "Industrial IoT Services",
    servicesIntro:
      "Connected industrial systems for monitoring, automation visibility, asset tracking, energy management, and smarter operations.",
    services: [
      {
        icon: "fas fa-microchip",
        title: "Sensor Integration",
        desc: "Connect temperature, vibration, pressure, energy, proximity, and other industrial sensors into a reliable data flow.",
        image:
          "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
      },
      {
        icon: "fas fa-network-wired",
        title: "Machine Connectivity",
        desc: "Integrate machines, PLCs, controllers, and gateways using practical industrial communication patterns.",
        image:
          "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
      },
      {
        icon: "fas fa-gauge-high",
        title: "Live Monitoring Dashboards",
        desc: "Dashboards for machine status, production metrics, downtime events, energy usage, and operational KPIs.",
        image:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
      },
      {
        icon: "fas fa-bell",
        title: "Alerts & Notifications",
        desc: "Instant alerts for abnormal readings, machine stoppages, fault conditions, and maintenance triggers.",
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
      },
      {
        icon: "fas fa-boxes-stacked",
        title: "Asset & Tool Tracking",
        desc: "Track critical assets, tools, material movement, and inventory usage with connected monitoring systems.",
        image:
          "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop",
      },
      {
        icon: "fas fa-cloud-arrow-up",
        title: "Edge & Cloud Pipelines",
        desc: "Move industrial data from edge devices to cloud platforms for analytics, reports, and future AI use cases.",
        image:
          "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop",
      },
    ],
    whyTitle: "Why Choose Our Industrial IoT?",
    whyIntro:
      "We build IIoT systems that are practical for real industrial environments, easy for teams to monitor, and ready to scale as operations grow.",
    whyImage:
      "https://images.unsplash.com/photo-1581092921461-eab10380b8e0?q=80&w=1600&auto=format&fit=crop",
    whyPoints: [
      "Real-time visibility across machines and processes.",
      "Practical sensor and gateway planning.",
      "Dashboards designed for plant teams and managers.",
      "Alerts that help reduce downtime and response time.",
      "Cloud-ready data for analytics and AI expansion.",
      "Support for web, app, and industrial dashboard integration.",
    ],
  },
};

export const Web_Development_Description = [
    {
icon: "fas fa-building",
title: "Corporate & Business Websites",
desc: "Professional websites crafted to strengthen brand identity, build trust, and generate valuable business enquiries.",
features: [
"Professional Branding",
"Lead Generation",
"Mobile Responsive",
"SEO Ready Structure"
],
timeline: "2–4 Weeks",
price: "Starting From ₹20,000",
},

{
icon: "fas fa-shopping-cart",
title: "E-Commerce Solutions",
desc: "Online stores designed to deliver seamless shopping experiences and support sustainable sales growth.",
features: [
"Secure Payments",
"Product Management",
"Order Tracking",
"Customer Dashboard"
],
timeline: "3–6 Weeks",
price: "Starting From ₹35,000",
},

{
icon: "fas fa-graduation-cap",
title: "Educational Platforms",
desc: "Interactive learning portals that simplify course delivery and improve student engagement.",
features: [
"Course Management",
"Student Dashboard",
"Online Assessments",
"Progress Tracking"
],
timeline: "3–5 Weeks",
price: "Starting From ₹30,000",
},

{
icon: "fas fa-plane-departure",
title: "Travel & Booking Platforms",
desc: "Modern travel websites with booking capabilities, destination listings, and streamlined user journeys.",
features: [
"Online Reservations",
"Tour Listings",
"Customer Enquiries",
"Booking Management"
],
timeline: "3–6 Weeks",
price: "Starting From ₹40,000",
},

{
icon: "fas fa-briefcase",
title: "Recruitment & Job Portals",
desc: "Smart hiring platforms connecting employers and candidates through efficient recruitment workflows.",
features: [
"Job Listings",
"Application Tracking",
"Employer Dashboard",
"Candidate Management"
],
timeline: "4–6 Weeks",
price: "Starting From ₹45,000",
},

{
icon: "fas fa-newspaper",
title: "Media & Publishing Websites",
desc: "Content-focused platforms built for publishing, audience engagement, and digital media growth.",
features: [
"Content Management",
"Category Organization",
"Audience Engagement",
"Advertising Support"
],
timeline: "2–5 Weeks",
price: "Starting From ₹25,000",
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
