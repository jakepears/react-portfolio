/** @format */

import { Link, useLocation } from 'react-router-dom';

function Header() {
	const location = useLocation();

	return (
		<header className='bg-[#76ABAE] text-white p-4'>
			<div className='container mx-auto flex justify-between items-center'>
				<h1 className='text-2xl font-bold'>Jake Pearson</h1>
				<nav>
					<ul className='flex space-x-4'>
						<li className='hoverUnderline'>
							<Link
								to='/about'
								className={location.pathname === '/about' ? 'font-bold' : ''}>
								About Me
							</Link>
						</li>
						<li className='hoverUnderline'>
							<Link
								to='/portfolio'
								className={
									location.pathname === '/portfolio' ? 'font-bold' : ''
								}>
								Portfolio
							</Link>
						</li>
						<li className='hoverUnderline'>
							<Link
								to='/contact'
								className={location.pathname === '/contact' ? 'font-bold' : ''}>
								Contact
							</Link>
						</li>
						<li className='hoverUnderline'>
							<Link
								to='/resume'
								className={location.pathname === '/resume' ? 'font-bold' : ''}>
								Resume
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}

export default Header;
