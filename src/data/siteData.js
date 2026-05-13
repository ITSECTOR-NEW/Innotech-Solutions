// ── COMPANY INFO ── Edit your details here
export const COMPANY = {
  name: "Innotech Solutions",
  tagline: "Technology. Innovation. Transformation.",
  email: "info@innotechsolutions.com",
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
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  {
  label: "Services",
  dropdown: [
    {
      section: "IT Services",
      items: [
        { label: "Web Development", href: "#web" },
        { label: "App Development", href: "#app" },
        { label: "AI Solutions", href: "#ai" },
      ],
    },

    {
      section: "Academic Support",
      items: [
        { label: "IoT & Robotics Training", href: "#training" },
        { label: "Student Counselling", href: "#counselling" },
      ],
    },

    {
      section: "",
      items: [
        { label: "View Full Services", href: "#services" },
      ],
    },
  ],
},

  // { href: "#iot", label: "IoT 4.0" },
  // { href: "#training", label: "Training" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#contact", label: "Contact" },
];

export const HERO_STATS = [
  { num: 5, suffix: "+", label: "Projects Done" },
  { num: 4,  suffix: "+", label: "Happy Clients" },
  { num: 2,   suffix: "+", label: "Years Active" },
  { num: 1,  suffix: "+", label: "Industries" },
];

export const SERVICES = [
  {
    icon: "fas fa-code",
    title: "Web Development",
    desc: "High-performance websites and web apps built with modern frameworks. From landing pages to complex enterprise portals.",
    tags: ["React.js", "Next.js", "Node.js", "TypeScript"],
    gradient: "from-cyan-400 to-blue-500",
  },
  {
    icon: "fas fa-mobile-screen",
    title: "Mobile App Development",
    desc: "Native and cross-platform mobile apps for iOS and Android with beautiful UX and powerful backend integration.",
    tags: ["React Native", "Flutter", "Firebase"],
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: "fas fa-pen-ruler",
    title: "UI/UX & Web Designing",
    desc: "Stunning, user-centric interfaces that convert. We craft digital experiences that delight users and drive business outcomes.",
    tags: ["Figma", "Prototyping", "Branding"],
    gradient: "from-orange-400 to-red-500",
  },
  {
    icon: "fas fa-bullhorn",
    title: "Digital Marketing",
    desc: "Full-funnel digital marketing — SEO, social media, paid ads, and content marketing that drives real measurable growth.",
    tags: ["SEO", "Google Ads", "Social Media"],
    gradient: "from-green-400 to-blue-500",
  },
  {
    icon: "fas fa-network-wired",
    title: "Industrial IoT Solutions",
    desc: "Smart factory solutions with real-time monitoring, PLC/SCADA integration, sensor networks, and predictive maintenance.",
    tags: ["SCADA", "PLC", "Sensors", "MQTT"],
    gradient: "from-cyan-400 to-green-500",
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
    title: "AI Integration Services",
    desc: "Embed powerful AI into your existing systems. Chatbots, predictive analytics, NLP, and process intelligence.",
    tags: ["OpenAI", "NLP", "Analytics"],
    gradient: "from-pink-500 to-purple-600",
  },
  {
    icon: "fas fa-graduation-cap",
    title: "School & College Training",
    desc: "Hands-on STEM programs for schools and colleges in Robotics, IoT, AI, and Automation. Career counselling included.",
    tags: ["Robotics", "AI/IoT", "STEM", "Workshops"],
    gradient: "from-orange-400 to-green-500",
  },
  // {
  //   icon: "fas fa-chart-line",
  //   title: "Smart Tool Management",
  //   desc: "Intelligent tool tracking for manufacturing plants — reduce downtime, optimize asset utilization with RFID systems.",
  //   tags: ["RFID", "Dashboard", "Analytics"],
  //   gradient: "from-blue-500 to-cyan-400",
  // },
];

export const WHY_POINTS = [
  { num: "01", title: "Full-Stack Expertise", desc: "From frontend to backend, IoT hardware to AI models — we handle the entire technology stack under one roof." },
  { num: "02", title: "Industry Domain Knowledge", desc: "Deep understanding of manufacturing, education, healthcare, and logistics ensures solutions that truly fit your operations." },
  { num: "03", title: "Agile Delivery", desc: "Sprint-based development with continuous delivery means you see progress fast and can adapt as your business evolves." },
  { num: "04", title: "Post-Deployment Support", desc: "Our commitment doesn't end at launch. We provide ongoing maintenance, updates, and 24/7 technical support." },
  { num: "05", title: "Education & Empowerment", desc: "We train your teams and student communities, creating sustainable technology capability for the long term." },
];

export const WHY_STATS = [
  { icon: "fas fa-project-diagram", num: 40, label: "Projects Delivered" },
  { icon: "fas fa-smile",           num: 20,  label: "Satisfied Clients" },
  { icon: "fas fa-award",           num: 2,  label: "Industry Awards" },
  { icon: "fas fa-graduation-cap",  num: 100,label: "Students Trained" },
];

export const IOT_FEATURES = [
  { icon: "fas fa-industry",       title: "Smart Factory Solutions",  desc: "End-to-end factory automation with interconnected machines and AI-driven workflows.", gradient: "from-cyan-400 to-blue-500" },
  { icon: "fas fa-chart-bar",      title: "Real-Time Monitoring",     desc: "Live dashboards for machine status, production rates, energy usage, and KPIs.",           gradient: "from-green-400 to-cyan-400" },
  { icon: "fas fa-server",         title: "PLC / SCADA Integration",  desc: "Seamless integration with existing PLC systems and SCADA architectures.",                  gradient: "from-purple-500 to-pink-500" },
  { icon: "fas fa-wrench",         title: "Predictive Maintenance",   desc: "AI-powered anomaly detection to prevent breakdowns before they happen.",                   gradient: "from-orange-400 to-red-500" },
  { icon: "fas fa-tools",          title: "Tool Management Systems",  desc: "RFID-based smart tool tracking to optimize inventory and reduce losses.",                  gradient: "from-blue-500 to-purple-500" },
  { icon: "fas fa-microchip",      title: "Sensor-Based Monitoring",  desc: "Temperature, pressure, vibration, and flow sensors integrated into unified platforms.",    gradient: "from-green-400 to-blue-500" },
];

export const TRAINING_PROGRAMS = [
  { icon: "fas fa-robot",         title: "Robotics Workshops",         desc: "Hands-on robot building using Arduino, Raspberry Pi, and LEGO Mindstorms.",             badge: "Grades 6–12 | College",    gradient: "from-orange-400 to-red-500" },
  { icon: "fas fa-brain",         title: "AI & Machine Learning",      desc: "Intro to AI, machine learning concepts, and real-world app development with Python.",    badge: "College | Advanced Track", gradient: "from-cyan-400 to-blue-500" },
  { icon: "fas fa-network-wired", title: "IoT & Embedded Systems",     desc: "Build connected devices using ESP32, Arduino, and cloud IoT platforms.",                badge: "Grades 9–12 | College",    gradient: "from-green-400 to-cyan-400" },
  { icon: "fas fa-industry",      title: "Automation Basics",          desc: "Fundamentals of industrial automation and PLC programming basics.",                      badge: "Polytechnic | Engineering",gradient: "from-purple-500 to-blue-500" },
  { icon: "fas fa-compass",       title: "Career Counselling",         desc: "Expert guidance on technology career paths and emerging industry opportunities.",        badge: "All Grades",               gradient: "from-pink-500 to-purple-600" },
  { icon: "fas fa-flask",         title: "Innovation Lab Setup",       desc: "We help schools set up STEM labs with equipment, curriculum, and mentorship.",           badge: "Institution-Level",        gradient: "from-orange-400 to-green-500" },
];

export const TRAINING_TOOLS = ["🤖 Arduino","🍓 Raspberry Pi","🐍 Python","🧠 TensorFlow","📡 ESP32","⚡ PLC","☁️ Cloud IoT","🦾 ROS","📊 Jupyter"];

export const TRAINING_STATS = [
  { num: 2000, label: "Students Trained" },
  { num: 45,   label: "Schools & Colleges" },
  { num: 120,  label: "Workshops Done" },
  { num: 95,   label: "% Satisfaction" },
];

export const TECH_STACK = [
  { emoji: "⚛️", name: "React.js" },
  { emoji: "▲",  name: "Next.js" },
  { emoji: "🎨", name: "Tailwind CSS" },
  { emoji: "🟦", name: "TypeScript" },
  { emoji: "🟢", name: "Node.js" },
  { emoji: "🔥", name: "Firebase" },
  { emoji: "🐘", name: "PostgreSQL" },
  { emoji: "🍃", name: "MongoDB" },
  { emoji: "🐍", name: "Python" },
  { emoji: "🤖", name: "Arduino" },
  { emoji: "🍓", name: "Raspberry Pi" },
  { emoji: "☁️", name: "AWS / Azure" },
];

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

export const INDUSTRIES = [
  { emoji: "🏭", title: "Manufacturing",  desc: "Smart factory automation, quality control, and production optimization" },
  { emoji: "🎓", title: "Education",      desc: "STEM labs, digital classrooms, and EdTech platform development" },
  { emoji: "🏥", title: "Healthcare",     desc: "Medical IoT, patient management systems, and diagnostic automation" },
  { emoji: "🚚", title: "Logistics",      desc: "Fleet tracking, warehouse automation, and supply chain visibility" },
  { emoji: "⚡", title: "Energy",         desc: "Smart grid monitoring, renewable energy management systems" },
  { emoji: "🏗️", title: "Construction",  desc: "Site monitoring IoT, project management apps, and safety systems" },
  { emoji: "🏪", title: "Retail",         desc: "E-commerce platforms, inventory IoT, and customer analytics" },
  { emoji: "🚀", title: "Startups",       desc: "MVP development, technical co-founding, and scale-up support" },
];

export const FOOTER_LINKS = {
  Services: ["Web Development","Mobile Apps","UI/UX Design","Digital Marketing","AI Integration"],
  Solutions: ["Industrial IoT","SCADA Systems","Predictive Maintenance","Smart Factory","Student Training"],
  Company:  ["About Us","Portfolio","Testimonials","Industries","Contact Us"],
};