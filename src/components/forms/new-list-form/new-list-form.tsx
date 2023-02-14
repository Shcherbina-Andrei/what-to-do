import {customAlphabet} from 'nanoid';
import {useState} from 'react';
import { useAppDispatch } from '../../../hooks';
import { addListAction } from '../../../store/lists-data/action';
import {NewList} from '../../../types/list';
import ModalWindow from '../../modal-window/modal-window';
import './new-list-form.css';

const BLANK_LIST: NewList = {
  title: '',
  tasks: [],
  creatingDate: '',
};

type PropsType = {
  modalActive: boolean;
  setModalActive: (modalActive: boolean) => void;
}

function NewListForm({modalActive, setModalActive}: PropsType): JSX.Element {
  const [listItem, setListItem] = useState(BLANK_LIST);
  const dispatch = useAppDispatch();

  const nowDate = new Date().toLocaleDateString('en-CA');

  const nanoid = customAlphabet('0123456789', 7);

  const closeFormHandle = () => {
    setModalActive(false);
    resetForm();
  };

  const inputHandle = <T,>(property: string, value: T): void => {
    setListItem({
      ...listItem,
      [property]: value
    });
  };

  const resetForm = () => {
    setListItem(BLANK_LIST);
  };

  const submitFormHandle = () => {
    if (listItem.title !== '') {
      dispatch(addListAction({...listItem, id: nanoid(), creatingDate: nowDate}));
      resetForm();
      setModalActive(false);
    }
  };

  return (
    <ModalWindow active={modalActive} setActive={closeFormHandle}>
      <section className="new-list">
        <h2 className="new-list__title">Add your list</h2>
        <form className="new-list__form" onSubmit={
          (evt) => {
            evt.preventDefault();
            submitFormHandle();
          }
        }
        >
          <div className="new-list__field-group">
            <label className="new-list__label" htmlFor="list-title">Title:</label>
            <input className="new-list__input" id="list-title" type="text" placeholder="enter title here..." value={listItem.title} required onChange={
              (evt) => inputHandle<string>('title', evt.target.value)
            }
            />
          </div>
          <button className="new-list__submit-button" type="submit">Add list</button>
        </form>
      </section>
    </ModalWindow>
  );
}

export default NewListForm;
