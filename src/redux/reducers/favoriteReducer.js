import { ActionTypes } from '../constants/actionTypes';

const initialState = {
  userId: null,
  drinkId: null,
  error: null,
};

export const favoriteReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_FAVORITE_START: {
      return {
        ...state,
      };
    }
    case ActionTypes.ADD_FAVORITE_SUCCESS: {
      return {
        ...state,
        userId: payload.userId,
        drinkId: payload.drinkId,
      };
    }
    case ActionTypes.ADD_FAVORITE_FAIL: {
      return {
        ...state,
        error: payload,
      };
    }
    case ActionTypes.REMOVE_FAVORITE_START: {
      return {
        ...state,
      };
    }
    case ActionTypes.REMOVE_FAVORITE_SUCCESS: {
      return {
        ...state,
        userId: payload.userId,
        drinkId: payload.drinkId,
      };
    }
    case ActionTypes.REMOVE_FAVORITE_FAIL: {
      return {
        ...state,
        error: payload,
      };
    }
    default:
      return state;
  }
};
