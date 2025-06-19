export * from "./projects";

// Company statistics
export const companyStats = [
  {
    number: "500+",
    label: "Agencies Transformed",
    description:
      "Marketing agencies that have revolutionized their operations with our AI solutions",
  },
  {
    number: "95%",
    label: "Client Retention Rate",
    description:
      "Our clients stay with us because our solutions deliver consistent results",
  },
  {
    number: "$50M+",
    label: "Revenue Generated",
    description:
      "Additional revenue generated for our clients through AI optimization",
  },
  {
    number: "24/7",
    label: "AI Monitoring",
    description:
      "Continuous AI monitoring and optimization of all campaigns and systems",
  },
];

// Navigation items
export const navigationItems = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/about" },
];

// Project categories for filtering
export const projectCategories = [
  { id: "all", name: "All Projects" },
  { id: "automation", name: "Automation" },
  { id: "ai-campaigns", name: "AI Campaigns" },
  { id: "analytics", name: "Analytics" },
  { id: "optimization", name: "Optimization" },
];

// Home page features
export const homeFeatures = [
  {
    icon: "Bot",
    title: "AI-Powered Campaigns",
    description:
      "Intelligent campaign optimization that learns and adapts to maximize your ROI across all channels.",
    color: "blue",
  },
  {
    icon: "Zap",
    title: "Smart Automation",
    description:
      "Automate repetitive tasks with advanced workflows that save time and eliminate human error.",
    color: "purple",
  },
  {
    icon: "Brain",
    title: "Deep Insights",
    description:
      "Unlock actionable insights with AI-driven analytics that reveal hidden patterns in your data.",
    color: "pink",
  },
  {
    icon: "Target",
    title: "Precision Targeting",
    description:
      "Advanced audience segmentation and targeting powered by machine learning algorithms.",
    color: "green",
  },
];

// Company timeline
export const companyTimeline = [
  {
    year: "2021",
    title: "Company Founded",
    description:
      "Started with a vision to democratize AI for marketing agencies worldwide.",
  },
  {
    year: "2022",
    title: "First AI Platform Launch",
    description:
      "Released our flagship automation platform, serving 50+ agencies in the first year.",
  },
  {
    year: "2023",
    title: "Series A Funding",
    description: "Raised $15M to accelerate AI research and global expansion.",
  },
  {
    year: "2024",
    title: "Global Expansion",
    description:
      "Now serving 500+ agencies across 25 countries with advanced AI solutions.",
  },
];
