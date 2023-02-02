import {useSelector} from 'react-redux';
import Header from '../../components/header/header';
import TasksList from '../../components/tasks-list/tasks-list';
import { getTasks } from '../../store/tasks-data/selectors';
import './main-page.css';

function MainPage(): JSX.Element {
  const tasks = useSelector(getTasks);

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
