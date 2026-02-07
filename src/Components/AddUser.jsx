import React from "react";
import { toast } from "react-toastify";

const AddUser = () => {
  const handleAddUser = (e, setUsers) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;

    fetch(`http://localhost:3000/users`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("User added:", data);

        // Update state if setUsers is provided
        if (setUsers) {
          setUsers((prevUsers) => [...prevUsers, data]);
        }

        toast.success("User added successfully!");

        // Clear form
        e.target.reset();
      })
      .catch((err) => {
        console.error(err);
        toast.error("Failed to add user");
      });
  };

  return (
    <div className="flex items-center justify-center h-[92vh] md:h-[80vh] lg:h-[90vh] 2xl:h-[89vh] w-full">
      <form
        className="w-[40%] h-[30vh] md:h-[40vh] lg:h-[50vh] 2xl:h-[60vh] flex items-center justify-center flex-col bg-gray-100 p-25 gap-5"
        onSubmit={handleAddUser}
      >
        <input
          className="py-3 bg-white w-full px-5 focus:outline-0 rounded-md"
          type="text"
          name="name"
          placeholder="Enter Your Name"
        />
        <input
          className="py-3 bg-white w-full px-5 focus:outline-0 rounded-md"
          type="email"
          name="email"
          placeholder="Enter Your Email"
        />
        <button
          className="bg-green-600 text-white w-full py-3 rounded-md"
          type="submit"
        >
          Add User
        </button>
      </form>
    </div>
  );
};

export default AddUser;
