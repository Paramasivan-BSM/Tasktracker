import { Header } from "./components/Header";
import { AddTask } from "./components/AddTask";
import { ShowTask } from "./components/ShowTask";
import "./App.css";
import { useState } from "react";

function App() {
  const [taskList, setTaskList] = useState([]);
  const [task, setTask] = useState({});
  return (
    <>
      <Header />
      <AddTask
        taskList={taskList}
        setTaskList={setTaskList}
        task={task}
        setTask={setTask}
      />
      <ShowTask
        taskList={taskList}
        setTaskList={setTaskList}
        task={task}
        setTask={setTask}
      />
    </>
  );
}

export default App;
