import React, { Suspense } from "react";
import UsersContanear from "./UsersContanear";
import Loading from "./Loading";
const usersPromise = fetch(`http://localhost:3000/users`).then((res) =>
  res.json(),
);

const HeroUsers = () => {
  return (
    <div className="px-5 md:px-12.5 lg:px-25 2xl:px-35 py-3 md:py-4 lg:py-5 2xl:py-6">
      <h1
        data-aos="fade-right"
        className="font-medium md:font-semibold lg:font-bold text-[18px] lg:text-[20px] 2xl:text-[25px] text-green-700 pb-2 md:pb-3 lg:pb-4 2xl:pb-5"
      >
        This Hero Users
      </h1>
      <Suspense fallback={<Loading />}>
        <UsersContanear usersPromise={usersPromise} />
      </Suspense>
    </div>
  );
};

export default HeroUsers;
