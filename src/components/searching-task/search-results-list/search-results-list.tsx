import { useAppSelector } from '../../../hooks';
import { getSearchRequest } from '../../../store/app-process/selectors';
import { getLists } from '../../../store/lists-data/selectors';
import {Tasks} from '../../../types/task';
import { searchTasks } from '../../../utils/search-tasks';
import TaskCard from '../../task-card/task-card';
import './search-results-list.css';

function SearchResultsList(): JSX.Element {
  const request = useAppSelector(getSearchRequest);
  const lists = useAppSelector(getLists);

  const filteredTasks = lists.reduce<Tasks>((tasks, list) => tasks.concat([...searchTasks(list.tasks, request)]), []);


  if (filteredTasks.length === 0) {
    return (
      <section className="search-results">
        <p className="search-result__not-found">Tasks not found</p>
      </section>
    );
  }

  return (
    <section className="search-results">
      <h2 className="search-results__title">Search results:</h2>
      <ul className="search-results__list">
        {filteredTasks.map((task) => (
          <li className="search-results__item" key={task.id}><TaskCard task={task} /></li>
        ))}
      </ul>
    </section>
  );
}

export default SearchResultsList;
