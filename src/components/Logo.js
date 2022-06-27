import logo from '../images/logo.svg';
import React from 'react';
import '../stylesheets/Logo.css';

const Logo = () => (
    <div className="container-logo">
        <img 
        src={ logo }
        className="image-logo"
        alt="App Logo" 
        />
        <h1>ToDo List with React</h1>
      </div>
);

export default Logo;