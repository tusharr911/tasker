import React from "react";
import { cn } from "@/lib/utils";
import { Link } from "react-router";

interface Task {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  completed: boolean;
}

interface CardProps {
  task: Task;
  onEdit: () => void;
  onDelete: () => void;
  onToggleCompletion: () => void;
}

const Card: React.FC<CardProps> = ({
  task,
  onEdit,
  onDelete,
  onToggleCompletion,
}) => {
  const formattedDate = new Date(task.dueDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  return (
    <div
      className={cn([
        "flex flex-col w-full sm:w-60 h-60 text-white py-4 px-4 overflow-hidden bg-zinc-900 bg-opacity-90 shadow-lg rounded-lg",
        task.completed ? "bg-green-700" : "bg-zinc-900",
      ])}
    >
      <div className="flex justify-between items-center">
        <div className="cursor-pointer text-lg" onClick={onEdit}>
          ✏️
        </div>
        <div className="cursor-pointer text-xl" onClick={onDelete}>
          ❌
        </div>
      </div>

      <Link to={`/tasks/${task.id}`}>
        <h2 className="text-lg font-bold mb-2">{task.title}</h2>
      </Link>

      <p className="text-sm italic mb-4 text-gray-300 whitespace-normal break-words overflow-hidden text-ellipsis">
        {task.description}
      </p>

      <div className="flex justify-between items-center">
        <h5 className="text-xs text-white">Due Date: {formattedDate}</h5>
      </div>
      <div className="tag w-full pt-4 flex justify-center mt-auto">
        <h3
          className="text-sm font-semibold cursor-pointer"
          onClick={onToggleCompletion}
        >
          {task.completed ? " Mark as Incomplete" : " Mark as Complete"}
        </h3>
      </div>
    </div>
  );
};

export default Card;