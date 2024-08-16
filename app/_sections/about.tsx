import React from 'react';

const About = () => {
	return (
		<section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8" id="about" >
			<div className="max-w-3xl mx-auto">
				<h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
					À propos de NdR Agency
				</h2>
				<div className="space-y-6 text-gray-700">
					<p className="text-lg">
						Bienvenue chez NdR Agency, votre partenaire de confiance
						dans lunivers du développement web. Fondée en 2024, notre agence
						sest donné pour mission de transformer vos idées en expériences
						numériques exceptionnelles.
					</p>
					<p className="text-lg">
						Spécialisés dans les technologies de pointe comme Next.js, nous
						combinons créativité et expertise technique pour concevoir des sites
						web et des applications qui se démarquent. Notre équipe passionnée
						sengage à offrir des solutions sur mesure, performantes et
						esthétiquement attrayantes, qui répondent parfaitement aux besoins
						uniques de chaque client.
					</p>
					<p className="text-lg">
						Chez NdR Agency, nous croyons que chaque projet est une
						opportunité de repousser les limites de linnovation. Que vous soyez
						une start-up ambitieuse ou une entreprise établie, nous sommes là
						pour donner vie à votre vision et propulser votre présence en ligne
						vers de nouveaux sommets.
					</p>
				</div>
			</div>
		</section>
	);
};

export default About;
