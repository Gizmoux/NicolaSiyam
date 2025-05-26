"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-navy-deep">
      {/* Motif de fond subtil */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              {/* <pattern id="grid" width="8" height="8" patternUnits="userSpaceOnUse">
                <path d="M 8 0 L 0 0 0 8" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="0.3" />
              </pattern> */}
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        {/* Éléments décoratifs animés */}
        <motion.div 
          className="absolute top-20 right-20 w-32 h-32 rounded-full bg-gradient-to-br from-teal-medium/20 to-cyan-medium/20 blur-xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-32 left-16 w-24 h-24 rounded-full bg-gradient-to-br from-blue-electric/20 to-blue-bright/20 blur-xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>
      
      {/* Contenu principal */}
      <div className="container-custom relative z-10 pt-20">
        <div className="max-w-4xl">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          >
            Créons ensemble{" "}
            <span className="relative inline-block">
              <motion.span 
                className="relative z-10 bg-gradient-to-r title-gradient bg-clip-text text-transparent font-extrabold"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                l&apos;identité digitale
              </motion.span>
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-cyan-medium/20 via-blue-bright/20 to-blue-electric/20 rounded-lg blur-sm -z-10"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1.1 }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </span>
            {" "}de votre entreprise
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl mb-8 text-gray-300 max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8,
              delay: 0.4,
              type: "spring",
              stiffness: 100
            }}
          >
            Développement web professionnel et sur mesure pour propulser votre présence en ligne avec expertise et créativité.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8,
              delay: 0.6,
              type: "spring",
              stiffness: 100
            }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild size="lg" className="bg-gradient-to-r from-teal-medium to-cyan-medium hover:from-cyan-medium hover:to-blue-bright text-white transition-all duration-300 shadow-lg">
                <a href="#contact">
                  Discutons de votre projet 
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild size="lg" className="border-2 border-cyan-medium text-cyan-medium hover:bg-cyan-medium hover:text-navy-deep transition-all duration-300 bg-transparent">
                <a href="#projects">
                  Voir nos réalisations
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Section statistiques */}
        {/* <motion.div 
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8,
            delay: 0.8,
            type: "spring",
            stiffness: 100
          }}
        >
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-cyan-medium mb-1">5+</div>
            <div className="text-sm text-gray-400">Années d'expérience</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-blue-bright mb-1">15+</div>
            <div className="text-sm text-gray-400">Projets réalisés</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-blue-electric mb-1">10+</div>
            <div className="text-sm text-gray-400">Clients satisfaits</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-teal-medium mb-1">100%</div>
            <div className="text-sm text-gray-400">Satisfaction</div>
          </div>
        </motion.div>*/}
      </div> 
      
      {/* Flèche de défilement */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
      >
        <motion.a 
          href="#about" 
          className="block text-cyan-medium hover:text-blue-bright transition-colors duration-300"
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop"
          }}
        >
          <ChevronDown className="h-8 w-8" />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;