import { cocktailApi } from '../../services/api';

import { ActionTypes } from '../constants/actionTypes';

const fetchCocktailStart = () => ({
  type: ActionTypes.FETCH_COCKTAIL_START,
});

const fetchCocktailSuccess = (cocktails) => ({
  type: ActionTypes.FETCH_COCKTAIL_SUCCESS,
  payload: cocktails,
});

const fetchCocktailFail = (error) => ({
  type: ActionTypes.FETCH_COCKTAIL_FAIL,
  payload: error,
});

const fetchSearchCocktailStart = () => ({
  type: ActionTypes.SEARCH_COCKTAIL_START,
});

const fetchSearchCocktailSuccess = (cocktails) => ({
  type: ActionTypes.SEARCH_COCKTAIL_SUCCESS,
  payload: cocktails,
});

const fetchSearchCocktailFail = (error) => ({
  type: ActionTypes.SEARCH_COCKTAIL_FAIL,
  payload: error,
});

const fetchFilterCocktailStart = () => ({
  type: ActionTypes.FILTER_COCKTAIL_START,
});

const fetchFilterCocktailSuccess = (cocktails) => ({
  type: ActionTypes.FILTER_COCKTAIL_SUCCESS,
  payload: cocktails,
});

const fetchFilterCocktailFail = (error) => ({
  type: ActionTypes.FILTER_COCKTAIL_FAIL,
  payload: error,
});

const fetchCocktailDetailsStart = () => ({
  type: ActionTypes.GET_SINGLE_COCKTAIL_START,
});

const fetchCocktailDetailsSuccess = (cocktail) => ({
  type: ActionTypes.GET_SINGLE_COCKTAIL_SUCCESS,
  payload: cocktail,
});

const fetchCocktailDetailsFail = (error) => ({
  type: ActionTypes.GET_SINGLE_COCKTAIL_FAIL,
  payload: error,
});

export function fetchCocktailNonAlcoholic() {
  return function (dispatch) {
    dispatch(fetchCocktailStart());
    cocktailApi
      .get('/filter.php?a=Non_Alcoholic')
      .then((response) => {
        const cocktails = response.data.drinks;
        dispatch(fetchCocktailSuccess(cocktails));
      })
      .catch((error) => {
        dispatch(fetchCocktailFail(error));
      });
  };
}

export function fetchSearchCocktail(searchText) {
  return function (dispatch) {
    dispatch(fetchSearchCocktailStart());
    cocktailApi
      .get(
        `/search.php?s=${searchText}`,
      )
      .then((response) => {
        const cocktails = response.data.drinks;
        dispatch(fetchSearchCocktailSuccess(cocktails));
      })
      .catch((error) => {
        dispatch(fetchSearchCocktailFail(error));
      });
  };
}

export function fetchFilterCocktail(category) {
  return function (dispatch) {
    dispatch(fetchFilterCocktailStart());
    cocktailApi
      .get(
        `/filter.php?c=${category}`,
      )
      .then((response) => {
        const cocktails = response.data.drinks;
        dispatch(fetchFilterCocktailSuccess(cocktails));
      })
      .catch((error) => {
        dispatch(fetchFilterCocktailFail(error));
      });
  };
}

export function fetchCocktailDetails(id) {
  return function (dispatch) {
    dispatch(fetchCocktailDetailsStart());
    cocktailApi
      .get(`/lookup.php?i=${id}`)
      .then((response) => {
        const cocktail = response.data.drinks;
        dispatch(fetchCocktailDetailsSuccess(cocktail));
      })
      .catch((error) => {
        dispatch(fetchCocktailDetailsFail(error));
      });
  };
}
