import type { User } from "./types";

export async function fetchUsers(): Promise<User[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Іноді навмисно кидаємо помилку
      // const shouldFail = Math.random() < 0.3;
      // if (shouldFail) {
      //   reject(new Error("Не вдалося завантажити користувачів 😢"));
      // } else {
      resolve([
        { id: 1, name: "Alice", email: "alice@example.com" },
        { id: 2, name: "Bob", email: "bob@example.com" },
        { id: 3, name: "Charlie", email: "charlie@example.com" },
      ]);
    }, 1500); // імітація затримки 1.5 секунди
  });
}
