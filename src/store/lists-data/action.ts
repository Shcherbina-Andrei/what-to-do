import {Task, Tasks} from './../../types/task';
import {List} from './../../types/list';
import {createAction} from '@reduxjs/toolkit';

export const getListsFromLocalStoreAction = createAction('app/getListFromLocalStore');

export const addListAction = createAction<List>('app/addList');

export const addTaskAction = createAction<Task>('app/addTaskToListAction');

export const deleteTaskAction = createAction<Task>('app/deleteTaskFromListAction');

export const editTaskAction = createAction<Task>('app/editTaskFromListAction');

export const editListAction = createAction<List>('app/editLists');

export const deleteListAction = createAction<List>('app/deleteList');

export const changeListOrderAction = createAction<{movedTask: Task; replacedTask: Task}>('app/changeOrderList');

export const addSearchedTasks = createAction<Tasks>('app/addSearchedTasks');
