// Starter data for the application. It is kept in memory only.
const users = [
  { id: "user-1", name: "Amina" },
  { id: "user-2", name: "Omar" },
  { id: "user-3", name: "Lina" }
];

/**
 * Return all available users.
 */
export function listUsers() {
  return users.map((user) => ({ ...user }));
}

/**
 * Find a user by ID. Returns undefined when no user matches.
 */
export function findUserById(userId) {
  const user = users.find((currentUser) => currentUser.id === userId);
  return user ? { ...user } : undefined;
}
