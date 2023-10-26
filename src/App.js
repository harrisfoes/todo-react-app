import "./App.css";
import { useState } from "react";
import TaskForm from "./components/TaskForm.js";

const TaskList = ({ tasks }) => {
  const [checked, setChecked] = useState(false);

  const handleCheckChange = (e) => {
    console.log(e.target.checked);
    setChecked((checked) => !checked);
  };
  //todo: checkbox and all list item functionality

  return (
    <table className="task-list">
      <tbody>
        {tasks.map((el) => {
          return (
            <tr className="task-row" key={el.id}>
              <td>
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={handleCheckChange}
                />
              </td>
              <td>{el.desc}</td>
              <td>
                <button>Delete</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

function App() {
  const [tasks, setTasks] = useState([]);

  const handleSubmit = (newTask) => {
    console.log(newTask);
    setTasks((currentTasks) => {
      return [
        ...currentTasks,
        { id: crypto.randomUUID(), desc: newTask, isChecked: false },
      ];
    });
  };

  return (
    <div className="App">
      <h1>Todo List App</h1>
      <TaskForm submit={handleSubmit} />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
