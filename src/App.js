import React, { useState } from "react";

import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

const DUMMY_USERS = [
  {
    name: "Diego",
    age: "34",
  },
  {
    name: "Grazi",
    age: "29",
  },
];

function App() {
  const [users, setUsers] = useState(DUMMY_USERS);

  // const addUser = user => {
  //   setUsers((prevUsers) => {
  //     return [user, ...prevUsers];
  //   });
  // };

  return (
    <div>
      {/* <AddUser onSaveData={addUser}></AddUser> */}
      <AddUser />
      <UsersList users={users}></UsersList>
    </div>
  );
}

export default App;
