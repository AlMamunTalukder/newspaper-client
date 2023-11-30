import { useEffect, useState } from "react";

import CountUp from "react-countup";

const Statics = () => {
  const [userStatics, setUserStatics] = useState([]);
  console.log(userStatics);

  useEffect(() => {
    fetch("https://newspaper-final-server.vercel.app/users")
      .then((res) => res.json())
      .then((data) => setUserStatics(data));
  }, []);

  return (
    <div className="card lg:card-side bg-gray-200 shadow-xl  lg:mx-32 lg:mb-20 py-10 pl-14 border-2 border-black font-bold">
      <h2 className="text-4xl font-bold text-black">Total Users: </h2>
      <div className="text-black  text-xl mt-3 ml-3 flex gap-4">
        <CountUp end={userStatics.length} duration={2} />
      </div>
    </div>
  );
};

export default Statics;
