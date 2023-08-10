import { useState } from "react";
import "./App.css";
import { AddTask } from "./components/AddTask/AddTask";
import { Task } from "./components/Task/Task";
import { DeleteTask } from "./components/DeleteTask/DeleteTask";
import { UpdateTask } from "./components/UpdateTask/UpdateTask";
import { TaskStatus } from "./components/TaskStatus/TaskStatus";

function App() {
  const [tasks, setTasks] = useState<Array<Task>>([]);

  const createList = () => {
    return (
      <ul className="mt-8">
        {tasks.map((t) => {
          return (
            <Task task={t} />
          );
        })}
      </ul>
    );
  };

  return (
    <div className="App">
      <h1>TODOs</h1>

      <AddTask tasks={tasks} setTasks={setTasks} />

      <div>{createList()}</div>

      {/* <DeleteTask tasks={tasks} setTasks={setTasks} />

      <UpdateTask tasks={tasks} setTasks={setTasks} />

      <TaskStatus tasks={tasks} setTasks={setTasks}/> */}
    </div>
  );
}

export default App;
