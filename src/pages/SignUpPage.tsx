import { Link } from 'react-router-dom'
import { SignUpRequest } from '../services/SignUpRequest'

async function HandleSignUp (event: React.MouseEvent<HTMLButtonElement>){
    const firstNameInput = document.getElementById("firstName") as HTMLInputElement;
    const lastNameInput = document.getElementById("lastName") as HTMLInputElement;
    const emailInput = document.getElementById("email") as HTMLInputElement;
    const passwordInput = document.getElementById("password") as HTMLInputElement;

    const firstNameValue = firstNameInput?.value;
    const lastNameValue = lastNameInput?.value;
    const emailValue = emailInput?.value;
    const passwordValue = passwordInput?.value;
    
    const response = await SignUpRequest(firstNameValue, lastNameValue, emailValue, passwordValue);
};

export const SignUp = () => {
    return (
        <>
            <header></header>
            <body>
                <h1>Sign Up</h1>
                <div className='input-fields'>
                    <input id="firstName" placeholder="First Name"/>
                    <input id="lastName" placeholder="Last Name"/>
                    <input id="email" placeholder="Email"/>
                    <input id="password" type="password" placeholder="Password"/>
                    <Link to="/SignIn">Already have an account?</Link>
                    <button id='buttons' onClick={ HandleSignUp }>Sign Up</button>
                </div>
            </body>
            <footer></footer>
        </>
    )
}

export default SignUp;