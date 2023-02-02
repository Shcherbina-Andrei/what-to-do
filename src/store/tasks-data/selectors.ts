import { NameSpace } from './../../const';
import { Tasks } from './../../types/task';
import { State } from './../state';

export const getTasks = (state: State): Tasks => state[NameSpace.Tasks].tasks;
export const getSearchedTasks = (state: State): Tasks => state[NameSpace.Tasks].searchedTasks;
