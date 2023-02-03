import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { Lists } from './../../types/list';
import { addListAction, editListAction, deleteListAction } from './action';

type ListsData = {
  lists: Lists;
};

const initialState: ListsData = {
  lists: [],
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
      });
  }
});

