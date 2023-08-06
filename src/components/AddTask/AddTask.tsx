
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
  //test task
  const title1: string = "title1";
  const desc1: string = "desc1";

  const addTask = (title: string, desc: string): void => {
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
    }, 250);
  };

  const handleAddTaskClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    addTask(title1, desc1);
  };

  return (<div>
    <button onClick={handleAddTaskClick}>add task</button>
  </div>);
};