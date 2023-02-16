import React from "react";
import { ITask } from "../../types/task";
import Button from "../Button";
import style from "./Form.module.scss";
import { v4 as uuidv4 } from "uuid";

class Form extends React.Component<{
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
}> {
  state = {
    task: "",
    time: "00:00",
  };

  addTask(ev: React.FormEvent) {
    ev.preventDefault();
    this.props.setTasks((oldTasks) => [
      ...oldTasks,
      { ...this.state, selected: false, completed: false, id: uuidv4() },
    ]);
    this.setState({
      task: "",
      time: "00:00",
    });
  }

  render() {
    return (
      <form className={style.newTask} onSubmit={this.addTask.bind(this)}>
        <div className={style.inputContainer}>
          <label htmlFor="task">Task</label>
          <input
            type="text"
            name="task"
            id="task"
            value={this.state.task}
            onChange={(ev) =>
              this.setState({ ...this.state, task: ev.target.value })
            }
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
            value={this.state.time}
            onChange={(ev) =>
              this.setState({ ...this.state, time: ev.target.value })
            }
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
}

export default Form;
