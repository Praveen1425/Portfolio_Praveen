"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import ThemeToggle from '@/components/ThemeToggle';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    const checkLoginStatus = () => {
      setIsLoggedIn(localStorage.getItem('isLoggedIn') === 'true');
    };

    window.addEventListener('scroll', handleScroll);
    checkLoginStatus();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
    router.push('/');
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/80 backdrop-blur-md py-2 shadow-sm' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2"
        >
          <Link href="/" className="text-4xl font-bold">
            MP<span className="text-primary"></span>
          </Link>
        </motion.div>

        <motion.nav 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="hidden md:flex items-center gap-6"
        >
          <Link href="/#about" className="text-sm hover:text-primary transition-colors">About</Link>
          <Link href="/#education" className="text-sm hover:text-primary transition-colors">Education</Link>
          <Link href="/#projects" className="text-sm hover:text-primary transition-colors">Projects</Link>
          <Link href="/#certifications" className="text-sm hover:text-primary transition-colors">Certifications</Link>
          <Link href="/#achievements" className="text-sm hover:text-primary transition-colors">Achievements</Link>
          <Link href="/#contact" className="text-sm hover:text-primary transition-colors">Contact</Link>

          {isLoggedIn ? (
            <Button onClick={handleLogout} size="sm" variant="outline">Logout</Button>
          ) : (
            <Link href="/login"><Button variant="outline" size="sm">Login</Button></Link>
          )}

          <ThemeToggle />
        </motion.nav>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-background border-b"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link href="/#about" className="text-sm py-2 hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>About</Link>
            <Link href="/#projects" className="text-sm py-2 hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Projects</Link>
            <Link href="/#education" className="text-sm py-2 hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Education</Link>
            <Link href="/#certifications" className="text-sm py-2 hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Certifications</Link>
            <Link href="/#achievements" className="text-sm py-2 hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Achievements</Link>
            <Link href="/#contact" className="text-sm py-2 hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Contact</Link>

            {isLoggedIn ? (
              <Button onClick={() => { handleLogout(); setMobileMenuOpen(false); }} size="sm" variant="outline" className="w-full">Logout</Button>
            ) : (
              <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="outline" size="sm" className="w-full">Login</Button>
              </Link>
            )}
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
