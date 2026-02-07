import { useEffect, useState } from "react";
import Loading from "./Loading";
import User from "./User";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:3000/users`)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, []);

  if (loading) return <Loading />;

  return (
    <div className="px-5 md:px-12.5 lg:px-25 2xl:px-35 py-3 md:py-4 lg:py-5 2xl:py-6">
      <h1
        data-aos="fade-right"
        className="font-medium md:font-semibold lg:font-bold text-[18px] lg:text-[20px] 2xl:text-[25px] text-green-700 pb-2 md:pb-3 lg:pb-4 2xl:pb-5"
      >
        All Users
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 gap-2 md:gap-3 lg:gap-4 2xl:gap-5">
        {users.map((user) => (
          <User key={user._id} user={user} setUsers={setUsers} />
        ))}
      </div>
    </div>
  );
};

export default Users;
