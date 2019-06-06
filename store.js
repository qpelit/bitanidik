// store.js

import { createStore, combineReducers } from 'redux';
import userInfoReducer from './reducers/userInfoReducer';

const rootReducer = combineReducers({
  userInfo: userInfoReducer
});

const configureStore = () => {
  return createStore(rootReducer);
}

export default configureStore;