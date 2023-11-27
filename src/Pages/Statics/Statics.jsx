import { useContext } from "react";
import { AuthContext } from "../../Authentication/Providers/AuthProvider";
import CountUp from "react-countup";

const Statics = () => {
  const { user } = useContext(AuthContext);

  console.log(user);

  return (
    <div className="card lg:card-side bg-gray-200 shadow-xl  lg:mx-32 lg:mb-20 py-10 pl-14 border-2 border-black font-bold">
      <h2 className="text-4xl font-bold text-black">Total Users: </h2>
      <div className="text-black  text-xl mt-3 ml-3 flex gap-4">
        <CountUp end={user} duration={2} />
        <CountUp start={0} end={100} delay={0}>
          {({ countUpRef }) => (
            <div>
              <span ref={countUpRef} />
            </div>
          )}
        </CountUp>
      </div>
    </div>
  );
};

export default Statics;
