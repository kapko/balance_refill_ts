import {applyMiddleware, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import {rootReducer} from '../reducers/index';

export type AppState = ReturnType<typeof rootReducer>;
const composeEnhancers = (window && window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = applyMiddleware(thunk);

export const store = createStore(rootReducer, composeEnhancers(middleware));
