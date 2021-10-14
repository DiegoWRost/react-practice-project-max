import User from "./User";

import "./UserList.css"

const UserList = (props) => {
  return (
    <ul className="user_list">
      {props.users.map((user) => (
        <User username={user.username} age={user.age} />
      ))}
    </ul>
  );
};

export default UserList;
