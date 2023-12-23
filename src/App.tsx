import { useEffect, useState } from "react";
import "./App.css";
import styles from "./App.module.css";
import { AddTask } from "./components/AddTask/AddTask";
import { Task } from "./components/Task/Task";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

function App() {
    const [tasks, setTasks] = useState<Array<Task>>([]);

    useEffect(() => {
        const loadedTasks: string | null = localStorage.getItem("tasks"); // --- берем что хранится в localStorage сейчас
        if (loadedTasks) {
            if (JSON.stringify(tasks) !== loadedTasks) {
                setTasks(JSON.parse(loadedTasks));
            }
        }
    }, []);

    // --- сохранение задач
    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    const deleteTask = (id: number) => {
        //const taskIndexToDelete: number = tasks.findIndex((t) => t.id === id);
        //const candidateTask: Task = tasks[taskIndexToDelete];
        const candidateTask: Task | undefined = tasks.find((t) => t.id === id);
        if (candidateTask == undefined)
            throw new Error("Задача для удаления не найдена");
        const updatedTasks: Array<Task> = tasks.filter(
            (t) => t !== candidateTask
        );
        setTasks(updatedTasks);
    };

    const updateTasks = (
        id: number,
        title: string,
        desc: string,
        status: boolean
    ) => {
        const taskIndexToUpdate: number = tasks.findIndex((t) => t.id === id);
        const candidateTask: Task = tasks[taskIndexToUpdate];
        if (candidateTask) {
            candidateTask.title = title;
            candidateTask.desc = desc;
            candidateTask.status = status;
            const updatedTasks: Array<Task> = tasks.map((t) => {
                if (t.id === id) return candidateTask;
                return t;
            });
            setTasks(updatedTasks);
            console.log(tasks);
        } else {
            throw new Error("Задача для обновления не найдена");
        }
    };

    const createList = () => {
        return (
            <ul className="mt-10">
                {tasks.map((t) => {
                    return (
                        <li className="list-none mb-4" key={t.id}>
                            <Task
                                task={t}
                                deleteTask={deleteTask}
                                updateTasks={updateTasks}
                            />
                        </li>
                    );
                })}
            </ul>
        );
    };

    return (
        <div className={styles.appContainer}>
            <div className={styles.headerText}>
                <h1>Список задач:</h1>
            </div>

            <AddTask tasks={tasks} setTasks={setTasks} />

            <div>{createList()}</div>
        </div>
    );
}

export default App;
