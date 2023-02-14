import { useState } from 'react';
import { useAppDispatch } from '../../hooks';
import { Task, Tasks } from '../../types/task';
import { changeListOrderAction } from '../../store/lists-data/action';
import TaskCard from '../task-card/task-card';
import './drag-and-drop-list.css';

type propsType = {
  tasks: Tasks;
}

function DragAndDropList({tasks}: propsType): JSX.Element {
  const [currentCard, setCurrentCard] = useState<Task | null>(null);

  const dispatch = useAppDispatch();

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
  );
}

export default DragAndDropList;
