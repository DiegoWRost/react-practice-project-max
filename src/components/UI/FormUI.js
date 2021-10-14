import React, { useState } from "react";

import "./FormUI.css";

const FormUI = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const formData = {
      username: enteredUsername,
      age: enteredAge,
    };

    props.onSaveData(formData);

    setEnteredUsername("");
    setEnteredAge("");
  };

  return (
    <div className="form_controls">
      <form onSubmit={submitHandler}>
        <label>Username</label>
        <input
          type="text"
          value={enteredUsername}
          onChange={usernameChangeHandler}
        />
        <label>Age (Years)</label>
        <input type="text" value={enteredAge} onChange={ageChangeHandler}/>
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default FormUI;
