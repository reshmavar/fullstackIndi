import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Testimonial from './components/Testimonial';

import Footer from './components/Footer';
import RegistrationForm from './components/RegistrationForm';
import AlternateImageText from './components/About';

const items = [
  {
    image: 'https://imgs.search.brave.com/rRlnwPRBhrghMl_DPc53N1Nml_wbYbEQFj-zQdR9RsY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAzLzY2LzgwLzg3/LzM2MF9GXzM2Njgw/ODc2NV9ENzJFSTZO/dklVSlI2TmN0YklS/QkJlMTVWU3FqUlB4/Vi5qcGc',
    title: 'First Item',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    image: 'https://imgs.search.brave.com/rRlnwPRBhrghMl_DPc53N1Nml_wbYbEQFj-zQdR9RsY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAzLzY2LzgwLzg3/LzM2MF9GXzM2Njgw/ODc2NV9ENzJFSTZO/dklVSlI2TmN0YklS/QkJlMTVWU3FqUlB4/Vi5qcGc',
    title: 'Second Item',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
];



function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Testimonial/>
      <RegistrationForm/>
      <AlternateImageText items={items} />
      <Footer/>
    </div>
  );
}

export default App;
