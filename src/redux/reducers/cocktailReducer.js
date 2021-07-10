import { ActionTypes } from '../constants/actionTypes';

const initialState = {
  cocktails: [],
  cocktail: [],
  loading: false,
  error: null,
};

export const cocktailReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.FETCH_COCKTAIL_START:
      return {
        ...state,
        loading: true,
      };
    case ActionTypes.FETCH_COCKTAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        cocktails: payload,
      };
    case ActionTypes.FETCH_COCKTAIL_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case ActionTypes.SEARCH_COCKTAIL_START:
      return {
        ...state,
        loading: true,
      };
    case ActionTypes.SEARCH_COCKTAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        cocktails: payload,
      };
    case ActionTypes.SEARCH_COCKTAIL_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case ActionTypes.FILTER_COCKTAIL_START:
      return {
        ...state,
        loading: true,
      };
    case ActionTypes.FILTER_COCKTAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        cocktails: payload,
      };
    case ActionTypes.FILTER_COCKTAIL_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case ActionTypes.GET_SINGLE_COCKTAIL_START:
      return {
        ...state,
        loading: true,
      };
    case ActionTypes.GET_SINGLE_COCKTAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        cocktail: payload,
      };
    case ActionTypes.GET_SINGLE_COCKTAIL_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export default cocktailReducer;
