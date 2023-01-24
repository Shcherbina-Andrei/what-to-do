import {tasks} from '../mocks/tasks';
import {Tasks} from '../types/task';
import { addTaskAction, editTaskAction } from './action';
import {createReducer} from '@reduxjs/toolkit';

type InitialState = {
  tasks: Tasks;
}

const initialState: InitialState = {
  tasks: tasks,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addTaskAction, (state, action) => {
      state.tasks = [...state.tasks, action.payload];
    })
    .addCase(editTaskAction, (state, action) => {
      const taskIndex = state.tasks.findIndex((task) => task.id === action.payload.id);
      state.tasks = [...state.tasks.slice(0, taskIndex), action.payload, ...state.tasks.slice(taskIndex + 1,)];
    });
});


