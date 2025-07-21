import { useState } from "react";

interface UsersProps {
  id: number;
  name: string;
  age: number;
}

export default function FilterUser({ users }: { users: UsersProps[] }) {
  const [ageUser, setAgeUser] = useState<number>(0);

  const changeAgeUser = (age: number) => {
    setAgeUser(age);
  };
  console.log(ageUser);

  const filteredUser = users.filter((user) => user.age >= ageUser);

  return (
    <div className="users">
      <ul>
        <input
          type="text"
          onChange={(e) => changeAgeUser(Number(e.target.value))}
          maxLength={3}
          onKeyDown={(e) => {
            if (!/^\d$/.test(e.key) && e.key !== "Backspace") {
              e.preventDefault();
            }
          }}
        />
        {filteredUser.map((user) => (
          <li key={user.id}>
            <p>{user.name}</p>
            <p>{user.age}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
