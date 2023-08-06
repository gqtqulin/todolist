import { useState } from "react";

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
    }, 500);
  };

  const handlerSubmitAddTaskForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addTask(title, desc);
    setTitle("");
    setDesc("");
  };

  const handlerTitleInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    setTitle(event.currentTarget.value);
  };

  const handlerDescInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    setDesc(event.currentTarget.value);
  };

  return (
    <div>
      <form onSubmit={handlerSubmitAddTaskForm}>
        <label>
          Введите имя задачи:
          <input
            type="text"
            placeholder="имя задачи"
            value={title}
            onChange={handlerTitleInputChange}
          />
        </label>
        <label>
          Введите описание задачи:
          <input
            type="text"
            placeholder="описание задачи"
            value={desc}
            onChange={handlerDescInputChange}
          />
        </label>
        <input
          type="submit"
          disabled={isButtonDisabled}
          value="Добавить задачу"
        />
      </form>
    </div>
  );
};
