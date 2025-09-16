"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Send } from "lucide-react";
import toast from "react-hot-toast";

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const result = await res.json();

      if (result.success) {
        toast.success("🎉 Message envoyé avec succès ! 📬 Nous vous répondrons sous 24 heures");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        toast.error(result.error ?? "❌ Erreur lors de l’envoi du message.");
      }
    } catch (err) {
      toast.error("🚨 Une erreur est survenue. Veuillez réessayer");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section bg-gradient-to-b from-teal-balanced/30 to-teal-dark/90">
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
            Une idée de projet ? Une question ? N&apos;hésitez pas à nous contacter.
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
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Nom
                      </label>
                      <Input
                        id="name"
                        placeholder="Votre nom"
                        required
                        className="rounded-[32px]"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
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
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-teal-medium to-cyan-medium hover:from-cyan-medium hover:to-blue-bright text-white flex items-center justify-center gap-2 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md rounded-[32px]"
                  >
                    <Send className="w-4 h-4" />
                    {loading ? "Envoi..." : "Envoyer le message"}
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
            <h3 className="text-2xl font-semibold mb-4">Parlons de votre projet</h3>
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="bg-blue-soft/30 p-3 rounded-full mr-4">
                  <Mail className="h-5 w-5 text-blue-primary" />
                </div>
                <a
                  href="mailto:contact@nstudioweb.fr"
                  className="text-gray-900 hover:text-pink-light transition-colors"
                >
                  contact@nstudioweb.fr
                </a>
              </div>

              <div className="flex items-center">
                <div className="bg-pink-soft/30 p-3 rounded-full mr-4">
                  <Phone className="h-5 w-5 text-pink-light" />
                </div>
                <a
                  href="tel:+33682461876"
                  className="text-gray-900 hover:text-pink-light transition-colors"
                >
                  +33 6 82 46 18 76
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
