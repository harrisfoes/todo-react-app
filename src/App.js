import "./App.css";
import { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm.js";
import TaskList from "./components/TaskList.js";

function App() {
  const [tasks, setTasks] = useState(() => {
    const storage = localStorage.getItem("TODO_H");
    return storage ? JSON.parse(storage) : [];
  });

  useEffect(() => {
    console.log("storyahee");
    localStorage.setItem("TODO_H", JSON.stringify(tasks));
  }, [tasks]);

  const handleSubmit = (newTask) => {
    console.log(newTask);
    setTasks((currentTasks) => {
      return [
        ...currentTasks,
        { id: crypto.randomUUID(), desc: newTask, isChecked: false },
      ];
    });
  };

  const toggleChecked = (id, completed) => {
    //given the id and the new status, change the value of setTasks
    setTasks((currentTasks) =>
      currentTasks.map((task) => {
        //using map to generate a new object from the previous one
        if (id === task.id) {
          //here we are checking at the object level
          return { ...task, isChecked: completed }; //remember that current Tasks is an array of object
        }
        return task; //if id does not match, return the same task {id:, dec, isChecked...etc}
      }),
    );
  };

  const deleteTask = (id) => {
    setTasks((currentTasks) => currentTasks.filter((task) => task.id !== id));
  };

  return (
    <div className="App">
      <h1>Todo List App</h1>
      <TaskForm submit={handleSubmit} />
      <TaskList
        tasks={tasks}
        toggleChecked={toggleChecked}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default App;
