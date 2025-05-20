"use client";
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare } from "lucide-react";
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulation d'envoi de formulaire
    toast({
      title: "Message envoyé !",
      description: "Merci pour votre message. Je vous répondrai dans les plus brefs délais.",
    });
  };

  return (
    <section id="contact" className="section bg-gradient-to-b from-blue-light/10 to-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact</h2>
          <p className="text-lg text-gray-600">
            Une idée de projet ? Une question ? N'hésitez pas à me contacter, 
            je vous répondrai dans les plus brefs délais.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div>
            <Card>
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Nom
                      </label>
                      <Input id="name" placeholder="Votre nom" required />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input id="email" type="email" placeholder="votre@email.com" required />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Sujet
                    </label>
                    <Input id="subject" placeholder="Sujet de votre message" required />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Décrivez votre projet ou votre demande..."
                      rows={6}
                      required
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-blue-primary hover:bg-blue-sky">
                    Envoyer le message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Parlons de votre projet</h3>
              <p className="text-gray-600 mb-6">
                Que vous ayez besoin d'un nouveau site, d'une refonte ou d'une solution sur mesure,
                je serais ravi d'échanger avec vous pour comprendre vos besoins et vous proposer
                la meilleure approche.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-soft/30 p-3 rounded-full mr-4">
                    <Mail className="h-5 w-5 text-blue-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <p className="text-gray-600">contact@studio-web.fr</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-pink-soft/30 p-3 rounded-full mr-4">
                    <MessageSquare className="h-5 w-5 text-pink-light" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Consultation</h4>
                    <p className="text-gray-600">Prenez rendez-vous pour un appel de 30 minutes pour discuter de votre projet</p>
                  </div>
                </div>
              </div>
            </div>
            
            <Card className="bg-gradient-to-br from-blue-primary to-blue-sky text-white">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-3">Besoin d'une réponse rapide ?</h3>
                <p className="mb-4">
                  Pour les projets urgents ou les questions nécessitant une attention immédiate,
                  n'hésitez pas à m'appeler directement.
                </p>
                <a
                  href="tel:+33600000000"
                  className="block text-xl font-semibold underline underline-offset-4"
                >
                  +33 6 00 00 00 00
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};


export default Contact;