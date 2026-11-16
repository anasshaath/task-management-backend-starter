# Task Management Backend Starter

A small, beginner-friendly Node.js console application for practicing a simple task-management backend. It uses only built-in Node.js features and keeps all data in memory.

## Project structure

```text
task-management/
├── src/
│   ├── app.js                 # Runs a demonstration of the application
│   └── modules/
│       ├── users/users.js     # User data and user operations
│       └── tasks/tasks.js     # Task data and task operations
├── package.json
├── .gitignore
└── README.md
```

## Requirements

- Node.js 18 or newer (Node.js 20+ is recommended).
- PowerShell.

No packages need to be installed because this project has no dependencies.

## Run the project in PowerShell

From the project folder, run:

```powershell
npm start
```

For development mode, which reruns the app after saved changes, run:

```powershell
npm run dev
```

## Available operations

### Users

- `listUsers()` lists the starter users.
- `findUserById(userId)` finds one user by ID, or returns `undefined` when the user does not exist.

### Tasks

- `createTask(title, userId)` creates a task for an existing user.
- `listTasks()` lists all tasks.
- `findTaskById(taskId)` finds one task.
- `completeTask(taskId)` marks a task as completed.
- `deleteTask(taskId)` deletes a task.

Task creation rejects empty titles and unknown user IDs. Task lookup, completion, and deletion throw a clear error when the task ID is missing or does not exist. Task IDs use a counter, so deleting a task does not cause a later task ID to be reused.

## Important limitation

All users and tasks live only in memory. The task list resets every time the application restarts.
