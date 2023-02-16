import { ITask } from "../../types/task";
import Item from "./Item";
import style from "./List.module.scss";

function List({ tasks }: { tasks: ITask[] }) {
  return (
    <aside className={style.listTasks}>
      <ul>
        {tasks.map((task, index) => (
          <Item key={index} {...task} />
        ))}
      </ul>
    </aside>
  );
}

export default List;
