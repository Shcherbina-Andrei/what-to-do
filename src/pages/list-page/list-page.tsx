import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {useSelector} from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import AddTaskButton from '../../components/controls/add-task-button/add-task-button';
import DeleteListButton from '../../components/controls/delete-list-button/delete-list-button';
import Filtering from '../../components/filtering/filtering';
import Header from '../../components/header/header';
import HomeLink from '../../components/controls/home-link/home-link';
import NewTaskForm from '../../components/forms/new-task-form/new-task-form';
import TasksList from '../../components/tasks-list/tasks-list';
import { AppRoute } from '../../const';
import { deleteListAction } from '../../store/lists-data/action';
import { getLists } from '../../store/lists-data/selectors';
import './list-page.css';

function ListPage(): JSX.Element {
  const params = useParams();
  const [modalActive, setModalActive] = useState(false);
  const lists = useSelector(getLists);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentList = lists.find((list) => list.id === params.id);

  if (!currentList) {
    return (
      <p>List not found</p>
    );
  }

  const handleDeleteList = () => {
    dispatch(deleteListAction(currentList));
    navigate(AppRoute.Main);
  };

  return (
    <div className="page__container">
      <Header />
      <main className="main list-page">
        <div className="list-page__back-to-home">
          <HomeLink />
        </div>
        <h2 className="list-page__title page-title">{currentList.title}</h2>
        <div className="list-page__controls">
          <div className="list-page__add-task-button-wrapper">
            <AddTaskButton addTaskHandle={setModalActive}/>
          </div>
          {currentList.tasks.length > 0
            &&
            <div className="list-page__filter-wrapper">
              <Filtering />
            </div>}
          <div className="list-page__delete-list-button-wrapper">
            <DeleteListButton handleDeleteList={handleDeleteList} />
          </div>
        </div>
        <TasksList tasks={currentList.tasks} />
        <NewTaskForm modalActiveForm={modalActive} setModalActive={setModalActive} listId={currentList.id}/>
      </main>
    </div>
  );
}

export default ListPage;
