import './new-task-form.css';
import {useState} from 'react';
import {customAlphabet} from 'nanoid';
import {useDispatch} from 'react-redux';
import { addTaskAction } from '../../store/tasks-data/action';
import ModalWindow from '../../components/modal-window/modal-window';
import { NewTask } from '../../types/task';

const BLANK_TASK: NewTask = {
  title: '',
  description: '',
  setDeadline: false,
  deadline: ''
};

type PropsType = {
  modalActiveForm: boolean;
  setModalActive: (modalActive: boolean) => void;
}

function NewTaskForm({modalActiveForm, setModalActive}: PropsType): JSX.Element {


  const [taskItem, setTaskItem] = useState(BLANK_TASK);
  const dispatch = useDispatch();

  const nanoid = customAlphabet('0123456789', 7);

  const nowDate = new Date().toLocaleDateString('en-CA');

  const inputHandle = <T,>(property: string, value: T): void => {
    setTaskItem({
      ...taskItem,
      [property]: value
    });
  };

  const dateHandle = (evt: React.ChangeEvent<HTMLInputElement>): void => {
    const date = new Date(evt.target.value);
    setTaskItem({
      ...taskItem,
      deadline: date.toLocaleDateString('en-CA'),
    });
  };

  const resetForm = () => {
    setTaskItem(BLANK_TASK);
  };

  const submitFormHandle = () => {
    if (taskItem.description !== '') {
      dispatch(addTaskAction(
        {...taskItem,id: nanoid(), creatingDate: nowDate, isOverdue: false, isDone: false, listId: '12'}));
      resetForm();
      setModalActive(false);
    }
  };

  const closeFormHandle = () => {
    resetForm();
    setModalActive(false);
  };

  return (
    <ModalWindow active={modalActiveForm} setActive={closeFormHandle}>
      <section className="new-task">
        <h2 className="new-task__title">Add your task</h2>
        <form className="new-task__form" onSubmit={(evt) => {
          evt.preventDefault();
          submitFormHandle();
        }}
        >
          <div className="new-task__field-group new-task__field-group--input-text">
            <label className="new-task__label" htmlFor="task-title">Title:</label>
            <input className="new-task__task-input" id="task-title" name="task-title" type="text" placeholder='enter title here...' value={taskItem.title} onChange={
              (evt) => inputHandle<string>('title', evt.target.value)
            }
            />
          </div>
          <div className="new-task__field-group new-task__field-group--input-text">
            <label className="new-task__label" htmlFor="task-description">Description:</label>
            <textarea className="new-task__task-input" id="task-description" name="task-description" placeholder='enter description here...' value={taskItem.description} onChange={
              (evt) => inputHandle<string>('description', evt.target.value)
            }
            />
          </div>
          <div className="new-task__field-group new-task__field-group--checkbox">
            <label className="new-task__label" htmlFor="task-set-deadline">Set deadline:</label>
            <input className="new-task__task-checkbox" id="task-set-deadline" name="task-set-deadline" type="checkbox" checked={taskItem.setDeadline} onChange={
              (evt) => inputHandle<boolean>('setDeadline', evt.target.checked)
            }
            />
          </div>
          {taskItem.setDeadline &&
          <div className="new-task__field-group new-task__field-group--input-text">
            <label className="new-task__label" htmlFor="task-deadline">Deadline:</label>
            <input className="new-task__task-input" id="task-deadline" name="task-deadline" type="date" value={taskItem.deadline} min={nowDate} onChange={dateHandle} />
          </div>}
          <button className="new-task__submit-button" type="submit">Add</button>
        </form>
      </section>
    </ModalWindow>
  );
}

export default NewTaskForm;
