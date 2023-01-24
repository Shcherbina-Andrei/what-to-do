import './searching-task.css';

function SearchingTask(): JSX.Element {
  return (
    <form className="search-task" action="" method="get">
      <input className="search-task__input" placeholder="Search here..." type="search" />
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
    </form>
  );
}

export default SearchingTask;
