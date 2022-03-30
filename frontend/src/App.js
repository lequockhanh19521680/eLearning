import Login from './pages/auth/Login'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import { Example } from './pages/Example';
import AuthContextProvider from './contexts/AuthContext';
import Landing from './pages/layout/Landing';
import ProtectedRoute from './pages/routing/ProtectedRoute';
import SignUp from './pages/auth/SignUp'

import './assets/fonts/ionicons.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
    return (
        <AuthContextProvider>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Landing/>} />
                    <Route path='/login' element={ <Login />} />
                    <Route path='/signup' element={ <SignUp/>} />
                    <Route path='/'  element={<ProtectedRoute />}>
                        <Route path='/' element={<Example />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </AuthContextProvider>
    );
}

export default App;
