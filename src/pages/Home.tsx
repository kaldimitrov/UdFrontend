import { Link } from 'react-router-dom'
export const Home = () => {
    const isLoggedIn = false;

    return (
        <>
            <header>
            </header>
            <body>
                <h1>Lorem ipsum a</h1>
                <Link to="/SignIn">Sign In</Link>
                <Link to="/SignUp">Sign Up</Link>
            </body>
            <footer>
            </footer>
        </>
    )
}

export default Home