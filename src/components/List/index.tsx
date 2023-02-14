import React, { useState } from "react";
import Item from "./Item";
import style from "./List.module.scss";

function List() {
  const [tasks, setTasks] = useState([
    {
      task: "React",
      time: "02:00:00",
    },
    {
      task: "Typescript",
      time: "01:00:00",
    },
  ]);
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
