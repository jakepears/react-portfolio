/** @format */
import personalResume from '../assets/Jake_Pearson_Resume.pdf';

export default function Resume() {
	const proficiencies = [
		'JavaScript (ES6+)',
		'React',
		'Node.js',
		'Express.js',
		'HTML5',
		'CSS3',
		'SQL',
		'MongoDB',
		'RESTful API Design',
		'Git',
		// Add or remove skills as needed
	];

	return (
		<section className='container mx-auto p-6'>
			<h2 className='text-3xl font-bold mb-6'>Resume</h2>
			<div className='mb-8'>
				<a
					href={personalResume}
					download
					className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 inline-block'>
					Download Resume
				</a>
			</div>
			<div>
				<h3 className='text-2xl font-semibold mb-4'>Proficiencies</h3>
				<ul className='list-disc pl-5 grid grid-cols-1 md:grid-cols-2 gap-2'>
					{proficiencies.map((skill, index) => (
						<li key={index}>{skill}</li>
					))}
				</ul>
			</div>
		</section>
	);
}
