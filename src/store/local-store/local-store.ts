import {Lists} from '../../types/list';
import {Tasks} from '../../types/task';

export const getLocalLists = () => {
  const listsString = localStorage.getItem('lists');
  if (listsString) {
    return JSON.parse(listsString) as Lists;
  } else {
    return [];
  }
};

export const updateListsLocalStore = (listsItems: Lists) => {
  localStorage.setItem('lists', JSON.stringify(listsItems));
};

export const getLocalTasks = () => {
  const tasksString = localStorage.getItem('tasks');
  if (tasksString) {
    return JSON.parse(tasksString) as Tasks;
  } else {
    return [];
  }
};

export const updateTasksLocalStore = (tasksItems: Tasks) => {
  localStorage.setItem('tasks', JSON.stringify(tasksItems));
};

