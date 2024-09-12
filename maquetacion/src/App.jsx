import React from 'react';
import Header from './components/Header';
import Aside from './components/Aside';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Section from './components/Section';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="content">
        <Aside />
        <Gallery />
      </div>
      <div className="bottom">
        <Footer />
        <Section />
      </div>
    </div>
  );
};

export default App;