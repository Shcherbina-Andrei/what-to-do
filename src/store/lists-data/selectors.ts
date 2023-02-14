import { NameSpace } from './../../const';
import {State} from '../../types/state';

export const getLists = (state: State) => state[NameSpace.Lists].lists;

