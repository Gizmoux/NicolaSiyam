/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

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
    {
      id: 3,
      name: "Ounkache",
      role: "Producteur de musique et organisateur d'évènements musicaux",
      avatar:
        "/img/black.webp",
      quote:
        "J'avais besoin d'une application qui me permettent de scanner les QR code des participants à mes évènements musicaux. L'application est simple à utiliser et le back-office web avec les statistiques et les rapports sont très pratiques.",
      rating: 5,
    },
    {
      id: 4,
      name: "Better Be Wild",
      role: "Directeur de production",
      avatar:
        "/img/black.webp",
      quote:
        "J'avais besoin d'un site vitrine pour mon activité de réalisateur vidéo. L'interface administrateur me permet d'être autonome et gérer le contenu du site. Le design est moderne et correspond à mon univers, mes demandes pointilleuses sur le design ont été prises en compte et le résultat est parfait.",
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

  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  return (
    <section id="testimonials" className="section bg-gradient-to-b from-navy-deep/5 to-teal-balanced/30 w-full overflow-hidden">
      <div className="container-custom">
        {/* Header */}
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

        {/* Desktop: 3 par 3 */}
        <div className="hidden md:block relative max-w-7xl mx-auto">
          <Carousel
            plugins={[plugin.current]}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-6">
              {testimonials.map((testimonial) => (
                <CarouselItem
                  key={testimonial.id}
                  className="pl-6 md:basis-1/3"
                >
                  <Card className="card-hover border-cyan-medium/30 hover:border-teal-medium/50 rounded-[32px] transition-all duration-500 h-full">
                    <CardContent className="pt-6">
                      <div className="flex items-center mb-4">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full object-cover mr-4"
                        />
                        <div>
                          <h3 className="font-semibold">{testimonial.name}</h3>
                          <p className="text-sm text-gray-600">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                      <div className="flex mb-4">
                        {renderStars(testimonial.rating)}
                      </div>
                      <blockquote className="text-gray-600 italic text-sm leading-relaxed">
                        &ldquo;{testimonial.quote}&rdquo;
                      </blockquote>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-800 rounded-full shadow-lg" />
            <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-800 rounded-full shadow-lg" />
          </Carousel>
        </div>

        {/* Mobile: 1 par 1 */}
        <div className="md:hidden relative w-full">
          <Carousel
            plugins={[plugin.current]}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-full"
          >
            <CarouselContent className="-ml-0">
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="pl-0">
                  <Card className="card-hover border-cyan-medium/30 hover:border-teal-medium/50 rounded-[32px] transition-all duration-500 mx-2">
                    <CardContent className="pt-6">
                      <div className="flex items-center mb-4">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full object-cover mr-4"
                        />
                        <div>
                          <h3 className="font-semibold">{testimonial.name}</h3>
                          <p className="text-sm text-gray-600">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                      <div className="flex mb-4">
                        {renderStars(testimonial.rating)}
                      </div>
                      <blockquote className="text-gray-600 italic text-sm leading-relaxed">
                        &ldquo;{testimonial.quote}&rdquo;
                      </blockquote>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="absolute left-1 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-800 rounded-full shadow-lg h-8 w-8" />
            <CarouselNext className="absolute right-1 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-800 rounded-full shadow-lg h-8 w-8" />
          </Carousel>
        </div>

        {/* Call to Action */}
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
              className="bg-gradient-to-r from-teal-medium to-cyan-medium hover:from-cyan-medium hover:to-blue-bright text-white transition-colors duration-300 px-6 py-4 text-sm md:text-base whitespace-normal"
            >
              <a href="#contact" className="text-center">Contactez-nous maintenant</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
