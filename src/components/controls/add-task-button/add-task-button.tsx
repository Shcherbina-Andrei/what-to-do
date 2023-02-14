import './add-task-button.css';

type ComponentProps = {
  addTaskHandle: (modalActive: boolean) => void;
}

function AddTaskButton({addTaskHandle}: ComponentProps): JSX.Element {
  return (
    <button className="add-task-button" type="button" onClick={() => (addTaskHandle(true))}>
      <svg className="add-task-button__icon" width="30" height="28" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="10.0833" y="3.66663" width="1.83333" height="14.6667" />
        <rect x="18.3333" y="10.0833" width="1.83333" height="14.6667" transform="rotate(90 18.3333 10.0833)"/>
      </svg>
      <span>Add task</span>
    </button>
  );
}

export default AddTaskButton;
