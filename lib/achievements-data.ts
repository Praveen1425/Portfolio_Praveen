export interface Achievement {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  certificate?: string; 
}


export const achievementsData: Achievement[] = [
  {
    id: "foundations-of-ai-intern",
    title: "Foundations of AI Intern – Microsoft AICTE Edunet Foundation",
    description: "Learned key AI concepts including supervised/unsupervised learning, ethics in AI, and real-world applications.",
    image: "/images/certifications/ai-logo.png",
    tags: ["Internship", "Microsoft", "AI"],
    certificate: "/certificates/certificate.pdf",
  },
  {
    id: "DataCraze",
    title: "DataCraze - A FrontLine Event of STEPCONE - 2025, GMRIT",
    description: "A Complex Dataset is processed & then visualized by making a dashboard by using streamlit library",
    image: "/images/certifications/datacrazelogo.png",
    tags: ["Visualization", "Python", "DashBoard"],
    certificate: "/certificates/DataCraze.jpg",
  },
  {
    id: "DataViz",
    title: "DataViz - A Signature Event of STEPCONE - 2024, GMRIT",
    description: "A Dataset is processed & then visualized by making a dashboard by using streamlit library",
    image: "/images/certifications/dataVizlogo.png",
    tags: ["Visualization", "Python", "DashBoard"],
    certificate: "/certificates/DataViz.jpg",
  },
];
