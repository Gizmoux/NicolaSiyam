import Image from 'next/image';
import bgImage from '@/public/coworking.jpg';
export const BackgroundImage = () => {
	return (
		<Image
			src={bgImage}
			alt="background"
			placeholder="blur"
			fill
			sizes="100vw"
			className="object-cover z-[-1] opacity-40"
		/>
	);
};
