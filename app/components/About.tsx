import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Code, Users, Star } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section bg-gradient-to-b from-white to-blue-light/20">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">À propos</h2>
          <p className="text-lg text-gray-600">
            Équipe passionnée spécialisée dans la création de sites web sur mesure, 
            on vous accompagne dans la réalisation de votre présence en ligne.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="card-hover border-blue-soft border-2 rounded-[32px]">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="bg-blue-soft/30 p-3 rounded-full mb-4">
                  <Code className="h-6 w-6 text-blue-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Développement Web</h3>
                <p className="text-gray-600">
                  Création de sites web performants et responsifs avec les technologies les plus récentes.
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="card-hover border-pink-soft border-2 rounded-[32px]">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="bg-pink-soft/30 p-3 rounded-full mb-4">
                  <Users className="h-6 w-6 text-pink-light" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Expérience Utilisateur</h3>
                <p className="text-gray-600">
                  Conception centrée sur l'utilisateur pour une expérience fluide et intuitive.
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="card-hover border-blue-sky border-2 rounded-[32px]">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="bg-blue-sky/30 p-3 rounded-full mb-4">
                  <Star className="h-6 w-6 text-blue-sky" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Qualité & Fiabilité</h3>
                <p className="text-gray-600">
                  Un travail soigné et rigoureux pour des projets livrés dans les délais avec un suivi personnalisé.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-16 bg-white p-8 rounded-lg shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Notre parcours</h3>
              <p className="text-gray-600 mb-4">
                Fort de plusieurs années d'expérience dans le développement web, nous avons créer notre activité de freelance pour offrir
                des solutions personnalisées aux entreprises et entrepreneurs.
              </p>
              <p className="text-gray-600">
                Notre mission est de transformer vos idées en solutions digitales élégantes et fonctionnelles qui vous démarqueront
                de la concurrence et vous aideront à atteindre vos objectifs.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-light/20 p-6 rounded-lg text-center">
                <span className="block text-3xl font-bold text-blue-primary mb-2">5+</span>
                <span className="text-sm text-gray-600">Années d'expérience</span>
              </div>
              <div className="bg-pink-soft/20 p-6 rounded-lg text-center">
                <span className="block text-3xl font-bold text-pink-light mb-2">5+</span>
                <span className="text-sm text-gray-600">Projets réalisés</span>
              </div>
              <div className="bg-blue-sky/20 p-6 rounded-lg text-center">
                <span className="block text-3xl font-bold text-blue-sky mb-2">3+</span>
                <span className="text-sm text-gray-600">Clients satisfaits</span>
              </div>
              <div className="bg-blue-soft/20 p-6 rounded-lg text-center">
                <span className="block text-3xl font-bold text-blue-soft mb-2">100%</span>
                <span className="text-sm text-gray-600">Satisfaction client</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;