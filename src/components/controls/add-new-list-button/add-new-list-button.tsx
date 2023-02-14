import './add-new-list-button.css';

type ComponentProps = {
  addListHandle: (modalActive: boolean) => void;
}

function AddNewListButton({addListHandle}: ComponentProps): JSX.Element {
  return (
    <button className="add-new-list-button" type="button" onClick={() => addListHandle(true)}>
      <span className="visually-hidden">Add new list</span>
    </button>
  );
}

export default AddNewListButton;
