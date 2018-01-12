import * as constants from './../constants';
import axios from 'axios';

const axiosAPI = axios.create({
  baseURL: 'https://api-fknaanjgow.now.sh/feedback', // Only because all endpoints begins from '/feedback'
  headers: {
    'Authorization': 'Bearer Michal S',
  }
});

// Actions
export function setRating(value) {
  return {
    type: constants.SET_RATING,
    payload: axiosAPI.post('/rating', { rating: value }).then(() => value),
  };
}

export function closePopup() {
  const closed = true;

  return {
    type: constants.CLOSE_POPUP,
    payload: axiosAPI.put('/closed', { closed }).then(() => closed),
  };
}

export function popupTouched() {
  const getRating = axiosAPI.get('/rating').catch(() => {
    return {
      data: {
        rating: -1,
      }
    }
  });
  const openedPopup = axiosAPI.get('/closed');

  return {
    type: constants.TOUCHED_POPUP,
    payload: axios.all([getRating, openedPopup]).then(axios.spread((rating, closed) => {
      return {
        rating: rating.data.rating,
        closed: closed.data.closed,
      }
    })),
  }
}

// NOTE: I left '/' on each url on purpose. I can see it's actually an url, not some meaningless string
