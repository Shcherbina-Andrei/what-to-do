export type NewTask = {
  title: string;
  description: string;
  setDeadline: boolean;
  deadline: string;
}

export type Task = {
  id: string;
  title: string;
  description: string;
  creatingDate: string;
  setDeadline: boolean;
  deadline: string;
  isDone: boolean;
  isOverdue: boolean;
  listId: string;
};

export type Tasks = Task[];
