import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Task = {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  completed: boolean;
};

interface TaskState {
  tasks: Task[];
  filter: "all" | "completed" | "pending" | "overdue";
}

const initialState: TaskState = {
  tasks: [],
  filter: "all",
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload);
    },
    editTask: (state, action: PayloadAction<Task>) => {
      const index = state.tasks.findIndex(
        (task) => task.id === action.payload.id
      );
      if (index !== -1) {
        state.tasks[index] = action.payload;
      }
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    toggleTaskCompletion: (state, action: PayloadAction<string>) => {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
    setFilter: (
      state,
      action: PayloadAction<"all" | "completed" | "pending" | "overdue">
    ) => {
      state.filter = action.payload;
    },
  },
});

export const {
  addTask,
  editTask,
  deleteTask,
  toggleTaskCompletion,
  setFilter,
} = taskSlice.actions;
export default taskSlice.reducer;
