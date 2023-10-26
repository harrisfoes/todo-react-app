const TaskItem = ({ task, handleCheckChange, handleDelete }) => {
  console.log("taskItem", task);
  return (
    <tr className="task-row" key={task.id}>
      <td>
        <input
          type="checkbox"
          checked={task.isChecked}
          onChange={(e) => handleCheckChange(task.id, e.target.checked)}
        />
      </td>
      <td>{task.desc}</td>
      <td>
        <button onClick={() => handleDelete(task.id)}>Delete</button>
      </td>
    </tr>
  );
};

export default TaskItem;
