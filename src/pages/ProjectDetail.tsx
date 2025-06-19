import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { AuroraBackground } from "@/components/aceternity/AuroraBackground";
import {
  GlowingCard,
  FloatingCard,
} from "@/components/aceternity/FloatingCards";
import {
  LayeredBackground,
  SectionDivider,
} from "@/components/aceternity/FlowingBackgrounds";
import Navigation from "@/components/Navigation";
import { getProjectBySlug, getRelatedProjects } from "@/constants";
import {
  ArrowLeft,
  Calendar,
  Users,
  Building,
  CheckCircle,
  TrendingUp,
  Target,
  Lightbulb,
  Quote,
  ExternalLink,
  ArrowRight,
} from "lucide-react";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const project = getProjectBySlug(slug!);

  if (!project) {
    return (
      <AuroraBackground>
        <Navigation />
        <section className="relative min-h-screen flex items-center justify-center pt-20">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl font-bold text-white mb-4">
              Project Not Found
            </h1>
            <p className="text-white/70 mb-8">
              The project you're looking for doesn't exist.
            </p>
            <Link to="/projects">
              <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0 px-8 py-4 rounded-xl font-semibold">
                <ArrowLeft className="mr-2 h-5 w-5" />
                Back to Projects
              </Button>
            </Link>
          </div>
        </section>
      </AuroraBackground>
    );
  }

  const Icon = project.icon;
  const relatedProjects = getRelatedProjects(project);

  return (
    <AuroraBackground>
      <Navigation />

      {/* Hero Section */}
      <LayeredBackground variant="hero" className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          {/* Back Navigation */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Button
              onClick={() => navigate("/projects")}
              variant="ghost"
              className="text-white/80 hover:text-white p-0 h-auto font-medium group"
            >
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Back to Projects
            </Button>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div
                    className={`p-4 rounded-xl bg-${project.image} text-white`}
                  >
                    <Icon className="h-8 w-8" />
                  </div>
                  <div>
                    <span className="inline-block px-3 py-1 text-sm font-medium bg-blue-500/20 text-blue-300 rounded-full border border-blue-500/30 mb-2">
                      {project.category.replace("-", " ").toUpperCase()}
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                      {project.title}
                    </h1>
                  </div>
                </div>

                <p className="text-xl text-white/80 mb-8 leading-relaxed">
                  {project.longDescription}
                </p>

                {/* Project Stats */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <FloatingCard className="!p-4 text-center">
                    <div className="text-2xl font-bold gradient-text mb-1">
                      {project.stats.roi}
                    </div>
                    <div className="text-xs text-white/60">ROI Increase</div>
                  </FloatingCard>
                  <FloatingCard className="!p-4 text-center">
                    <div className="text-2xl font-bold gradient-text mb-1">
                      {project.stats.savings}
                    </div>
                    <div className="text-xs text-white/60">Cost Savings</div>
                  </FloatingCard>
                  <FloatingCard className="!p-4 text-center">
                    <div className="text-2xl font-bold gradient-text mb-1">
                      {project.stats.efficiency}
                    </div>
                    <div className="text-xs text-white/60">Efficiency Gain</div>
                  </FloatingCard>
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <GlowingCard className="sticky top-32">
                  <h3 className="text-xl font-bold text-white mb-6">
                    Project Details
                  </h3>

                  <div className="space-y-4">
                    <div className="flex items-center text-white/70">
                      <Calendar className="h-5 w-5 mr-3 text-blue-400" />
                      <div>
                        <div className="text-sm text-white/60">Timeline</div>
                        <div className="font-medium">{project.timeline}</div>
                      </div>
                    </div>

                    <div className="flex items-center text-white/70">
                      <Users className="h-5 w-5 mr-3 text-purple-400" />
                      <div>
                        <div className="text-sm text-white/60">Team Size</div>
                        <div className="font-medium">{project.teamSize}</div>
                      </div>
                    </div>

                    <div className="flex items-center text-white/70">
                      <Building className="h-5 w-5 mr-3 text-green-400" />
                      <div>
                        <div className="text-sm text-white/60">Industry</div>
                        <div className="font-medium">{project.industry}</div>
                      </div>
                    </div>

                    <div className="flex items-center text-white/70">
                      <Target className="h-5 w-5 mr-3 text-pink-400" />
                      <div>
                        <div className="text-sm text-white/60">Client Type</div>
                        <div className="font-medium">{project.clientType}</div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0 px-6 py-3 rounded-xl font-semibold w-full">
                      Start Similar Project
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </GlowingCard>
              </motion.div>
            </div>
          </div>
        </div>
      </LayeredBackground>

      {/* Section Divider */}
      <SectionDivider />

      {/* Challenge & Solution Section */}
      <LayeredBackground variant="section" className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <GlowingCard className="h-full" glowColor="blue">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="p-3 rounded-xl bg-red-500/20">
                    <Target className="h-6 w-6 text-red-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">
                      Challenges Faced
                    </h3>
                  </div>
                </div>

                <div className="space-y-4">
                  {project.challenges.map((challenge, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-white/80">{challenge}</span>
                    </div>
                  ))}
                </div>
              </GlowingCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <GlowingCard className="h-full" glowColor="green">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="p-3 rounded-xl bg-green-500/20">
                    <Lightbulb className="h-6 w-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">
                      Our Solution
                    </h3>
                  </div>
                </div>

                <p className="text-white/80 text-lg leading-relaxed">
                  {project.solution}
                </p>
              </GlowingCard>
            </motion.div>
          </div>
        </div>
      </LayeredBackground>

      {/* Technologies & Features */}
      <LayeredBackground variant="subtle" className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Technologies */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-white mb-8">
                <span className="gradient-text">Technologies</span> Used
              </h3>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="px-4 py-2 text-sm font-medium bg-blue-500/20 text-blue-300 rounded-full border border-blue-500/30 hover:bg-blue-500/30 transition-colors"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Key Features */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-white mb-8">
                Key <span className="gradient-text">Features</span>
              </h3>
              <div className="space-y-4">
                {project.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                    <span className="text-white/90">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </LayeredBackground>

      {/* Results Section */}
      <LayeredBackground variant="section" className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Outstanding <span className="gradient-text">Results</span>
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              The measurable impact our solution delivered for the client
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.results.map((result, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <FloatingCard className="h-full">
                  <div className="flex items-start space-x-3">
                    <TrendingUp className="h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
                    <p className="text-white/90 leading-relaxed">{result}</p>
                  </div>
                </FloatingCard>
              </motion.div>
            ))}
          </div>
        </div>
      </LayeredBackground>

      {/* Testimonial */}
      {project.testimonial && (
        <LayeredBackground variant="subtle" className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <GlowingCard className="text-center" glowColor="purple">
                <Quote className="h-12 w-12 text-purple-400 mx-auto mb-6" />
                <blockquote className="text-2xl md:text-3xl font-medium text-white mb-8 leading-relaxed">
                  "{project.testimonial.quote}"
                </blockquote>
                <div className="flex items-center justify-center space-x-4">
                  <div className="text-center">
                    <div className="font-bold text-white text-lg">
                      {project.testimonial.author}
                    </div>
                    <div className="text-white/70">
                      {project.testimonial.position}
                    </div>
                    <div className="text-blue-400 font-medium">
                      {project.testimonial.company}
                    </div>
                  </div>
                </div>
              </GlowingCard>
          </motion.div>
        </LayeredBackground>
        </section>
      )}

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <LayeredBackground variant="section" className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Related <span className="gradient-text">Projects</span>
              </h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Explore other projects in the same category
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProjects.map((relatedProject, index) => {
                const RelatedIcon = relatedProject.icon;
                return (
                  <motion.div
                    key={relatedProject.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Link to={`/projects/${relatedProject.slug}`}>
                      <GlowingCard className="h-full cursor-pointer transform transition-all duration-500 hover:scale-105">
                        <div className="flex items-start justify-between mb-4">
                          <div
                            className={`p-3 rounded-xl bg-${relatedProject.image} text-white`}
                          >
                            <RelatedIcon className="h-6 w-6" />
                          </div>
                          <ExternalLink className="h-5 w-5 text-white/60" />
                        </div>

                        <h3 className="text-xl font-bold text-white mb-3 group-hover:gradient-text transition-all duration-300">
                          {relatedProject.title}
                        </h3>

                        <p className="text-white/70 text-sm mb-4 leading-relaxed line-clamp-3">
                          {relatedProject.description}
                        </p>

                        <div className="text-sm text-blue-400 font-medium">
                          View Project →
                        </div>
                      </GlowingCard>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}

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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Start Your{" "}
              <span className="gradient-text">Success Story</span>?
            </h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              Let's create an AI solution that delivers results like this for
              your business.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0 px-10 py-4 rounded-xl font-semibold text-lg shadow-glow hover:shadow-glow-strong transition-all duration-300 group">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Link to="/about">
                <Button
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10 px-10 py-4 rounded-xl font-semibold text-lg backdrop-blur-sm"
                >
                  Learn More About Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </LayeredBackground>
    </AuroraBackground>
  );
};

export default ProjectDetail;