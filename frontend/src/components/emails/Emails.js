import React from "react";

import EmailCard from "./EmailCard";
import DATA from "../../data/data";

const Emails = () => {
  return (
    <div>
      <div className='button-cont'>
        <button>Add an Email</button>
        <button>Delete an Email</button>
      </div>
      <div className='emails'>
        <table>
          <tr>
            <th>Email</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Date Added</th>
          </tr>
          {DATA.map(({ id, ...otherProps }) => (
            <EmailCard key={id} {...otherProps} />
          ))}
        </table>
      </div>
    </div>
  );
};

export default Emails;
