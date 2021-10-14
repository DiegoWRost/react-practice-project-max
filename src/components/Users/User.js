import "./User.css"

const User = (props) => {
  return (
    <div className="user">
      {props.username} ({props.age})
    </div>
  );
};

export default User;
