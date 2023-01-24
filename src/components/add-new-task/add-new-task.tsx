function NewTask(): JSX.Element {
  return (
    <form className="add-new-task" action="" method="">
      <input className="add-new-task__input" placeholder="Enter your task here..." type="text" />
      <button className="add-new-task__button" type="submit">Add</button>
    </form>
  );
}

export default NewTask;

