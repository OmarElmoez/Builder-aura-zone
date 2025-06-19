import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AuroraBackground } from "@/components/aceternity/AuroraBackground";
import {
  FloatingCard,
  GlowingCard,
} from "@/components/aceternity/FloatingCards";
import { TextGenerateEffect } from "@/components/aceternity/TextGenerateEffect";
import {
  LayeredBackground,
  SectionDivider,
} from "@/components/aceternity/FlowingBackgrounds";
import Navigation from "@/components/Navigation";
import { companyStats } from "@/constants";
import {
  Bot,
  Zap,
  TrendingUp,
  Target,
  Brain,
  Rocket,
  ArrowRight,
  CheckCircle,
  Users,
  BarChart3,
  Timer,
  Sparkles,
} from "lucide-react";

const Home = () => {
  const features = [
    {
      icon: <Bot className="h-8 w-8 text-blue-400" />,
      title: "AI-Powered Campaigns",
      description:
        "Intelligent campaign optimization that learns and adapts to maximize your ROI across all channels.",
      color: "blue",
    },
    {
      icon: <Zap className="h-8 w-8 text-purple-400" />,
      title: "Smart Automation",
      description:
        "Automate repetitive tasks with advanced workflows that save time and eliminate human error.",
      color: "purple",
    },
    {
      icon: <Brain className="h-8 w-8 text-pink-400" />,
      title: "Deep Insights",
      description:
        "Unlock actionable insights with AI-driven analytics that reveal hidden patterns in your data.",
      color: "pink",
    },
    {
      icon: <Target className="h-8 w-8 text-green-400" />,
      title: "Precision Targeting",
      description:
        "Advanced audience segmentation and targeting powered by machine learning algorithms.",
      color: "green",
    },
  ];

  const statsWithIcons = [
    {
      number: "300%",
      label: "Campaign Performance Boost",
      icon: <TrendingUp className="h-6 w-6" />,
    },
    {
      number: "85%",
      label: "Time Saved on Manual Tasks",
      icon: <Timer className="h-6 w-6" />,
    },
    {
      number: "500+",
      label: "Agencies Powered",
      icon: <Users className="h-6 w-6" />,
    },
    {
      number: "24/7",
      label: "AI Optimization",
      icon: <Sparkles className="h-6 w-6" />,
    },
  ];

  const benefits = [
    "Scale campaigns across multiple platforms effortlessly",
    "Reduce manual work by up to 85% with smart automation",
    "Get real-time insights that drive data-backed decisions",
    "Optimize ad spend with AI-powered budget allocation",
    "Improve client satisfaction with consistent results",
    "Stay ahead of competition with cutting-edge technology",
  ];

  return (
    <AuroraBackground>
      <Navigation />

      {/* Hero Section */}
      <LayeredBackground
        variant="hero"
        className="min-h-screen flex items-center justify-center pt-20"
      >
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto"
          >
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20 backdrop-blur-sm">
                <Sparkles className="h-4 w-4 mr-2" />
                Revolutionary AI for Marketing Agencies
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              <TextGenerateEffect
                words="Scale Campaigns"
                className="gradient-text"
              />
              <br />
              <span className="text-white">Automate Tasks</span>
              <br />
              <span className="gradient-text">Unlock Insights</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-3xl mx-auto leading-relaxed">
              Transform your marketing agency with AI-powered automation that
              scales campaigns, eliminates manual work, and delivers
              unprecedented insights for explosive growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0 px-8 py-4 rounded-xl font-semibold text-lg shadow-glow hover:shadow-glow-strong transition-all duration-300 group">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-xl font-semibold text-lg backdrop-blur-sm"
              >
                Watch Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </LayeredBackground>

      {/* Section Divider */}
      <SectionDivider />

      {/* Stats Section */}
      <LayeredBackground variant="subtle" className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statsWithIcons.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <FloatingCard className="!p-8 text-center hover:scale-105 transition-transform duration-300">
                  <div className="text-blue-400 mb-4 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                    {stat.number}
                  </div>
                  <div className="text-white/70 text-sm">{stat.label}</div>
                </FloatingCard>
              </motion.div>
            ))}
          </div>
        </div>
      </LayeredBackground>

      {/* Features Section */}
      <LayeredBackground variant="section" className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
              Powerful AI Features
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Everything you need to transform your marketing agency into a
              AI-powered growth machine.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <GlowingCard className="h-full" glowColor={feature.color}>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-3 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-white/70 text-lg leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </GlowingCard>
              </motion.div>
            ))}
          </div>
        </div>
      </LayeredBackground>

      {/* Benefits Section */}
      <LayeredBackground variant="section" className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Why Marketing Agencies
                <span className="gradient-text"> Choose Us</span>
              </h2>
              <p className="text-xl text-white/80 mb-8">
                Join hundreds of agencies that have transformed their operations
                with our AI-powered platform.
              </p>

              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                    <span className="text-white/90 text-lg">{benefit}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-10">
                <Link to="/projects">
                  <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0 px-8 py-4 rounded-xl font-semibold text-lg shadow-glow hover:shadow-glow-strong transition-all duration-300 group">
                    View Our Projects
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <FloatingCard className="!p-0 overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-blue-900/50 to-purple-900/50 flex items-center justify-center">
                  <div className="text-center">
                    <BarChart3 className="h-20 w-20 text-blue-400 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Real-time Analytics
                    </h3>
                    <p className="text-white/70">
                      Monitor your campaigns with AI-powered insights
                    </p>
                  </div>
                </div>
              </FloatingCard>

              <motion.div
                className="absolute -top-4 -right-4 w-24 h-24"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-full h-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-20 blur-xl"></div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </LayeredBackground>

      {/* CTA Section */}
      <LayeredBackground variant="hero" className="py-20">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
              Ready to <span className="gradient-text">Transform</span> Your
              Agency?
            </h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              Join the AI revolution and give your marketing agency the
              competitive edge it needs to dominate the market.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0 px-10 py-4 rounded-xl font-semibold text-lg shadow-glow hover:shadow-glow-strong transition-all duration-300 group">
                Get Started Now
                <Rocket className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Link to="/about">
                <Button
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10 px-10 py-4 rounded-xl font-semibold text-lg backdrop-blur-sm"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </LayeredBackground>
    </AuroraBackground>
  );
};

export default Home;
