/** @format */

import Project from './Project';

export default function Portfolio() {
	const projects = [
		{
			title: 'Sports Blog',
			image: '/assets/imgs/pokemonOnline.png',
			deployedLink: 'https://sporty-blog-2877962c9924.herokuapp.com/',
			githubLink: 'https://github.com/jakepears/sportsBlog',
		},
		{
			title: 'Pokemon Simulator',
			image: '/path/to/project2-image.jpg',
			deployedLink: '#',
			githubLink: 'https://github.com/jakepears/pokemonSimulator',
		},
		{
			title: 'Weather App',
			image: '/path/to/project2-image.jpg',
			deployedLink: '#',
			githubLink: 'https://github.com/jakepears/weatherApp',
		},
		{
			title: 'Note Taker App',
			image: '/path/to/project2-image.jpg',
			deployedLink: '#',
			githubLink: 'https://github.com/jakepears/noteTakerApp',
		},
	];

	return (
		<section className='container mx-auto p-6 '>
			<h2 className='text-3xl font-bold mb-6'>Portfolio</h2>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
				{projects.map((project, index) => (
					<Project key={index} {...project} />
				))}
			</div>
		</section>
	);
}
