import { useState, useEffect } from "react";

export const Task: React.FC<TaskProps> = ({ task }) => {
  const [currentId, setCurrentId] = useState(task.id);
  const [currentTitle, setCurrentTitle] = useState(task.title);
  const [currentDesc, setCurrentDesc] = useState(task.desc);
  const [currentStatus, setCurrentStatus] = useState(task.status);

  console.log(currentTitle);

  useEffect(() => {
    console.log('states is changed');
  }, [currentTitle, currentDesc, currentStatus]);

  return (
    <li key={currentId}>
      <form>
        <input
          name="taskName"
          type="text"
          placeholder="Имя задачи"
          value={currentTitle}
          onChange={(e) => setCurrentTitle(e.target.value)}
        ></input>
        <textarea
          name="taskDesc"
          placeholder="Описание задачи"
          value={currentDesc}
          onChange={(e) => setCurrentDesc(e.target.value)}
        ></textarea>
        <input 
        name="checkBox"
        type="checkbox"
        onChange={(e) => setCurrentStatus(!currentStatus)}
        ></input>
        <button>Удалить</button>
      </form>
    </li>
  );
};
