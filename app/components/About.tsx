import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";
import { Code, Users, Star } from "lucide-react";

const About = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.7 }
    }
  };

  return (
    // <section id="about" className="section bg-gradient-to-b from-white to-cyan-medium/20">
    <section id="about" className="section bg-gradient-to-b from-navy-deep to-teal-dark/90">
      <div className="container-custom">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeIn}
        >
          <h2 className="title-gradient text-3xl md:text-4xl font-bold mb-8">À propos</h2>
          
          <p className="text-lg text-gray-400 mb-12">
            Fondé en 2024, NS Studio Web est né d&apos;une passion commune pour le web et le design. Nous concevons des sites et applications modernes, performants et sur mesure, avec une attention particulière portée à l’expérience utilisateur et aux dernières technologies comme Next.js.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-10">
            <motion.div 
              className="flex flex-col items-center"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative w-48 h-48 mb-4 overflow-hidden rounded-full border-4 border-cyan-medium">
                <motion.img
                  src="/img/nicolas.webp"
                  alt="Nicolas"
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-cyan-medium">Nicolas</h3>
              <p className="text-gray-400">
                Développeur autodidacte, Nicolas complète notre approche par son sens du concret, 
                sa curiosité constante et son attention à l&apos;expérience utilisateur.
              </p>
            </motion.div>
            
            <motion.div 
              className="flex flex-col items-center"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative w-48 h-48 mb-4 overflow-hidden rounded-full border-4 border-blue-bright">
                <motion.img
                  src="/img/siyam.webp"
                  alt="Siyam"
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-blue-bright">Siyam</h3>
              <p className="text-gray-400">
                Diplômée d&apos;EPITECH, Siyam apporte une expertise technique solide et une vision globale des projets.
              </p>
            </motion.div>
          </div>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          <motion.div variants={fadeIn}>
            <Card className="card-hover border-teal-medium border-2 rounded-[32px] h-full flex flex-col">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-teal-medium/30 p-3 rounded-full mb-4">
                    <Code className="h-6 w-6 text-blue-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Développement Web</h3>
                  <p className="text-gray-500">
                    Création de sites web performants et responsifs avec les technologies les plus récentes.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div variants={fadeIn}>
            <Card className="card-hover border-teal-dark border-2 rounded-[32px] h-full flex flex-col">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-teal-dark/30 p-3 rounded-full mb-4">
                    <Users className="h-6 w-6 text-pink-light" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Expérience Utilisateur</h3>
                  <p className="text-gray-500">
                    Conception centrée sur l&apos;utilisateur pour une expérience fluide et intuitive.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div variants={fadeIn}>
            <Card className="card-hover border-teal-medium border-2 rounded-[32px] h-full flex flex-col">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-teal-medium/30 p-3 rounded-full mb-4">
                    <Star className="h-6 w-6 text-blue-sky" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Qualité & Fiabilité</h3>
                  <p className="text-gray-500">
                    Un travail soigné et rigoureux pour des projets livrés dans les délais avec un suivi personnalisé.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="mt-16 bg-white p-8 rounded-[32px] shadow-sm"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeIn}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Notre parcours</h3>
              <p className="text-gray-500">
                Forts de plusieurs années d&apos;expérience, nous avons lancé NS Studio Web pour accompagner entreprises et entrepreneurs avec des solutions digitales élégantes et fonctionnelles, pensées pour vous démarquer et atteindre vos objectifs.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <motion.div 
                className="bg-blue-bright/10 p-6 rounded-[32px] text-center"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <span className="block text-3xl font-bold text-blue-primary mb-2">5+</span>
                <span className="text-sm text-gray-400">Années d&apos;expérience</span>
              </motion.div>
              <motion.div 
                className="bg-teal-balanced/20 p-6 rounded-[32px] text-center"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <span className="block text-3xl font-bold text-pink-light mb-2">5+</span>
                <span className="text-sm text-gray-400">Projets réalisés</span>
              </motion.div>
              <motion.div 
                className="bg-blue-electric/20 p-6 rounded-[32px] text-center"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <span className="block text-3xl font-bold text-blue-sky mb-2">3+</span>
                <span className="text-sm text-gray-400">Clients satisfaits</span>
              </motion.div>
              <motion.div 
                className="bg-cyan-medium/20 p-6 rounded-[32px] text-center"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <span className="block text-3xl font-bold text-blue-soft mb-2">100%</span>
                <span className="text-sm text-gray-400">Satisfaction client</span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
