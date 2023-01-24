import AddTaskButton from '../add-task-button/add-task-button';
import SearchingTask from '../searching-task/searching-task';
import ModalWindow from '../../components/modal-window/modal-window';
import NewTaskForm from '../../components/new-task-form/new-task-form';
import {useState} from 'react';
import './header.css';
import ProfileItem from '../profile-item/profile-item';

function Header(): JSX.Element {
  const [modalActive, setModalActive] = useState(false);

  return (
    <header className="header">
      <div className="header__wrapper">
        <div className="header__add-task">
          <AddTaskButton addTaskHandle={setModalActive}/>
        </div>
        <div className="header__search">
          <SearchingTask />
        </div>
        <div className="header__profile">
          <ProfileItem />
        </div>
      </div>
      <ModalWindow active={modalActive} setActive={setModalActive}>
        <NewTaskForm />
      </ModalWindow>
    </header>
  );
}

export default Header;

