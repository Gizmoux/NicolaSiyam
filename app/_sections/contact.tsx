import React from "react";
import Link from "next/link";

const Contact = () => {
  return (
    <section className="bg-blue-50 py-16 px-4 sm:px-6 lg:px-8" id="contact">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-8">
          Contactez NicolaSiyam Agency
        </h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Email</h3>
            <Link
              href="mailto:contact@ndragency.com"
              className="text-lg text-gray-700 hover:text-blue-700 transition duration-300"
            >
              contact@ndragency.com
            </Link>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-700 mb-2">
              Téléphone
            </h3>
            <Link
              href="tel:+33123456789"
              className="text-lg text-gray-700 hover:text-blue-700 transition duration-300"
            >
              +33 1 23 45 67 89
            </Link>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-700 mb-4">
              Prenez rendez-vous
            </h3>
            <Link
              href="https://calendly.com/ndragency"
              className="inline-block bg-blue-700 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Réserver un créneau
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
