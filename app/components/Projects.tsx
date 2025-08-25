/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogHeader,
  DialogFooter,
} from "@/components/ui/dialog";
import { Link } from "lucide-react";

interface Project {
  id: number;
  title: string;
  category: string;
  images: string[]; // Changé de 'image' à 'images' pour supporter plusieurs images
  description: string;
  technologies: string[];
  link: string;
}

// Fonction pour obtenir la couleur du badge selon la catégorie (correspondant aux services)
const getCategoryColor = (category: string) => {
  switch (category.toLowerCase()) {
    case "site vitrine":
      return "bg-cyan-medium/80 text-white"; // Service de base - bleu cyan clair
    case "site vitrine pro":
      return "bg-blue-bright/80 text-white"; // Service intermédiaire - bleu vif
    case "site vitrine premium":
      return "bg-teal-dark/80 text-white"; // Service premium - vert foncé
    case "e-commerce":
      return "bg-blue-electric/80 text-white"; // Service spécialisé - bleu électrique
    case "refonte de site":
      return "bg-teal-medium/80 text-white"; // Service de transformation - teal moyen
    case "application web":
      return "bg-navy-deep/80 text-white"; // Service sur mesure - bleu marine
    default:
      return "bg-gray-600/80 text-white";
  }
};

const Projects = () => {
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projects = [
    {
      id: 1,
      title: "AriMayi - Site Vitrine",
      category: "Site Vitrine",
      images: [
        "/img/arimayi.webp",
      ],
      description:
        "Site vitrine élégant pour la société AriMayi, mettant en avant leurs services et valeurs avec un design épuré et moderne.",
      technologies: [
        "NextJS",
        "Tailwind CSS",
        "Responsive Design",
        "Animations",
      ],
      link: "https://arimayi.fr",
    },
    // {
    //   id: 2,
    //   title: "EcoShop",
    //   category: "E-commerce",
    //   image: "https://images.unsplash.com/photo-1531973576343-80db7389f987?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    //   description: "Boutique en ligne pour une marque de produits écologiques avec système de paiement et gestion des commandes.",
    //   technologies: ["Next.js", "Stripe", "CMS Headless", "Responsive Design"],
    //   link: "#"
    // },
    // {
    //   id: 3,
    //   title: "CityView",
    //   category: "Application Web",
    //   image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&auto=format&fit=crop&w=2144&q=80",
    //   description: "Application interactive pour explorer les points d'intérêt dans différentes villes avec système de géolocalisation.",
    //   technologies: ["React", "Google Maps API", "Node.js", "Mobile First"],
    //   link: "#"
    // },
    // {
    //   id: 4,
    //   title: "ArtFolio",
    //   category: "Portfolio",
    //   image:
    //     "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80",
    //   description:
    //     "Portfolio artistique avec galerie d'images immersive et animations élégantes pour une expérience utilisateur unique.",
    //   technologies: [
    //     "React",
    //     "GSAP Animations",
    //     "Responsive Design",
    //     "Lazy Loading",
    //   ],
    //   link: "#",
    // },
    {
      id: 5,
      title: "Nathan (Streamer & YouTubeur) - Site vitrine",
      category: "Site Vitrine",
      images: [
        "/img/nathan.webp",
      ],
      description:
        "Création d’un site vitrine pour Nathan, streamer sur Twitch et créateur de contenu sur YouTube. Ce site a été conçu pour mettre en valeur son univers, centraliser ses contenus (lives, vidéos, planning), et renforcer sa présence en ligne. L’objectif était de proposer une interface moderne, responsive et facile à administrer.",
      technologies: [
        "ReactJS",
        "CSS",
        "Firebase",
        "Responsive Design",
      ],
      link: "https://nathan-nouailhac.firebaseapp.com/",
    },
    {
      id: 6,
      title: "AccessTicket",
      category: "Application Web",
      images: [
        "/img/dashboard-accessticket.webp",
      ],
      description:
        "Création d’une application web pour la gestion des tickets d’accès à un événement via un lecteur de QR code. Ce dashboard a été conçu pour permettre aux organisateurs de gérer les entrées des participants, de suivre l’état des tickets et de générer des rapports.",
      technologies: [
        "NextJS",
        "Tailwind CSS",
        "Responsive Design",
        "Animations",
        "PWA",
      ],
      link: "#",
      },
      {
        id: 7,
        title: "Better Be Wild",
        category: "Site Vitrine Premium",
        images: [
          "/img/bbw.webp", "/img/bbw-backoffice.webp",
        ],
        description:
          "Création d'un site vitrine pour la marque Better Be Wild, mettant en avant leurs travaux et services avec un design épuré et moderne. Une interface administrateur a été créé pour gérer les contenus du site.",
        technologies: [
          "NextJS",
          "Tailwind CSS",
          "Responsive Design",
          "Animations",
        ],
        link: "https://www.betterbewild.fr/",
      },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
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
        stiffness: 400,
        damping: 10,
      },
    },
  };

  const openProjectDetails = (project: Project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0); // Reset to first image
    setOpen(true);
  };

  return (
    <section id="projects" className="section bg-gradient-to-b from-cyan-medium/30 via-blue-bright/10 to-navy-deep/5">
      <div className="container-custom">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 title-gradient">
            Nos Réalisations
          </h2>
          <p className="text-lg text-gray-600">
            Découvrez quelques-uns des projets sur lesquels nous avons
            travaillé, illustrant notre approche du design et du développement
            web.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover="hover"
              onClick={() => openProjectDetails(project)}
            >
              <Card className="overflow-hidden cursor-pointer rounded-[32px]">
                <div className="relative h-60 overflow-hidden rounded-t-card">
                  <motion.img
                    src={project.images[0]}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.7 }}
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`${getCategoryColor(project.category)} backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full`}>
                      {project.category}
                    </span>
                  </div>
                </div>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 line-clamp-2">
                    {project.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {selectedProject && (
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto rounded-card">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <DialogHeader>
                  <DialogTitle className="text-2xl font-semibold">
                    {selectedProject.title}
                  </DialogTitle>
                  <DialogDescription className="mt-1">
                    <span className={`${getCategoryColor(selectedProject.category)} backdrop-blur-sm text-white text-sm px-3 py-1 rounded-full font-medium`}>
                      {selectedProject.category}
                    </span>
                  </DialogDescription>
                </DialogHeader>
                <div className="mt-4">
                  {selectedProject.images.length === 1 ? (
                    <img
                      src={selectedProject.images[0]}
                      alt={selectedProject.title}
                      className="w-full h-64 object-cover rounded-card"
                    />
                  ) : (
                    <div className="relative overflow-hidden rounded-card">
                      <motion.div
                        key={currentImageIndex}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ 
                          type: "spring", 
                          stiffness: 300, 
                          damping: 30,
                          duration: 0.5 
                        }}
                        className="w-full h-64"
                      >
                        <img
                          src={selectedProject.images[currentImageIndex]}
                          alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                      {/* Navigation buttons */}
                      <button
                        onClick={() => setCurrentImageIndex(prev => prev === 0 ? selectedProject.images.length - 1 : prev - 1)}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 hover:scale-110"
                        aria-label="Image précédente"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      <button
                        onClick={() => setCurrentImageIndex(prev => prev === selectedProject.images.length - 1 ? 0 : prev + 1)}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 hover:scale-110"
                        aria-label="Image suivante"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                      {/* Dots indicator */}
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                        {selectedProject.images.map((_, index) => (
                          <motion.button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`w-2 h-2 rounded-full transition-colors ${
                              index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                            }`}
                            aria-label={`Aller à l'image ${index + 1}`}
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                          />
                        ))}
                      </div>
                    </div>
                  )}
                  <div className="mt-4">
                    <h4 className="font-semibold mb-2">Description</h4>
                    <p className="text-gray-600 mb-4">
                      {selectedProject.description}
                    </p>

                    <h4 className="font-semibold mb-2">
                      Technologies utilisées
                    </h4>
                    <motion.div
                      className="flex flex-wrap gap-2 mb-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
                    >
                      {selectedProject.technologies.map((tech, index) => (
                        <motion.span
                          key={index}
                          className="bg-blue-bright/30 text-black text-sm px-3 py-1 rounded-full"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </motion.div>
                  </div>
                </div>
                <DialogFooter>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {selectedProject.link && selectedProject.link !== "#" ? (
                      <Button
                        asChild
                        className=" bg-blue-bright hover:bg-teal-medium rounded-[32px]"
                      >
                        <a
                          href={selectedProject.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center"
                        >
                          Visiter le site <Link className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    ) : (
                      <Button
                        className="bg-gray-400 hover:bg-gray-500 cursor-not-allowed rounded-[32px]"
                        disabled
                      >
                        Lien non public
                      </Button>
                    )}
                  </motion.div>
                </DialogFooter>
              </motion.div>
            </DialogContent>
          </Dialog>
        )}
      </div>
    </section>
  );
};

export default Projects;
