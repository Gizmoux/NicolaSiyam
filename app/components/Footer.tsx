"use client";
import React from 'react';
import { Separator } from "@/components/ui/separator";
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8">
          <div className="md:col-span-2">
            <h3 className="font-playfair font-bold text-xl mb-4">
              <span className="title-gradient">NS Studio Web</span>
            </h3>
            <p className="text-gray-600 mb-4 max-w-md">
              Conception et développement de sites web professionnels, 
              élégants et performants pour votre entreprise.
            </p>
            <div className="flex space-x-4">
              {/* SVG LinkedIN */}
              {/* <a href="#" className="text-gray-500 hover:text-blue-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a> */}
              {/* SVG Twitter */}
              {/* <a href="#" className="text-gray-500 hover:text-blue-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z"/>
                </svg>
              </a> */}
              {/* SVG Youtube */}
              {/* <a href="#" className="text-gray-500 hover:text-blue-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.628 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.441 16.892c-2.102.144-6.784.144-8.883 0-2.276-.156-2.541-1.27-2.558-4.892.017-3.629.285-4.736 2.558-4.892 2.099-.144 6.782-.144 8.883 0 2.277.156 2.541 1.27 2.559 4.892-.018 3.629-.285 4.736-2.559 4.892zm-6.441-7.234l4.917 2.338-4.917 2.346v-4.684z"/>
                </svg>
              </a> */}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4">Liens Rapides</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-600 hover:text-blue-primary transition-colors">À propos</a>
              </li>
              <li>
                <a href="#services" className="text-gray-600 hover:text-blue-primary transition-colors">Services</a>
              </li>
              <li>
                <a href="#projects" className="text-gray-600 hover:text-blue-primary transition-colors">Projets</a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-600 hover:text-blue-primary transition-colors">Témoignages</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-600 hover:text-blue-primary transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-600 hover:text-blue-primary transition-colors">Site Vitrine</a>
              </li>
              <li>
                <a href="#services" className="text-gray-600 hover:text-blue-primary transition-colors">E-commerce</a>
              </li>
              <li>
                <a href="#services" className="text-gray-600 hover:text-blue-primary transition-colors">Application Web</a>
              </li>
              <li>
                <a href="#services" className="text-gray-600 hover:text-blue-primary transition-colors">Refonte de Site</a>
              </li>
              <li>
                <a href="#services" className="text-gray-600 hover:text-blue-primary transition-colors">SEO</a>
              </li>
            </ul>
          </div>
        </div>
        
        <Separator className="bg-gray-200" />
        
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>&copy; {currentYear} NS Studio Web. Tous droits réservés.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
          <Link href="/mentions-legales" className="hover:text-blue-primary transition-colors">
            Mentions légales
          </Link>
          <Link href="/confidentialite" className="hover:text-blue-primary transition-colors">
            Politique de confidentialité
          </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;