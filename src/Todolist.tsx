import React from 'react';
import { TaskType } from './App';

type PropsType = {
  title: string;
  tasks: TaskType[];
  date?: string;
  /*  tasks: Array<TaskType>; */
};

export const Todolist = ({ title, tasks, date }: PropsType) => {
  /* const { title, tasks } = props; */
  return (
    <div>
      {/* <h3>{props.title}</h3> */}
      <h3>{title}</h3>
      {/* <h3>What to learn</h3> */}
      <div>
        <input />
        <button>+</button>
      </div>
      <ul>
        {tasks.map((task) => {
          debugger;
          return (
            <li>
              <input type="checkbox" checked={task.isDone} />{' '}
              <span>{task.title}</span>
            </li>
          );
        })}
        {/* <li>
          <input type="checkbox" checked={tasks[0].isDone} />{' '}
          <span>{tasks[0].title}</span>
        </li>
        <li>
          <input type="checkbox" checked={tasks[1].isDone} />{' '}
          <span>{tasks[1].title}</span>
        </li>
        <li>
          <input type="checkbox" checked={tasks[2].isDone} />{' '}
          <span>{tasks[2].title}</span>
        </li>
        <li>
          <input type="checkbox" checked={tasks[3].isDone} />{' '}
          <span>{tasks[3].title}</span>
        </li> */}
      </ul>
      <div>
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
      <div>{date}</div>
    </div>
  );
};
