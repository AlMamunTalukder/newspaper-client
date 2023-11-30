import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../Authentication/Providers/AuthProvider";

const UserProfile = () => {
  const [userProfile, setUserProfile] = useState([]);
  console.log(userProfile);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    fetch(`http://localhost:5000/users/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setUserProfile(data));
  }, [user]);
  return (
    <div className="hero min-h-screen bg-base-200">
      <Helmet>
        <title>Global Times | Profile</title>
      </Helmet>
      <div className="hero-content flex-col lg:flex-row">
        {userProfile.map((item) => (
          <div key={item._id}>
            <img src={item.img} alt={`Profile of ${item.name}`} />
            <div>
              <h1 className="text-5xl font-bold">{item.name}</h1>
              <p className="py-6"></p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserProfile;
