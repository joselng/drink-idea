import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchFilterCocktail } from '../../redux/actions/cocktailActions';

const Categories = (props) => {
  const { cocktails, loading } = useSelector((state) => ({ ...state.cocktails }));
  const [modifiedCocktail, setModifiedCocktail] = useState([]);
  const dispatch = useDispatch();
  const { title } = props;

  useEffect(() => {
    dispatch(fetchFilterCocktail(props.name));
  }, []);

  useEffect(() => {
    if (cocktails) {
      const newCocktails = cocktails.map((item) => {
        const {
          idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass,
        } = item;
        return {
          id: idDrink,
          name: strDrink,
          image: strDrinkThumb,
          info: strAlcoholic,
          glass: strGlass,
        };
      });
      setModifiedCocktail(newCocktails);
    } else {
      setModifiedCocktail([]);
    }
  }, [cocktails]);

  if (loading) {
    return (
      <div className="d-flex justify-content-center">
        <div className="spinner-border text-danger" role="status">
          <span className="visually-hidden">Carregando...</span>
        </div>
      </div>
    );
  }

  if (!cocktails) {
    return <h2 className="text-danger">Nenhum coquetel foi encontrado com os critérios pesquisados</h2>;
  }

  return (
    <div className="container" style={{ marginTop: 40 }}>
      <h2 className="mt-1 mb-3">{title}</h2>
      <div className="row row-cols-1 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 g-4">
        {modifiedCocktail.map((item) => {
          const {
            id, name, image, glass, info,
          } = item;
          return (
            <div className="col" key={id}>
              <div className="card h-2">
                <img src={image} alt={name} className="card-img-top" />
                <div className="card-body" style={{ textAlign: 'left' }}>
                  <h5 className="card-title">{name}</h5>
                  <h4 className="card-title">{glass}</h4>
                  <p className="card-text">{info}</p>
                  <div className="row">
                    <div className="col-lg-9">
                      <Link to={`/cocktail/${id}`} style={{ color: '#333' }} className="btn form-control btn-outline-warning">Detalhes</Link>
                    </div>
                    <div className="col-lg-3">
                      <button type="button" className="btn form-control btn-outline-danger">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16">
                          <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
