import { getLocalTasks, updateTasksLocalStore } from './local-store/local-store';
import {Tasks} from '../types/task';
import { addTaskAction, deleteTaskAction, editTaskAction, getTasksFromLocalStoreAction, changePositionTaskAction } from './action';
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
      state.tasks = [...state.tasks, action.payload];
      updateTasksLocalStore(state.tasks);
    })
    .addCase(editTaskAction, (state, action) => {
      const taskIndex = state.tasks.findIndex((task) => task.id === action.payload.id);
      state.tasks = [...state.tasks.slice(0, taskIndex), action.payload, ...state.tasks.slice(taskIndex + 1,)];
      updateTasksLocalStore(state.tasks);
    })
    .addCase(deleteTaskAction, (state, action) => {
      const taskIndex = state.tasks.findIndex((task) => task.id === action.payload.id);
      state.tasks = [...state.tasks.slice(0, taskIndex), ...state.tasks.slice(taskIndex + 1,)];
      updateTasksLocalStore(state.tasks);
    })
    .addCase(changePositionTaskAction, (state, action) => {
      const movedTask = action.payload.movedCard;
      const nextTask = action.payload.nextCard;
      const remainingTasks = state.tasks.filter((task) => task.id !== movedTask.id);
      const currentTaskIndex = state.tasks.findIndex((task) => task.id === nextTask.id);
      state.tasks = [...remainingTasks.slice(0, currentTaskIndex), movedTask, ...remainingTasks.slice(currentTaskIndex,)];
      updateTasksLocalStore(state.tasks);
    });
});


