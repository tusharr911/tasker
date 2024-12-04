import { useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "../ui/button";
import TaskDialog from "../custom/TaskDialog";
import { addTask, editTask } from "@/store/taskSlice";
import { Input } from "../ui/input";

export default function Header({ searchQuery, setSearchQuery }) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const dispatch = useDispatch();

  const handleSave = (task) => {
    if (task.id) {
      dispatch(editTask(task));
    } else {
      dispatch(addTask({ ...task, id: Date.now().toString() }));
    }
  };

  return (
    <header className="w-full flex items-center justify-center py-3 space-x-4">
      <Button onClick={() => setIsDialogOpen(true)}>Add Task</Button>
      <Input
        type="text"
        placeholder="Search tasks by title"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-1/4"
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
