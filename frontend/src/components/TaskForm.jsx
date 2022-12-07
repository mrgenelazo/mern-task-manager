const TaskForm = ({ createTask, name, handleInputChange }) => {
  return (
    <form onSubmit={createTask} className="mt-5">
      <div className="flex justify-between items-center">
        <input
          type="text"
          placeholder="Add a task"
          name="name"
          value={name}
          onChange={handleInputChange}
          className=" task-input border border-gray-500 w-full p-2 outline-gray-500"
        />
        <button
          type="submit"
          className="bg-purple-700 p-2 border border-purple-800 w-20 text-white"
        >
          Add
        </button>
      </div>
    </form>
  );
};
export default TaskForm;
