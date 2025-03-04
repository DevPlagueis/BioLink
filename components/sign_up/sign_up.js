//sign up
signup_requested_users = []

//Sets up input fields in the signup.html file dynamicly
function makeInputs(container) {
    input_atts = ['First Name', 'Last Name', 'Email', 'Password']
    input_ids = ['fName', 'lName', 'email', 'password']
    for (let i = 0; i < input_atts.length; i++) {
        // console.log(input_atts[i]);
        const input = document.createElement('input')
        if (input_atts[i] == 'Password') {
            input.setAttribute('type', 'password')
        } else {input.setAttribute('type', 'text')}

        input.setAttribute('placeholder', input_atts[i]); 
        input.setAttribute('value', ''); 
        input.id = input_ids[i]
        container.appendChild(input)
    }
}

function makeSignUp() {
    const root = document.getElementById('body')
    const sign_up_container = document.createElement('div')
    const title = document.createElement('h1')
    const sign_up_form = document.createElement('form')
    const submit_btn = document.createElement('button')
    sign_up_container.id = "SignUpContainer"
    sign_up_form.id = "SignUpForm"
    title.textContent = 'Sign Up'
    submit_btn.textContent = "Submit"

    new_signup_request_user = []

    // submit button code
    submit_btn.addEventListener('click', (e) => {
        e.preventDefault();
        // Create a new user object each time the button is clicked
        const new_signup_request_user = {
            fname: document.getElementById('fName').value,
            lname: document.getElementById('lName').value,
            email: document.getElementById('email').value,
            password: document.getElementById('password').value
        };
        // Add the new object to the array
        signup_requested_users.push(new_signup_request_user);
        console.log(signup_requested_users);
        sign_up_form.reset();
    });
    sign_up_container.appendChild(title)
    sign_up_container.appendChild(sign_up_form)
    root.appendChild(sign_up_container)
    makeInputs(sign_up_form)
    sign_up_form.appendChild(submit_btn)

}

// makeSignUp()

    

    


