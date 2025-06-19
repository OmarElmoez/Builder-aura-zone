import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { AuroraBackground } from "@/components/aceternity/AuroraBackground";
import { BackgroundBeams } from "@/components/aceternity/BackgroundBeams";
import { Meteors } from "@/components/aceternity/Meteors";
import {
  FloatingCard,
  GlowingCard,
} from "@/components/aceternity/FloatingCards";
import ConnectedTimeline from "@/components/ConnectedTimeline";
import Navigation from "@/components/Navigation";
import { companyStats, companyTimeline } from "@/constants";
import {
  Users,
  Target,
  Zap,
  Brain,
  Award,
  Globe,
  TrendingUp,
  Lightbulb,
  Shield,
  Clock,
  Heart,
  Rocket,
  ArrowRight,
  CheckCircle,
  Star,
  Building,
  Code,
} from "lucide-react";

const About = () => {
  const statsWithIcons = companyStats.map((stat, index) => ({
    ...stat,
    icon: [
      <Building className="h-6 w-6" key="building" />,
      <Heart className="h-6 w-6" key="heart" />,
      <TrendingUp className="h-6 w-6" key="trending" />,
      <Clock className="h-6 w-6" key="clock" />,
    ][index],
  }));

  const team = [
    {
      name: "Sarah Chen",
      role: "CEO & AI Strategist",
      expertise: "10+ years in AI & Marketing",
      image: "gradient-from-blue-500-to-purple-600",
      icon: <Brain className="h-8 w-8" />,
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO & Lead Engineer",
      expertise: "Former Google AI Researcher",
      image: "gradient-from-purple-500-to-pink-600",
      icon: <Code className="h-8 w-8" />,
    },
    {
      name: "Dr. Amanda Park",
      role: "Head of Data Science",
      expertise: "PhD in Machine Learning",
      image: "gradient-from-green-500-to-blue-600",
      icon: <Target className="h-8 w-8" />,
    },
    {
      name: "James Wilson",
      role: "Head of Customer Success",
      expertise: "Marketing Agency Veteran",
      image: "gradient-from-orange-500-to-red-600",
      icon: <Users className="h-8 w-8" />,
    },
  ];

  const values = [
    {
      icon: <Lightbulb className="h-8 w-8 text-yellow-400" />,
      title: "Innovation First",
      description:
        "We push the boundaries of what's possible with AI and automation, constantly exploring new technologies to give our clients the competitive edge.",
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-400" />,
      title: "Trust & Transparency",
      description:
        "We believe in complete transparency with our clients, providing clear insights into our AI algorithms and decision-making processes.",
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-green-400" />,
      title: "Results-Driven",
      description:
        "Every solution we build is designed with one goal in mind: delivering measurable, scalable results that transform your business.",
    },
    {
      icon: <Globe className="h-8 w-8 text-purple-400" />,
      title: "Global Impact",
      description:
        "We're building technology that doesn't just help individual agencies, but elevates the entire marketing industry worldwide.",
    },
  ];

  const achievements = [
    "Featured in TechCrunch as 'AI Marketing Company to Watch'",
    "Winner of 2024 MarTech Innovation Award",
    "Named Top 10 AI Startups by Forbes",
    "Certified Microsoft AI Partner",
    "Google Cloud AI Technology Partner",
    "AWS Advanced Technology Partner",
  ];

  return (
    <AuroraBackground>
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20">
        <BackgroundBeams />
        <Meteors number={30} />
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/20 to-pink-900/20" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20 backdrop-blur-sm">
                <Rocket className="h-4 w-4 mr-2" />
                Pioneering AI Innovation Since 2021
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              <span className="text-white">Empowering Agencies</span>
              <br />
              <span className="gradient-text">With AI Excellence</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-3xl mx-auto leading-relaxed">
              We're a team of AI researchers, marketing experts, and engineers
              dedicated to transforming how marketing agencies operate, scale,
              and succeed in the digital age.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statsWithIcons.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
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
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Our <span className="gradient-text">Mission</span>
              </h2>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                We believe every marketing agency deserves access to
                enterprise-level AI technology. Our mission is to democratize
                AI-powered automation, making it accessible, affordable, and
                incredibly effective for agencies of all sizes.
              </p>
              <p className="text-lg text-white/70 mb-10 leading-relaxed">
                Through cutting-edge artificial intelligence, machine learning,
                and automation, we're not just improving how agencies work –
                we're reimagining what's possible in digital marketing.
              </p>

              <div className="space-y-4">
                {[
                  "Democratize AI for all agencies",
                  "Deliver measurable ROI improvements",
                  "Simplify complex automation",
                ].map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                    <span className="text-white/90 text-lg">{point}</span>
                  </motion.div>
                ))}
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
                <div className="aspect-square bg-gradient-to-br from-blue-900/50 to-purple-900/50 flex items-center justify-center relative">
                  <div className="text-center z-10">
                    <Brain className="h-24 w-24 text-blue-400 mx-auto mb-6" />
                    <h3 className="text-2xl font-bold text-white mb-4">
                      AI-First Approach
                    </h3>
                    <p className="text-white/70 px-6">
                      Every solution powered by advanced AI
                    </p>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-50" />
                </div>
              </FloatingCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              World-class experts in AI, machine learning, and marketing
              automation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <GlowingCard className="text-center hover:scale-105 transition-transform duration-300">
                  <div
                    className={`w-20 h-20 rounded-full bg-${member.image} mx-auto mb-6 flex items-center justify-center text-white`}
                  >
                    {member.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {member.name}
                  </h3>
                  <p className="text-blue-400 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-white/70 text-sm">{member.expertise}</p>
                </GlowingCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              The principles that guide everything we do and every solution we
              build.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <GlowingCard className="h-full">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-3 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20">
                      {value.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-3">
                        {value.title}
                      </h3>
                      <p className="text-white/70 text-lg leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </GlowingCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 via-transparent to-purple-900/10" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our <span className="gradient-text">Journey</span>
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              From startup to industry leader in AI-powered marketing
              automation.
            </p>
          </motion.div>

          <ConnectedTimeline items={companyTimeline} />
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Awards & <span className="gradient-text">Recognition</span>
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Industry recognition for our innovative AI solutions and
              exceptional results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-3 p-4 rounded-xl bg-white/5 border border-white/10"
              >
                <Star className="h-5 w-5 text-yellow-400 flex-shrink-0" />
                <span className="text-white/90">{achievement}</span>
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
              Ready to Join Our{" "}
              <span className="gradient-text">Success Story</span>?
            </h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              Let's discuss how our AI-powered solutions can transform your
              marketing agency and help you achieve unprecedented growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0 px-10 py-4 rounded-xl font-semibold text-lg shadow-glow hover:shadow-glow-strong transition-all duration-300 group">
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 px-10 py-4 rounded-xl font-semibold text-lg backdrop-blur-sm"
              >
                Contact Our Team
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </AuroraBackground>
  );
};

export default About;
