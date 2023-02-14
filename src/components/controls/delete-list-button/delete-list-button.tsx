import './delete-list-button.css';

type propsType = {
  handleDeleteList: () => void;
}

function DeleteListButton({handleDeleteList}: propsType): JSX.Element {
  return (
    <button className="delete-list-button" type="button" onClick={handleDeleteList}>
      <span>Delete list</span>
    </button>
  );
}

export default DeleteListButton;
