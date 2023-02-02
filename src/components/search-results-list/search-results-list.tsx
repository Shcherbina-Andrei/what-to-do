import { useSelector } from 'react-redux';
import { getSearchedTasks } from '../../store/tasks-data/selectors';
import TaskCard from '../task-card/task-card';
import './search-results-list.css';

function SearchResultsList(): JSX.Element {
  const tasks = useSelector(getSearchedTasks);

  if (tasks.length === 0) {
    return (
      <p className="search-result__not-found">Tasks not found</p>
    );
  }

  return (
    <section className="search-results">
      <h2 className="search-results__title">Search results:</h2>
      <ul className="search-results__list">
        {tasks.map((task) => (
          <li className="search-results__item" key={task.id}><TaskCard task={task} /></li>
        ))}
      </ul>
    </section>
  );
}

export default SearchResultsList;
