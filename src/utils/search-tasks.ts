import {Tasks} from './../types/task';

export const searchTasks = (tasks: Tasks, request: string): Tasks => tasks.filter((task) => (
  task.title.toLowerCase().includes(request.toLowerCase())
      ||
      task.description.toLowerCase().includes(request.toLowerCase())
));
