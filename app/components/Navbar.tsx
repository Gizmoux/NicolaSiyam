"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

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

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Settings animation menu
  const menuVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.2,
        ease: "easeIn",
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      x: -20,
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    },
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

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
        <Link
          href="/"
          className="font-playfair font-bold text-xl md:text-2xl z-[101]"
        >
          <Image src={isScrolled ? "/logo/Logo_NS_400px.svg" : "/logo/logo-white.png"} alt="NS Studio Web" width={100} height={100} />
        </Link>

        {/* Navigation desktop */}
        <div className="hidden md:flex items-center space-x-6">
          <a
            href="#about"
            className="text-sm text-teal-medium hover:text-blue-bright transition-colors"
          >
            À propos
          </a>
          <a
            href="#services"
            className="text-sm text-teal-medium hover:text-blue-bright transition-colors"
          >
            Services
          </a>
          <a
            href="#projects"
            className="text-sm text-teal-medium hover:text-blue-bright transition-colors"
          >
            Projets
          </a>
          <a
            href="#testimonials"
            className="text-sm text-teal-medium hover:text-blue-bright transition-colors"
          >
            Témoignages
          </a>
          <Button
            asChild
            className="text-sm border-2 border-teal-medium  bg-transparent text-teal-medium hover:bg-teal-medium hover:text-white transition-all duration-300"
          >
            <a href="#contact">Contact</a>
          </Button>
        </div>

        {/* Bouton menu mobile */}
        <button
          className={`md:hidden flex flex-col space-y-1.5 z-[100] ${
            isMobileMenuOpen ? "relative" : ""
          }`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menu"
        >
          <span
            className={`block w-6 h-0.5 transition-transform duration-300 ${
              isMobileMenuOpen
                ? "rotate-45 translate-y-2 bg-teal-medium"
                : "bg-teal-medium"
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-teal-medium transition-opacity duration-300 ${
              isMobileMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 transition-transform duration-300 ${
              isMobileMenuOpen
                ? "-rotate-45 -translate-y-2 bg-teal-medium"
                : "bg-teal-medium"
            }`}
          ></span>
        </button>
      </div>

      {/* Menu mobile plein écran avec animation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-gradient-to-br from-teal-medium via-cyan-medium to-blue-electric z-[99] flex items-center justify-center w-full h-screen"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              width: '100vw',
              height: '100vh'
            }}
          >
            <div className="flex flex-col items-center space-y-6 text-white">
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
                className="mt-4 px-8 py-3 bg-white text-teal-medium rounded-full text-lg font-medium hover:scale-110 transition-transform"
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