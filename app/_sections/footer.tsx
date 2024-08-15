import Image from 'next/image';
import Link from 'next/link';
import Balancer from 'react-wrap-balancer';

import { Section, Container } from '@/components/craft';
import Logo from '@/public/logo.png';

export default function Footer() {
	return (
		<footer className="not-prose border-t">
			<Section className="mt-0">
				<Container className="grid gap-6">
					<div className="grid gap-6">
						<div className="flex items-center gap-2">
							<Link href="/">
								<Image
									src={Logo}
									alt="Logo"
									width={36}
									height={36}
									className="transition-all hover:opacity-75 dark:invert"
								></Image>
							</Link>
							<p>
								<Balancer>NPRDR Web Agency</Balancer>
							</p>
						</div>
						<div className="mb-6 flex flex-col gap-4 text-sm text-muted-foreground underline underline-offset-4 md:mb-0 md:flex-row">
							<Link href="/privacy-policy">Privacy Policy</Link>
							<Link href="/terms-of-service">Terms of Service</Link>
							<Link href="/cookie-policy">Cookie Policy</Link>
						</div>
						<p className="text-muted-foreground">
							© <a href="https://github.com/">NPRDR</a>. All rights reserved.
							2024-present.
						</p>
					</div>
				</Container>
			</Section>
		</footer>
	);
}
