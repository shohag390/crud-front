const User = ({ user }) => {
  console.log(user);

  return (
    <div data-aos="fade-up" className="shadow p-5 rounded-md">
      <h1 className="text-xl font-medium lg:font-semibold 2xl:font-bold uppercase text-green-600">
        {user?.name}
      </h1>
      <p className="text-gray-600">Email: {user?.email}</p>
      <p className="text-gray-600">Role: {user?.role}</p>
    </div>
  );
};

export default User;
