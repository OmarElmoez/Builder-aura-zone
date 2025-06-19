import {
  Bot,
  MessageSquare,
  BarChart3,
  Target,
  Brain,
  Users,
} from "lucide-react";

export interface Project {
  id: number;
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  category: string;
  image: string;
  icon: any;
  stats: {
    roi: string;
    savings: string;
    efficiency: string;
  };
  technologies: string[];
  results: string[];
  challenges: string[];
  solution: string;
  timeline: string;
  industry: string;
  teamSize: string;
  clientType: string;
  features: string[];
  gallery: string[];
  testimonial?: {
    quote: string;
    author: string;
    position: string;
    company: string;
  };
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "ecommerce-ai-optimizer",
    title: "E-commerce AI Campaign Optimizer",
    description:
      "Revolutionary AI system that automatically optimizes ad campaigns across Facebook, Google, and Amazon, resulting in 340% ROI improvement for a leading fashion brand.",
    longDescription:
      "This cutting-edge AI campaign optimizer represents a breakthrough in automated digital marketing. Built specifically for e-commerce businesses, it leverages advanced machine learning algorithms to continuously analyze and optimize ad performance across multiple platforms in real-time. The system processes over 1 million data points daily, making split-second decisions that would take human marketers hours to analyze.",
    category: "ai-campaigns",
    image: "gradient-from-blue-500-to-purple-600",
    icon: Bot,
    stats: {
      roi: "+340%",
      savings: "$2.1M",
      efficiency: "85%",
    },
    technologies: [
      "Machine Learning",
      "Real-time Bidding",
      "Multi-platform Integration",
      "Python",
      "TensorFlow",
      "AWS Lambda",
      "Redis",
      "PostgreSQL",
    ],
    results: [
      "Reduced cost per acquisition by 65%",
      "Increased conversion rates by 280%",
      "Automated 95% of campaign management tasks",
      "Scaled across 15 countries successfully",
      "Processed 50M+ ad impressions daily",
      "Achieved 99.9% uptime reliability",
    ],
    challenges: [
      "Managing real-time bidding across multiple ad platforms",
      "Handling massive data volumes with low latency",
      "Adapting to constantly changing platform algorithms",
      "Ensuring compliance with different regional regulations",
    ],
    solution:
      "We developed a microservices architecture with dedicated AI models for each platform, implementing real-time data pipelines and advanced anomaly detection to maintain optimal performance across all channels.",
    timeline: "6 months",
    industry: "Fashion E-commerce",
    teamSize: "8 specialists",
    clientType: "Enterprise (500M+ revenue)",
    features: [
      "Real-time bid optimization",
      "Cross-platform campaign synchronization",
      "Predictive performance modeling",
      "Automated A/B testing",
      "Dynamic budget allocation",
      "Fraud detection and prevention",
    ],
    gallery: [
      "dashboard-overview",
      "performance-metrics",
      "campaign-analytics",
      "roi-tracking",
    ],
    testimonial: {
      quote:
        "The AI optimizer transformed our entire digital marketing operation. We've never seen ROI improvements this dramatic.",
      author: "Sarah Johnson",
      position: "CMO",
      company: "FashionForward Inc.",
    },
  },
  {
    id: 2,
    slug: "social-media-automation",
    title: "Social Media Automation Suite",
    description:
      "Comprehensive automation platform that handles content creation, posting, engagement, and analytics across all major social platforms for 500+ clients.",
    longDescription:
      "Our Social Media Automation Suite revolutionizes how agencies manage their clients' social presence. This comprehensive platform combines AI-powered content generation, intelligent scheduling, automated engagement, and deep analytics to deliver consistent, high-quality social media management at scale.",
    category: "automation",
    image: "gradient-from-purple-500-to-pink-600",
    icon: MessageSquare,
    stats: {
      roi: "+250%",
      savings: "$1.8M",
      efficiency: "92%",
    },
    technologies: [
      "Natural Language Processing",
      "Computer Vision",
      "API Integration",
      "React",
      "Node.js",
      "MongoDB",
      "OpenAI GPT-4",
      "DALL-E",
    ],
    results: [
      "Generated 10,000+ pieces of content monthly",
      "Increased engagement rates by 420%",
      "Reduced content creation time by 90%",
      "Improved brand consistency by 95%",
      "Managed 500+ client accounts simultaneously",
      "Achieved 4.8/5 client satisfaction rating",
    ],
    challenges: [
      "Maintaining brand voice consistency across different clients",
      "Generating engaging content at massive scale",
      "Managing API rate limits across platforms",
      "Ensuring content compliance with platform policies",
    ],
    solution:
      "We built a sophisticated content engine with brand-specific AI models, implemented intelligent queuing systems, and created comprehensive content approval workflows to maintain quality while scaling operations.",
    timeline: "8 months",
    industry: "Digital Marketing",
    teamSize: "12 specialists",
    clientType: "Agencies (50-500 employees)",
    features: [
      "AI content generation",
      "Smart scheduling optimization",
      "Automated engagement responses",
      "Multi-platform publishing",
      "Brand voice customization",
      "Real-time analytics dashboard",
    ],
    gallery: [
      "content-calendar",
      "engagement-analytics",
      "brand-management",
      "automation-dashboard",
    ],
    testimonial: {
      quote:
        "This platform allowed us to scale from 50 to 500 clients without proportionally increasing our team size. It's been a game-changer.",
      author: "Michael Chen",
      position: "Founder",
      company: "SocialBoost Agency",
    },
  },
  {
    id: 3,
    slug: "predictive-analytics-dashboard",
    title: "Predictive Analytics Dashboard",
    description:
      "Advanced analytics platform using AI to predict campaign performance, customer behavior, and market trends with 94% accuracy for strategic decision-making.",
    longDescription:
      "Our Predictive Analytics Dashboard represents the next evolution in marketing intelligence. By leveraging advanced machine learning models and big data processing, it provides unprecedented insights into future performance, enabling proactive strategy adjustments and data-driven decision making.",
    category: "analytics",
    image: "gradient-from-green-500-to-blue-600",
    icon: BarChart3,
    stats: {
      roi: "+180%",
      savings: "$950K",
      efficiency: "78%",
    },
    technologies: [
      "Predictive Modeling",
      "Big Data Analytics",
      "Real-time Processing",
      "Apache Spark",
      "Elasticsearch",
      "Kibana",
      "Python",
      "Scikit-learn",
    ],
    results: [
      "Predicted trends with 94% accuracy",
      "Reduced forecasting errors by 70%",
      "Improved decision-making speed by 60%",
      "Identified new opportunities worth $5M+",
      "Processed 100TB+ of data monthly",
      "Enabled proactive strategy adjustments",
    ],
    challenges: [
      "Processing massive datasets in real-time",
      "Maintaining prediction accuracy across volatile markets",
      "Integrating data from 50+ different sources",
      "Creating intuitive visualizations for complex data",
    ],
    solution:
      "We implemented a distributed computing architecture with advanced feature engineering, developed ensemble prediction models, and created an intuitive dashboard that translates complex analytics into actionable insights.",
    timeline: "4 months",
    industry: "SaaS Technology",
    teamSize: "6 specialists",
    clientType: "Technology Companies",
    features: [
      "Advanced trend forecasting",
      "Customer behavior prediction",
      "Market opportunity identification",
      "Real-time data visualization",
      "Automated alert systems",
      "Custom report generation",
    ],
    gallery: [
      "prediction-models",
      "trend-analysis",
      "data-visualization",
      "forecast-accuracy",
    ],
    testimonial: {
      quote:
        "The predictive insights have fundamentally changed how we approach strategic planning. We're now always one step ahead of market changes.",
      author: "David Rodriguez",
      position: "Head of Analytics",
      company: "TechVision Solutions",
    },
  },
  {
    id: 4,
    slug: "customer-journey-ai",
    title: "Customer Journey AI Engine",
    description:
      "Intelligent system that maps and optimizes entire customer journeys, personalizing touchpoints at scale and increasing customer lifetime value by 200%.",
    longDescription:
      "The Customer Journey AI Engine represents a paradigm shift in personalization technology. This sophisticated system creates dynamic, individualized customer journeys in real-time, optimizing every touchpoint to maximize engagement and conversion while delivering personalized experiences at unprecedented scale.",
    category: "optimization",
    image: "gradient-from-orange-500-to-red-600",
    icon: Target,
    stats: {
      roi: "+200%",
      savings: "$1.2M",
      efficiency: "88%",
    },
    technologies: [
      "Deep Learning",
      "Behavioral Analysis",
      "Personalization Engine",
      "Recommendation Systems",
      "GraphQL",
      "Neo4j",
      "Apache Kafka",
      "Docker",
    ],
    results: [
      "Increased customer lifetime value by 200%",
      "Improved retention rates by 150%",
      "Personalized 1M+ customer interactions",
      "Reduced churn rate by 45%",
      "Achieved 89% personalization accuracy",
      "Boosted cross-sell revenue by 180%",
    ],
    challenges: [
      "Mapping complex multi-channel customer journeys",
      "Real-time personalization at massive scale",
      "Maintaining privacy while delivering personalization",
      "Optimizing for multiple business objectives simultaneously",
    ],
    solution:
      "We developed a graph-based customer modeling system with real-time decision engines, implemented privacy-preserving personalization techniques, and created multi-objective optimization algorithms to balance various business goals.",
    timeline: "5 months",
    industry: "Financial Services",
    teamSize: "10 specialists",
    clientType: "Financial Institutions",
    features: [
      "Real-time journey mapping",
      "Dynamic personalization",
      "Multi-channel optimization",
      "Behavioral prediction",
      "A/B testing automation",
      "Privacy-compliant tracking",
    ],
    gallery: [
      "journey-visualization",
      "personalization-engine",
      "behavior-analysis",
      "optimization-results",
    ],
    testimonial: {
      quote:
        "The AI engine has revolutionized our customer experience. We're now delivering truly personalized journeys that our customers love.",
      author: "Jennifer Liu",
      position: "VP of Customer Experience",
      company: "NextGen Financial",
    },
  },
  {
    id: 5,
    slug: "multi-channel-attribution",
    title: "Multi-Channel Attribution AI",
    description:
      "Sophisticated attribution model that accurately tracks customer interactions across all touchpoints, providing clear ROI insights for every marketing dollar spent.",
    longDescription:
      "Our Multi-Channel Attribution AI solves one of marketing's most complex challenges: understanding the true impact of each touchpoint in the customer journey. Using advanced machine learning and statistical modeling, it provides accurate, actionable attribution insights that transform marketing investment decisions.",
    category: "analytics",
    image: "gradient-from-indigo-500-to-purple-600",
    icon: Brain,
    stats: {
      roi: "+290%",
      savings: "$1.5M",
      efficiency: "81%",
    },
    technologies: [
      "Attribution Modeling",
      "Cross-device Tracking",
      "Machine Learning",
      "Markov Chains",
      "Shapley Values",
      "BigQuery",
      "Tableau",
      "R",
    ],
    results: [
      "Improved attribution accuracy by 75%",
      "Optimized budget allocation across 20+ channels",
      "Increased marketing efficiency by 60%",
      "Identified $3M in previously unknown ROI",
      "Reduced wasted ad spend by 40%",
      "Enhanced cross-channel coordination",
    ],
    challenges: [
      "Tracking customers across devices and platforms",
      "Handling incomplete data and privacy constraints",
      "Modeling complex interaction effects",
      "Providing real-time attribution insights",
    ],
    solution:
      "We implemented probabilistic cross-device matching, developed privacy-compliant tracking methods, created advanced statistical models for interaction effects, and built real-time processing pipelines for immediate insights.",
    timeline: "7 months",
    industry: "Healthcare",
    teamSize: "9 specialists",
    clientType: "Healthcare Organizations",
    features: [
      "Cross-device customer matching",
      "Multi-touch attribution modeling",
      "Real-time ROI tracking",
      "Channel performance optimization",
      "Privacy-compliant analytics",
      "Custom attribution models",
    ],
    gallery: [
      "attribution-flow",
      "channel-performance",
      "cross-device-tracking",
      "roi-dashboard",
    ],
    testimonial: {
      quote:
        "Finally, we have clear visibility into which marketing efforts actually drive results. The attribution insights have completely changed our media strategy.",
      author: "Dr. Amanda Foster",
      position: "Chief Marketing Officer",
      company: "HealthFirst Network",
    },
  },
  {
    id: 6,
    slug: "automated-lead-scoring",
    title: "Automated Lead Scoring System",
    description:
      "AI-powered lead scoring and nurturing system that automatically qualifies, scores, and nurtures leads, increasing conversion rates by 350%.",
    longDescription:
      "Our Automated Lead Scoring System transforms how businesses identify and nurture high-value prospects. By combining behavioral analytics, predictive modeling, and automated nurturing workflows, it ensures that sales teams focus on the most promising leads while maintaining consistent engagement with the entire pipeline.",
    category: "automation",
    image: "gradient-from-teal-500-to-green-600",
    icon: Users,
    stats: {
      roi: "+350%",
      savings: "$2.3M",
      efficiency: "94%",
    },
    technologies: [
      "Lead Scoring AI",
      "Automated Workflows",
      "CRM Integration",
      "Behavioral Analytics",
      "Email Automation",
      "Salesforce API",
      "HubSpot API",
      "Machine Learning",
    ],
    results: [
      "Increased qualified leads by 350%",
      "Reduced sales cycle by 40%",
      "Improved lead quality scores by 280%",
      "Automated 98% of lead nurturing tasks",
      "Boosted sales team productivity by 200%",
      "Achieved 92% lead scoring accuracy",
    ],
    challenges: [
      "Defining accurate lead scoring criteria",
      "Integrating with multiple CRM systems",
      "Balancing automation with personal touch",
      "Maintaining lead engagement without overwhelming",
    ],
    solution:
      "We developed dynamic scoring algorithms that adapt to business performance, created seamless CRM integrations, implemented intelligent automation that feels personal, and built sophisticated nurturing sequences that respect prospect preferences.",
    timeline: "3 months",
    industry: "Real Estate",
    teamSize: "7 specialists",
    clientType: "Real Estate Agencies",
    features: [
      "Dynamic lead scoring",
      "Automated nurturing sequences",
      "CRM integration and sync",
      "Behavioral trigger automation",
      "Lead quality analytics",
      "Sales team dashboards",
    ],
    gallery: [
      "scoring-dashboard",
      "nurturing-workflows",
      "lead-analytics",
      "sales-pipeline",
    ],
    testimonial: {
      quote:
        "Our sales team is now 3x more productive, focusing only on leads that are ready to buy. The system has completely transformed our business.",
      author: "Robert Kim",
      position: "Sales Director",
      company: "Premier Properties Group",
    },
  },
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find((project) => project.slug === slug);
};

export const getProjectsByCategory = (category: string): Project[] => {
  if (category === "all") return projects;
  return projects.filter((project) => project.category === category);
};

export const getRelatedProjects = (
  currentProject: Project,
  limit = 3,
): Project[] => {
  return projects
    .filter(
      (project) =>
        project.id !== currentProject.id &&
        project.category === currentProject.category,
    )
    .slice(0, limit);
};
