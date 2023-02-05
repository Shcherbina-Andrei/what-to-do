import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { Tasks } from '../../types/task';
import { Lists } from './../../types/list';
import { addListAction, editListAction, deleteListAction, changeListOrderAction, addTaskAction, deleteTaskAction, editTaskAction, addSearchedTasks } from './action';

type ListsData = {
  lists: Lists;
  searchedTasks: Tasks;
};

const initialState: ListsData = {
  lists: [],
  searchedTasks: []
};

export const listsData = createSlice({
  name: NameSpace.Lists,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(addListAction, (state, action) => {
        state.lists = [...state.lists, action.payload];
      })
      .addCase(editListAction, (state, action) => {
        const listIndex = state.lists.findIndex((list) => list.id === action.payload.id);
        state.lists = [...state.lists.slice(0, listIndex), action.payload, ...state.lists.slice(listIndex + 1,)];
      })
      .addCase(deleteListAction, (state, action) => {
        const listIndex = state.lists.findIndex((list) => list.id === action.payload.id);
        state.lists = [...state.lists.slice(0, listIndex), ...state.lists.slice(listIndex + 1)];
      })
      .addCase(addTaskAction, (state, action) => {
        const currentListIndex = state.lists.findIndex((list) => list.id === action.payload.listId);
        state.lists[currentListIndex].tasks = [...state.lists[currentListIndex].tasks, action.payload];
      })
      .addCase(deleteTaskAction, (state, action) => {
        const currentListIndex = state.lists.findIndex((list) => list.id === action.payload.listId);
        const deletingTaskIndex = state.lists[currentListIndex].tasks.findIndex((task) => action.payload.id === task.id);
        state.lists[currentListIndex].tasks = [...state.lists[currentListIndex].tasks.slice(0, deletingTaskIndex), ...state.lists[currentListIndex].tasks.slice(deletingTaskIndex + 1,)];
      })
      .addCase(editTaskAction, (state, action) => {
        const currentListIndex = state.lists.findIndex((list) => list.id === action.payload.listId);
        const taskIndex = state.lists[currentListIndex].tasks.findIndex((task) => task.id === action.payload.id);
        state.lists[currentListIndex].tasks = [...state.lists[currentListIndex].tasks.slice(0, taskIndex), action.payload, ...state.lists[currentListIndex].tasks.slice(taskIndex + 1,)];
      })
      .addCase(changeListOrderAction, (state, action) => {
        const movedTask = action.payload.movedTask;
        const replacedTask = action.payload.replacedTask;
        const currentListIndex = state.lists.findIndex((list) => movedTask.listId === list.id);
        const replacedTaskIndex = state.lists[currentListIndex].tasks.findIndex((task) => replacedTask.id === task.id);
        const remainingTasks = state.lists[currentListIndex].tasks.filter((task) => task.id !== movedTask.id);
        state.lists[currentListIndex].tasks = [...remainingTasks.slice(0, replacedTaskIndex), movedTask, ...remainingTasks.slice(replacedTaskIndex,)];
      })
      .addCase(addSearchedTasks, (state, action) => {
        state.searchedTasks = action.payload;
      });
  }
});

