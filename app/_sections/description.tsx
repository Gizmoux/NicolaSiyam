// React and Next.js imports
import Link from 'next/link';

// Third-party library imports
import Balancer from 'react-wrap-balancer';

// UI component imports
import { Section, Container } from '@/components/craft';

// Icon imports
import { ArrowRight, Palette, Code, Search, BarChart } from 'lucide-react';

type FeatureText = {
	icon: JSX.Element;
	title: string;
	description: string;
	href?: string;
	cta?: string;
};

const featureText: FeatureText[] = [
	{
		icon: <Palette className="h-6 w-6" />,
		title: 'Design Web',
		href: '/',
		description:
			"Création d'interfaces modernes et attrayantes, adaptées à votre image de marque.",
		cta: 'En savoir plus',
	},
	{
		icon: <Code className="h-6 w-6" />,
		title: 'Développement',
		href: '/',
		description:
			'Codage sur mesure de sites web performants et responsives avec les dernières technologies.',
		cta: 'En savoir plus',
	},
	{
		icon: <Search className="h-6 w-6" />,
		title: 'SEO',
		href: '/',
		description:
			"Optimisation pour les moteurs de recherche afin d'améliorer votre visibilité en ligne.",
		cta: 'En savoir plus',
	},
	{
		icon: <BarChart className="h-6 w-6" />,
		title: 'Analyse et Maintenance',
		href: '/',
		description:
			'Suivi des performances, mises à jour régulières et support technique continu.',
		cta: 'En savoir plus',
	},
];

const Feature = () => {
	return (
		<Section className="border-b">
			<Container className="not-prose">
				<div className="flex flex-col gap-6">
					<h3 className="text-4xl">
						<Balancer>
							Des solutions web complètes pour votre présence en ligne
						</Balancer>
					</h3>
					<h4 className="text-2xl font-light opacity-70">
						<Balancer>
							Du design à la maintenance, en passant par le développement et le
							SEO, nous créons des sites web performants et attractifs
						</Balancer>
					</h4>

					<div className="mt-6 grid gap-6 md:mt-12 md:grid-cols-4">
						{featureText.map(
							({ icon, title, description, href, cta }, index) => (
								<Link
									href={`${href}`}
									className="flex flex-col hover:bg-blue-800 justify-between gap-6 rounded-lg border p-6 transition-all hover:-mt-2 hover:mb-2"
									key={index}
								>
									<div className="grid gap-4">
										{icon}
										<h4 className="text-xl text-primary">{title}</h4>
										<p className="text-base opacity-75">{description}</p>
									</div>
									{cta && (
										<div className="flex h-fit items-center text-sm font-semibold">
											<p>{cta}</p> <ArrowRight className="ml-2 h-4 w-4" />
										</div>
									)}
								</Link>
							)
						)}
					</div>
				</div>
			</Container>
		</Section>
	);
};

export default Feature;
