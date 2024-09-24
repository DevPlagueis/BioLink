import { useState } from 'react';
import "./SignUp.css"
import "./SignUp.js"

function SignUpBtn() {
    const signedUp = () => {
        console.log("Someone clicked Sign Up")
        console.log()
    }
    
    return (
        <>
            <button id="SignUpBtn" onClick={signedUp}>
                Sign Up
            </button>

        </>
    )
}

export default SignUpBtn;