import React from "react";
import Button from "../Button";
import style from "./Form.module.scss";

class Form extends React.Component {
  state = {
    task: "",
    time: "00:00",
  };

  addTask(ev: React.FormEvent) {
    ev.preventDefault();
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
        <Button text="Register" />
      </form>
    );
  }
}

export default Form;
