//ii.task.js - Task operations
// TODO: Import validator functions
// import { ... } from './validator.js';
import {
    validateTitle,
    validatePriority,
    validateDueDate
} from "./validator.js";

const tasks = [];
let taskIdCounter = 1;

// 1. Add new task
export function addTask(title, priority, dueDate) {
    // Validate using imported functions
    // If valid, add to tasks array
    // Return success/error message
    const titleError = validateTitle(title);
    const priorityError = validatePriority(priority);
    const dateError = validateDueDate(dueDate);

    if (titleError || priorityError || dateError) {
        return {
            success: false,
            message: titleError || priorityError || dateError
        };
    }

    const task = {
        id: taskIdCounter++,
        title,
        priority,
        dueDate,
        completed: false
    };

    tasks.push(task);
    return { success: true, message: "Task added successfully", task };
}

// 2. Get all tasks
export function getAllTasks() {
    // Return all tasks
    return tasks;
}

// 3. Mark task as complete
export function completeTask(taskId) {
    // Find task and mark as complete
    const task = tasks.find(t => t.id === taskId);

    if (!task) {
        return { success: false, message: "Task not found" };
    }

    task.completed = true;
    return { success: true, message: "Task marked as complete" };
}

// Export functions
export { addTask, getAllTasks, completeTask };
