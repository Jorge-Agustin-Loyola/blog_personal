import { createStore, applyMiddleware, compose } from 'redux';
import {thunk} from 'redux-thunk';
import exampleReducer from './redux/reducers';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
     
  exampleReducer,
  composeEnhancers(applyMiddleware(thunk)) // Si usas middleware como thunk
);

export default store;
