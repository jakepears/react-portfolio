/** @format */
import Selfie from '../assets/imgs/selfie.jpg';

export default function AboutMe() {
	return (
		<section className='container mx-auto p-6 flex justify-center min-h-screen pt-12'>
			<h2 className='text-3xl font-bold p-8 text-center'>About Me</h2>
			<div className='flex flex-col md:flex-row items-center md:items-start gap-6'>
				<img
					src={Selfie}
					alt='Jake Pearson '
					className='w-64 h-64 rounded-full object-cover betterShadow'
				/>
				<div className='flex-1 text-center md:text-xl sm:text-sm'>
					<p className='mb-4'>
						Hello! I&apos;m Jake Pearson, a passionate web developer with a
						focus on creating responsive and user-friendly applications. With a
						background in frontend, I bring a unique perspective to every
						project I work on.
					</p>
					<p className='mb-4'>
						My journey in web development started from seeing a tiktok of a web
						developer and what they were able to create. Since then, I&apos;ve
						honed my skills in technologies like React, Node.js, and MongoDB.
					</p>
					<p>
						When I&apos;m not coding, you can find me bouldering or hiking. I
						believe in continuous learning and am always excited to take on new
						challenges in the ever-evolving world of web development.
					</p>
				</div>
			</div>
		</section>
	);
}
