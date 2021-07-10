import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer>
    <div className="container">
      <div>
        © 2021 José Leonardo Nascimento Garcia
      </div>
      <div>
        <Link to="/" className="navbar-brand">
          drink.
          <strong>idea</strong>
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;
