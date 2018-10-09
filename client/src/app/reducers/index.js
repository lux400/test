import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { imageReducer } from 'app/reducers/images';

export const rootReducer = combineReducers({
  images: imageReducer,
  router: routerReducer
});
