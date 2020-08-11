import React from "react";

const Emails = ({ email, Fname, Lname, timeStamp }) => {
  return (
    <tr>
      <td>{email}</td>
      <td>{Fname}</td>
      <td>{Lname}</td>
      <td>{timeStamp}</td>
    </tr>
  );
};

export default Emails;
