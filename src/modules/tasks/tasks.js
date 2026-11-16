import { findUserById } from "../users/users.js";

// Task data is intentionally in memory for this starter project.
const tasks = [];
let nextTaskNumber = 1;

function requireTaskId(taskId) {
  if (typeof taskId !== "string" || taskId.trim() === "") {
    throw new Error("A task ID is required.");
  }
}

function getExistingTask(taskId) {
  requireTaskId(taskId);

  const task = tasks.find((currentTask) => currentTask.id === taskId);
  if (!task) {
    throw new Error(`Task with ID \"${taskId}\" was not found.`);
  }

  return task;
}

/**
 * Create a task for an existing user.
 */
export function createTask(title, userId) {
  if (typeof title !== "string" || title.trim() === "") {
    throw new Error("A task title cannot be empty.");
  }

  if (!findUserById(userId)) {
    throw new Error(`User with ID \"${userId}\" was not found.`);
  }

  const task = {
    id: `task-${nextTaskNumber++}`,
    title: title.trim(),
    userId,
    completed: false
  };

  tasks.push(task);
  return { ...task };
}

/**
 * Return every task.
 */
export function listTasks() {
  return tasks.map((task) => ({ ...task }));
}

/**
 * Find a task by ID. Throws a clear error if the ID is absent or unknown.
 */
export function findTaskById(taskId) {
  return { ...getExistingTask(taskId) };
}

/**
 * Mark an existing task as completed.
 */
export function completeTask(taskId) {
  const task = getExistingTask(taskId);
  task.completed = true;
  return { ...task };
}

/**
 * Delete an existing task and return the deleted task.
 */
export function deleteTask(taskId) {
  const task = getExistingTask(taskId);
  const taskIndex = tasks.findIndex((currentTask) => currentTask.id === task.id);
  const [deletedTask] = tasks.splice(taskIndex, 1);
  return { ...deletedTask };
}
