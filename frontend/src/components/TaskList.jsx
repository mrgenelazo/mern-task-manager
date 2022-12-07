import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Task from "./Task";
import TaskForm from "./TaskForm";

const TaskList = () => {
  const [formData, setFormData] = useState({
    name: "",
    completed: false,
  });
  const { name } = formData;
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const createTask = async (e) => {
    e.preventDefault();
    if (name === "") {
      return toast.error("Input field cannot be empty.");
    }
    try {
      await axios.post("http://localhost:5000/api/tasks", formData);
      toast.success("Task added successfully");
      setFormData({ ...formData, name: "" });
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <div className="card w-[36rem] bg-base-100 shadow-xl bg-transparent bg-white rounded">
      <div className="card-body p-6">
        <h2 className="text-3xl font-bold text-gray-600">Task Manager</h2>
        <TaskForm
          name={name}
          handleInputChange={handleInputChange}
          createTask={createTask}
        />
        <div className="flex justify-between items-center mt-4 mb-2 border-b-2">
          <p>
            <span className="font-bold">Total Task:</span> 0
          </p>
          <p>
            <span className="font-bold">Completed Tasks:</span> 1
          </p>
        </div>
        <Task />
      </div>
    </div>
  );
};
export default TaskList;
