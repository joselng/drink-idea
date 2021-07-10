import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link to="/" className="navbar-brand">
          drink.
          <strong>idea</strong>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page">Início</Link>
            </li>
            <li className="nav-item">
              <Link to="/cocktails" className="nav-link">Coquetéis</Link>
            </li>
            <li className="nav-item">
              <Link to="/milkshakes" className="nav-link">Milkshakes</Link>
            </li>
            <li className="nav-item">
              <Link to="/shots" className="nav-link">Shots</Link>
            </li>
            <li className="nav-item">
              <Link to="/beers" className="nav-link">Cervejas</Link>
            </li>
            <li className="nav-item">
              <Link to="/softdrinks" className="nav-link">Refrigerantes</Link>
            </li>
          </ul>
          <span className="navbar-text">
            <Link to="/" className="btn btn-sm">Cadastre-se</Link>
            <Link to="/" className="btn btn-sm btn-custom">Entrar</Link>
          </span>
        </div>
      </div>
    </nav>
  </header>
);

export default Header;
