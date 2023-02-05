import { useState } from 'react';
import {useSelector} from 'react-redux';
import { useParams } from 'react-router-dom';
import AddTaskButton from '../../components/add-task-button/add-task-button';
import DeleteListButton from '../../components/delete-list-button/delete-list-button';
import Header from '../../components/header/header';
import NewTaskForm from '../../components/new-task-form/new-task-form';
import TasksList from '../../components/tasks-list/tasks-list';
import { getLists } from '../../store/lists-data/selectors';
import './list-page.css';

function ListPage(): JSX.Element {
  const params = useParams();
  const [modalActive, setModalActive] = useState(false);
  const lists = useSelector(getLists);
  const currentList = lists.find((list) => list.id === params.id);

  if (!currentList) {
    return (
      <p>List not found</p>
    );
  }

  return (
    <div className="page__container">
      <Header />
      <main className="main list-page">
        <h2 className="list-page__title page-title">{currentList.title}</h2>
        <div className="list-page__controls">
          <AddTaskButton addTaskHandle={setModalActive}/>
          <DeleteListButton />
        </div>
        <TasksList tasks={currentList.tasks}/>
        <NewTaskForm modalActiveForm={modalActive} setModalActive={setModalActive} listId={currentList.id}/>
      </main>
    </div>
  );
}

export default ListPage;
