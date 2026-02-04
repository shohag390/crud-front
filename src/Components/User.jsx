import React from "react";

const User = ({ user }) => {
  console.log(user);

  return (
    <div className="shadow p-5">
      <p>{user?.id}</p>
      <h1>{user?.name}</h1>
      <p>{user?.email}</p>
      <p>{user?.role}</p>
    </div>
  );
};

export default User;
