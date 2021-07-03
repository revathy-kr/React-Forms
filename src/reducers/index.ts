import { combineReducers } from 'redux';

import getDataReducer from './getDataReducer';

const rootReducer = getDataReducer;

export type AppState = ReturnType<typeof getDataReducer>;

export default getDataReducer;