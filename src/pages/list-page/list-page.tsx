import {useSelector} from 'react-redux';
import { useParams } from 'react-router-dom';
import Header from '../../components/header/header';
import TasksList from '../../components/tasks-list/tasks-list';
import { getTasks } from '../../store/tasks-data/selectors';
import './list-page.css';

function ListPage(): JSX.Element {
  const params = useParams();
  const tasks = useSelector(getTasks);
  const currentTasks = tasks.filter((task) => task.id === params.id);

  return (
    <div className="page__container">
      <Header />
      <main className="main">
        <TasksList tasks={currentTasks}/>
      </main>
    </div>
  );
}

export default ListPage;
