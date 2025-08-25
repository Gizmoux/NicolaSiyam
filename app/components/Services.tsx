"use client";
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Site Vitrine",
      description:
        "Présentez votre entreprise avec élégance grâce à un site web moderne et responsive, composé de 1 à 3 pages. Idéal pour une présence en ligne simple, claire et efficace, avec un design personnalisé et une base SEO solide.",
      features: [
        "Design personnalisé",
        "Responsive design",
        "Optimisé SEO",
      ],
      accent: "bg-teal-dark",
      price: "À partir de 450€",
    },
    {
      title: "Site Vitrine Pro",
      description:
        "Offrez à votre entreprise une vitrine digitale complète avec un site web professionnel de 4 à 8 pages. Parfait pour présenter vos services en détail, intégrer des sections dynamiques et renforcer votre visibilité grâce à un SEO avancé.",
      features: [
        "Design personnalisé",
        "Responsive design",
        "Optimisé SEO",
      ],
      accent: "bg-blue-electric",
      price: "À partir de 800€",
    },
    {
      title: "Site Vitrine Premium",
      description:
        "Une solution sur-mesure pour les entreprises ou indépendants souhaitant un site web complet, professionnel et évolutif. Jusqu'à 15 pages, fonctionnalités avancées (formulaires dynamiques, blog, intégrations externes), design hautement personnalisé et accompagnement stratégique.",
      features: [
        "Design sur-mesure",
        "Responsive design",
        "Optimisation SEO approfondie",
        "Interface d'administration complète",
        "Fonctionnalités personnalisées (blog, formulaires, intégrations)",
        "Accompagnement stratégique & conseils UX"
      ],
      accent: "bg-teal-dark",
      price: "À partir de 2000€"
    },    
    {
      title: "E-commerce",
      description:
        "Lancez votre boutique en ligne avec une solution e-commerce complète, performante et sécurisée. Idéal pour vendre vos produits 24h/24, gérer vos commandes, vos stocks et offrir une expérience d’achat fluide à vos clients.",
      features: [
        "Catalogue produits",
        "Panier d'achat",
        "Paiement sécurisé",
        "Gestion des stocks",
        "Responsive design & SEO"
      ],
      accent: "bg-blue-electric",
      price: "À partir de 3000€"
    },    
    {
      title: "Refonte de site",
      description:
        "Donnez un nouveau souffle à votre site existant avec un design moderne et des performances améliorées.",
      features: [
        "Analyse de l'existant",
        "Modernisation design",
        "Optimisation performances",
        "Migration de contenu",
      ],
      accent: "bg-teal-dark",
      price: "Sur devis",
    },
    {
      title: "Application Web",
      description:
        "Solutions sur mesure pour vos besoins spécifiques avec fonctionnalités avancées et expérience utilisateur optimisée.",
      features: [
        "Développement sur mesure",
        "Fonctionnalités avancées",
        "Interface intuitive",
        "Sécurité renforcée",
      ],
      accent: "bg-blue-electric",
      price: "Sur devis",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
    hover: {
      y: -10,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  };

  return (
      <section
      id="services"
      className="section bg-gradient-to-b from-teal-dark/90 via-teal-medium/70 to-cyan-medium/30 w-full overflow-hidden"
    >
      <div className="container-custom">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 title-gradient">
            Nos Services
          </h2>
          <p className="text-lg text-gray-400">
            Des solutions web adaptées à vos besoins spécifiques, avec un
            accompagnement personnalisé tout au long du projet.
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
              <Card className="rounded-[32px] overflow-hidden card-hover transition-all duration-500  h-full flex flex-col">
                <div className={`h-2 ${service.accent}`}></div>
                <CardContent className="pt-6 flex-grow">
                  <h3 className="text-xl font-semibold mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <svg
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="w-5 h-5 text-teal-medium mr-2"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="flex justify-between items-center border-t pt-4">
                  <div className="font-medium">{service.price}</div>
                  <Button
                    className="text-teal-medium border border-teal-medium hover:bg-teal-medium bg-white hover:text-white transition-all duration-300"
                    asChild
                  >
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
          className="mt-12 text-center text-gray-600 text-lg max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Pour 30 €/mois, nous vous proposons un accompagnement complet : maintenance, support et hébergement de votre site, en toute sérénité.
        </motion.div>
        <motion.div
          className="mt-16 text-center w-full max-w-full px-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              asChild
              size="lg"
              className="bg-teal-medium hover:bg-cyan-medium text-white transition-colors duration-300 px-6 py-4 text-sm md:text-base whitespace-normal break-words"
            >
              <a href="#contact" className="text-center">
                Demander un devis personnalisé [GRATUIT]
                <ArrowRight className="ml-2 h-4 w-4 flex-shrink-0" />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
