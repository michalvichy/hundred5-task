import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import promise from 'redux-promise-middleware';
import { popupReducer } from '../reducers/';

const middleware = applyMiddleware(promise(), thunk, logger);

export default createStore(popupReducer, middleware);

