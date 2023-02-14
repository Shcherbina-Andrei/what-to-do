import { useState } from 'react';
import { getLists } from '../../store/lists-data/selectors';
import AddNewListButton from '../controls/add-new-list-button/add-new-list-button';
import ListCard from '../list-card/list-card';
import NewListForm from '../forms/new-list-form/new-list-form';
import './list-of-lists.css';
import { useAppSelector } from '../../hooks';

function ListOfLists(): JSX.Element {
  const [modalActive, setModalActive] = useState(false);
  const lists = useAppSelector(getLists);

  return (
    <div className="list-of-lists">
      <ul className="list-of-lists__roster">
        {lists.map((list) => <li className="list-of-list__item" key={list.id}><ListCard list={list}/></li>)}
        <li className="list-of-list__item"><AddNewListButton addListHandle={setModalActive}/></li>
      </ul>
      <NewListForm modalActive={modalActive} setModalActive={setModalActive} />
    </div>
  );
}

export default ListOfLists;
