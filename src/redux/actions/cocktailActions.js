import { cocktailApi } from '../../services/api';

import { ActionTypes } from '../constants/actionTypes';

const fetchCockTailStart = () => ({
  type: ActionTypes.FETCH_COCKTAIL_START,
});

const fetchCockTailSuccess = (cocktails) => ({
  type: ActionTypes.FETCH_COCKTAIL_SUCCESS,
  payload: cocktails,
});

const fetchCockTailFail = (error) => ({
  type: ActionTypes.FETCH_COCKTAIL_FAIL,
  payload: error,
});

const fetchSearchCockTailStart = () => ({
  type: ActionTypes.SEARCH_COCKTAIL_START,
});

const fetchSearchCockTailSuccess = (cocktails) => ({
  type: ActionTypes.SEARCH_COCKTAIL_SUCCESS,
  payload: cocktails,
});

const fetchSearchCockTailFail = (error) => ({
  type: ActionTypes.SEARCH_COCKTAIL_FAIL,
  payload: error,
});

const fetchFilterCockTailStart = () => ({
  type: ActionTypes.FILTER_COCKTAIL_START,
});

const fetchFilterCockTailSuccess = (cocktails) => ({
  type: ActionTypes.FILTER_COCKTAIL_SUCCESS,
  payload: cocktails,
});

const fetchFilterCockTailFail = (error) => ({
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
    dispatch(fetchCockTailStart());
    cocktailApi
      .get('/filter.php?a=Non_Alcoholic')
      .then((response) => {
        const cocktails = response.data.drinks;
        dispatch(fetchCockTailSuccess(cocktails));
      })
      .catch((error) => {
        dispatch(fetchCockTailFail(error));
      });
  };
}

export function fetchSearchCocktail(searchText) {
  return function (dispatch) {
    dispatch(fetchSearchCockTailStart());
    cocktailApi
      .get(
        `/search.php?s=${searchText}`,
      )
      .then((response) => {
        const cocktails = response.data.drinks;
        dispatch(fetchSearchCockTailSuccess(cocktails));
      })
      .catch((error) => {
        dispatch(fetchSearchCockTailFail(error));
      });
  };
}

export function fetchFilterCocktail(category) {
  return function (dispatch) {
    dispatch(fetchFilterCockTailStart());
    cocktailApi
      .get(
        `/filter.php?c=${category}`,
      )
      .then((response) => {
        const cocktails = response.data.drinks;
        dispatch(fetchFilterCockTailSuccess(cocktails));
      })
      .catch((error) => {
        dispatch(fetchFilterCockTailFail(error));
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
