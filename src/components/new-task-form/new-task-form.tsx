import './new-task-form.css';
import {useState} from 'react';
import {customAlphabet} from 'nanoid';
import {useDispatch} from 'react-redux';
import { addTaskAction } from '../../store/action';

function NewTaskForm(): JSX.Element {
  const [taskItem, setTaskItem] = useState({description: ''});
  const dispatch = useDispatch();

  const nanoid = customAlphabet('0123456789', 7);

  const submitFormHandle = () => {
    if (taskItem.description !== '') {
      dispatch(addTaskAction({id: nanoid(), description: taskItem.description}));
    }
  };

  return (
    <section className="new-task">
      <h2 className="new-task__title">Add your task</h2>
      <form className="new-task__form" onSubmit={(evt) => {
        evt.preventDefault();
        submitFormHandle();
      }}
      >
        <input className="new-task__task-input" type="text" placeholder='enter your task here...' value={taskItem.description} onChange={
          (evt) => {
            setTaskItem({
              ...taskItem,
              description: evt.target.value
            });
          }
        }
        />
        <button className="new-task__submit-button" type="submit">Add</button>
      </form>
    </section>
  );
}

export default NewTaskForm;
