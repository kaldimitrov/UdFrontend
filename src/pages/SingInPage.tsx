import { Link } from 'react-router-dom'
import { SignInRequest } from '../services/SignInRequest';

async function HandleSignIn (){
    const emailInput = document.getElementById("email") as HTMLInputElement;
    const passwordInput = document.getElementById("password") as HTMLInputElement;

    const emailValue = emailInput?.value;
    const passValue = passwordInput?.value;

    const response = await SignInRequest(emailValue, passValue);
};

export const SignIn = () => {
    return (
        <>
            <header></header>
            <body>
                <h1>Sign In</h1>
                <div className='input-fields'>
                    <input id="email" placeholder="Email"/>
                    <input id="password" type="password" placeholder="Password"/>
                    <Link to="/SignUp">Don't have an account?</Link>
                    <button id='buttons' onClick={ HandleSignIn }>Sign In</button>
                </div>
            </body>
            <footer></footer>
        </>
    )
}

export default SignIn;