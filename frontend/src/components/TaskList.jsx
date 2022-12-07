import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Task from "./Task";
import TaskForm from "./TaskForm";
import { URL } from "../App";
import loadingImg from "../assets/Spinner.gif";

const TaskList = () => {
  const [tasks, setTask] = useState([]);
  const [completedTask, setCompletedTask] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    completed: false,
  });

  const { name } = formData;
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const getTasks = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(`${URL}/api/tasks`);
      setTask(data);
      setIsLoading(false);
    } catch (error) {
      toast.error(error.message);
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getTasks();
  }, []);

  const createTask = async (e) => {
    e.preventDefault();
    if (name === "") {
      return toast.error("Input field cannot be empty.");
    }
    try {
      await axios.post(`${URL}/api/tasks`, formData);
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
            <span className="font-bold">Total Task:</span> {tasks.length}
          </p>
          <p>
            <span className="font-bold">Completed Tasks:</span> 1
          </p>
        </div>
        {isLoading && (
          <div className="flex justify-center items-center">
            <img src={loadingImg} alt="loading" />
          </div>
        )}
        {!isLoading && tasks.length === 0 ? (
          <p className="p-4 text-3xl">Empty Task</p>
        ) : (
          <>
            {tasks.map((task, index) => {
              return <Task key={task._id} task={task} index={index} />;
            })}
          </>
        )}
      </div>
    </div>
  );
};
export default TaskList;
