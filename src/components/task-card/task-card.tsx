import {useState} from 'react';
import { useDispatch } from 'react-redux';
import { deleteTaskAction} from '../../store/tasks-data/action';
import {Task} from '../../types/task';
import TaskCardDetail from '../task-card-details/task-card-details';
import {TaskMode} from '../../const';
import './task-card.css';
import EditTask from '../edit-task/edit-task';
import { checkDateIsOverdue } from '../../utils/checkDate';

type TaskCardProps = {
  task: Task;
}

function TaskCard({task}: TaskCardProps): JSX.Element {
  const [taskMode, setTaskMode] = useState<TaskMode>(TaskMode.Default);
  const dispatch = useDispatch();

  const deleteButtonHandle = () => {
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
      <article className={`task-card ${isOverDue ? 'task-card--attention' : ''}`}>
        <p className="task-card__description">{task.title}</p>
        <div className="task-card__controls">
          <button className="task-card__button task-card__button--edit" type="button" onClick={handleEditButton}>
            <svg className="task-card__edit-icon" width="30" height="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M18.4324 4C18.2266 4 18.0227 4.04055 17.8325 4.11933C17.6423 4.19811 17.4695 4.31358 17.3239 4.45914L5.25659 16.5265L4.42524 19.5748L7.47353 18.7434L19.5409 6.67608C19.6864 6.53051 19.8019 6.3577 19.8807 6.16751C19.9595 5.97732 20 5.77348 20 5.56761C20 5.36175 19.9595 5.1579 19.8807 4.96771C19.8019 4.77752 19.6864 4.60471 19.5409 4.45914C19.3953 4.31358 19.2225 4.19811 19.0323 4.11933C18.8421 4.04055 18.6383 4 18.4324 4ZM17.0671 2.27157C17.5 2.09228 17.9639 2 18.4324 2C18.9009 2 19.3648 2.09228 19.7977 2.27157C20.2305 2.45086 20.6238 2.71365 20.9551 3.04493C21.2864 3.37621 21.5492 3.7695 21.7285 4.20235C21.9077 4.63519 22 5.09911 22 5.56761C22 6.03611 21.9077 6.50003 21.7285 6.93288C21.5492 7.36572 21.2864 7.75901 20.9551 8.09029L8.69996 20.3454C8.57691 20.4685 8.42387 20.5573 8.25597 20.6031L3.26314 21.9648C2.91693 22.0592 2.54667 21.9609 2.29292 21.7071C2.03917 21.4534 1.94084 21.0831 2.03526 20.7369L3.39694 15.7441C3.44273 15.5762 3.53154 15.4231 3.6546 15.3001L15.9097 3.04493C16.241 2.71365 16.6343 2.45086 17.0671 2.27157Z"/>
            </svg>
          </button>
          <button className="task-card__button task-card__button--delete" type="button" onClick={deleteButtonHandle}>
            <svg className="task-card__delete-icon" viewBox="0 0 512 512" width="30" height="30">

              <g id="SVGRepo_bgCarrier" strokeWidth="0"/>

              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>

              <g id="SVGRepo_iconCarrier"> <g> <g> <rect x="166.4" y="230.4" width="25.6" height="204.8"/> </g> </g> <g> <g> <rect x="243.2" y="230.4" width="25.6" height="204.8"/> </g> </g> <g> <g> <rect x="320" y="230.4" width="25.6" height="204.8"/> </g> </g> <g> <g> <path d="M422.4,51.2H320V25.6C320,11.46,308.54,0,294.4,0h-76.8C203.46,0,192,11.46,192,25.6v25.6H89.6 C75.46,51.2,64,62.66,64,76.8V128c0,14.14,11.46,25.6,25.6,25.6v332.8c0,14.14,11.46,25.6,25.6,25.6h281.6 c14.14,0,25.6-11.46,25.6-25.6V153.6c14.14,0,25.6-11.46,25.6-25.6V76.8C448,62.66,436.54,51.2,422.4,51.2z M217.6,25.6h76.8v25.6 h-76.8V25.6z M396.8,486.4H115.2V153.6h281.6V486.4z M422.4,128H89.6V76.8h332.8V128z"/> </g> </g> </g>

            </svg>
          </button>
          <button className={`task-card__show-detail-button ${taskMode === TaskMode.Details || taskMode === TaskMode.Editing ? 'task-card__show-detail-button--open' : ''}`} type="button"
            onClick={handleDetailsButton}
          >
            <span className="visually-hidden">Show details</span>
          </button>
        </div>
        {isOverDue
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
