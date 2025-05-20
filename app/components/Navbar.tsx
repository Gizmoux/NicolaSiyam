"use client";
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';

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
        <a href="#" className="font-playfair font-bold text-xl md:text-2xl">
          <span className="title-gradient">Website Creaatong</span>
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
          className="md:hidden flex flex-col space-y-1.5" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menu"
        >
          <span className={`block w-6 h-0.5 bg-pink-light transition-transform ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-pink-light transition-opacity ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`block w-6 h-0.5 bg-pink-light transition-transform ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Menu mobile */}
      <div className={`md:hidden absolute w-full bg-white shadow-md transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-60' : 'max-h-0'}`}>
        <div className="container-custom py-4 flex flex-col space-y-3">
          <a href="#about" className="text-sm py-2 hover:text-pink-light transition-colors" onClick={() => setIsMobileMenuOpen(false)}>À propos</a>
          <a href="#services" className="text-sm py-2 hover:text-pink-light transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
          <a href="#projects" className="text-sm py-2 hover:text-pink-light transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Projets</a>
          <a href="#testimonials" className="text-sm py-2 hover:text-pink-light transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Témoignages</a>
          <a href="#contact" className="text-sm py-2 hover:text-pink-light transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
        </div>
      </div>
    </nav>
  );
};


export default Navbar;