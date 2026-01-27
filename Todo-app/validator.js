//i. validator.js - Input validation
// TODO: Export these validation functions

// 1. Validate task title (not empty, min 3 chars)
function validateTitle(title) {
    if (title.length === 0) {
        return "Title is empty";
    }
    if (title.length < 3) {
        return "Title should be minimum 3 characters";
    }
    return true;
}
// 2. Validate priority (must be: low, medium, high)
function validatePriority(priority) {
    // Your code here
    const validPriorities = ["low", "medium", "high"];
    if (!validPriorities.includes(priority)) {
        return "Priority must be low, medium, or high";
    }
    return null;

}

// 3. Validate due date (must be future date)
function validateDueDate(date) {
    // Your code here
    const dueDate = new Date(date);
    const today = new Date();

    if (isNaN(dueDate.getTime())) {
        return "Invalid date format";
    }

    if (dueDate <= today) {
        return "Due date must be a future date";
    }

    return null;
}

// Export validation functions
export { validateTitle, validatePriority, validateDueDate };
