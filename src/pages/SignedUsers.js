import axios from "axios";
import React, { useEffect, useState } from "react";

const SignedUsers = () => {
  const [signedUsers, setSignedUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/auth/signedUsers").then((response) => {
      setSignedUsers(response.data.signedUsers);
      // response.data.users.map((user) => {
      //   return user.username;
      // })
    });

    console.log(signedUsers);
  }, []);

  return (
    <div className="signedUsersContainer">
      <div>Signed Users : </div>
      {signedUsers.map((signedUser) => {
        return signedUser.username;
      })}
    </div>
  );
};

export default SignedUsers;
