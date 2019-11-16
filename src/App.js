import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import About from './Components/About';
import ProfilePage from './Components/ProfilePage';
import Skills from './Components/Skills';
import Portfolio from './Components/Portfolio';
import Experience from './Components/Experience';
import Contact from './Components/Contact';
import References from './Components/References';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <ProfilePage></ProfilePage>
      <About></About>
      <Skills></Skills>
      <Portfolio></Portfolio>
      <Experience></Experience>
      <References></References>
      <Contact></Contact>
    </div>
  );
}

export default App;
