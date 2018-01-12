import * as constants from './../constants';
import axios from 'axios';

const axiosAPI = axios.create({
  baseURL: 'https://api-fknaanjgow.now.sh/feedback', // Only because all endpoints begins from '/feedback'
  headers: {
    'Authorization': 'Bearer foobaj',
  }
});

// Actions
export function setRating(value) {
  return {
    type: constants.SET_RATING,
    payload: axiosAPI.post('/rating', { rating: value }).then(() => value),
  };
}

export function getRating() {
  return {
    type: constants.GET_RATING,
    payload: axiosAPI.get('/rating'),
  };
}

export function closePopup() {
  const closed = true;

  return {
    type: constants.CLOSE_POPUP,
    payload: axiosAPI.put('/closed', { closed }).then(() => closed),
  };
}

export function openedPopup() {
  return {
    type: constants.OPENED_POPUP,
    payload: axiosAPI.get('/closed'),
  };
}

// NOTE: I left '/' on each url on purpose. I can see it's actually an url, not some meaningless string
