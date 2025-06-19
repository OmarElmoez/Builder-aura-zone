import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { AuroraBackground } from "@/components/aceternity/AuroraBackground";
import { GlowingCard } from "@/components/aceternity/FloatingCards";
import Navigation from "@/components/Navigation";
import {
  Bot,
  TrendingUp,
  Users,
  MessageSquare,
  BarChart3,
  Target,
  Zap,
  Brain,
  ExternalLink,
  ArrowRight,
  Play,
  Calendar,
  DollarSign,
} from "lucide-react";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "automation", name: "Automation" },
    { id: "ai-campaigns", name: "AI Campaigns" },
    { id: "analytics", name: "Analytics" },
    { id: "optimization", name: "Optimization" },
  ];

  const projects = [
    {
      id: 1,
      title: "E-commerce AI Campaign Optimizer",
      description:
        "Revolutionary AI system that automatically optimizes ad campaigns across Facebook, Google, and Amazon, resulting in 340% ROI improvement for a leading fashion brand.",
      category: "ai-campaigns",
      image: "gradient-from-blue-500-to-purple-600",
      icon: <Bot className="h-8 w-8" />,
      stats: {
        roi: "+340%",
        savings: "$2.1M",
        efficiency: "85%",
      },
      technologies: [
        "Machine Learning",
        "Real-time Bidding",
        "Multi-platform Integration",
      ],
      results: [
        "Reduced cost per acquisition by 65%",
        "Increased conversion rates by 280%",
        "Automated 95% of campaign management tasks",
        "Scaled across 15 countries successfully",
      ],
      timeline: "6 months",
      industry: "Fashion E-commerce",
    },
    {
      id: 2,
      title: "Social Media Automation Suite",
      description:
        "Comprehensive automation platform that handles content creation, posting, engagement, and analytics across all major social platforms for 500+ clients.",
      category: "automation",
      image: "gradient-from-purple-500-to-pink-600",
      icon: <MessageSquare className="h-8 w-8" />,
      stats: {
        roi: "+250%",
        savings: "$1.8M",
        efficiency: "92%",
      },
      technologies: [
        "Natural Language Processing",
        "Computer Vision",
        "API Integration",
      ],
      results: [
        "Generated 10,000+ pieces of content monthly",
        "Increased engagement rates by 420%",
        "Reduced content creation time by 90%",
        "Improved brand consistency by 95%",
      ],
      timeline: "8 months",
      industry: "Digital Marketing",
    },
    {
      id: 3,
      title: "Predictive Analytics Dashboard",
      description:
        "Advanced analytics platform using AI to predict campaign performance, customer behavior, and market trends with 94% accuracy for strategic decision-making.",
      category: "analytics",
      image: "gradient-from-green-500-to-blue-600",
      icon: <BarChart3 className="h-8 w-8" />,
      stats: {
        roi: "+180%",
        savings: "$950K",
        efficiency: "78%",
      },
      technologies: [
        "Predictive Modeling",
        "Big Data Analytics",
        "Real-time Processing",
      ],
      results: [
        "Predicted trends with 94% accuracy",
        "Reduced forecasting errors by 70%",
        "Improved decision-making speed by 60%",
        "Identified new opportunities worth $5M+",
      ],
      timeline: "4 months",
      industry: "SaaS Technology",
    },
    {
      id: 4,
      title: "Customer Journey AI Engine",
      description:
        "Intelligent system that maps and optimizes entire customer journeys, personalizing touchpoints at scale and increasing customer lifetime value by 200%.",
      category: "optimization",
      image: "gradient-from-orange-500-to-red-600",
      icon: <Target className="h-8 w-8" />,
      stats: {
        roi: "+200%",
        savings: "$1.2M",
        efficiency: "88%",
      },
      technologies: [
        "Deep Learning",
        "Behavioral Analysis",
        "Personalization Engine",
      ],
      results: [
        "Increased customer lifetime value by 200%",
        "Improved retention rates by 150%",
        "Personalized 1M+ customer interactions",
        "Reduced churn rate by 45%",
      ],
      timeline: "5 months",
      industry: "Financial Services",
    },
    {
      id: 5,
      title: "Multi-Channel Attribution AI",
      description:
        "Sophisticated attribution model that accurately tracks customer interactions across all touchpoints, providing clear ROI insights for every marketing dollar spent.",
      category: "analytics",
      image: "gradient-from-indigo-500-to-purple-600",
      icon: <Brain className="h-8 w-8" />,
      stats: {
        roi: "+290%",
        savings: "$1.5M",
        efficiency: "81%",
      },
      technologies: [
        "Attribution Modeling",
        "Cross-device Tracking",
        "Machine Learning",
      ],
      results: [
        "Improved attribution accuracy by 75%",
        "Optimized budget allocation across 20+ channels",
        "Increased marketing efficiency by 60%",
        "Identified $3M in previously unknown ROI",
      ],
      timeline: "7 months",
      industry: "Healthcare",
    },
    {
      id: 6,
      title: "Automated Lead Scoring System",
      description:
        "AI-powered lead scoring and nurturing system that automatically qualifies, scores, and nurtures leads, increasing conversion rates by 350%.",
      category: "automation",
      image: "gradient-from-teal-500-to-green-600",
      icon: <Users className="h-8 w-8" />,
      stats: {
        roi: "+350%",
        savings: "$2.3M",
        efficiency: "94%",
      },
      technologies: [
        "Lead Scoring AI",
        "Automated Workflows",
        "CRM Integration",
      ],
      results: [
        "Increased qualified leads by 350%",
        "Reduced sales cycle by 40%",
        "Improved lead quality scores by 280%",
        "Automated 98% of lead nurturing tasks",
      ],
      timeline: "3 months",
      industry: "Real Estate",
    },
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <AuroraBackground>
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20 backdrop-blur-sm">
                <Zap className="h-4 w-4 mr-2" />
                Real Client Success Stories
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              <span className="gradient-text">AI-Powered</span>
              <br />
              <span className="text-white">Project Showcase</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-3xl mx-auto leading-relaxed">
              Discover how we've transformed marketing agencies with
              cutting-edge AI automation, delivering exceptional results and
              unprecedented growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="pb-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((category) => (
              <Button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                variant={
                  selectedCategory === category.id ? "default" : "outline"
                }
                className={`
                  px-6 py-3 rounded-xl font-medium transition-all duration-300
                  ${
                    selectedCategory === category.id
                      ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-glow"
                      : "border-white/20 text-white/80 hover:bg-white/10 backdrop-blur-sm"
                  }
                `}
              >
                {category.name}
              </Button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <GlowingCard className="h-full cursor-pointer transform transition-all duration-500 hover:scale-105">
                  {/* Project Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div
                      className={`p-4 rounded-xl bg-${project.image} text-white`}
                    >
                      {project.icon}
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-white/60 mb-1">
                        {project.timeline}
                      </div>
                      <div className="text-sm text-white/60">
                        {project.industry}
                      </div>
                    </div>
                  </div>

                  {/* Project Title & Description */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:gradient-text transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="text-white/70 text-lg mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center p-3 rounded-lg bg-white/5">
                      <div className="text-2xl font-bold gradient-text mb-1">
                        {project.stats.roi}
                      </div>
                      <div className="text-xs text-white/60">ROI Increase</div>
                    </div>
                    <div className="text-center p-3 rounded-lg bg-white/5">
                      <div className="text-2xl font-bold gradient-text mb-1">
                        {project.stats.savings}
                      </div>
                      <div className="text-xs text-white/60">Cost Savings</div>
                    </div>
                    <div className="text-center p-3 rounded-lg bg-white/5">
                      <div className="text-2xl font-bold gradient-text mb-1">
                        {project.stats.efficiency}
                      </div>
                      <div className="text-xs text-white/60">Efficiency</div>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white/80 mb-3">
                      Technologies Used:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 text-xs font-medium bg-blue-500/20 text-blue-300 rounded-full border border-blue-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Results */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white/80 mb-3">
                      Key Results:
                    </h4>
                    <div className="space-y-2">
                      {project.results
                        .slice(0, 2)
                        .map((result, resultIndex) => (
                          <div
                            key={resultIndex}
                            className="flex items-center text-sm text-white/70"
                          >
                            <TrendingUp className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                            {result}
                          </div>
                        ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <Button
                      variant="ghost"
                      className="text-blue-400 hover:text-blue-300 p-0 h-auto font-medium group/btn"
                    >
                      View Case Study
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-white/60 hover:text-white p-2 h-auto"
                    >
                      <Play className="h-4 w-4" />
                    </Button>
                  </div>
                </GlowingCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Create Your{" "}
              <span className="gradient-text">Success Story</span>?
            </h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              Let's discuss how we can transform your marketing agency with
              AI-powered automation and deliver results that exceed your
              expectations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0 px-10 py-4 rounded-xl font-semibold text-lg shadow-glow hover:shadow-glow-strong transition-all duration-300 group">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 px-10 py-4 rounded-xl font-semibold text-lg backdrop-blur-sm"
              >
                Schedule Consultation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </AuroraBackground>
  );
};

export default Projects;
