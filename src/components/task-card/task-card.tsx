import {useState} from 'react';
import { deleteTaskAction} from '../../store/lists-data/action';
import {Task} from '../../types/task';
import TaskCardDetail from './task-card-details/task-card-details';
import {TaskMode} from '../../const';
import './task-card.css';
import EditTask from '../forms/edit-task/edit-task';
import { editTaskAction } from '../../store/lists-data/action';
import { checkDateIsOverdue } from '../../utils/check-date';
import DeleteTaskButton from '../controls/delete-task-button/delete-task-button';
import EditTaskButton from '../controls/edit-task-button/edit-task-button';
import Checkbox from '../controls/checkbox/checkbox';
import { useAppDispatch } from '../../hooks';

type TaskCardProps = {
  task: Task;
}

function TaskCard({task}: TaskCardProps): JSX.Element {
  const [taskMode, setTaskMode] = useState<TaskMode>(TaskMode.Default);
  const dispatch = useAppDispatch();

  const handleDeleteButton = () => {
    dispatch(deleteTaskAction(task));
  };

  const isOverDue = checkDateIsOverdue(task.deadline);

  const handleEditButton = () => {
    if (taskMode !== TaskMode.Editing) {
      setTaskMode(TaskMode.Editing);
    } else {
      setTaskMode(TaskMode.Default);
    }
  };

  const handleIsDoneCheckbox = () => {
    dispatch(editTaskAction({...task, isDone: !task.isDone}));
  };

  const handleFormSave = () => {
    setTaskMode(TaskMode.Default);
  };

  const handleDetailsButton = () => {
    if (taskMode === TaskMode.Default) {
      setTaskMode(TaskMode.Details);
    } else {
      setTaskMode(TaskMode.Default);
    }
  };

  return (
    <div className="task">
      <article className={`task-card ${isOverDue && !task.isDone ? 'task-card--attention' : ''}`}>
        <p className="task-card__title">{task.title}</p>
        <div className="task-card__controls">
          <Checkbox isDone={task.isDone} handleCheckbox={handleIsDoneCheckbox} styleClass="task-card__checkbox"/>
          <EditTaskButton handleEditButton={handleEditButton} />
          <DeleteTaskButton handleDeleteButton={handleDeleteButton} />
          <button className={`task-card__show-detail-button ${taskMode === TaskMode.Details || taskMode === TaskMode.Editing ? 'task-card__show-detail-button--open' : ''}`} type="button"
            onClick={handleDetailsButton}
          >
            <span className="visually-hidden">Show details</span>
          </button>
        </div>
        {(isOverDue && !task.isDone)
        &&
        <svg className="task-card__attention-icon" xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 512 512" fill="#a81919">
          <path d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z"/>
        </svg>}
      </article>
      <article className={taskMode === TaskMode.Details || taskMode === TaskMode.Editing ? 'task-card__details' : 'visually-hidden'}>
        {taskMode === TaskMode.Details
        &&
        <TaskCardDetail task={task} />}
        {taskMode === TaskMode.Editing
        &&
        <EditTask task={task} handleFormSave={handleFormSave}/>}
      </article>
    </div>
  );
}

export default TaskCard;
