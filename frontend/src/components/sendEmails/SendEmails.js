import React, { useState } from "react";

const SendEmails = () => {
  const [email, setEmail] = useState({
    to: "",
    subject: "",
    contents: "",
  });
  const handleChange = (event) => {
    setEmail({ ...email, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <div>
        To: Subject: Contents:
        <form>
          <input
            type='email'
            placeholder='Send To'
            name='to'
            required
            value={email.to}
            onChange={(event) => handleChange(event)}
          />
          <input
            type='subject'
            placeholder='Enter subject'
            name='subject'
            required
            value={email.subject}
            onChange={(event) => handleChange(event)}
          />
          <textarea
            type='text'
            placeholder='Write email..'
            name='contents'
            required
            value={email.contents}
            onChange={(event) => handleChange(event)}
          />
          <button>Send Email</button>
        </form>
      </div>
    </div>
  );
};

export default SendEmails;
