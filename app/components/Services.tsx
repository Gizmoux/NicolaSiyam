"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Site Vitrine",
      description: "Présentez votre entreprise avec élégance grâce à un site web moderne et responsive, parfaitement optimisé pour le référencement.",
      features: ["Design personnalisé", "Responsive design", "Optimisé SEO", "Interface d'administration"],
      accent: "bg-pink-light",
      price: "À partir de 1500€"
    },
    {
      title: "E-commerce",
      description: "Vendez vos produits en ligne avec une boutique complète, incluant paiement sécurisé et gestion des commandes.",
      features: ["Catalogue produits", "Panier d'achat", "Paiement sécurisé", "Gestion des stocks"],
      accent: "bg-blue-soft",
      price: "À partir de 3000€"
    },
    {
      title: "Application Web",
      description: "Solutions sur mesure pour vos besoins spécifiques avec fonctionnalités avancées et expérience utilisateur optimisée.",
      features: ["Développement sur mesure", "Fonctionnalités avancées", "Interface intuitive", "Sécurité renforcée"],
      accent: "bg-blue-primary",
      price: "Sur devis"
    },
    {
      title: "Refonte de site",
      description: "Donnez un nouveau souffle à votre site existant avec un design moderne et des performances améliorées.",
      features: ["Analyse de l'existant", "Modernisation design", "Optimisation performances", "Migration de contenu"],
      accent: "bg-pink-soft",
      price: "À partir de 1200€"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    },
    hover: {
      y: -10,
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  return (
    <section id="services" className="section bg-gradient-to-br from-white via-blue-light/10 to-pink-soft/10">
      <div className="container-custom">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 title-gradient">Mes Services</h2>
          <p className="text-lg text-gray-600">
            Des solutions web adaptées à vos besoins spécifiques, avec un accompagnement personnalisé 
            tout au long du projet.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants} whileHover="hover">
              <Card className="rounded-[32px] overflow-hidden card-hover transition-all duration-500">
                <div className={`h-2 ${service.accent}`}></div>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-pink-light mr-2">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="flex justify-between items-center border-t pt-4">
                  <div className="font-medium">{service.price}</div>
                  <Button variant="outline" className="text-pink-light border-pink-light hover:bg-pink-light hover:text-white transition-all duration-300" asChild>
                    <a href="#contact">
                      En savoir plus
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button asChild size="lg" className="bg-pink-light hover:bg-blue-primary text-white transition-colors duration-300">
              <a href="#contact">
                Demander un devis personnalisé [GRATUIT]
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;