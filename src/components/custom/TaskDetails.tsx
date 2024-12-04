import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useParams, Link } from "react-router";

const TaskDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const task = useSelector((state: RootState) =>
    state.tasks.tasks.find((task) => task.id === id)
  );

  if (!task) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold mb-4">Task not found</h1>
        <Link to="/tasks" className="text-blue-500 hover:underline">
          Go back to Task Dashboard
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <h1 className="text-3xl font-bold mb-4">{task.title}</h1>
      <p className="text-lg mb-4">{task.description}</p>
      <p className="text-sm text-gray-600 mb-2">
        <strong>Due Date:</strong> {task.dueDate}
      </p>
      <p className="text-sm text-gray-600 mb-4">
        <strong>Status:</strong> {task.completed ? "Completed" : "Pending"}
      </p>
      <Link to="/tasks" className="text-blue-500 hover:underline">
        Back to Task Dashboard
      </Link>
    </div>
  );
};

export default TaskDetails;
