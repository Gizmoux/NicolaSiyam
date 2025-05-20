"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="w-full max-w-[1200px] flex items-center">
      <div className="w-full flex justify-between items-center px-8">
        <motion.div
          className="flex flex-col space-y-8 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="font-bold text-6xl leading-tight text-gray-900">
            Transformez votre vision en
            <span className="text-blue-700"> réalité digitale</span>
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            Chez NicolaSiyam Agency, nous créons des expériences web innovantes
            qui captent lattention, engagent votre audience et propulsent votre
            entreprise vers de nouveaux sommets. De la conception à la mise en
            ligne, faites confiance à notre expertise pour donner vie à vos
            ambitions numériques.
          </p>
          <div className="flex gap-6 pt-4 pb-4">
            <Button
              className="bg-blue-700 hover:bg-blue-800 text-white"
              size="lg"
            >
              Demandez votre devis
            </Button>
            <Button
              className="bg-blue-700 hover:bg-blue-800 text-white"
              size="lg"
            >
              Contactez-nous
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default Hero;
