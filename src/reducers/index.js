import {
  CLOSE_POPUP, GET_RATING, OPENED_POPUP, SET_RATING,
  TOUCHED_POPUP
} from '../constants/index';

export const initialStore = {
  rating: null,
  closed: false,
  touched: true, // On the start, popup behaves like it was touched, because we don't know if someone set rate or closed it. We know it after success api calls
  maxRating: 11,
};

export function popupReducer(state = initialStore, action) {
  switch(action.type) {
    case `${GET_RATING}_FULFILLED`:
      return {
        ...state,
        rating: action.payload.data.rating,
        touched: true,
      };
    case `${GET_RATING}_REJECTED`:
      return {
        ...state,
        touched: false,
      };
    case `${SET_RATING}_PENDING`:
      return {
        ...state,
        touched: true,
      };
    case `${SET_RATING}_FULFILLED`:
      return {
        ...state,
        rating: action.payload,
        touched: true,
      };
    case `${OPENED_POPUP}_FULFILLED`:
      return {
        ...state,
        closed: action.payload.data.closed,
        touched: !action.payload.data.closed,
      };
    case `${CLOSE_POPUP}_PENDING`:
      return {
        ...state,
        touched: true,
      };
    case `${CLOSE_POPUP}_FULFILLED`:
      return {
        ...state,
        closed: action.payload,
        touched: true,
      };
    case `${TOUCHED_POPUP}_FULFILLED`:
      return {
        ...state,
        touched: action.payload.rating >= 0 || action.payload.closed,
      };
    case `${TOUCHED_POPUP}_REJECTED`:
      return {
        ...state,
        touched: false,
      };

    default: return state;
  }
}

// NOTE: I know that 'rating' and 'closed' are not used, but I keep them to show that I know that I can store those values ;)
