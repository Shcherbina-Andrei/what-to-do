import {useSelector} from 'react-redux';
import Header from '../../components/header/header';
import TasksList from '../../components/tasks-list/tasks-list';
import {State} from '../../store/state';
import { Tasks } from '../../types/task';
import './main-page.css';

function MainPage(): JSX.Element {
  const tasks = useSelector<State, Tasks>((state) => state.tasks);

  return (
    <div className="page__container">
      <Header />
      <main className="main">
        <TasksList tasks={tasks}/>
      </main>
    </div>
  );
}

export default MainPage;
