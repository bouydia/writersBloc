"use client";

import userService from "@/services/userService";
import { useEffect, useState } from "react";


export default function UserPage() {
  const [users, setUsers] = useState<User[]>([]);

  const fetchUsers = async () => {
    const data = await userService.getUsers();
    setUsers(data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="flex flex-col h-full">
      <h1 className="text-lg font-semibold md:text-2xl mb-2">UserPage</h1>
      
      {users.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left p-3">ID</th>
                <th className="text-left p-3">Name</th>
                <th className="text-left p-3">Email</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-b">
                  <td className="p-3">{user.id}</td>
                  <td className="p-3">{user.name}</td>
                  <td className="p-3">{user.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div
          className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm"
        >
          <div className="flex flex-col items-center gap-1 text-center">
            <h3 className="text-2xl font-bold tracking-tight">
              You have no users yet
            </h3>
            <p className="text-sm text-muted-foreground">
              Create your first user to get started
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
