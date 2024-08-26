"use client";

import UserService from "@/services/userService";
import { useState } from "react";

const Hero = () => {
  const [user, setUser] = useState<User>({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!user.name || !user.email || !user.phone) {
      return;
    }
    try {
      console.log("New user:", e);
      const newUser = await UserService.createUser(user);
      setUser({ id: "", name: "", email: "", phone: "" });
      console.log("New user:", newUser);
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  return (
    <main className="container mx-auto px-4 py-8 md:pt-24 flex flex-col justify-start items-center  min-h-screen ">
      <h1 className="lg:text-5xl text-4xl max-w-2xl font-bold text-center mb-8">
        A new home for readers and writers
      </h1>

      <div className="max-w-lg mx-auto bg-white mt-6 p-6 rounded-md shadow-xl ring-2 ring-purple-300">
        <div className="text-center mb-4">
          <span className="bg-gray-800 text-white px-4 py-2 rounded-full text-sm">
            Subscribe to our newsletter
          </span>
        </div>

        <form onSubmit={handleSubmit} className="pt-6">
          <div className="flex justify-center gap-3">
            <div className="mb-4 ">
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                value={user.name}
                onChange={handleChange}
                type="name"
                id="name"
                className="w-full border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:border-purple-600"
              />
            </div>
            <div className="mb-4 ">
              <label htmlFor="phone" className="block text-sm font-medium mb-2">
                Phone number
              </label>
              <input
                value={user.phone}
                onChange={handleChange}
                type="phone"
                id="phone"
                className="w-full border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:border-purple-600"
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Adresse email
            </label>
            <input
              value={user.email}
              onChange={handleChange}
              type="email"
              id="email"
              className="w-full border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:border-purple-600"
            />
          </div>
          <button className="w-full bg-purple-600 text-white py-2 rounded-lg font-medium">
            Submit
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-4">
          J'ai déjà fait ce test d'éligibilité →
        </p>
      </div>
    </main>
  );
};

export default Hero;
