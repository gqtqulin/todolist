declare type Task = {
  id: number;
  title: string;
  desc: string;
  status: boolean;
};

declare interface TaskProps {
  task: Object<Task>;
  deleteTask: Function;
  updateTasks: Function;
};

declare interface Props {
  tasks: Array<Task>;
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
};
