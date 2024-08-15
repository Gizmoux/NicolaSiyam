'use client';
import React from 'react';
import Link from 'next/link';
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';

const navigation = [
	{
		item: 'Accueil',
	},
	{
		item: 'À propos',
	},
	{
		item: 'Description',
	},
	{
		item: 'Portfolio',
	},
	{
		item: 'Contact',
	},
	{
		item: 'Prix',
	},
];

export const Navbar = () => {
	return (
		<div className="flex items-center justify-center w-full pt-8 select-none">
			<NavigationMenu className="w-full max-w-[1200px] justify-between px-5 py-2">
				<NavigationMenuList>
					<NavigationMenuItem>
						<Link href="/" className="flex items-center space-x-2">
							<Logo />
							<h2 className="text-2xl font-bold">NPRDR</h2>
						</Link>
					</NavigationMenuItem>
				</NavigationMenuList>
				<NavigationMenuList className="flex justify-between items-center font-light space-x-14 text-xs">
					{navigation.map(link => {
						return (
							<div key="item">
								<NavigationMenuItem className="hover:underline cursor-pointer">
									{link.item}
								</NavigationMenuItem>
							</div>
						);
					})}
				</NavigationMenuList>
			</NavigationMenu>
		</div>
	);
};
