"use client";
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Arimayi",
      role: "Société de conseil",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
      quote: "Un travail exceptionnel pour notre site vitrine. Le design est exactement ce que nous recherchions - élégant, professionnel et représentant parfaitement notre identité. La collaboration a été fluide et agréable du début à la fin.",
      rating: 5
    },
    {
      id: 2,
      name: "Marie Durand",
      role: "Fondatrice, Studio Créatif",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
      quote: "Un vrai professionnel qui a su comprendre mes besoins et les traduire en une solution web parfaitement adaptée à mon activité. Communication claire et résultat au-delà de mes attentes.",
      rating: 5
    },
    {
      id: 3,
      name: "Thomas Martin",
      role: "Directeur, TechSolutions",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
      quote: "Nous avons confié la refonte complète de notre site internet et le résultat est impressionnant. Un site moderne, rapide et parfaitement fonctionnel qui a considérablement amélioré notre présence en ligne.",
      rating: 5
    },
  ];

  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, index) => (
      <Star 
        key={index} 
        className={`h-4 w-4 ${index < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <section id="testimonials" className="section bg-gradient-to-br from-blue-light to-pink-soft/30">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 title-gradient">Ce que disent mes clients</h2>
          <p className="text-lg text-gray-600">
            La satisfaction de mes clients est ma priorité absolue. 
            Voici quelques témoignages de personnes avec qui j'ai eu le plaisir de collaborer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id} 
              className="card-hover border-blue-soft/30 hover:border-pink-light/50 transition-all duration-500 animate-fade-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                
                <blockquote className="text-gray-600 italic">
                  "{testimonial.quote}"
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-pink-soft/30 to-blue-soft/30 p-8 rounded-lg animate-fade-up" style={{ animationDelay: '450ms' }}>
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4">Prêt à travailler ensemble ?</h3>
            <p className="text-lg text-gray-600 mb-6">
              Discutons de votre projet et de la façon dont je peux vous aider à créer une présence web exceptionnelle.
            </p>
            <Button asChild size="lg" className="bg-pink-light hover:bg-blue-primary text-white transition-colors duration-300">
              <a href="#contact">
                Contactez-moi maintenant
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};


export default Testimonials;