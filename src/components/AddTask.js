import React from "react";
import styles from "./Header.module.css";

export const AddTask = ({ taskList, setTaskList, task, setTask }) => {
  let Handlesubmit = (event) => {
    event.preventDefault();
    const date = new Date();
    // console.log(date);
    // console.log(e.target.task.value);

    let newTask = {
      id: date.getTime(),
      Name: event.target.task.value,
      Time: `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`,
    };
    setTaskList([...taskList, newTask]);
    event.target.task.value = "";
  };
  return (
    <div className="container mt-5  " id={styles.addtask}>
      <section className="text-center">
        <form onSubmit={Handlesubmit}>
          <input
            type="text"
            name="task"
            placeholder="TypeSomething..."
            className="input"
            id={styles.input}
            autoComplete="off"
            value={task.Name}
          />
          <button type="submit" className="btn btn-success" value="AddTask">
            AddTask
          </button>
        </form>
      </section>
    </div>
  );
};