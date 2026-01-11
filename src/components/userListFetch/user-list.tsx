import useFetchingUsers from "./hook";

export default function UserList() {
  const {
    users,
    loading,
    error,
    handleRetry,
    updateListUsers,
    usersName,
    emailUsers,
  } = useFetchingUsers();

  return (
    <div>
      <h2>Список користувачів</h2>

      {loading && <p>Завантаження...</p>}

      {error && (
        <div>
          <p style={{ color: "red" }}>{error}</p>
          <button onClick={handleRetry}>Повторити</button>
        </div>
      )}

      {!loading && !error && users.length > 0 && (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name} — {user.email}
            </li>
          ))}
        </ul>
      )}
      {usersName.map((name, index) => (
        <ul key={index}>
          <li>{name}</li>
        </ul>
      ))}
      {loading ? (
        <p>Завантаження...</p>
      ) : (
        <ul>
          {" "}
          {emailUsers.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
      <button onClick={updateListUsers}>Оновити список </button>
    </div>
  );
}
