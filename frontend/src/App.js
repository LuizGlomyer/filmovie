import React from 'react';
import LandingPage from './pages/LandingPage';

import './App.scss';
import "@fontsource/cabin";
import "@fontsource/gidugu";
import "@fontsource/glory";
import "@fontsource/chewy";

import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";


function App() {
  
  return (
    <div className="App">
      <LandingPage />
    </div>
  );
}

export default App;
