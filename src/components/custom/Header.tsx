import { useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "../ui/button";
import TaskDialog from "../custom/TaskDialog";
import { addTask, editTask, Task } from "@/store/taskSlice";
import { Input } from "../ui/input";

interface HeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export default function Header({ searchQuery, setSearchQuery }: HeaderProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const dispatch = useDispatch();

  const handleSave = (task: Task) => {
    if (task.id) {
      dispatch(editTask(task));
    } else {
      dispatch(addTask({ ...task, id: Date.now().toString() }));
    }
  };

  return (
    <header className="w-full flex flex-wrap items-center justify-center py-3 space-x-4">
      <Button onClick={() => setIsDialogOpen(true)}>Add Task</Button>
      <Input
        type="text"
        placeholder="Search tasks by title"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full sm:w-1/2 md:w-1/4"
      />
      <TaskDialog
        task={null}
        onSave={handleSave}
        isOpen={isDialogOpen}
        onOpenChange={setIsDialogOpen}
      />
    </header>
  );
}
