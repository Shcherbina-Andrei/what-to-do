import {NameSpace} from '../../const';
import {State} from '../../types/state';

export const getSearchRequest = (state: State) => state[NameSpace.App].searchRequest;

export const getCurrentFilterType = (state: State) => state[NameSpace.App].currentFilterType;
