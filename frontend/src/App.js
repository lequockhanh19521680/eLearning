import Login from './pages/auth/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './pages/Main';
import AuthContextProvider from './contexts/AuthContext';
import Landing from './pages/layout/Landing';
import SignUp from './pages/auth/SignUp'
import Contact from './pages/Contact'
import ListLessonVL from './pages/ListLessonVL'
import ListLessonHoa from './pages/ListLessonHoa'
import ListLessonMath from './pages/ListLessonMath'
import './assets/fonts/ionicons.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';




function App() {
    return (
        <AuthContextProvider>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Landing />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/signup' element={<SignUp />} />
                    <Route path='/main/*' element={<Main />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/ListLessonVL" element={<ListLessonVL />} />
                    <Route path="/ListLessonHoa" element={<ListLessonHoa />} />
                    <Route path="/ListLessonMath" element={<ListLessonMath />} />
                </Routes>
            </BrowserRouter>
        </AuthContextProvider>

    );
}

export default App;
