/* eslint-disable default-case */
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import loggerMiddleware from "redux-logger";
import wolfReducer from './reducers/wolfReducer';
import dragonReducer from './reducers/dragonReducer';

// map the imported reducers to separate sections of the app
const rootReducer = combineReducers({
  dragons: dragonReducer,
  wolves: wolfReducer
})

const store = createStore(
  rootReducer,
  // we need to apply thunk middleware here 
  applyMiddleware(thunkMiddleware, loggerMiddleware)
);

export default store;