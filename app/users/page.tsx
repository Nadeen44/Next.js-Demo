"use client";
import React, { useEffect, useState } from 'react';
import UserTable from './UserTable/page';

interface User {
  id: number;
  name: string;
  email: string;
}

const UsersPage = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/users', { cache: 'no-store' });
      const usersData: User[] = await res.json();
      setUsers(usersData);
    };

    fetchUsers();
  }, []);

  return (
    <>
      <UserTable users={users} />
    </>
  );
};

export default UsersPage;
