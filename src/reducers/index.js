import { combineReducers } from 'redux';

import reposReducer from './reposReducer';

export const rootReducer = combineReducers({
  repos: reposReducer,
});
