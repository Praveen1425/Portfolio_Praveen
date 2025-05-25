import HeroSection from '@/components/sections/HeroSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import AboutSection from '@/components/sections/AboutSection';
import ContactSection from '@/components/sections/ContactSection';
import EducationSection from '@/components/sections/EducationSection';
import AIChatbot from '@/components/chatbot/AIChatbot';
import CertificationsSection from '@/components/sections/CertificationsSection';
import AchievementsSection from "@/components/achievements/AchievementsSection";

export default function Home() {
  return (
    <div className="container mx-auto px-4 md:px-6">
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <ProjectsSection />
      <CertificationsSection /> 
      <AchievementsSection />
      <ContactSection />
      <div className="fixed bottom-6 right-6 z-50">
        <AIChatbot />
      </div>
    </div>
  );
}
