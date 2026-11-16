import { findUserById, listUsers } from "./modules/users/users.js";
import {
  completeTask,
  createTask,
  deleteTask,
  findTaskById,
  listTasks
} from "./modules/tasks/tasks.js";

function show(label, value) {
  console.log(`\n=== ${label} ===`);
  console.log(JSON.stringify(value, null, 2));
}

console.log("Task Management Backend Starter");

show("1. List users", listUsers());
show("2. Find user user-2", findUserById("user-2"));

const firstTask = createTask("Plan the project", "user-1");
show("3. Create first task", firstTask);

const secondTask = createTask("Write the README", "user-2");
show("4. Create second task", secondTask);

show("5. List all tasks", listTasks());
show("6. Find the first task", findTaskById(firstTask.id));
show("7. Complete the first task", completeTask(firstTask.id));
show("8. Delete the second task", deleteTask(secondTask.id));
show("9. List remaining tasks", listTasks());

console.log("\n=== 10. Invalid operation (handled safely) ===");
try {
  createTask("   ", "user-1");
} catch (error) {
  console.log(`Error: ${error.message}`);
}

console.log("\nThe application continued running after the handled error.");
