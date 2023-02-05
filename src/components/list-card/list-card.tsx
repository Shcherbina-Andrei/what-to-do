import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import {deleteListAction} from '../../store/lists-data/action';
import { List } from '../../types/list';
import './list-card.css';

type PropsType = {
  list: List;
}

function ListCard({list}: PropsType): JSX.Element {
  const dispatch = useDispatch();
  const deleteButtonHandle = () => {
    dispatch(deleteListAction(list));
  };

  return (
    <article className="list-card">
      <div className="list-card__info">
        <h2 className="list-card__title">{list.title}</h2>
        <p className="list-card__numbers-of-tasks">Number of tasks: {list.tasks.length}</p>
      </div>
      <div className="list-card__controls">
        <Link className="list-card__link" to={`${AppRoute.Lists}/${list.id}`}>Open</Link>
        <button className="list-card__delete-button" onClick={deleteButtonHandle}>Delete</button>
      </div>
    </article>
  );
}

export default ListCard;
