'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

type EducationItem = {
  institution: string;
  qualification: string;
  scoreLabel: string;
  score: string;
  duration: string;
  description: string;
};

const educationData: EducationItem[] = [
  {
    institution: 'GMR Institute of Technology',
    qualification: 'B.Tech. in Computer Science Engg in Artificial Intelligence & Machine Learning',
    scoreLabel: 'GPA',
    score: '9.41/10 (upto 5th sem)',
    duration: '2022–2026',
    description:
      "Mainly focusing on Machine Learning, Deep Learning, Natural Language Processing and Data structures, Analysis of Algorithms",
  },
  {
    institution: 'Narayana Junior College',
    qualification: 'Intermediate in M.P.C',
    scoreLabel: 'Score',
    score: '92.2%',
    duration: '2022',
    description:
      'Completed Intermediate with a strong focus on Mathematics, Physics, and Chemistry.',
  },
  {
    institution: 'Bhashyam High School',
    qualification: '10th Class',
    scoreLabel: 'Score',
    score: '10/10 GPA',
    duration: '2020',
    description:
      'Excelled in academics, laying a solid foundation in Science and Mathematics.',
  },
];

export default function EducationSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 }); // ✅ Animation applied every time in view

  const cardVariants = {
    hidden: (isLeft: boolean) => ({
      opacity: 0,
      x: isLeft ? -100 : 100,
    }),
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="education"
      ref={sectionRef}
      className="py-16 md:py-24 bg-background"
    >
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Education Details</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded"></div>
        </motion.div>

        <div className="relative">
          {/* Center vertical line */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full border-l-4 border-primary"></div>

          <div className="flex flex-col space-y-16">
            {educationData.map((item, index) => {
              const isLeft = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  custom={isLeft}
                  initial="hidden"
                  animate={isInView ? 'visible' : 'hidden'}
                  variants={cardVariants}
                  className={`relative w-full flex ${isLeft ? 'justify-end' : 'justify-start'}`}
                >
                  {/* Card */}
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    className="bg-card shadow-lg rounded-xl p-6 w-96 relative z-10 border border-border transition-transform"
                  >
                    <span
                      className="absolute -top-6 left-6 text-xs px-3 py-1 rounded-full shadow
                      bg-white text-primary
                      dark:bg-zinc-800 dark:text-white"
                    >
                      {item.duration}
                    </span>
                    <h3 className="text-lg font-bold text-primary mb-1">{item.institution}</h3>
                    <h4 className="font-semibold text-muted-foreground mb-2">{item.qualification}</h4>
                    <p className="text-green-600 font-medium mb-2">
                      {item.scoreLabel}: {item.score}
                    </p>
                    <p className="text-muted-foreground">{item.description}</p>
                  </motion.div>

                  {/* Timeline Dot */}
                  <div
                    className={`absolute top-8 ${
                      isLeft ? 'right-[-1.75rem]' : 'left-[-1.75rem]'
                    } w-7 h-7 rounded-full bg-primary border-4 border-background shadow-lg`}
                  ></div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
