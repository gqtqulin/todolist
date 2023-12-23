import { useState } from "react";
import styles from "./AddTask.module.css";
import { Button, TextField } from "@mui/material";

export const AddTask = ({ tasks, setTasks }: Props) => {
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const addTask = (title: string, desc: string): void => {
        setIsButtonDisabled(true);
        setTimeout(() => {
            setTasks([
                ...tasks,
                {
                    id: Date.now(),
                    title: title,
                    desc: desc,
                    status: false,
                },
            ]);
            setIsButtonDisabled(false);
        }, 750);
    };

    const handlerSubmitAddTaskForm = (
        event: React.FormEvent<HTMLFormElement>
    ) => {
        event.preventDefault();
        if (title) addTask(title, desc);
        else {
            alert("Заполните имя задачи!");
        }
        setTitle("");
        setDesc("");
    };

    return (
        <div className={styles.addTaskContainer}>
            <form
                className={styles.addTaskForm}
                onSubmit={handlerSubmitAddTaskForm}
            >
                <TextField
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    id="outlined-basic-title"
                    label="Имя задачи"
                    variant="outlined"
                />
                <TextField
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                    id="outlined-basic-desc"
                    label="Описание задачи"
                    variant="outlined"
                />
                <Button
                    type="submit"
                    disabled={isButtonDisabled}
                    variant="contained"
                >
                    Добавить задачу
                </Button>
            </form>
        </div>
    );
};
