import "./SignUp.css"
import SignUpBtn from "./SignUpBtn";
function SignUp() {
    return(
        <>
            <div id="SignUpContainer">
                <h1>SignUp</h1>
                <form id = "SignUpForm">
                        <input name ="fname" type="text" placeholder="First Name"/>
                        <input name="lname" type="text" placeholder="Last Name"/>
                        <input name="email" type="text" placeholder="Email-Address"/>
                        <input name="password" type="password" placeholder="Password"/>
                </form>
                <SignUpBtn />
             </div>
        </>
    )
}

export default SignUp;