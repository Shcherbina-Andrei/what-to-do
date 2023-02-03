import { listsData } from './lists-data/lists-data';
import { tasksData } from './tasks-data/tasks-data';
import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';

export const rootReducer = combineReducers({
  [NameSpace.Tasks]: tasksData.reducer,
  [NameSpace.Lists]: listsData.reducer
});
