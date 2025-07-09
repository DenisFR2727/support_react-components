import { useState } from 'react';

interface IUsers {
    firstName: string;
    id: number;
}

const users: IUsers[] = [
    { firstName: 'John', id: 1 },
    { firstName: 'Emily', id: 2 },
    { firstName: 'Michael', id: 3 },
    { firstName: 'Sarah', id: 4 },
    { firstName: 'David', id: 5 },
    { firstName: 'Jessica', id: 6 },
    { firstName: 'Daniel', id: 7 },
    { firstName: 'Olivia', id: 8 },
    { firstName: 'Matthew', id: 9 },
    { firstName: 'Sophia', id: 10 },
];

export default function EditUserInput() {
    const [usersList, setUsersList] = useState<IUsers[]>(users);
    const [userIdEdit, setUserIdEdit] = useState<number | null>(null);
    const [editUserValue, setEditUserValue] = useState<string>('');

    // Dell User
    const deleteUser = (userId: number): void => {
        const deleteUserById = usersList.filter((user) => user.id !== userId);
        setUsersList(deleteUserById);
    };
    const changeName = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setEditUserValue(e.target.value);
    };
    //  Edit
    const editUser = (user: IUsers): void => {
        setUserIdEdit(user.id);
        setEditUserValue(user.firstName);
    };
    // Save
    const saveUser = (userId: number): void => {
        const updatedUsers = usersList.map((user) =>
            user.id === userId ? { ...user, firstName: editUserValue } : user
        );
        setUsersList(updatedUsers);
        setUserIdEdit(null);
        setEditUserValue('');
    };
    if (usersList.length === 0) {
        return <p style={{ fontSize: '30px' }}>List is empty!</p>;
    }
    return (
        <div className="list">
            <ul>
                {usersList.map((user) => (
                    <li key={user.id}>
                        {userIdEdit === user.id ? (
                            <>
                                <input
                                    value={editUserValue}
                                    onChange={changeName}
                                    autoFocus
                                />
                                <button onClick={() => saveUser(user.id)}>
                                    Save
                                </button>
                            </>
                        ) : (
                            <>
                                <span>{user.firstName}</span>
                                <button onClick={() => deleteUser(user.id)}>
                                    X
                                </button>
                                <button onClick={() => editUser(user)}>
                                    Edit
                                </button>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}
