import { useState } from "react";
import { MdDelete, MdEditDocument } from "react-icons/md";
import { toast } from "react-toastify";

const User = ({ user, setUsers }) => {
  const [updateMode, setUpdateMode] = useState(false);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  const handleDelete = (id) => {
    fetch(`http://localhost:3000/users/${id}`, { method: "DELETE" })
      .then((res) => res.json())
      .then(() => {
        toast.success("User deleted successfully!");
        setUsers((prev) => prev.filter((u) => u._id !== id));
      })
      .catch(() => toast.error("Failed to delete user."));
  };

  const handleUpdateUser = (e) => {
    e.preventDefault();
    const updatedUser = { name, email };

    fetch(`http://localhost:3000/users/${user._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedUser),
    })
      .then((res) => res.json())
      .then(() => {
        toast.success("User updated successfully!");
        setUsers((prev) =>
          prev.map((u) =>
            u._id === user._id ? { ...u, name: name, email: email } : u,
          ),
        );
        setUpdateMode(false);
      })
      .catch(() => toast.error("Failed to update user."));
  };

  return (
    <div className="shadow p-5 rounded-md" data-aos="fade-up">
      {!updateMode ? (
        <>
          <h1 className="text-xl font-medium lg:font-semibold 2xl:font-bold uppercase text-green-600">
            {user.name}
          </h1>
          <p className="text-gray-600">Email: {user.email}</p>
          <div className="pt-3">
            <button
              onClick={() => handleDelete(user._id)}
              className="bg-red-500 text-white px-3 py-1 rounded-md mr-2"
            >
              <MdDelete />
            </button>
            <button
              onClick={() => setUpdateMode(true)}
              className="bg-green-600 text-white px-3 py-1 rounded-md"
            >
              <MdEditDocument />
            </button>
          </div>
        </>
      ) : (
        <form onSubmit={handleUpdateUser} className="flex flex-col gap-2">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border px-2 py-1 rounded-md"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border px-2 py-1 rounded-md"
          />
          <div className="pt-2">
            <button
              type="submit"
              className="bg-green-600 text-white px-3 py-1 rounded-md mr-2"
            >
              Save
            </button>
            <button
              type="button"
              onClick={() => setUpdateMode(false)}
              className="bg-gray-500 text-white px-3 py-1 rounded-md"
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default User;
