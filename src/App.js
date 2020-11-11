import React from 'react';
import HeaderComp from './components/header.js';
import ContentComp from './components/content.js';
import FooterComp from './components/footer.js';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <HeaderComp title="React Practice"/>
      <ContentComp/>
      <FooterComp/>
    </div>
  );
}

export default App;
