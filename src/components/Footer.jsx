/** @format */

export default function Footer() {
	return (
		<footer className='bg-gray-800 text-white p-4'>
			<div className='container mx-auto flex justify-center space-x-4'>
				<a
					href='https://github.com/yourusername'
					target='_blank'
					rel='noopener noreferrer'
					className='hover:text-gray-300 transition-colors duration-300'>
					GitHub
				</a>
				<a
					href='https://www.linkedin.com/in/yourusername'
					target='_blank'
					rel='noopener noreferrer'
					className='hover:text-gray-300 transition-colors duration-300'>
					LinkedIn
				</a>
			</div>
		</footer>
	);
}
