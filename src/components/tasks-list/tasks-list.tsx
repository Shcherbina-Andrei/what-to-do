import { Tasks } from '../../types/task';
import TaskCard from '../task-card/task-card';
import './tasks-list.css';

type TasksListProps = {
  tasks: Tasks;
}

function TasksList({tasks}: TasksListProps): JSX.Element {
  return (
    <section className="tasks">
      <h2 className='tasks__title'>What to do</h2>
      <ul className="tasks__list">
        {tasks.map((task) => <li className="tasks__item" key={task.id}><TaskCard task={task} /></li>)}
      </ul>
    </section>
  );
}

export default TasksList;
