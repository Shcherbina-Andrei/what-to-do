import { NameSpace } from './../../const';
import { State } from './../state';
export const getLists = (state: State) => state[NameSpace.Lists].lists;
