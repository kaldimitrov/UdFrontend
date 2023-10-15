import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { Home } from './pages/Home'
import { SignIn } from './pages/SingInPage'
import { SignUp } from './pages/SignUpPage'

function App() {
    return (
      <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/SignIn' element={<SignIn/>} />
                    <Route path='/SignUp' element={<SignUp />} />
                </Routes>
            </BrowserRouter>
      </div>
    )
}

export default App;