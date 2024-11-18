import React from "react";

interface Feature {
  text: string;
}

interface PriceCardProps {
  title: string;
  price: string;
  features: Feature[];
  recommended: boolean;
}

interface PriceData extends PriceCardProps {}

const PriceCard: React.FC<PriceCardProps> = ({
  title,
  price,
  features,
  recommended,
}) => (
  <div
    className={`bg-white rounded-lg shadow-lg overflow-hidden ${
      recommended ? "border-2 border-blue-700" : ""
    }`}
  >
    {recommended && (
      <div className="bg-blue-700 text-white text-center py-2 font-semibold">
        Recommandé
      </div>
    )}
    <div className="p-6">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
      <p className="text-4xl font-extrabold text-blue-700 mb-6">{price}€</p>
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <svg
              className="h-5 w-5 text-green-500 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
            {feature.text}
          </li>
        ))}
      </ul>
      <button className="w-full bg-blue-700 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
        Choisir ce plan
      </button>
    </div>
  </div>
);

const PriceSection: React.FC = () => {
  const prices: PriceData[] = [
    {
      title: "Site Vitrine",
      price: "999",
      features: [
        { text: "Design personnalisé" },
        { text: "Jusqu'à 5 pages" },
        { text: "Formulaire de contact" },
        { text: "Optimisation SEO de base" },
        { text: "Responsive design" },
      ],
      recommended: false,
    },
    {
      title: "Site E-commerce",
      price: "2499",
      features: [
        { text: "Jusqu'à 100 produits" },
        { text: "Système de paiement sécurisé" },
        { text: "Gestion des stocks" },
        { text: "Optimisation SEO avancée" },
        { text: "Support technique 30 jours" },
      ],
      recommended: true,
    },
    {
      title: "Application Web",
      price: "2999",
      features: [
        { text: "Fonctionnalités sur mesure" },
        { text: "Intégration API" },
        { text: "Base de données personnalisée" },
        { text: "Tableau de bord admin" },
        { text: "Support technique 60 jours" },
      ],
      recommended: false,
    },
  ];

  return (
    <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8" id="price">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
          Nos Offres
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {prices.map((price, index) => (
            <PriceCard key={index} {...price} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PriceSection;
