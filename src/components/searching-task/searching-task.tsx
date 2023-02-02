import {SyntheticEvent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { AppRoute } from '../../const';
import { addSearchedTasks } from '../../store/tasks-data/action';
import { getTasks } from '../../store/tasks-data/selectors';
import { Task } from '../../types/task';
import './searching-task.css';

function SearchingTask(): JSX.Element {
  const [searchField, setSearchField] = useState('');
  const [displaySuggestions, setDisplaySuggestions] = useState(false);
  const dispatch = useDispatch();
  const tasks = useSelector(getTasks);
  const navigate = useNavigate();

  useEffect(() => {
    document.addEventListener('click', () => {
      setDisplaySuggestions(false);
    });
  });

  const filteredTasks = tasks.filter((task) => (
    task.title.toLowerCase().includes(searchField.toLowerCase())
      ||
      task.description.toLowerCase().includes(searchField.toLowerCase())
  ));

  const handleOnSearchInput = (text: string) => {
    setSearchField(text);
    setDisplaySuggestions(true);
  };

  const handleOnSubmit = (evt: SyntheticEvent) => {
    evt.preventDefault();
    dispatch(addSearchedTasks(filteredTasks));
    navigate(AppRoute.SearchResult);
    setDisplaySuggestions(false);
  };

  const handleTaskLink = (task: Task) => {
    dispatch(addSearchedTasks([task]));
    setDisplaySuggestions(false);
  };

  return (
    <form className="search-task" action="" method="get" onSubmit={handleOnSubmit} onClick={(evt) => evt.stopPropagation()}>
      <input className="search-task__input" placeholder="Search here..." type="search" onChange={(evt) => handleOnSearchInput(evt.target.value)} onClick={() => setDisplaySuggestions(true)}/>
      <button className="search-task__button" type="submit">
        <svg className="search-task__icon" width="30" height="30" viewBox="0 0 64.00 64.00" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#000000" strokeWidth="5.4399999999999995">
          <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
          <g id="SVGRepo_iconCarrier">
            <circle cx="24" cy="24" r="16"/>
            <line x1="56" y1="56" x2="35.31" y2="35.31"/>
          </g>
        </svg>
      </button>
      {displaySuggestions && searchField && filteredTasks.length > 0
      &&
      <div className= "search-task__suggested-tasks">
        {filteredTasks.map((task) => (
          <Link className="search-task__suggested-item" to={AppRoute.SearchResult} key={task.id} onClick={() => handleTaskLink(task)}>{task.title}</Link>
        ))}
      </div>}
    </form>
  );
}

export default SearchingTask;
