import {List} from './../../types/list';
import {createAction} from '@reduxjs/toolkit';

export const getListsFromLocalStoreAction = createAction('app/getListFromLocalStore');

export const addListAction = createAction<List>('app/addList');

export const editListAction = createAction<List>('app/editLists');

export const deleteListAction = createAction<List>('app/deleteList');
