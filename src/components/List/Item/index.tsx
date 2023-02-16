import style from "../List.module.scss";
import { ITask } from "../../../types/task";

export default function Item({ task, time, selected, completed, id }: ITask) {
  return (
    <li className={style.item}>
      <h3>{task}</h3>
      <span>{time}</span>
    </li>
  );
}
