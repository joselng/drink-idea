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
      } = cocktail[0];
      const ingredients = [
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5,
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
    return <h2 className="section-title">No Cocktail to Display</h2>;
  }
  const {
    name, image, video, category, info, glass, instructions, ingredients,
  } = modifiedCocktail;
  return (
    <>
      <div className="container">
        <h2 className="mt-4 mb-4">{name}</h2>
        {loading ? (
          <div className="d-flex justify-content-center">
            <div className="spinner-border text-danger" role="status">
              <span className="visually-hidden">Carregando...</span>
            </div>
          </div>
        ) : (
          <div className="mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img src={image} alt={name} className="img-fluid rounded-start" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <p className="card-text">
                    <h5 className="text-muted">Intruções:</h5>
                    {instructions}
                  </p>
                  <p className="card-text">
                    <p>
                      <h5 className="text-muted">Categoria:</h5>
                      {category}
                    </p>
                    <p>
                      <h5 className="text-muted">Informações:</h5>
                      {info}
                    </p>
                    <p>
                      <h5 className="text-muted">Vidro:</h5>
                      {glass}
                    </p>
                    <p>
                      <h5 className="text-muted">Ingredientes</h5>
                      {ingredients.map((item) => (item ? <span key={item}>{item}</span> : null))}
                    </p>
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      { video && (
        <div className="mt-5" style={{ backgroundColor: '#ffc107' }}>
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
