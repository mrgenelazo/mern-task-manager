import { ToastContainer } from "react-toastify";
import TaskList from "./components/TaskList";
import "react-toastify/dist/ReactToastify.css";
export const URL = process.env.REACT_APP_SERVER_URL;

function App() {
  return (
    <>
      <div className="flex justify-center items-center bg-blue-600 w-full h-screen">
        <TaskList />
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
