import TaskItem from "./TaskItem.js";

const TaskList = ({ tasks, toggleChecked, deleteTask }) => {
  const handleCheckChange = (id, completed) => {
    toggleChecked(id, completed);
  };

  const handleDelete = (id) => {
    deleteTask(id);
  };

  return (
    <table className="task-list">
      <tbody>
        {tasks.map((el) => (
          <TaskItem
            key={el.id}
            task={el}
            handleCheckChange={handleCheckChange}
            handleDelete={handleDelete}
          />
        ))}
      </tbody>
    </table>
  );
};

export default TaskList;
