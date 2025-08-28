"use client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function PolitiqueConfidentialite() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <div className="mb-6">
        <Link
          href="/"
          className="inline-flex items-center text-[#FFAFCA] hover:underline"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Retour au site
        </Link>
      </div>
      <h1 className="text-3xl font-bold mb-6">Politique de confidentialité</h1>

      <p className="mb-4">
        Cette politique de confidentialité décrit comment les données personnelles sont collectées, utilisées et protégées sur ce site.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Collecte des données</h2>
      <p className="mb-4">
        Nous collectons uniquement les informations que vous nous fournissez volontairement via les formulaires (ex. : nom, prénom, adresse e-mail).
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Utilisation des données</h2>
      <p className="mb-4">
        Vos données sont utilisées uniquement dans le cadre de la prise de contact ou de la prestation demandée. Elles ne sont jamais cédées ni vendues.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Cookies</h2>
      <p className="mb-4">
        Ce site utilise des cookies strictement nécessaires au bon fonctionnement du site. Aucun cookie de suivi ou publicitaire n&apos;est utilisé.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Droits des utilisateurs</h2>
      <p className="mb-4">
        Vous pouvez accéder, modifier ou supprimer vos données personnelles à tout moment en envoyant un email à : <a href="mailto:contact@nstudioweb.fr" className="text-blue-600 underline">contact@nstudioweb.fr</a>.
      </p>

      <p className="text-sm text-gray-500 mt-8">Dernière mise à jour : 22/05/2025</p>
    </div>
  );
}