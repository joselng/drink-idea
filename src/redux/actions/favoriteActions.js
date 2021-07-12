import { toast } from 'react-toastify';

import { ActionTypes } from '../constants/actionTypes';

import { backendApi } from '../../services/api';

export const addFavoriteStart = (userId, drinkId) => ({
  type: ActionTypes.ADD_FAVORITE_START,
  payload: { userId, drinkId },
});

export const addFavoriteSuccess = (userId, drinkId) => ({
  type: ActionTypes.ADD_FAVORITE_SUCCESS,
  payload: { userId, drinkId },
});

export const addFavoriteFail = () => ({
  type: ActionTypes.ADD_FAVORITE_FAIL,
});

export const removeFavoriteStart = (userId, drinkId) => ({
  type: ActionTypes.REMOVE_FAVORITE_START,
  payload: { userId, drinkId },
});

export const removeFavoriteSuccess = (userId, drinkId) => ({
  type: ActionTypes.REMOVE_FAVORITE_SUCCESS,
  payload: { userId, drinkId },
});

export const removeFavoriteFail = () => ({
  type: ActionTypes.REMOVE_FAVORITE_FAIL,
});

export function addFavorite(userId, drinkId) {
  return async function (dispatch) {
    dispatch(addFavoriteStart());
    return backendApi
      .post('/favorites', {
        userId, drinkId,
      })
      .then((response) => {
        const { user, drink } = response.data;

        dispatch(addFavoriteSuccess(user, drink));
        toast.success('Item adicionado com sucesso');
      })
      .catch((error) => {
        toast.error(error.response.data.message);
        dispatch(addFavoriteFail(error));
      });
  };
}

export function removeFavorite(userId, drinkId) {
  return async function (dispatch) {
    dispatch(removeFavoriteStart());

    return backendApi
      .post('/favorites', {
        userId, drinkId,
      })
      .then((response) => {
        const { user, drink } = response.data;

        dispatch(removeFavoriteSuccess(user, drink));
        toast.success('Item removido com sucesso');
      })
      .catch((error) => {
        toast.error(error.response.data.message);
        dispatch(removeFavoriteFail(error));
      });
  };
}
