import { useEffect, useState } from "react";
import type { User } from "../../api/types";
import { fetchUsers } from "../../api/fakeApi";

export default function useFetchingUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [usersName, setUsersName] = useState<string[]>([]);
  const [emailUsers, setEmailUsers] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchingUsers = async (withNamesAndEmails = false) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetchUsers();
      setUsers(res);

      if (!withNamesAndEmails) {
        setTimeout(() => {
          const userName = res.map((item) => item.name);
          if (userName) {
            setUsersName(userName);
          }
        }, 3000);
        setTimeout(() => {
          const userEmail = res.map((item) => item.email);
          if (userEmail) {
            setEmailUsers(userEmail);
          }
        }, 3000);
      }

      setLoading(false);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError(`Unknown error: ${String(error)}`);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchingUsers();
  }, []);

  const handleRetry = () => fetchingUsers();
  const updateListUsers = () => fetchingUsers();

  return {
    users,
    loading,
    error,
    handleRetry,
    updateListUsers,
    usersName,
    emailUsers,
  };
}
