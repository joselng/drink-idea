import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player/youtube';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCocktailDetails } from '../../redux/actions/cocktailActions';

const CocktailDetails = () => {
  const { cocktail, loading } = useSelector((state) => ({ ...state.cocktails }));
  const [modifiedCocktail, setModifiedCocktail] = useState(null);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCocktailDetails(id));
  }, [id]);

  useEffect(() => {
    if (cocktail.length > 0) {
      const {
        strDrink: name,
        strDrinkThumb: image,
        strVideo: video,
        strAlcoholic: info,
        strCategory: category,
        strGlass: glass,
        strInstructions: instructions,
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5,
        strIngredient6,
        strIngredient7,
        strIngredient8,
        strIngredient9,
        strIngredient10,
        strIngredient11,
        strIngredient12,
        strIngredient13,
        strIngredient14,
        strIngredient15,
      } = cocktail[0];
      const ingredients = [
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5,
        strIngredient6,
        strIngredient7,
        strIngredient8,
        strIngredient9,
        strIngredient10,
        strIngredient11,
        strIngredient12,
        strIngredient13,
        strIngredient14,
        strIngredient15,
      ];
      const newCocktail = {
        name,
        image,
        video,
        info,
        category,
        glass,
        instructions,
        ingredients,
      };
      setModifiedCocktail(newCocktail);
    } else {
      setModifiedCocktail(null);
    }
  }, [id, cocktail]);

  if (!modifiedCocktail) {
    return (
      <div className="d-flex justify-content-center">
        <h2 className="section-title mt-5 mb-5">Carregando...</h2>
      </div>
    );
  }
  const {
    name, image, video, category, info, glass, instructions, ingredients,
  } = modifiedCocktail;
  return (
    <>
      <div className="container mb-5">
        {loading ? (
          <div className="d-flex justify-content-center mt-2 mb-5">
            <div className="spinner-border text-danger mt-5 mb-3" role="status">
              <span className="visually-hidden">Carregando...</span>
            </div>
  &nbsp;&nbsp;&nbsp;
            <h3 className="mt-5 mb-5">
              Carregando dados de
              {' '}
              <strong className="text-danger">{name}</strong>
            </h3>
          </div>
        ) : (
          <div className="mb-3">
            <div className="d-flex justify-content-between align-items-center">
              <h2 className="mt-4 mb-4 pull-left">{name}</h2>
              <button type="button" className="btn btn-danger pull-right" onClick={() => window.history.back()}>Voltar</button>
            </div>
            <div className="row g-0">
              <div className="col-md-4">
                <img src={image} alt={name} className="img-fluid rounded-start" />
              </div>
              <div className="col-md-8">
                <div className="card-body">

                  <h5 className="text-muted card-text">Intruções:</h5>
                  <p className="text-muted">{instructions}</p>

                  <h5 className="text-muted card-text">Categoria:</h5>
                  <p className="text-muted">{category}</p>

                  <h5 className="text-muted card-text">Informações:</h5>
                  <p className="text-muted">{info}</p>

                  <h5 className="text-muted card-text">Vidro:</h5>
                  <p className="text-muted">{glass}</p>

                  <h5 className="text-muted card-text">Ingredientes</h5>
                  {ingredients.map((item) => (item ? <li className="text-muted" key={item}>{item}</li> : null))}

                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      { video && (
        <div style={{ backgroundColor: '#ffc107' }}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h2 className="mt-5 mb-4">Assita o vídeo e aprenda como fazer</h2>
                <div style={{
                  position: 'relative',
                }}
                >
                  <ReactPlayer style={{ paddingBottom: 80 }} height="480px" width="auto" url={video} />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) }
    </>
  );
};

export default CocktailDetails;
