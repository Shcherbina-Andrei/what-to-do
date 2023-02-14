import {Tasks} from './../types/task';
import {FilterTypes} from '../const';

export const filterTasks = (tasks: Tasks, type: FilterTypes) => {
  switch (type) {
    case FilterTypes.All:
      return tasks;
    case FilterTypes.Completed:
      return tasks.filter((task) => task.isDone);
    case FilterTypes.InProcess:
      return tasks.filter((task) => !task.isDone);
    default:
      return tasks;
  }
};
