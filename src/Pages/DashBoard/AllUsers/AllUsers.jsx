import { useEffect, useState } from "react";

const AllUsers = () => {
  const [allUsers, setAllUsers] = useState([]);
  console.log(allUsers);

  useEffect(() => {
    fetch("https://newspaper-final-server.vercel.app/users")
      .then((res) => res.json())
      .then((data) => setAllUsers(data));
  }, []);

  return (
    <div className="-mt-[420px] ml-56 w-96">
      <div className="overflow-x-auto h-screen w-[1170px]">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>D.P</th>
              <th>Name</th>
              <th>Email</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {allUsers.map((item, index) => (
              /* row 1 */
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask w-12 h-12">
                        <img
                          src={item.img}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="font-bold">{item.name}</div>
                </td>
                <td>{item.email}</td>
                <th>
                  <button className="btn btn-success btn-md">Make Admin</button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
