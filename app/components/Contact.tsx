"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Mail, Phone, Send, CalendarCheck } from "lucide-react";

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);

  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   // Simulation d'envoi de formulaire
  //   toast({
  //     title: "Message envoyé !",
  //     description:
  //       "Merci pour votre message. Nous vous répondrons  dans les plus brefs délais.",
  //   });
  // };

  return (
    // <section
    //   id="contact"
    //   className="section bg-gradient-to-b from-blue-light/10 to-white"
    // >
      <section
      id="contact"
      className="section bg-gradient-to-b from-teal-balanced/30 to-teal-dark/90"
    >
      <div className="container-custom">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact</h2>
          <p className="text-lg text-gray-600">
            Une idée de projet ? Une question ? N&apos;hésitez pas à nous
            contacter, nous vous répondrons dans les plus brefs délais.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="shadow-lg rounded-[32px]">
              <CardContent className="pt-6">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Nom
                      </label>
                      <Input id="name" placeholder="Votre nom" required className="rounded-[32px]"/>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="votre@email.com"
                        required
                        className="rounded-[32px]"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Décrivez votre projet ou votre demande..."
                      rows={4}
                      required
                      className="resize-none rounded-[18px]"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-teal-medium to-cyan-medium hover:from-cyan-medium hover:to-blue-bright text-white flex items-center justify-center gap-2 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md rounded-[32px]"
                  >
                    <Send className="w-4 h-4" />
                    Envoyer le message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-4">
              Parlons de votre projet
            </h3>
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="bg-blue-soft/30 p-3 rounded-full mr-4">
                  <Mail className="h-5 w-5 text-blue-primary" />
                </div>
                <a
                  href="mailto:contact.nstudioweb@gmail.com"
                  className="text-gray-700 hover:text-pink-light transition-colors"
                >
                  contact.nstudioweb@gmail.com
                </a>
              </div>

              <div className="flex items-center">
                <div className="bg-pink-soft/30 p-3 rounded-full mr-4">
                  <Phone className="h-5 w-5 text-pink-light" />
                </div>
                <a
                  href="tel:+336682461876"
                  className="text-gray-700 hover:text-pink-light transition-colors"
                >
                  +33 6 82 46 18 76
                </a>
              </div>
            </div>

            <Drawer open={isOpen} onOpenChange={setIsOpen}>
              {/* <DrawerTrigger asChild>
                <Button className="w-full mt-4 bg-gradient-to-r from-pink-light to-blue-primary text-white flex items-center justify-center gap-2 hover:opacity-90 hover:-translate-y-0.5 hover:shadow-md transition-all duration-200">
                  <CalendarCheck className="w-4 h-4" />
                  Prendre rendez-vous
                </Button>
              </DrawerTrigger> */}
              <DrawerContent>
                <div className="mx-auto w-full max-w-sm">
                  <DrawerHeader>
                    <DrawerTitle>Consultation gratuite</DrawerTitle>
                    <DrawerDescription>
                      Réservez un appel de 30 minutes pour discuter de votre
                      projet
                    </DrawerDescription>
                  </DrawerHeader>
                  <div className="p-4 pb-0">
                    <div className="flex flex-col space-y-4 pb-4">
                      <Input placeholder="Votre nom" />
                      <Input placeholder="Votre email" type="email" />
                      <Input placeholder="Votre téléphone" type="tel" />
                      <Textarea placeholder="Détails de votre projet" />
                      <Button
                        onClick={() => {
                          setIsOpen(false);
                          // toast({
                          //   title: "Rendez-vous confirmé !",
                          //   description:
                          //     "Nous vous contacterons prochainement pour confirmer l'horaire.",
                          // });
                        }}
                      >
                        Confirmer le rendez-vous
                      </Button>
                    </div>
                  </div>
                </div>
              </DrawerContent>
            </Drawer>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
