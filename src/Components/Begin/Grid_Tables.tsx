import { useEffect, useState } from "react";
import users from "../Begin/constant/users.json";
interface UserProps {
  Name: string;
  Title: string;
  Email: string;
  Role: string;
}
const Grid_Tables = () => {
  const [user, setUser] = useState<UserProps[]>([]);
  const [isopen, setIsOpen] = useState(false);
  const [addUsers, SetAddusers] = useState({
    Name: "",
    Title: "",
    Email: "",
    Role: "",
  });
  useEffect(() => {
    setUser(users.users);
  }, []);

  return (
    <>
      <div
        className={`bg-white shadow-lg rounded-lg overflow-hidden w-7xl mx-auto p-8 border border-gray-200 mt-10 ${
          isopen ? "opacity-20" : ""
        }`}
      >
        <div className="px-6 py-4 border-b border-gray-200">
          <div className="md:flex md:items-center md:justify-between">
            <div className="min-w-0 flex-1">
              <h2 className="text-lg font-medium text-gray-900">Users</h2>
              <p className="mt-1 text-sm text-gray-500">
                A list of all the users in your account including their name,
                title, email and role.
              </p>
            </div>
            <div className="mt-4 flex md:mt-0 md:ml-4">
              <button
                type="button"
                className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-600"
                onClick={() => {
                  setIsOpen(true);
                }}
              >
                <svg
                  className="-ml-0.5 mr-2 h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
                Add user
              </button>
            </div>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Title
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Email
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Role
                </th>
                <th scope="col" className="relative px-6 py-3">
                  <span className="sr-only">
                    <a href="">Edit</a>
                  </span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200 ">
              {user.map((users, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {users.Name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {users.Title}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {users.Email}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {users.Role}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <a
                      href="#"
                      className="text-indigo-600 hover:text-indigo-900"
                      onClick={() => {
                        SetAddusers((prev) => ({
                          ...prev,
                          Name: users.Name,
                          Email: users.Email,
                          Title: users.Title,
                          Role: users.Role,
                          //  R: "", we can do like this
                        }));
                        // SetAddusers({
                        //   ...user,
                        //   Name: users.Name,
                        //   Email: users.Email,
                        //   Title: users.Title,
                        //   Role: users.Role,
                        //   //r: "", // only existing values
                        // });
                        setIsOpen(true);
                      }}
                    >
                      Edit
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* popup */}
        </div>
      </div>
      {isopen && (
        <div
          className={`
    bg-white shadow rounded-lg p-6 w-full max-w-4xl mx-auto
    transition-opacity transition-transform duration-300 ease-out
    ${
      isopen
        ? "opacity-100 scale-100"
        : "opacity-0 scale-95 pointer-events-none"
    }
    fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10
    will-change-transform  // Improves animation smoothness
  `}
        >
          {" "}
          <h2 className="text-lg font-medium text-gray-900 mb-4 align-center">
            Edit User
          </h2>
          <form className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-4 dela">
            {/* sm:640px and above */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                value={addUsers.Name}
                className="mt-1 block w-full  border-gray-300 outline-none  border-1 p-3 rounded-sm   focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="John Doe"
                required
                onChange={(e) => {
                  SetAddusers((prev) => ({
                    ...prev, // this add
                    Name: e.target.value,
                  }));
                }}
              />
            </div>
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700"
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                value={addUsers.Title}
                className="mt-1 block w-full  border-gray-300 outline-none  border-1 p-3 rounded-sm   focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="Software Engineer"
                required
                onChange={(e) => {
                  SetAddusers((prev) => ({
                    ...prev,
                    Title: e.target.value,
                  }));
                }}
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                value={addUsers.Email}
                id="email"
                className="mt-1 block w-full  border-gray-300 outline-none  border-1 p-3 rounded-sm   focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="john.doe@example.com"
                required
                onChange={(e) => {
                  SetAddusers((prev) => ({
                    ...prev,
                    Email: e.target.value,
                  }));
                }}
              />
            </div>
            <div>
              <label
                htmlFor="role"
                className="block text-sm font-medium text-gray-700"
              >
                Role
              </label>
              <select
                id="role"
                value={addUsers.Role}
                className="mt-1 block w-full border-gray-300 outline-none border-1 p-3 rounded-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                onChange={(e) => {
                  SetAddusers((prev) => ({
                    ...prev,
                    Role: e.target.value,
                  }));
                }}
              >
                <option value="" disabled>
                  Select Role
                </option>
                <option value="Admin">Admin</option>
                <option value="Member">Member</option>
                <option value="Editor">Editor</option>
                <option value="Viewer">Viewer</option>
              </select>
            </div>
            <div className="flex justify-center">
              <button
                type="button"
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                Cancel
              </button>
              <button
                type="button"
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={() => {
                  setUser((prevUser) => {
                    const existingUserIndex = prevUser.findIndex(
                      (u) => u.Email === addUsers.Email
                    );
                    console.log(existingUserIndex);

                    if (existingUserIndex > -1) {
                      return prevUser.map(
                        (u, index) =>
                          //  usermap is iterate over all array objects
                          index === existingUserIndex
                            ? { ...u, ...addUsers }
                            : u
                        // index === existingUserIndex ? { ...u, Email:"tadde milllionyou@gmail.com" } : u // update only some properties
                        //  we can use immer to update the state as well as
                      );
                    } else {
                      return [...prevUser, addUsers];
                    }
                  });
                  setIsOpen(false);
                  // console.log(addUsers);
                }}
              >
                Save
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default Grid_Tables;
