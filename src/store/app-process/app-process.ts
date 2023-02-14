import { FilterTypes } from './../../const';
import {NameSpace} from '../../const';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
type AppProcess = {
  searchRequest: string;
  currentFilterType: FilterTypes;
};

const initialState: AppProcess = {
  searchRequest: '',
  currentFilterType: FilterTypes.All
};

export const appProcess = createSlice({
  name: NameSpace.App,
  initialState,
  reducers: {
    setSearchRequest: (state, action: PayloadAction<string>) => {
      state.searchRequest = action.payload;
    },
    setFilterType: (state, action: PayloadAction<FilterTypes>) => {
      state.currentFilterType = action.payload;
    }
  }
});

export const {setSearchRequest, setFilterType} = appProcess.actions;
