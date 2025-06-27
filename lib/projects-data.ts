export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  tags: string[];
  githubUrl?: string;
  demoUrl?: string;
}

export const projectsData: Project[] = [
  {
    id: "Credit Card Fraud Detection",
    title: "Credit Card Fraud Detection",
    description: "Machine learning project aimed at identifying fraudulent credit card transactions.",
    image: "credit card.png",
    category: "Machine Learning",
    tags: ["Python", "Machine Learning Algorithms" ,"scikit-learn"],
    githubUrl: "https://github.com/Praveen1425/CreditCardFraud",
  },
  {
    id: "Hand Gesture Control: Audio & Brightness Adjuster",
    title: "Hand Gesture Control: Audio & Brightness Adjuster",
    description: "Using webcam and hand gestures to control your system volume and screen brightness",
    image: "audbrig.png",
    category: "Computer Vision",
    tags: ["Python", "Scikit-learn", "OpenCV", "Numpy"],
    githubUrl: "https://github.com/Praveen1425/Hand-Gestures-based-Brightness-Audio-control",
  },
  {
    id: "Sign Language to Text and Speech",
    title: "Sign Language to Text and Speech",
    description: "American Sign Language (ASL) gestures into real-time text and speech.",
    image: "ASL logo.png",
    category: "Deep Learning",
    tags: ["Python", "Mediapipe", "Tkinter"],
    githubUrl: "https://github.com/Praveen1425/Sign-Language-Translation",
  },
  {
    id: "Sentence Autocompletion with TensorFlow",
    title: "Sentence Autocompletion",
    description: "How to build a sentence autocompletion model using an LSTM neural network with TensorFlow",
    image: "SentAuto.jpeg",
    category: "Natural Language Processing",
    tags: ["Python", "TensorFlow" ,"Pandas"],
    githubUrl: "https://github.com/Praveen1425/Sentence-AutoCompletion",
  },
  {
  id: "College Placement Portal with AI Features",
  title: "College Placement Portal",
  description: "A comprehensive Flask-based web application for managing college placements, featuring AI-powered tools like chatbot assistance, resume analysis, and selection prediction.",
  image: "PlacementPortal.jpg",
  category: "Web Development",
  tags: ["Python", "Flask",  "AI", "HTML", "CSS", "JavaScript"],
  githubUrl: "https://github.com/Praveen1425/CollegePlacementPortal"
  },
  {
    id: "Personal Voice Assistant",
    title: "Personalized AI Voice Assistant for Seamless Interactions",
    description: "Comming soon ...",
    image: "voice translator.png",
    category: "Conversational AI",
    tags: ["Python", "Transformers", "Dialog Systems"],
    githubUrl: "https://github.com/Praveen1425/MyPersonalAssitant",
  }
];