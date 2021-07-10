import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { fetchSearchCocktail } from '../../redux/actions/cocktailActions';

import CocktailList from '../../components/CocktailList';

const Home = () => {
  const searchValue = useRef();

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchSearchCocktail(searchValue.current.value));
  };

  return (
    <main>
      <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container ">
              <div className="carousel-caption text-start">
                <div className="row">
                  <div className="col-lg-6 col-sm-12">
                    <h2 className="text-dark">Descubra novas receitas.</h2>
                    <h1 className="text-dark"><strong>Tenha novas experiências!</strong></h1>

                    <form className="search-form" onSubmit={handleSubmit}>
                      <div className="input-group mb-5 mt-4">
                        <input
                          ref={searchValue}
                          type="text"
                          className="form-control"
                          placeholder="O que deseja aprender hoje?"
                        />
                        <button className="btn btn-warning" type="submit" id="button-addon2">Descubra</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container cocktails">
        <div className="row cocktails-itens">
          <CocktailList serchText="As mais populares" />
        </div>
      </div>
    </main>
  );
};

export default Home;
