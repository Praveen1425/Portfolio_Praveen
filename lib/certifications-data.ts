export interface Certification {
  id: string;
  title: string;
  description: string;
  image: string; // preview image related to course (e.g., ML logo)
  category: string;
  tags: string[];
  certificate: string; // path to your certificate image or PDF
}

export const certificationsData: Certification[] = [
  {
  id: 'ds-ml-dl-nlp-bootcamp',
  title: 'Complete Data Science, Machine Learning, DL, NLP Bootcamp',
  description: 'Mastered the theory, practice, and math behind Data Science, ML, DL, and NLP with end-to-end projects.',
  image: '/images/certifications/all.jpg',
  category: 'Bootcamp',
  tags: ['Machine Learning', 'Deep Learning', 'Transformers'],
  certificate: '/certificates/bootcamp-krish.png',
},
  {
    id: 'dl-certification',
    title: 'Deep Learning Certification by IIT Ropar through SWAYAM-NPTEL',
    description: 'Understanding what deep learning, basics, Covered neural networks, framworks, CNNs, RNNs, and practical deep learning workflows through DeepLearning.',
    image: '/images/certifications/dl.jpg',
    category: 'Deep Learning',
    tags: ['Neural Networks', 'CNNs', 'RNNs'],
    certificate: '/certificates/Deep Learning - IIT Ropar.pdf',
  },
  {
    id: 'Internship',
    title: 'Machine Learning Intern by Unified Mentor Pvt Ltd.',
    description: 'I completed a one-month internship where I revisited the concepts of machine learning and worked on the basics and completion of various projects.',
    image: '/images/certifications/ml.jpg',
    category: 'Internship',
    tags: ['Unified Mentor','Python', 'Machine Learning'],
    certificate: '/certificates/cert-intern-gen.pdf',
  },
];
