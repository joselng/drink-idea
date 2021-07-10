import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import CocktailDetails from './pages/CocktailDetails';
import Categories from './pages/Categories';
import Register from './pages/Register';
import Login from './pages/Login';

import './styles/app.css';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <ToastContainer autoClose={3000} />
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/cocktail/:id" component={CocktailDetails} />
        <Route path="/cocktails" component={() => <Categories name="Cocktail" title="Coquetéis" />} />
        <Route path="/milkshakes" component={() => <Categories name="Milk / Float / Shake" title="Milkshakes" />} />
        <Route path="/shots" component={() => <Categories name="Shot" title="Shots" />} />
        <Route path="/beers" component={() => <Categories name="Beer" title="Cervejas" />} />
        <Route path="/softdrinks" component={() => <Categories name="Soft Drink / Soda" title="Refrigerantes" />} />
        <Route><h2 className="container text-danger mt-5 mb-5">404. Página não encontrada!</h2></Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
