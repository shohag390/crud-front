import { use } from "react";
import User from "./User";

const UsersContanear = ({ usersPromise }) => {
  const users = use(usersPromise);
  //   console.log(users);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 gap-2 md:gap-3 lg:gap-4 2xl:gap-5">
      {users?.map((user) => (
        <User key={user?.id} user={user} />
      ))}
    </div>
  );
};

export default UsersContanear;
