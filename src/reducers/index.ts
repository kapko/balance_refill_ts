import {combineReducers} from 'redux';
// local files
import provider from './provider';
import providers from './providers';

export const rootReducer = combineReducers({
  provider,
  providers,
});
