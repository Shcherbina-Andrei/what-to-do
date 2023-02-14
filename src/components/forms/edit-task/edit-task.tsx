import { useState } from 'react';
import { useAppDispatch } from '../../../hooks';
import { editTaskAction } from '../../../store/lists-data/action';
import { Task } from '../../../types/task';
import Checkbox from '../../controls/checkbox/checkbox';
import './edit-task.css';

type EditTaskProps = {
  task: Task;
  handleFormSave: () => void;
}

function EditTask({task, handleFormSave}: EditTaskProps): JSX.Element {
  const [taskItem, setTaskItem] = useState<Task>(task);
  const dispatch = useAppDispatch();

  const inputHandle = <T,>(property: string, value: T): void => {
    setTaskItem({
      ...taskItem,
      [property]: value
    });
  };

  const setDeadlineHandle = () => {
    setTaskItem({
      ...taskItem,
      setDeadline: !taskItem.setDeadline
    });
  };

  const dateHandle = (evt: React.ChangeEvent<HTMLInputElement>): void => {
    const date = new Date(evt.target.value);
    setTaskItem({
      ...taskItem,
      deadline: date.toLocaleDateString('en-CA'),
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
        <input className="task-editing__task-input" id="task-title" name="task-title" type="text" value={taskItem.title} required onChange={
          (evt) => inputHandle<string>('title', evt.target.value)
        }
        />
      </div>
      <div className="task-editing__group">
        <label className="task-editing__label" htmlFor="task-description">Description:</label>
        <textarea className="task-editing__task-input" id="task-description" name="task-description" value={taskItem.description} required onChange={
          (evt) => inputHandle<string>('description', evt.target.value)
        }
        />
      </div>
      <div className="task-editing__group task-editing__group--set-deadline">
        <label className="task-editing__label" htmlFor="edit-task-set-deadline">Set deadline:</label>
        <Checkbox isDone={taskItem.setDeadline} handleCheckbox={setDeadlineHandle} styleClass={'task-editing__task-checkbox'} checkboxId={'edit-task-set-deadline'}/>
      </div>
      {taskItem.setDeadline
      &&
      <div className="task-editing__group">
        <label className="task-editing__label" htmlFor="task-deadline">Deadline:</label>
        <input className="task-editing__task-input" id="task-deadline" name="task-deadline" type="date" value={taskItem.deadline} required onChange={dateHandle} />
      </div>}
      <button className="task-editing__save-button">Save</button>
    </form>
  );
}

export default EditTask;
