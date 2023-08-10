import { useState } from "react";
import styles from "./AddTask.module.css";

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
    else alert("Заполните обязательные поля");
    setTitle("");
    setDesc("");
  };

  return (
    <div className={styles.addTaskContainer}>
      <form className={styles.addTaskForm} onSubmit={handlerSubmitAddTaskForm}>
        <div className={styles.formTitleInputContainer}>
          <input
            type="text"
            className={styles.formTitleInput}
            placeholder="имя задачи"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className={styles.formDescInputContainer}>
          <input
            type="text"
            name="taskDesc"
            className={styles.formDescInput}
            placeholder="описание задачи"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          ></input>
        </div>
        <div className={styles.buttonContainer}>
          <input
            type="submit"
            className={styles.button}
            disabled={isButtonDisabled}
            value="Добавить задачу"
          />
        </div>
      </form>
    </div>
  );
};
