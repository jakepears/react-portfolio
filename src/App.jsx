/** @format */

import {
	BrowserRouter as Router,
	Route,
	Routes,
	Navigate,
} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';

function App() {
	return (
		<Router>
			<div className='flex flex-col min-h-screen bg-[#222831] text-[#EEEEEE]'>
				<Header />
				<main className='flex-grow'>
					<Routes>
						<Route path='/' element={<Navigate replace to='/about' />} />
						<Route path='/about' element={<AboutMe />} />
						<Route path='/portfolio' element={<Portfolio />} />
						<Route path='/contact' element={<Contact />} />
						<Route path='/resume' element={<Resume />} />
					</Routes>
				</main>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
