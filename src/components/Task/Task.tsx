import { useState, useEffect } from "react";
import styles from "./Task.module.css";
import { Button, Checkbox, TextField } from "@mui/material";

export const Task: React.FC<TaskProps> = ({
    task,
    deleteTask,
    updateTasks,
}) => {
    const [currentId, setCurrentId] = useState(task.id);
    const [currentTitle, setCurrentTitle] = useState(task.title);
    const [currentDesc, setCurrentDesc] = useState(task.desc);
    const [currentStatus, setCurrentStatus] = useState(task.status);

    useEffect(() => {
        console.log("states is changed");
        updateTasks(currentId, currentTitle, currentDesc, currentStatus);
    }, [currentTitle, currentDesc, currentStatus]);

    const handleDeleteClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        //console.log("task delete", currentId);
        event.preventDefault();
        deleteTask(currentId);
    };

    const decorationStyle = {
      textDecoration: currentStatus ? 'line-through' : 'none',
    };

    return (
        <form className={styles.taskForm}>
            <div className={styles.formCheckboxContainer}>
                <Checkbox checked={currentStatus} color="success" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCurrentStatus(e.target.checked)} />
            </div>
            <div className={styles.formTitleInputContainer}>
                {/* <input
                    name="taskName"
                    style={decorationStyle}
                    className={styles.formTitleInput}
                    type="text"
                    placeholder="имя задачи"
                    value={currentTitle}
                    disabled={currentStatus}
                    onChange={(e) => setCurrentTitle(e.target.value)}
                ></input> */}
                <TextField value={currentTitle} disabled={currentStatus} onChange={(e) => setCurrentTitle(e.target.value)} id="outlined-basic-title" label="Имя задачи" variant="filled" />
            </div>
            <div className={styles.formDescInputContainer}>
                {/* <input
                    type="text"
                    name="taskDesc"
                    style={decorationStyle}
                    disabled={currentStatus}
                    className={styles.formDescInput}
                    placeholder="описание задачи"
                    value={currentDesc}
                    onChange={(e) => setCurrentDesc(e.target.value)}
                ></input> */}
                <TextField value={currentDesc} disabled={currentStatus} onChange={(e) => setCurrentDesc(e.target.value)} id="outlined-basic-title" label="Описание задачи" variant="filled" />
            </div>
            <div className={styles.formDeleteButtonContainer}>
                <Button
                    variant="outlined"
                    onClick={handleDeleteClick}
                >
                    Удалить
                </Button>
            </div>
        </form>
    );
};
