import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AuroraBackground } from "@/components/aceternity/AuroraBackground";
import { Meteors } from "@/components/aceternity/Meteors";
import Navigation from "@/components/Navigation";
import { Home, ArrowLeft, Search } from "lucide-react";

const NotFound = () => {
  return (
    <AuroraBackground>
      <Navigation />

      <section className="relative min-h-screen flex items-center justify-center">
        <Meteors number={20} />

        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl mx-auto"
          >
            <div className="mb-8">
              <h1 className="text-8xl md:text-9xl font-bold gradient-text mb-4">
                404
              </h1>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Page Not Found
              </h2>
              <p className="text-xl text-white/80 mb-10 leading-relaxed">
                Looks like this page got lost in the digital space. Don't worry,
                our AI is already working to guide you back to the right path.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/">
                <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0 px-8 py-4 rounded-xl font-semibold text-lg shadow-glow hover:shadow-glow-strong transition-all duration-300 group">
                  <Home className="mr-2 h-5 w-5" />
                  Back to Home
                </Button>
              </Link>
              <Link to="/projects">
                <Button
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-xl font-semibold text-lg backdrop-blur-sm"
                >
                  <Search className="mr-2 h-5 w-5" />
                  Browse Projects
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </AuroraBackground>
  );
};

export default NotFound;
