import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeListOrderAction } from '../../store/lists-data/action';
import { Task, Tasks } from '../../types/task';
import TaskCard from '../task-card/task-card';
import './tasks-list.css';

type TasksListProps = {
  tasks: Tasks;
}

function TasksList({tasks}: TasksListProps): JSX.Element {
  const [currentCard, setCurrentCard] = useState<Task | null>(null);

  const dispatch = useDispatch();

  if (tasks.length === 0) {
    return (
      <div className="tasks">
        <p className="tasks__no-tasks">There are no tasks yet...</p>
      </div>
    );
  }

  const handleDragStart = (evt: React.DragEvent<HTMLLIElement>, task: Task) => {
    setCurrentCard(task);
    const currentElement = evt.target as HTMLLIElement;
    currentElement.classList.add('tasks__item--selected');
  };

  const handleDragEnd = (evt: React.DragEvent<HTMLLIElement>) => {
    const currentElement = evt.target as HTMLLIElement;
    currentElement.classList.remove('tasks__item--selected');
  };

  const handleDragOver = (evt: React.DragEvent<HTMLLIElement>) => {
    evt.preventDefault();
  };

  const handleDrop = (evt: React.DragEvent<HTMLLIElement>, task: Task) => {
    if (!currentCard) {
      return null;
    }
    if (currentCard.id === task.id) {
      return;
    }
    dispatch(changeListOrderAction({movedTask: currentCard, replacedTask: task}));
  };

  return (
    <section className="tasks">
      <ul className="tasks__list">
        {tasks.map((task) =>
          (
            <li
              className="tasks__item" id={`task__${task.id}`}
              key={task.id}
              draggable
              onDragStart={(evt) => handleDragStart(evt, task)}
              onDragEnd={(evt) => handleDragEnd(evt)}
              onDragOver={(evt) => handleDragOver(evt)}
              onDrop={(evt) => handleDrop(evt, task)}
            >
              <TaskCard task={task} />
            </li>
          )
        )}
      </ul>
    </section>
  );
}

export default TasksList;
