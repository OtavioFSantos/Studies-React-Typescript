import { ITask } from "../../types/task";
import Item from "./Item";
import style from "./List.module.scss";

interface Props {
  tasks: ITask[];
  selectTask: (selectedTask: ITask) => void;
}

function List({ tasks, selectTask }: Props) {
  return (
    <aside className={style.listTasks}>
      <ul>
        {tasks.map((task) => (
          <Item selectTask={selectTask} key={task.id} {...task} />
        ))}
      </ul>
    </aside>
  );
}

export default List;
