import React, { MouseEventHandler } from "react";
import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { AddTask } from "./components/AddTask/AddTask";
import { DeleteTask } from "./components/DeleteTask/DeleteTask";
import { UpdateTask } from "./components/UpdateTask/UpdateTask";
import { TaskStatus } from "./components/TaskStatus/TaskStatus";

function App() {
  const [tasks, setTasks] = useState<Array<Task>>([]);

  const createList = () => {
    return (
      <ul>
        {tasks.map((t) => {
          return (
            <li>
              id:{t.id}, название:{t.title}, описание:{t.desc}, выполнена:
              {t.status ? "да" : "нет"}
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <div className="App">
      <h1>TO-DO list</h1>

      <p>{createList()}</p>

      <AddTask tasks={tasks} setTasks={setTasks} />

      <DeleteTask tasks={tasks} setTasks={setTasks} />

      <UpdateTask tasks={tasks} setTasks={setTasks} />

      <TaskStatus tasks={tasks} setTasks={setTasks}/>
    </div>
  );
}

export default App;
