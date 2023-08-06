import { useState } from "react";

export const TaskStatus = ({ tasks, setTasks }: Props) => {
  const [inputId, setInputId] = useState("");

  const handlerChangeIdInput = (event: React.FormEvent<HTMLInputElement>) => {
    setInputId(event.currentTarget.value);
  };

  const handlerStatusChangeFormSubmit = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    if (Number(inputId)) {
      changeTaskStatus(Number(inputId));
    } else {
      throw new Error("Переданный id должен быть числом!");
    }
    setInputId("");
  };

  const changeTaskStatus = (id: number) => {
    const taskIndexToUpdate: number = tasks.findIndex((t) => t.id === id);
    const candidateTask: Task = tasks[taskIndexToUpdate];
    if (candidateTask == undefined)
      throw new Error("Задача для изменения состояния не найдена");
    candidateTask.status = !candidateTask.status;
    const updatedTasks: Array<Task> = tasks.map(t => {
        if (t.id === id) return candidateTask;
        return t;
    });
    setTasks(updatedTasks);
  };

  return (
    <div>
      <form onSubmit={handlerStatusChangeFormSubmit}>
        <label>
          Для изменения состояния задачи укажите ее id
          <input
            type="text"
            placeholder="id"
            value={inputId}
            onChange={handlerChangeIdInput}
          />
        </label>
        <input type="submit" value="Изменить статус задачи" />
      </form>
    </div>
  );
};
