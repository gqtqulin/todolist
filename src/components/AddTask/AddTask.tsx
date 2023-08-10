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
    addTask(title, desc);
    setTitle("");
    setDesc("");
  };

  const handlerTitleInputChange = (
    event: React.FormEvent<HTMLInputElement>
  ) => {
    setTitle(event.currentTarget.value);
  };

  const handlerDescInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    setDesc(event.currentTarget.value);
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
            onChange={handlerTitleInputChange}
          />
        </div>
        <div className={styles.formDescInputContainer}>
          <input
            type="text"
            className={styles.formDescInput}
            placeholder="описание (необязательно)"
            value={desc}
            onChange={handlerDescInputChange}
          />
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
