import { useState } from 'react';
import { useSelector } from 'react-redux';
import { getLists } from '../../store/lists-data/selectors';
import AddNewListButton from '../add-new-list-button/add-new-list-button';
import ListCard from '../list-card/list-card';
import NewListForm from '../new-list-form/new-list-form';
import './list-of-lists.css';

function ListOfLists(): JSX.Element {
  const [modalActive, setModalActive] = useState(false);
  const lists = useSelector(getLists);

  return (
    <div className="list-of-lists">
      <h2 className="list-of-lists__title">Your lists</h2>
      <ul className="list-of-lists__roster">
        {lists.map((list) => <li className="list-of-list__item" key={list.id}><ListCard list={list}/></li>)}
        <li className="list-of-list__item"><AddNewListButton addListHandle={setModalActive}/></li>
      </ul>
      <NewListForm modalActive={modalActive} setModalActive={setModalActive} />
    </div>
  );
}

export default ListOfLists;
