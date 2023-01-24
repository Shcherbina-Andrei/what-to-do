import TaskCard from '../task-card/task-card';
import './tasks-list.css';

function TasksList(): JSX.Element {
  return (
    <section className="tasks">
      <h2 className='tasks__title'>What to do</h2>
      <div className="tasks__list">
        <TaskCard />
      </div>
    </section>
  );
}

export default TasksList;
