//sign up
function makeSignUp() {

    const root = document.getElementsByClassName('body')
    const sign_up_container = document.createElement('div')
    const sign_up_bar = document.createElement('form')
    const sign_up_input = document.createElement('input')
    sign_up_bar.id = "SignUpForm"
    sign_up_container.appendChild(sign_up_bar)
    sign_up_bar.appendChild(sign_up_container)
    root.appendChild(sign_up_container)
}

console.log('js connected to sign up')

makeSignUp()