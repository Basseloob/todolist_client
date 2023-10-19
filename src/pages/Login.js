import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    // 1)
    const data = { username: username, password: password };
    // 2)
    axios.post("http://localhost:3001/auth", data).then((response) => {
      console.log("Yes");
    });
    // console.log(data);
  };

  return (
    <div className="loginContainer">
      <label>Username :</label>
      <input
        type="text"
        onChange={(event) => {
          setUserName(event.target.value);
        }}
      ></input>
      <label>Password :</label>
      <input
        type="password"
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      ></input>

      <button onClick={login}>Press</button>
    </div>
  );
};

export default Login;
