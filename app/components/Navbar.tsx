import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuVariants = {
    hidden: { opacity: 0, x: '-100%' },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        type: "tween", 
        duration: 0.4, 
        ease: "easeInOut",
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    },
    exit: { 
      opacity: 0, 
      x: '-100%',
      transition: { 
        type: "tween", 
        duration: 0.3, 
        ease: "easeInOut" 
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 }
  };

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "py-2 bg-white/90 backdrop-blur-md shadow-sm" 
          : "py-4 bg-transparent"
      )}
    >
      <div className="container-custom flex justify-between items-center">
        <a href="#" className="font-playfair font-bold text-xl md:text-2xl z-50">
          <span className="title-gradient">NS Studio Web</span>
        </a>

        {/* Navigation desktop */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="#about" className="text-sm hover:text-pink-light transition-colors">À propos</a>
          <a href="#services" className="text-sm hover:text-pink-light transition-colors">Services</a>
          <a href="#projects" className="text-sm hover:text-pink-light transition-colors">Projets</a>
          <a href="#testimonials" className="text-sm hover:text-pink-light transition-colors">Témoignages</a>
          <Button asChild variant="outline" className="text-sm border-pink-light text-pink-light hover:bg-pink-light hover:text-white transition-all duration-300">
            <a href="#contact">Contact</a>
          </Button>
        </div>

        {/* Bouton menu mobile */}
        <button 
          className={`md:hidden flex flex-col space-y-1.5 z-50 ${isMobileMenuOpen ? 'relative' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menu"
        >
          <span className={`block w-6 h-0.5 bg-pink-light transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2 bg-pink-light ' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-pink-light transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`block w-6 h-0.5 bg-pink-light transition-transform duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2 bg-pink-light ' : ''}`}></span>
        </button>
      </div>

      {/* Menu mobile plein écran avec animation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="fixed inset-0 bg-white/80 backdrop-blur-md z-40 flex items-center justify-center"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
          >
            <div className="flex flex-col items-center space-y-6 text-[#90C9FF]">
              <motion.a 
                href="#about" 
                className="text-xl font-medium py-2 hover:scale-110 transition-transform" 
                onClick={() => setIsMobileMenuOpen(false)}
                variants={itemVariants}
              >
                À propos
              </motion.a>
              <motion.a 
                href="#services" 
                className="text-xl font-medium py-2 hover:scale-110 transition-transform" 
                onClick={() => setIsMobileMenuOpen(false)}
                variants={itemVariants}
              >
                Services
              </motion.a>
              <motion.a 
                href="#projects" 
                className="text-xl font-medium py-2 hover:scale-110 transition-transform" 
                onClick={() => setIsMobileMenuOpen(false)}
                variants={itemVariants}
              >
                Projets
              </motion.a>
              <motion.a 
                href="#testimonials" 
                className="text-xl font-medium py-2 hover:scale-110 transition-transform" 
                onClick={() => setIsMobileMenuOpen(false)}
                variants={itemVariants}
              >
                Témoignages
              </motion.a>
              <motion.a 
                href="#contact" 
                className="mt-4 px-8 py-3 bg-white text-pink-light rounded-full text-lg font-medium hover:scale-110 transition-transform" 
                onClick={() => setIsMobileMenuOpen(false)}
                variants={itemVariants}
              >
                Contact
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;