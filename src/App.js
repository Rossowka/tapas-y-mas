import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { NavBar } from './components';
import {
	AboutUs,
	Footer,
	Header,
	NotFound,
	Recognition,
	SpecialMenu,
	VisitUs,
	Video,
} from './containers';

function App() {
	return (
		<>
			<NavBar />
			<Routes>
				<Route
					path='/'
					element={
						<>
							<Header />
							<AboutUs />
							<SpecialMenu />
							<Video />
							<Recognition />
						</>
					}
				/>
				<Route
					path='/recognition'
					element={<Recognition />}
				/>
				<Route
					path='/location'
					element={<VisitUs />}
				/>
				<Route
					path='*'
					element={<NotFound />}
				/>
			</Routes>
			<Footer />
		</>
	);
}

export default App;
