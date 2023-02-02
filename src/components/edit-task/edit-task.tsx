import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTaskAction } from '../../store/tasks-data/action';
import { Task } from '../../types/task';
import './edit-task.css';

type EditTaskProps = {
  task: Task;
  handleFormSave: () => void;
}

function EditTask({task, handleFormSave}: EditTaskProps): JSX.Element {
  const [taskItem, setTaskItem] = useState<Task>(task);
  const dispatch = useDispatch();
  const inputHandle = <T,>(property: string, value: T): void => {
    setTaskItem({
      ...taskItem,
      [property]: value
    });
  };
  const submitHandle = () => {
    if (taskItem.description !== '') {
      dispatch(editTaskAction(taskItem));
      handleFormSave();
    }
  };

  return (
    <form className="task-editing" onSubmit={(evt) => {
      evt.preventDefault();
      submitHandle();}}
    >
      <div className="task-editing__group">
        <label className="task-editing__label" htmlFor="task-title">Title:</label>
        <input className="task-editing__task-input" id="task-title" name="task-title" type="text" value={taskItem.title} onChange={
          (evt) => inputHandle<string>('title', evt.target.value)
        }
        />
      </div>
      <div className="task-editing__group">
        <label className="task-editing__label" htmlFor="task-description">Description:</label>
        <textarea className="task-editing__task-input" id="task-description" name="task-description" value={taskItem.description} onChange={
          (evt) => inputHandle<string>('description', evt.target.value)
        }
        />
      </div>
      <div className="task-editing__group">
        <label className="task-editing__label" htmlFor="task-set-deadline">Set deadline:</label>
        <input className="task-editing__task-checkbox" id="task-set-deadline" name="task-set-deadline" type="checkbox" checked={taskItem.setDeadline} onChange={
          (evt) => inputHandle<boolean>('setDeadline', evt.target.checked)
        }
        />
      </div>
      {taskItem.setDeadline
      &&
      <div className="task-editing__group">
        <label className="task-editing__label" htmlFor="task-deadline">Deadline:</label>
        <input className="new-task-editing__task-input" id="task-deadline" name="task-deadline" type="date" value={taskItem.deadline} onChange={
          (evt) => inputHandle<string>('string', evt.target.value)
        }
        />
      </div>}
      <button className="task-editing__save-button">Save</button>
    </form>
  );
}

export default EditTask;
