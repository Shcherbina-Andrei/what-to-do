import { getLocalTasks, updateTasksLocalStore } from './local-store/local-store';
import {Tasks} from '../types/task';
import {addTaskAction, deleteTaskAction, editTaskAction, getTasksFromLocalStoreAction } from './action';
import {createReducer} from '@reduxjs/toolkit';

type InitialState = {
  tasks: Tasks;
}

const initialState: InitialState = {
  tasks: [],
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getTasksFromLocalStoreAction, (state) => {
      state.tasks = getLocalTasks();
    })
    .addCase(addTaskAction, (state, action) => {
      const newTasksList = [...state.tasks, action.payload];
      updateTasksLocalStore(newTasksList);
      state.tasks = newTasksList;
    })
    .addCase(editTaskAction, (state, action) => {
      const taskIndex = state.tasks.findIndex((task) => task.id === action.payload.id);
      updateTasksLocalStore([...state.tasks.slice(0, taskIndex), action.payload, ...state.tasks.slice(taskIndex + 1,)]);
      state.tasks = [...state.tasks.slice(0, taskIndex), action.payload, ...state.tasks.slice(taskIndex + 1,)];
    })
    .addCase(deleteTaskAction, (state, action) => {
      const taskIndex = state.tasks.findIndex((task) => task.id === action.payload.id);
      updateTasksLocalStore([...state.tasks.slice(0, taskIndex), ...state.tasks.slice(taskIndex + 1,)]);
      state.tasks = [...state.tasks.slice(0, taskIndex), ...state.tasks.slice(taskIndex + 1,)];
    });
});


