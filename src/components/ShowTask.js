import React from "react";
import styles from "./Header.module.css";
// Import Bootstrap Icons CSS
import "bootstrap-icons/font/bootstrap-icons.css";

export const ShowTask = ({ taskList, setTaskList, task, setTask }) => {
  // let Tasks = [
  //   {
  //     id: 1,
  //     Name: "A",
  //     Time: "20:12:32 PM",
  //   },
  //   {
  //     id: 2,
  //     Name: "B",
  //     Time: "20:12:32 PM",
  //   },
  //   {
  //     id: 3,
  //     Name: "C",
  //     Time: "20:12:32 PM",
  //   },
  // ];

  const handleDelete = (id) => {
    const updatedTasklist = taskList.filter((todo) => todo.id !== id);
    setTaskList(updatedTasklist);
  };

  // const handleEdit = (id) => {
  //   let selectedtask = taskList.find((todo) => todo.id !== id);
  //   setTask(selectedtask);
  //   console.log(selectedtask);
  // };
  const handleEdit = (id) => {
    let selectedtask = taskList.find((todo) => todo.id === id);
    setTask(selectedtask);
    console.log(selectedtask);
  };

  return (
    <section className=" mt-3 row" id={styles.showtask}>
      <div>
        <span className="mt-5 col-12">TODO </span>
        <span>{taskList.length}</span>
        <button
          id={styles.cbtn}
          className="btn btn-primary mt-3"
          onClick={() => setTaskList([])}
        >
          ClearAll
        </button>
      </div>
      <div className="row">
        {taskList.map((todo) => {
          return (
            <ul id={styles.ul} className="col-3" key={todo.id}>
              <li>
                <p className="text-center text-warning">{todo.Name}</p>
                <span className="">
                  <i
                    class="bi bi-pencil-square"
                    onClick={() => {
                      handleEdit(todo.id);
                    }}
                  ></i>
                  <i
                    class="bi bi-trash3"
                    onClick={() => handleDelete(todo.id)}
                  ></i>
                </span>
                {/* <p className="text-center">Lorem ipsum dolor sit.</p> */}
                <p className="text-end">{todo.Time}</p>
              </li>
            </ul>
          );
        })}
      </div>
    </section>
  );
};
