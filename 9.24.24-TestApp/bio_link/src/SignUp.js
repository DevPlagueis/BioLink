import "./SignUp.css"

function SignUp() {
    return(
        <>
            <div id="SignUpBox">
                <form id = "SignUpForm">
                    <label>First Name : 
                        <input type="text" />
                    </label>
                    <label>Last Name:
                        <input type="text" />
                    </label>
                    <label>Email-Address:
                        <input type="text" />
                    </label>
                    <label>Password :
                        <input type="text" />
                    </label>
                </form>
             </div>
        </>
    )
}

export default SignUp;