import Header from '../../components/header/header';
import TasksList from '../../components/tasks-list/tasks-list';
import './main-page.css';

function MainPage(): JSX.Element {
  return (
    <div className="page__container">
      <Header />
      <main className="main">
        <TasksList />
      </main>
    </div>
  );
}

export default MainPage;
