import { listsData } from './lists-data/lists-data';
import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';

export const rootReducer = combineReducers({
  [NameSpace.Lists]: listsData.reducer
});
