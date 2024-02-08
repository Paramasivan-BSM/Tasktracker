import React from "react";
import styles from "./Header.module.css";

export const AddTask = ({ taskList, setTaskList, task, setTask }) => {
  let Handlesubmit = (event) => {
    event.preventDefault();
    // console.log(date);
    // console.log(e.target.task.value);

    if (task.id) {
      const date = new Date();
      const UpdateTaskList = taskList.map((todo) =>
        todo.id === task.id
          ? {
              id: task.id,
              Name: event.target.task.value,
              Time: `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`,
            }
          : todo
      );
      setTaskList(UpdateTaskList);
      setTask({});
    } else {
      const date = new Date();
      let newTask = {
        id: date.getTime(),
        Name: event.target.task.value,
        Time: `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`,
      };
      setTaskList([...taskList, newTask]);
      setTask({});
    }
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
            value={task.Name || ""}
            onChange={(event) => setTask({ ...task, Name: event.target.value })}
          />
          <button type="submit" className="btn btn-success" value="AddTask">
            AddTask
          </button>
        </form>
      </section>
    </div>
  );
};

// import React from "react";
// import styles from "./Header.module.css";

// export const AddTask = ({ taskList, setTaskList, task, setTask }) => {
//   let Handlesubmit = (event) => {
//     event.preventDefault();
//     const date = new Date();

//     // Check if 'task' is defined before accessing its properties
//     let newTask = {
//       id: date.getTime(),
//       Name: task && task.Name ? task.Name : event.target.task.value,
//       Time: `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`,
//     };

//     setTaskList([...taskList, newTask]);
//     event.target.task.value = "";
//   };

//   return (
//     <div className="container mt-5" id={styles.addtask}>
//       <section className="text-center">
//         <form onSubmit={Handlesubmit}>
//           <input
//             type="text"
//             name="task"
//             placeholder="TypeSomething..."
//             className="input"
//             id={styles.input}
//             autoComplete="off"
//             value={task ? task.Name : ""}  // Check if 'task' is defined before accessing its properties
//           />
//           <button type="submit" className="btn btn-success" value="AddTask">
//             AddTask
//           </button>
//         </form>
//       </section>
//     </div>
//   );
// };
