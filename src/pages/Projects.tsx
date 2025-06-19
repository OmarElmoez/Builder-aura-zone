import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AuroraBackground } from "@/components/aceternity/AuroraBackground";
import { BackgroundBeams } from "@/components/aceternity/BackgroundBeams";
import { Meteors } from "@/components/aceternity/Meteors";
import { GlowingCard } from "@/components/aceternity/FloatingCards";
import Navigation from "@/components/Navigation";
import { projects, projectCategories } from "@/constants";
import {
  TrendingUp,
  Zap,
  ExternalLink,
  ArrowRight,
  Play,
  Calendar,
  Sparkles,
} from "lucide-react";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <AuroraBackground>
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20">
        <BackgroundBeams />
        <Meteors number={25} />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20" />

        <div className="container mx-auto px-6 relative z-10">
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
            {projectCategories.map((category) => (
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
            {filteredProjects.map((project, index) => {
              const Icon = project.icon;
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <Link to={`/projects/${project.slug}`}>
                    <GlowingCard className="h-full cursor-pointer transform transition-all duration-500 hover:scale-105">
                      {/* Project Header */}
                      <div className="flex items-start justify-between mb-6">
                        <div
                          className={`p-4 rounded-xl bg-${project.image} text-white`}
                        >
                          <Icon className="h-8 w-8" />
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
                          <div className="text-xs text-white/60">
                            ROI Increase
                          </div>
                        </div>
                        <div className="text-center p-3 rounded-lg bg-white/5">
                          <div className="text-2xl font-bold gradient-text mb-1">
                            {project.stats.savings}
                          </div>
                          <div className="text-xs text-white/60">
                            Cost Savings
                          </div>
                        </div>
                        <div className="text-center p-3 rounded-lg bg-white/5">
                          <div className="text-2xl font-bold gradient-text mb-1">
                            {project.stats.efficiency}
                          </div>
                          <div className="text-xs text-white/60">
                            Efficiency
                          </div>
                        </div>
                      </div>

                      {/* Technologies */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-white/80 mb-3">
                          Technologies Used:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies
                            .slice(0, 3)
                            .map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="px-3 py-1 text-xs font-medium bg-blue-500/20 text-blue-300 rounded-full border border-blue-500/30"
                              >
                                {tech}
                              </span>
                            ))}
                          {project.technologies.length > 3 && (
                            <span className="px-3 py-1 text-xs font-medium bg-white/5 text-white/60 rounded-full">
                              +{project.technologies.length - 3} more
                            </span>
                          )}
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
                        <div className="text-blue-400 hover:text-blue-300 font-medium group/btn">
                          View Case Study
                          <ArrowRight className="ml-2 h-4 w-4 inline group-hover/btn:translate-x-1 transition-transform" />
                        </div>
                        <ExternalLink className="h-4 w-4 text-white/60" />
                      </div>
                    </GlowingCard>
                  </Link>
                </motion.div>
              );
            })}
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
