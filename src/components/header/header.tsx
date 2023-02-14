import SearchingTask from '../searching-task/searching-task';
import './header.css';
import ProfileItem from '../profile-item/profile-item';

function Header(): JSX.Element {

  return (
    <header className="header">
      <div className="header__wrapper">
        <SearchingTask />
        <ProfileItem />
      </div>
    </header>
  );
}

export default Header;

