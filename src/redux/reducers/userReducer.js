import { ActionTypes } from '../constants/actionTypes';

const initialState = {
  profile: null,
};

export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.USER_SIGN_UP: {
      return { ...state, profile: payload };
    }
    case ActionTypes.USER_SIGN_UP_FAIL: {
      return { ...state, profile: null };
    }
    default:
      return state;
  }
};
