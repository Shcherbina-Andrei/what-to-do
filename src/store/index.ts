import { NameSpace } from './../const';
import { getLocalLists, updateListsLocalStore, getLocalTasks, updateTasksLocalStore } from './local-store/local-store';
import {rootReducer} from './reducer';
import {configureStore} from '@reduxjs/toolkit';


export const store = configureStore({
  reducer: rootReducer,
  preloadedState: {
    [NameSpace.Lists]: {
      lists: getLocalLists()
    },
    [NameSpace.Tasks]: {
      tasks: getLocalTasks(),
      searchedTasks: []
    }
  }});

store.subscribe(() => {
  updateListsLocalStore(store.getState().LISTS.lists);
  updateTasksLocalStore(store.getState().TASKS.tasks);
});

