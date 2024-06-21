/** @format */

import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Project({ title, image, deployedLink, githubLink }) {
	return (
		<div className='bg-white shadow-md rounded-lg overflow-hidden'>
			<img src={image} alt={title} className='w-full h-48 object-cover' />
			<div className='p-4'>
				<h3 className='text-xl font-semibold mb-2'>{title}</h3>
				<div className='flex justify-between'>
					{deployedLink.startsWith('http') ? (
						<a
							href={deployedLink}
							target='_blank'
							rel='noopener noreferrer'
							className='text-blue-500 hover:underline'>
							View Project
						</a>
					) : (
						<Link to={deployedLink} className='text-blue-500 hover:underline'>
							View Project
						</Link>
					)}
					<a
						href={githubLink}
						target='_blank'
						rel='noopener noreferrer'
						className='text-gray-500 hover:underline'>
						GitHub Repo
					</a>
				</div>
			</div>
		</div>
	);
}

Project.propTypes = {
	title: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,
	deployedLink: PropTypes.string.isRequired,
	githubLink: PropTypes.string.isRequired,
};
