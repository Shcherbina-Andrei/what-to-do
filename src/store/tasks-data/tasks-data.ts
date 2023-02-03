import {Tasks} from './../../types/task';
import {createSlice} from '@reduxjs/toolkit';
import {getLocalTasks, updateTasksLocalStore} from '../local-store/local-store';
import { addTaskAction, deleteTaskAction, editTaskAction, getTasksFromLocalStoreAction, changePositionTaskAction, addSearchedTasks } from './action';
import { NameSpace } from '../../const';

type TasksData = {
  tasks: Tasks;
  searchedTasks: Tasks;
}

const initialState: TasksData = {
  tasks: [],
  searchedTasks: []
};

export const tasksData = createSlice({
  name: NameSpace.Tasks,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(addTaskAction, (state, action) => {
        state.tasks = [...state.tasks, action.payload];
      })
      .addCase(editTaskAction, (state, action) => {
        const taskIndex = state.tasks.findIndex((task) => task.id === action.payload.id);
        state.tasks = [...state.tasks.slice(0, taskIndex), action.payload, ...state.tasks.slice(taskIndex + 1,)];
      })
      .addCase(deleteTaskAction, (state, action) => {
        const taskIndex = state.tasks.findIndex((task) => task.id === action.payload.id);
        state.tasks = [...state.tasks.slice(0, taskIndex), ...state.tasks.slice(taskIndex + 1,)];
      })
      .addCase(changePositionTaskAction, (state, action) => {
        const movedTask = action.payload.movedCard;
        const nextTask = action.payload.nextCard;
        const remainingTasks = state.tasks.filter((task) => task.id !== movedTask.id);
        const currentTaskIndex = state.tasks.findIndex((task) => task.id === nextTask.id);
        state.tasks = [...remainingTasks.slice(0, currentTaskIndex), movedTask, ...remainingTasks.slice(currentTaskIndex,)];
      })
      .addCase(addSearchedTasks, (state, action) => {
        state.searchedTasks = action.payload;
      });
  }
});
