import React from "react";
import { Route, BrowserRouter as Router, Routes, Navigate } from "react-router";
import TaskList from "./components/custom/TaskList";
import TaskDetails from "./components/custom/TaskDetails";
import NotFound from "./components/custom/NotFound";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/tasks" />} />
        <Route path="/tasks" element={<TaskList />} />
        <Route path="/tasks/:id" element={<TaskDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
