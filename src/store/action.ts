import {Task} from './../types/task';
import {createAction} from '@reduxjs/toolkit';

export const addTaskAction = createAction<Task>('app/addTask');

export const editTaskAction = createAction<Task>('app/editTask');
