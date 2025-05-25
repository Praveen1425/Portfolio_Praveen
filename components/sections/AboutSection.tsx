"use client"

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { BrainCircuit, Code, Database, Layers, ScanSearch } from 'lucide-react';
const AboutSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };
  
  const skills = [
    { 
      icon: <Code className="h-8 w-8" />,
      title: 'AI Development',
      description: 'Designing intelligent systems and tools that leverage artificial intelligence to automate decision-making and solve impactful real-world challenges.'
    },
    { 
      icon: <BrainCircuit className="h-8 w-8" />,
      title: 'Machine Learning',
      description: 'Developing predictive models using supervised and unsupervised techniques to extract patterns and deliver data-driven solutions.'
    },
    { 
      icon: <Layers className="h-8 w-8" />,
      title: 'Deep Learning',
      description: 'Implementing advanced neural network architectures (CNNs, RNNs, Transformers) for tasks in vision, NLP, and medical diagnostics.'
    },
    { 
      icon: <ScanSearch className="h-8 w-8" />,
      title: 'AI Research & Innovation',
      description: 'Exploring cutting-edge AI techniques through academic research and publications, focusing on hybrid models and context-aware learning.'
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-16 bg-primary mx-auto mb-8"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-4">
              Aspiring AI/ML Engineer 
            </h3>
            <p className="text-muted-foreground mb-6">
              I am an aspiring AI and Machine Learning student with a deep passion for solving real-world problems through data-driven technologies. With hands-on experience in machine learning, deep learning, and natural language processing, I focus on building intelligent systems that create meaningful impact.
            </p>
            <p className="text-muted-foreground mb-6">
              My journey started with a strong curiosity about how algorithms could mimic human decision-making. Since then, I’ve worked on diverse projects—from disease detection using deep learning to intelligent dashboards and sentiment analysis with transformers. I enjoy bridging the gap between theory and application by constantly learning, experimenting, and refining solutions.
            </p>
            <p className="text-muted-foreground">
              I thrive in environments that encourage innovation, collaboration, and continuous learning. As someone who values both technical depth and practical impact, I’m committed to pushing boundaries in the world of AI and data science.
            </p>
          </motion.div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-6 rounded-lg border bg-card"
              >
                <div className="text-primary mb-4">{skill.icon}</div>
                <h4 className="text-lg font-medium mb-2">{skill.title}</h4>
                <p className="text-sm text-muted-foreground">{skill.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;