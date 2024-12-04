import React from "react";

interface Task {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  completed: boolean;
}

const sampleData: Task = {
  id: "1",
  title: "Sample Task",
  description: "This is a sample task description.",
  dueDate: new Date().toISOString().split("T")[0],
  completed: false,
};

const Card: React.FC = () => {
  const formattedDate = new Date(sampleData.dueDate).toLocaleString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  return (
    <div className="flex flex-col w-60 h-72 text-white py-4 px-4 overflow-hidden bg-zinc-900 bg-opacity-90 shadow-lg rounded-lg">
      <div className="flex justify-between items-center">
        <div className="cursor-pointer text-lg">✏️</div>
        <div className="cursor-pointer text-xl">❌</div>
      </div>

      <h2 className="text-lg font-bold mb-2">{sampleData.title}</h2>

      <p className="text-sm italic mb-4 text-gray-300">
        {sampleData.description}
      </p>

      <div className="flex justify-between items-center">
        <h5 className="text-xs text-gray-400">Due Date:{formattedDate}</h5>
      </div>
      <div className="tag w-full py-5 flex justify-center items-center">
        <h3 className="text-sm font-semibold cursor-pointer">
          {sampleData.completed ? " Mark as Incomplete" : " Mark as Complete"}
        </h3>
      </div>
      <div className="footer absolute w-full bottom-0 left-0 px-2 py-3"></div>
    </div>
  );
};

export default Card; 