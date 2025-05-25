import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => { 
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t bg-muted/40">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Muccharla Praveen</h3>
            <p className="text-muted-foreground text-sm">
              Machine Learning student specializing in building AI-powered solutions and data-driven applications.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
  <Link href="/#about" className="text-sm hover:text-primary transition-colors">
    About
  </Link>
  <Link href="/#education" className="text-sm hover:text-primary transition-colors">
    Education
  </Link>
  <Link href="/#projects" className="text-sm hover:text-primary transition-colors">
    Projects
  </Link>
  <Link href="/#certifications" className="text-sm hover:text-primary transition-colors">
    Certifications
  </Link>
  <Link href="/#achievements" className="text-sm hover:text-primary transition-colors">
    Achievements
  </Link>
  <Link href="/#contact" className="text-sm hover:text-primary transition-colors">
    Contact
  </Link>
  <Link href="/login" className="text-sm hover:text-primary transition-colors">
    Login
  </Link>
</nav>

          </div>
          
          <div>
            <h4 className="font-medium mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/Praveen1425" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/praveen-muccharla-977302289/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="mailto:praveen.muccherela1409@gmail.com" 
                className="hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Muccharla Praveen All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground mt-2 md:mt-0">
            Built with Next.js & Tailwind CSS <br />
            Database used for this project is MongoDB
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;