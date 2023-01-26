import {Tasks} from '../../types/task';

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

