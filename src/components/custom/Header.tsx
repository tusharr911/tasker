import { useState } from "react";
import { Button } from "../ui/button";
import TaskDialog from "../custom/TaskDialog";

export default function Header() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleSave = (task) => {
    console.log("Task saved:", task);
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
