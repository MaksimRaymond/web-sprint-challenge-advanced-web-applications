import axios from "axios";
import React, { useState } from "react";

const initialCredentials = {
  username: "",
  password: "",
};



const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
const [credentials, setCredentials] = useState(initialCredentials);

  const handleChange = (e) => {
    setCredentials({...credentials, [e.target.name]: e.target.value });
  };

  const login = (e) => {
    e.preventDefault();
    if (!e.target.username || !e.target.password) {
      alert("Username or Password are Wrong");
    } else {
      axios
      .post(`http://localhost:5000/api/login`, credentials)
      .then((res) => {
        localStorage.setItem("token", res.data.payload);
        window.location.href = "/protected";
        console.log(res, "axios post");
      })
      .catch((err) => {
        console.log(err);
      });
    }
  }
  

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>

      <br></br>
      <br></br>
      <form onSubmit={login}>
        <h1>Login</h1>
        <label>
          username
          <input type="text"
          placeholder="enter your Username"
          name="username"
          value={credentials.username}
          onChange={handleChange}/>
        </label>
        <br></br>
        <label>
          password<input type="password"
          placeholder="enter a password"
          name="password" 
          value={credentials.password}
          onChange={handleChange}/>
        </label>
        <button>Log In</button>
      </form>
    </>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE data-testid="username" and data-testid="password"
//4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid.
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.