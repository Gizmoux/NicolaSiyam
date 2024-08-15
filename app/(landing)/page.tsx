import React from 'react';

import About from '../_sections/about';
import Description from '../_sections/description';
import Hero from '../_sections/hero';
import Footer from '../_sections/footer';

const LandingPage = () => {
	return (
		<div className="">
			<Hero />
			<About />
			<Description />
			<Footer />
		</div>
	);
};

export default LandingPage;
