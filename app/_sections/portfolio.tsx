import React from 'react';
import Link from 'next/link';

const Portfolio = () => {
	return (
		<section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
			<div className="max-w-3xl mx-auto text-center">
				<h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
					Notre Portfolio
				</h2>
				<div className="mt-6 text-xl text-gray-500 space-y-4">
					<p>
						Chez NdR Agency, nous sommes fiers de notre travail et des résultats
						que nous obtenons pour nos clients. Notre portfolio témoigne de
						notre expertise en développement web avec Next.js et de notre
						capacité à créer des solutions sur mesure qui répondent aux besoins
						uniques de chaque projet.
					</p>
					<p>
						Nous avons eu le privilège de travailler avec une variété de
						clients, allant des startups innovantes aux grandes entreprises
						établies. Chaque projet dans notre portfolio représente un défi
						relevé avec succès, une vision transformée en réalité numérique, et
						un client satisfait.
					</p>
				</div>
				<div className="mt-8">
					<h3 className="text-2xl font-bold text-gray-900">
						Découvrez nos réalisations
					</h3>
					<div className="mt-4">
						<Link
							href="/portfolio"
							className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
						>
							Voir notre portfolio
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Portfolio;
