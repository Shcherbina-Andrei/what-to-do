import {Task} from '../../../types/task';
import './task-card-details.css';

type PropsType = {
  task: Task;
}


function TaskCardDetail({task}: PropsType): JSX.Element {
  return (
    <div className="task-details">
      <div className="task-details__group">
        <span className="task-details__item">Title:</span>
        <h3 className="task-details__title">{task.title}</h3>
      </div>
      <div className="task-details__group">
        <span className="task-details__item">Description:</span>
        <p className="task-details__description">{task.description}</p>
      </div>
      <div className="task-details__group">
        <span className="task-details__item">Date of creation:</span>
        <p className="task-details__creating-date">{task.creatingDate}</p>
      </div>
      {task.setDeadline
      &&
      <div className="task-details__group">
        <span className="task-details__item">Deadline:</span>
        <p className="task-details__deadline">{task.deadline}</p>
      </div>}
    </div>
  );
}

export default TaskCardDetail;
