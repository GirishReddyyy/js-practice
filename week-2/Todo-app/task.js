import { validateTitle, validatePriority, validateDueDate } from './validator.js';

const tasks = [];
let idCounter = 1;

// 1. Add new task
export function addTask(title, priority, dueDate) {
  if (!validateTitle(title)) return "Error: Title must be at least 3 characters.";
  if (!validatePriority(priority)) return "Error: Priority must be low, medium, or high.";
  if (!validateDueDate(dueDate)) return "Error: Due date must be in the future.";

  const newTask = {
    id: idCounter++,
    title,
    priority,
    dueDate,
    isCompleted: false
  };

  tasks.push(newTask);
  return "Task added successfully.";
}

// 2. Get all tasks
export function getAllTasks() {
  return tasks;
}

// 3. Mark task as complete
export function completeTask(taskId) {
  taskId = Number(taskId);

  const task = tasks.find(t => t.id === taskId);

  if (!task) return "Error: Task not found.";
  if (task.isCompleted) return "Task already completed!";

  task.isCompleted = true;
  return "Task marked as complete.";
}

// Export functions
