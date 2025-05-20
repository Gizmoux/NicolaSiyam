import React from "react";

const About = () => {
  return (
    <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8" id="about">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          À propos de NicolaSiyam Agency
        </h2>
        <div className="space-y-6 text-gray-700">
          <p className="text-lg">
            Bienvenue chez NicolaSiyam Agency, une aventure portée par deux
            passionnés de développement web : Siyam et Nicolas.
          </p>
          <p className="text-lg">
            Nous avons fondé cette agence en 2024 avec une conviction simple :
            le web est un terrain de jeu infini pour l&apos;innovation et la
            création, à condition d&apos;y mettre du cœur et de la rigueur.
            Siyam, diplômé d&apos;Epitech, apporte à l&apos;agence une solide
            expertise technique acquise au fil d&apos;un parcours exigeant. Son
            regard structuré, son expérience en développement logiciel et sa
            capacité à penser les projets dans leur globalité sont des atouts
            majeurs pour garantir des solutions robustes et pérennes. Nicolas,
            développeur autodidacte passionné, a affûté ses compétences à
            travers des projets concrets, une veille constante, et une volonté
            farouche d’apprendre. Son approche terrain, orientée résultats et
            centrée sur l’utilisateur, complète parfaitement la vision technique
            de Siyam.
          </p>
          <p className="text-lg">
            Chez NicolaSiyam Agency, nous mettons notre complémentarité au
            service de la création de sites web et d’applications modernes,
            performants et sur mesure. Que vous soyez une start-up en quête
            d’une première vitrine digitale, une PME souhaitant refondre son
            site, ou une grande entreprise avec des besoins plus complexes, nous
            vous accompagnons avec implication, transparence et créativité.
            Spécialisés dans des technologies de pointe comme Next.js, nous
            concevons chaque projet comme une expérience unique, avec un seul
            objectif : donner vie à vos idées et sublimer votre présence en
            ligne.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
