"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Github, Linkedin } from "lucide-react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen flex items-center pt-16">
      <div className="w-full max-w-5xl mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-4"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-2">
                Muccharla Praveen
              </h1>
              <h2 className="text-xl md:text-2xl font-medium text-muted-foreground mb-4">
                Aspiring ML Engineer
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-muted-foreground text-lg mb-6 max-w-md"
            >
              Building AI-powered solutions and transforming data into meaningful
              insights. Passionate about machine learning and deep learning
              applications.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <Button size="lg" asChild>
                <a href="#projects">
                  View Projects <ArrowDown className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/praveen_resume.pdf" download="Praveen_Resume.pdf">
                  <Download className="mr-2 h-4 w-4" /> Download Resume
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex gap-4"
            >
              <a
                href="https://github.com/Praveen1425"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/praveen-muccharla-977302289/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative hidden md:block"
          >
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 p-1">
              <div className="rounded-xl h-full w-full overflow-hidden bg-muted/50 flex items-center justify-center">
                <img
                  src="praveen.png"
                  alt="Abstract Data Visualization"
                  className="w-[450px] h-[450px] rounded-xl object-cover"
                />
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl"></div>
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-secondary/10 rounded-full blur-2xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
