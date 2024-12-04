import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteTask,
  toggleTaskCompletion,
  setFilter,
  editTask,
  Task,
} from "../../store/taskSlice";
import Card from "./Card";
import TaskDialog from "./TaskDialog";
import { Button } from "../ui/button";
import Header from "./Header";
import { RootState } from "@/store/store";

const TaskList: React.FC = () => {
  const dispatch = useDispatch();
  const { tasks, filter } = useSelector((state: RootState) => state.tasks);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentTask, setCurrentTask] = useState<Task | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTasks = tasks
    .filter((task) => {
      if (filter === "completed") return task.completed;
      if (filter === "pending") return !task.completed;
      if (filter === "overdue")
        return new Date(task.dueDate) < new Date() && !task.completed;
      return true;
    })
    .filter((task) =>
      task.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

  const handleEdit = (task: Task) => {
    setCurrentTask(task);
    setIsDialogOpen(true);
  };

  const handleSave = (task: Task) => {
    dispatch(editTask(task));
    setIsDialogOpen(false);
  };

  return (
    <div className="p-4">
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div className="flex flex-wrap space-x-4 mb-4 w-full items-center justify-center">
        <Button variant="outline" onClick={() => dispatch(setFilter("all"))}>
          All Tasks
        </Button>
        <Button
          variant="outline"
          onClick={() => dispatch(setFilter("completed"))}
        >
          Completed Tasks
        </Button>
        <Button
          variant="outline"
          onClick={() => dispatch(setFilter("pending"))}
        >
          Pending Tasks
        </Button>
        <Button
          variant="outline"
          onClick={() => dispatch(setFilter("overdue"))}
        >
          Overdue Tasks
        </Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 px-4 py-2">
        {filteredTasks.map((task) => (
          <Card
            key={task.id}
            task={task}
            onEdit={() => handleEdit(task)}
            onDelete={() => dispatch(deleteTask(task.id))}
            onToggleCompletion={() => dispatch(toggleTaskCompletion(task.id))}
          />
        ))}
      </div>
      <TaskDialog
        task={currentTask ?? null}
        onSave={handleSave}
        isOpen={isDialogOpen}
        onOpenChange={setIsDialogOpen}
      />
    </div>
  );
};

export default TaskList;
