import { useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "../ui/button";
import TaskDialog from "../custom/TaskDialog";
import { addTask, editTask } from "@/store/taskSlice";

export default function Header() {
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
    <header className="w-full flex items-start justify-center py-3">
      <Button onClick={() => setIsDialogOpen(true)}>Add Task</Button>
      <TaskDialog
        task={null}
        onSave={handleSave}
        isOpen={isDialogOpen}
        onOpenChange={setIsDialogOpen}
      />
    </header>
  );
}
