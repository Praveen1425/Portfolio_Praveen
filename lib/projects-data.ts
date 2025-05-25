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
    id: "Mental Health Detection via Social Media Posts",
    title: "Mental Health Detection via Social Media Posts",
    description: "Comming soon ...",
    image: "socail.jpg",
    category: "Natural Language Processing",
    tags: ["Python", "Transformers", "NLP"],
    githubUrl: "https://github.com/Praveen14_25/ai-chatbot",
  },
  {
    id: "chatbot-assistant",
    title: "Personalized AI Chat Assistant for Seamless Interactions",
    description: "Comming soon ...",
    image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Conversational AI",
    tags: ["Python", "Transformers", "NLP", "Dialog Systems"],
    githubUrl: "https://github.com/Praveen14_25/ai-chatbot",
  }
];