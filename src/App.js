import React from 'react';
import './App.css';

import Hero from './components/Hero';
import DrawerNavBar from './components/DrawerNavBar';

function App() {
  return (
    <>
      <DrawerNavBar />
      <Hero />
    </>
  );
}

export default App;