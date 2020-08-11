import React, { useState } from "react";
import axios from "axios";

const Onboarding = (props) => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    psw: "",
    pswRepeat: "",
  });
  const [displayUser, setDisplayUser] = useState({
    username: "",
    email: "",
    psw: "",
  });
  const [onboardingState, setOnboardingState] = useState(false);

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    let userTemp = {
      username: user.username,
      email: user.email,
      password: user.psw,
    };
    if (!onboardingState) {
      console.log("User Logged In: ", userTemp);
      axios
        .post("http://localhost:5000/api/users/login/", userTemp)
        .then((res) => {
          console.log(res);
          localStorage.setItem("token", res.data.token);
          props.history.push("/");
        })
        .catch((err) => console.log(err.response));
    } else {
      console.log("User Created: ", userTemp);
      axios
        .post("http://localhost:5000/api/users/createUser/", userTemp)
        .then((res) => {
          console.log(res);
          localStorage.setItem("token", res.data.token);
          props.history.push("/");
        })
        .catch((err) => console.log(err.response));
    }
    setUser({ username: "", email: "", psw: "", pswRepeat: "" });
    event.preventDefault();
  };
  const handleSwitch = (event) => {
    if (onboardingState) {
      setOnboardingState(false);
    } else {
      setOnboardingState(true);
    }
  };
  return (
    <div className='form-cont'>
      {console.log(user)}
      {onboardingState ? <h3>Sign Up</h3> : <h3>Sign In</h3>}
      <form onSubmit={(event) => handleSubmit(event)}>
        <input
          type='username'
          placeholder='Enter Username'
          name='username'
          required
          value={user.username}
          onChange={(event) => handleChange(event)}
        />
        {onboardingState ? (
          <input
            type='email'
            placeholder='Enter Email'
            name='email'
            required
            value={user.email}
            onChange={(event) => handleChange(event)}
          />
        ) : (
          ""
        )}
        <input
          type='password'
          placeholder='Enter Password'
          name='psw'
          required
          value={user.psw}
          onChange={(event) => handleChange(event)}
        />
        {onboardingState ? (
          <input
            type='password'
            placeholder='Confirm Password'
            name='pswRepeat'
            required
            value={user.pswRepeat}
            onChange={(event) => handleChange(event)}
          />
        ) : (
          ""
        )}
        <div className='button-cont'>
          {onboardingState ? (
            <button type='submit' className='signupbtn'>
              Sign Up
            </button>
          ) : (
            <button type='submit' className='signupbtn'>
              Sign In
            </button>
          )}
          <button type='button' className='cancelbtn'>
            Cancel
          </button>
        </div>
        {onboardingState ? (
          <p>
            Already have an account?{" "}
            <button className='switch' onClick={() => handleSwitch()}>
              Signin here
            </button>
          </p>
        ) : (
          <p>
            Need an account?{" "}
            <button className='switch' onClick={() => handleSwitch()}>
              Signup here
            </button>
          </p>
        )}
      </form>
    </div>
  );
};

export default Onboarding;
