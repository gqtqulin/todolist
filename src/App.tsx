import { useState } from "react";
import "./App.css";
import { AddTask } from "./components/AddTask/AddTask";
import { Task } from "./components/Task/Task";

function App() {
  const [tasks, setTasks] = useState<Array<Task>>([]);

  const deleteTask = (id: number) => {
    //const taskIndexToDelete: number = tasks.findIndex((t) => t.id === id);
    //const candidateTask: Task = tasks[taskIndexToDelete];
    const candidateTask: Task | undefined = tasks.find(t => t.id === id);
    if (candidateTask == undefined)
      throw new Error("Задача для удаления не найдена");
    const updatedTasks: Array<Task> = tasks.filter((t) => t !== candidateTask);
    setTasks(updatedTasks);
  };

  const updateTasks = (id: number, title: string, desc: string, status: boolean) => {
    const taskIndexToUpdate: number = tasks.findIndex((t) => t.id === id);
    const candidateTask: Task = tasks[taskIndexToUpdate];
    if (candidateTask == undefined)
      throw new Error("Задача для обновления не найдена");
    candidateTask.title = title;
    candidateTask.desc = desc;
    const updatedTasks: Array<Task> = tasks.map(t => {
        if (t.id === id) return candidateTask;
        return t;
    });
    setTasks(updatedTasks);
    console.log(tasks);
  };

  const createList = () => {
    return (
      <ul className="mt-8">
        {tasks.map((t) => {
          return (
            <li className="list-none" key={t.id}><Task task={t} deleteTask={deleteTask} updateTasks={updateTasks} /></li>
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

    </div>
  );
}

export default App;
