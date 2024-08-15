'use client';
import Link from 'next/link';

export function Footer() {
	return (
		<footer className="bg-muted py-12 text-muted-foreground">
			<div className="container grid grid-cols-1 gap-12 md:grid-cols-3">
				<div className="flex flex-col items-start gap-4">
					<Link href="#" className="flex items-center gap-2" prefetch={false}>
						<MountainIcon className="h-6 w-6" />
						<span className="text-xl font-bold">NdR Agency</span>
					</Link>
					<p className="max-w-[300px] text-sm">
						NdR is a leading web agency that specializes in creating beautiful
						and functional websites for businesses of all sizes.
					</p>
				</div>
				<div className="grid grid-cols-2 gap-8">
					<div className="grid gap-2">
						<h4 className="text-sm font-bold uppercase">Services</h4>
						<Link href="#" className="text-sm hover:underline" prefetch={false}>
							Web Design
						</Link>
						<Link href="#" className="text-sm hover:underline" prefetch={false}>
							Web Development
						</Link>
						<Link href="#" className="text-sm hover:underline" prefetch={false}>
							Digital Marketing
						</Link>
						<Link href="#" className="text-sm hover:underline" prefetch={false}>
							Branding
						</Link>
					</div>
					<div className="grid gap-2">
						<h4 className="text-sm font-bold uppercase">Company</h4>
						<Link href="#" className="text-sm hover:underline" prefetch={false}>
							About
						</Link>
						<Link href="#" className="text-sm hover:underline" prefetch={false}>
							Team
						</Link>
						<Link href="#" className="text-sm hover:underline" prefetch={false}>
							Careers
						</Link>
						<Link href="#" className="text-sm hover:underline" prefetch={false}>
							Contact
						</Link>
					</div>
				</div>
				<div className="grid gap-2">
					<h4 className="text-sm font-bold uppercase">Contact</h4>
					<p className="text-sm">
						11 rue Gazan, Paris 14e
						<br />
						Phone: 0642424242
						<br />
						Email: contact@ndr.com
					</p>
					<div className="flex gap-4">
						<Link
							href="#"
							className="text-muted-foreground hover:text-foreground"
							prefetch={false}
						>
							<TwitterIcon className="h-5 w-5" />
						</Link>
						<Link
							href="#"
							className="text-muted-foreground hover:text-foreground"
							prefetch={false}
						>
							<LinkedinIcon className="h-5 w-5" />
						</Link>
						<Link
							href="#"
							className="text-muted-foreground hover:text-foreground"
							prefetch={false}
						>
							<GitlabIcon className="h-5 w-5" />
						</Link>
					</div>
				</div>
			</div>
			<div className="mt-12 border-t pt-6 text-center text-xs">
				<p>&copy; 2024 ndr. All rights reserved.</p>
			</div>
		</footer>
	);
}

function GitlabIcon(props: any) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="m22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.42.42 0 0 0-.1-.18.38.38 0 0 0-.26-.08.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83Z" />
		</svg>
	);
}

function LinkedinIcon(props: any) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
			<rect width="4" height="12" x="2" y="9" />
			<circle cx="4" cy="4" r="2" />
		</svg>
	);
}

export function MountainIcon(props: any) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="m8 3 4 8 5-5 5 15H2L8 3z" />
		</svg>
	);
}

function TwitterIcon(props: any) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
		</svg>
	);
}
