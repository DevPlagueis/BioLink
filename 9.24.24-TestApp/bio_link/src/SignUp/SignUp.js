import "./SignUp.css"
import SignUpBtn from "./SignUpBtn";
import React, { useState } from 'react';

function SignUp() {
  // Step 1: Create state variables for each form field
  const [fname, setfName] = useState('');
  const [lname, setlName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission
    console.log('fName:', fname);
    console.log('lName:', lname);
    console.log('Email:', email);
    console.log('Password:', password);

    //  Do something with the values 
    let str = "cuestam.dev@gmail.com";
    // Find the index of the '@' symbol
    let atSymb = str.indexOf('@');

    // Strip out the part starting at '@'
    let result = str.substring(atSymb + 1); // "gmail.com"
    console.log("Email Domain: " + result);
  };

  return (
    <>
        <div id="SignUpContainer">
        <h1>Sign Up</h1>
            <form id="SignUpForm" onSubmit={handleSubmit}>
                <div>
                    <input 
                    type="text" 
                    placeholder="First Name"
                    value={fname} 
                    onChange={(e) => setfName(e.target.value)} // Update state on change
                    />
                </div>
                <div>
                    <input 
                    type="text" 
                    placeholder="Last Name"
                    value={lname} 
                    onChange={(e) => setlName(e.target.value)} // Update state on change
                    />
                </div>
                <div>
                    <input 
                    type="email" 
                    placeholder="Email-Address"
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} // Update state on change
                    />
                </div>
                <div>
                    <input
                    type="password"
                    placeholder="Password"
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} // Update state on change
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    </>
  );
}

export default SignUp;

