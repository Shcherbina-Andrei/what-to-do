import {Lists} from '../../types/list';

export const getLocalLists = () => {
  const listsString = localStorage.getItem('lists');
  if (listsString) {
    return JSON.parse(listsString) as Lists;
  } else {
    return [];
  }
};

export const updateListsLocalStore = (listsItems: Lists): void => {
  localStorage.setItem('lists', JSON.stringify(listsItems));
};


