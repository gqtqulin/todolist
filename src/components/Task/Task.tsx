import { useState, useEffect } from "react";
import styles from "./Task.module.css";

export const Task: React.FC<TaskProps> = ({ task }) => {
  const [currentId, setCurrentId] = useState(task.id);
  const [currentTitle, setCurrentTitle] = useState(task.title);
  const [currentDesc, setCurrentDesc] = useState(task.desc);
  const [currentStatus, setCurrentStatus] = useState(task.status);

  console.log(currentTitle);

  useEffect(() => {
    console.log("states is changed");
  }, [currentTitle, currentDesc, currentStatus]);

  return (
    <li key={currentId} className={styles.listItem}>
      <form className={styles.taskForm}>
      <div className={styles.formCheckboxContainer}>
          <input
            name="checkBox"
            className={styles.formCheckbox}
            type="checkbox"
            onChange={(e) => setCurrentStatus(!currentStatus)}
          ></input>
        </div>
        <div className={styles.formTitleInputContainer}>
          <input
            name="taskName"
            className={styles.formTitleInput}
            type="text"
            placeholder="имя задачи"
            value={currentTitle}
            onChange={(e) => setCurrentTitle(e.target.value)}
          ></input>
        </div>
        <div className={styles.formDescInputContainer}>
          <input
            type="text"
            name="taskDesc"
            className={styles.formDescInput}
            placeholder="описание задачи"
            value={currentDesc}
            onChange={(e) => setCurrentDesc(e.target.value)}
          ></input>
        </div>
        <div className={styles.formDeleteButtonContainer}>
          <button className={styles.formDeleteButton}>Удалить</button>
        </div>
      </form>
    </li>
  );
};
