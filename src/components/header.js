import React from 'react';
import logo from '../logo.svg';

function HeaderComp(props) {
  return (
    <header className="App-header">
        <div className="App-logo-con">
            <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="App-heading-con">
            <h1>{props.title}</h1>
        </div>
    </header>
  );
}

export default HeaderComp;