import { rootReducer } from './reducers/index';
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

export const store = createStore(rootReducer, applyMiddleware(thunk));

