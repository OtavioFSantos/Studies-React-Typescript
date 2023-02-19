import React, { useState } from "react";
import { ITask } from "../../types/task";
import Button from "../Button";
import style from "./Form.module.scss";
import { v4 as uuidv4 } from "uuid";

interface Props {
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
}

function Form({ setTasks }: Props) {
  const [task, setTask] = useState("");
  const [time, setTime] = useState("00:00");

  function addTask(ev: React.FormEvent) {
    ev.preventDefault();
    setTasks((oldTasks) => [
      ...oldTasks,
      { task, time, selected: false, completed: false, id: uuidv4() },
    ]);
    setTask("");
    setTime("00:00");
  }

  return (
    <form className={style.newTask} onSubmit={addTask}>
      <div className={style.inputContainer}>
        <label htmlFor="task">Task</label>
        <input
          type="text"
          name="task"
          id="task"
          value={task}
          onChange={(ev) => setTask(ev.target.value)}
          placeholder="e.g. React"
          required
        />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor="time">Time</label>
        <input
          type="time"
          step="1"
          name="time"
          value={time}
          onChange={(ev) => setTime(ev.target.value)}
          id="time"
          min="00:00:00"
          max="01:30:00"
          required
        />
      </div>
      <Button text="Register" type="submit" />
    </form>
  );
}

export default Form;
