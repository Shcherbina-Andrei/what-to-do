import {FilterTypes} from './../const';

export const getNoTasksDescription = (type: FilterTypes): string => {
  switch (type) {
    case FilterTypes.All:
      return 'There are no tasks yet...';
    case FilterTypes.Completed:
      return 'There are no completed tasks...';
    case FilterTypes.InProcess:
      return 'There are no tasks in process...';
    default:
      return 'There are no tasks yet...';
  }
};
