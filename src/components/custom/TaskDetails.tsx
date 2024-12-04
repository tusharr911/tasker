import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useParams } from "react-router";

const TaskDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const task = useSelector((state: RootState) =>
    state.tasks.tasks.find((task) => task.id === id)
  );

  if (!task) {
    return <div>Task not found</div>;
  }

  return (
    <div>
      <h1>{task.title}</h1>
      <p>{task.description}</p>
      <p>Due Date: {task.dueDate}</p>
      <p>Status: {task.completed ? "Completed" : "Pending"}</p>
    </div>
  );
};

export default TaskDetails;
