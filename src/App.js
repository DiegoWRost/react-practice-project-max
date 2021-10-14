import React, { useState } from "react";

import FormUI from "./components/UI/FormUI";
import UserList from "./components/Users/UserList";

const DUMMY_USERS = [
  {
    username: "Diego",
    age: "34",
  },
  {
    username: "Grazi",
    age: "29",
  },
];

function App() {
  const [users, setUsers] = useState(DUMMY_USERS);

  const addUser = user => {
    setUsers((prevUsers) => {
      return [user, ...prevUsers];
    });
  };

  return (
    <div>
      <FormUI onSaveData={addUser}></FormUI>
      <UserList users={users}></UserList>
    </div>
  );
}

export default App;
