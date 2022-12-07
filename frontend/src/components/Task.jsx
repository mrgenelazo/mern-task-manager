import { FaEdit, FaCheckDouble, FaTrashAlt } from "react-icons/fa";

const Task = ({ task, index }) => {
  return (
    <div className="mt-2 mb-2 p-4 flex justify-between items-center bg-slate-100 border-l-4 border-orange-600">
      <p>
        <span className="font-bold pr-2">{index + 1}.</span>
        {task.name}
      </p>
      <div className="task-icons flex gap-4 items-center">
        <FaCheckDouble className="text-green-600 hover:text-green-700 cursor-pointer" />{" "}
        <FaEdit className="text-purple-600 hover:text-purple-700 cursor-pointer" />{" "}
        <FaTrashAlt className="text-red-600 hover:text-red-700 cursor-pointer" />
      </div>
    </div>
  );
};
export default Task;
