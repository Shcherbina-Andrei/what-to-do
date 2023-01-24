import {Link} from 'react-router-dom';
import AddTaskButton from '../add-task-button/add-task-button';
import SearchingTask from '../searching-task/searching-task';
import './header.css';

function Header(): JSX.Element {
  return (
    <header className="header">
      <div className="header__wrapper">
        <div className="header__add-task">
          <AddTaskButton />
        </div>
        <div className="header__search">
          <SearchingTask />
        </div>
        <div className="header__profile">
          <div className="profile">
            <svg className="profile__icon" width="30" height="30" viewBox="0 0 24.00 24.00" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" fill="#000000">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="0.336"/>
              <g id="SVGRepo_iconCarrier">
                <circle cx="12" cy="7.25" r="5.73"/>
                <path d="M1.5,23.48l.37-2.05A10.3,10.3,0,0,1,12,13h0a10.3,10.3,0,0,1,10.13,8.45l.37,2.05"/>
              </g>
            </svg>
            <Link className="profile__link" to="">
              <span className="profile__signout">Sign out</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

