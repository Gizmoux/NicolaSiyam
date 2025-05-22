"use client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function MentionsLegales() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12 relative">
      <div className="mb-6">
        <Link
          href="/"
          className="inline-flex items-center text-[#FFAFCA] hover:underline"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Retour au site
        </Link>
      </div>
      <h1 className="text-3xl font-bold mb-6">Mentions légales</h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Éditeur du site</h2>
        <p className="mb-2">
          <strong>NS Studio Web</strong> — Nom commercial désignant une collaboration entre deux auto-entrepreneurs :
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Nicolas</strong><br />
            Micro-entrepreneur<br />
            SIRET : 93202273400010<br />
            Adresse : 61 boulevard Riechelieu, 92500 Rueil-Malmaison
          </li>
          <li>
            <strong>Siyam MOHAMED DHOIFFIR</strong><br />
            Micro-entrepreneur<br />
            SIRET : 94465897000016<br />
            Adresse : 57 rue de la Colonie, 75013 Paris
          </li>
        </ul>
        <p className="mt-4">
          📧 contact@nsstudioweb.com<br />
          📱 Numéro de contact (si applicable)
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Hébergement</h2>
        <p>
          Hébergeur : Vercel Inc.<br />
          Adresse : 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis<br />
          Site : <a href="https://vercel.com" className="text-blue-600 underline">https://vercel.com</a>
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Propriété intellectuelle</h2>
        <p>
          Le contenu (textes, images, graphismes, logo, etc.) est la propriété de NS Studio Web, sauf mention contraire.
          Toute reproduction ou utilisation sans autorisation est interdite.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Responsabilité</h2>
        <p>
          NS Studio Web met tout en œuvre pour fournir des informations fiables et à jour. Cependant, la responsabilité
          de l’éditeur ne saurait être engagée en cas d’erreur ou d'omission.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Collecte de données</h2>
        <p>
          Les informations collectées via le formulaire de contact sont utilisées uniquement dans le cadre de la relation
          commerciale. Conformément à la loi « Informatique et Libertés », vous disposez d’un droit d’accès, de rectification
          et de suppression.
        </p>
      </section>
    </main>
  );
}