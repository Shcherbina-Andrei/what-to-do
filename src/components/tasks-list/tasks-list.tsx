import { FilterTypes } from '../../const';
import { useAppSelector } from '../../hooks';
import { getCurrentFilterType } from '../../store/app-process/selectors';
import {Tasks} from '../../types/task';
import { filterTasks } from '../../utils/filter-tasks';
import { getNoTasksDescription } from '../../utils/get-no-tasks-descriptions';
import DragAndDropList from '../drag-and-drop-list/drag-and-drop-list';
import './tasks-list.css';

type TasksListProps = {
  tasks: Tasks;
}

function TasksList({tasks}: TasksListProps): JSX.Element {
  const currentFilterType = useAppSelector(getCurrentFilterType);

  if (tasks.length === 0) {
    return (
      <div className="tasks">
        <p className="tasks__no-tasks">{getNoTasksDescription(FilterTypes.All)}</p>
      </div>
    );
  }

  const currentTasks = filterTasks(tasks, currentFilterType);

  if (currentTasks.length === 0) {
    return (
      <div className="tasks">
        <p className="tasks__no-tasks">{getNoTasksDescription(currentFilterType)}</p>
      </div>
    );
  }

  return (
    <section className="tasks">
      <DragAndDropList tasks={currentTasks} />
    </section>
  );
}

export default TasksList;
