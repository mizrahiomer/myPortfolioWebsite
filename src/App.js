import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import './App.scss';

function App() {
	return (
		<div className='App'>
			<Navbar />
			<Header />
			<About />
			<Projects />
			<Footer />
		</div>
	);
}

export default App;
