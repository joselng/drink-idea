import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const { user } = useSelector((state) => ({ ...state.auth }));

  return (
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
            <span className="navbar-text text-warning">
              { user ? (
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item mt-1">
                    <span className="text-light mt-1">
                      {user.name}
                    </span>
                  </li>
                  <li className="nav-item">
                    &nbsp;&nbsp;&nbsp;
                    <Link to="/favorites" className="btn btn-sm btn-outline-warning px-3">Meus Favoritos</Link>
                  </li>
                  <li className="nav-item">
                    &nbsp;
                    <Link to="/logout" className="btn btn-sm btn-outline-danger px-3">Sair</Link>
                  </li>
                </ul>
              ) : (
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                    <Link to="/register" className="btn btn-sm form-control">Cadastre-se</Link>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                    <Link to="/login" className="btn btn-sm btn-custom form-control">Entrar</Link>
                  </div>
                </div>
              ) }
            </span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
