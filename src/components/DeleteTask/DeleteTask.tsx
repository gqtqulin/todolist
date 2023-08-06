import {useState} from 'react';

type Task = {
  id: number;
  title: string;
  desc: string;
  status: boolean;
};

interface Props {
  tasks: Array<Task>;
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

export const DeleteTask = ({ tasks, setTasks }: Props) => {
    const [inputId, setInputId] = useState('');
  const deleteTask = (id: number) => {
    const taskIndexToDelete: number = tasks.findIndex((t) => t.id === id);
    const candidateTask: Task = tasks[taskIndexToDelete];
    if (candidateTask == undefined)
      throw new Error("Задача для удаления не найдена");
    const updatedTasks = tasks.filter((t) => t !== candidateTask);
    setTasks(updatedTasks);
  };

  const handleDeleteTaskFormSubmit = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    if (Number(inputId)) {
        deleteTask(Number(inputId));
    } else {
        throw new Error('Переданный id должен быть числом!')
    }
    setInputId('');
  };

  const handlerChangeIdInput = (event: React.FormEvent<HTMLInputElement>) => {
    setInputId(event.currentTarget.value);
  };

  return (
    <div>
      <form onSubmit={handleDeleteTaskFormSubmit}>
        <label>
          Для удаление заметки укажите ее id
          <input type="text" placeholder="id" value={inputId} onChange={handlerChangeIdInput} />
        </label>
        <input type="submit" value="delete" />
      </form>
    </div>
  );
};
