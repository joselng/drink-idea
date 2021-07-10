import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import CocktailDetails from './pages/CocktailDetails';
import Categories from './pages/Categories';

import './styles/app.css';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/cocktail/:id" component={CocktailDetails} />
        <Route path="/cocktails" component={() => <Categories name="Cocktail" title="Coquetéis" />} />
        <Route path="/milkshakes" component={() => <Categories name="Milk / Float / Shake" title="Milkshakes" />} />
        <Route path="/shots" component={() => <Categories name="Shot" title="Shots" />} />
        <Route path="/beers" component={() => <Categories name="Beer" title="Cervejas" />} />
        <Route path="/softdrinks" component={() => <Categories name="Soft Drink / Soda" title="Refrigerantes" />} />
        <Route>404. Página não encontrada!</Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
