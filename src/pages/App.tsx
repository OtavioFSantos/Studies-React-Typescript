import React, { useState } from "react";
import Cronometer from "../components/Cronometer";
import Form from "../components/Form";
import List from "../components/List";
import { ITask } from "../types/task";
import style from "./App.module.scss";

function App() {
  const [tasks, setTasks] = useState<ITask[] | []>([]);
  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks} />
      <List tasks={tasks} />
      <Cronometer />
    </div>
  );
}

export default App;
