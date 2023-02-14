import React from 'react';
import './App.css';

import { NavBar } from './components';
import {
	AboutUs,
	Footer,
	Header,
	Recognition,
	SocialMediaFeed,
	SpecialMenu,
	VisitUs,
} from './containers';

function App() {
	return (
		<>
			<NavBar />
			<Header />
			<AboutUs />
			<SpecialMenu />
			<Recognition />
			<VisitUs />
			<SocialMediaFeed />
			<Footer />
		</>
	);
}

export default App;
