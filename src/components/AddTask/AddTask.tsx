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
};

export const AddTask = ({tasks, setTasks}: Props) => {
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');

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
          ])
        setIsButtonDisabled(false);
    }, 500);
  };

  const handleSubmitAddTaskForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addTask(title, desc);
    setTitle('');
    setDesc('');
  };

  const handleTitleInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    setTitle(event.currentTarget.value);
  };

  const handleDescInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    setDesc(event.currentTarget.value);
  };

  return (<div>
    <form onSubmit={handleSubmitAddTaskForm}>
        <label>Введите имя задачи:
            <input type='text' value={title} onChange={handleTitleInputChange}/>
        </label>
        <label>Введите описание задачи:
            <input type='text' value={desc} onChange={handleDescInputChange}/>
        </label>
        <input type='submit'disabled={isButtonDisabled} value='Добавить задачу' />
    </form>

  </div>);
};