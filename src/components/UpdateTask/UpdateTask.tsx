import { useState } from "react";

export const UpdateTask = ({ tasks, setTasks }: Props) => {
  const [inputId, setInputId] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const handlerTitleInputChange = (
    event: React.FormEvent<HTMLInputElement>
  ) => {
    setTitle(event.currentTarget.value);
  };

  const handlerDescInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    setDesc(event.currentTarget.value);
  };

  const handlerChangeIdInput = (event: React.FormEvent<HTMLInputElement>) => {
    setInputId(event.currentTarget.value);
  };

  const handlerSubmitUpdateTaskForm = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    if (Number(inputId)) {
      updateTask(Number(inputId), title, desc);
    } else {
      throw new Error("Переданный id должен быть числом!");
    }
    setTitle("");
    setDesc("");
    setInputId("");
  };

  const updateTask = (id: number, title: string, desc: string) => {
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
  };

  return (
    <div>
      <form onSubmit={handlerSubmitUpdateTaskForm}>
        <label>
          Для обновления задачи укажите ее id
          <input
            type="text"
            placeholder="id"
            value={inputId}
            onChange={handlerChangeIdInput}
          />
        </label>
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
        <input type="submit" value="Обновить задачу" />
      </form>
    </div>
  );
};
