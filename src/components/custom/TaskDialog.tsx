import React, { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogTitle } from "../ui/dialog";
import { Calendar } from "lucide-react";

interface Task {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  completed: boolean;
}

interface TaskDialogProps {
  task?: Task;
  onSave: (task: Task) => void;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const TaskDialog: React.FC<TaskDialogProps> = ({
  task,
  onSave,
  isOpen,
  onOpenChange,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Task>({
    defaultValues: {
      id: task?.id || "",
      title: task?.title || "",
      description: task?.description || "",
      dueDate: task?.dueDate || "",
      completed: task?.completed || false,
    },
  });

  useEffect(() => {
    reset(task);
  }, [task, reset]);

  const onSubmit: SubmitHandler<Task> = (data) => {
    onSave(data);
    onOpenChange(false);
    reset();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogTitle>{task ? "Edit Task" : "Add Task"}</DialogTitle>
        <div>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700"
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                {...register("title", { required: "Title is required" })}
                className="mt-1 px-2 block w-full h-12 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm border-[1px]"
              />
              {errors.title && (
                <span className="text-red-500 text-xs mt-1">
                  {errors.title.message}
                </span>
              )}
            </div>
            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                Description
              </label>
              <textarea
                id="description"
                {...register("description")}
                rows={5}
                className="mt-1 px-2 py-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm border-[1px]"
              />
              {errors.description && (
                <span className="text-red-500 text-xs mt-1">
                  {errors.description.message}
                </span>
              )}
            </div>
            <div className="flex items-center space-x-2">
              <label
                htmlFor="dueDate"
                className=" text-sm font-medium text-gray-700 flex items-center"
              >
                <Calendar className="mr-2" />
                Due Date
              </label>
              <input
                type="date"
                id="dueDate"
                {...register("dueDate", { required: "Due date is required" })}
                className="mt-1 block rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm border-[1px] px-2 py-3"
              />
              {errors.dueDate && (
                <span className="text-red-500 text-xs mt-1">
                  {errors.dueDate.message}
                </span>
              )}
            </div>
            <div className="flex justify-end">
              <Button type="submit">Save</Button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TaskDialog;
