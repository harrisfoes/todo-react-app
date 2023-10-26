import { useState } from "react";

const TaskForm = ({ submit }) => {
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submit(newTask);
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={newTask}
        onChange={handleChange}
        placeholder="Add Task"
        id="new-task"
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
