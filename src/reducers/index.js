import { GET_RATING, OPENED_POPUP, SET_RATING } from '../constants/index';

export const initialStore = {
  rating: null,
  closed: false,
};

export function popupReducer(state = initialStore, action) {
  switch(action.type) {
    case `${GET_RATING}_FULFILLED`:
      return {
        ...state,
        rating: action.payload.data.rating,
      };
    case `${GET_RATING}_REJECTED`:
      return state;
    case `${SET_RATING}_FULFILLED`:
      return {
        ...state,
        rating: action.payload,
      };
    case `${OPENED_POPUP}_FULFILLED`:
      return {
        ...state,
        closed: action.payload.data.closed,
      };

    default: return state;
  }
}

