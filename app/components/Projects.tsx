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
  image: string;
  description: string;
  technologies: string[];
  link: string;
}

const Projects = () => {
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects = [
    {
      id: 1,
      title: "AriMayi - Site Vitrine",
      category: "Site Vitrine",
      image:
        "/img/arimayi.png",
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
      image:
        "/img/nathan.png",
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
    setOpen(true);
  };

  return (
    <section id="projects" className="section bg-blue-light/10">
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
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.7 }}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-primary/80 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">
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
            <DialogContent className="max-w-3xl rounded-card">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <DialogHeader>
                  <DialogTitle className="text-2xl font-semibold">
                    {selectedProject.title}
                  </DialogTitle>
                  <DialogDescription className="text-blue-primary font-medium mt-1">
                    {selectedProject.category}
                  </DialogDescription>
                </DialogHeader>
                <div className="mt-4">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-64 object-cover rounded-card"
                  />
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
                          className="bg-blue-soft/30 text-blue-primary text-sm px-3 py-1 rounded-full"
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
                    <Button
                      asChild
                      className="bg-blue-primary hover:bg-blue-sky"
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
