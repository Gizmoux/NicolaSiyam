/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "AriMayi",
      role: "Organisme de formation",
      avatar:
        "/img/samir.webp",
      quote:
        "Un travail exceptionnel pour notre site vitrine. Le design est exactement ce que nous recherchions - élégant, professionnel et représentant parfaitement notre identité. La collaboration a été fluide et agréable du début à la fin.",
      rating: 5,
    },
    {
      id: 2,
      name: "Nathan",
      role: "Streamer & Youtuber",
      avatar:
        "/img/nathou.webp",
      quote:
        "Un travail rapide, soigné et parfaitement adapté à mes besoins. Mon site vitrine reflète exactement mon identité de streamer. Merci !",
      rating: 5,
    },
  ];

  const renderStars = (rating: number) => {
    return Array(5)
      .fill(0)
      .map((_, index) => (
        <Star
          key={index}
          className={`h-4 w-4 ${
            index < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
          }`}
        />
      ));
  };

  return (
    // <section
    //   id="testimonials"
    //   className="section bg-gradient-to-br from-cyan-medium/20 to-teal-balanced/30"
    // >
      <section
      id="testimonials"
      className="section bg-gradient-to-b from-navy-deep/5 to-teal-balanced/30"
    >
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 title-gradient">
            Ce que disent nos clients
          </h2>
          <p className="text-lg text-gray-600">
            La satisfaction de nos clients est notre priorité absolue. Voici
            quelques témoignages de personnes avec qui nous avons eu le plaisir
            de collaborer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.id}
              className="card-hover border-cyan-medium/30 hover:border-teal-medium/50 rounded-[32px] transition-all duration-500 animate-fade-up"
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
                  {testimonial.quote}
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>

        <div
          className="mt-16 bg-gradient-to-r from-teal-balanced/30 to-cyan-medium/30 p-8 rounded-lg animate-fade-up"
          style={{ animationDelay: "450ms" }}
        >
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4">
              Prêt à travailler ensemble ?
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Discutons de votre projet et de la façon dont nous pouvons vous
              aider à créer une présence web exceptionnelle.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-teal-medium to-cyan-medium hover:from-cyan-medium hover:to-blue-bright text-white transition-colors duration-300"
            >
              <a href="#contact">Contactez-nous maintenant</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
