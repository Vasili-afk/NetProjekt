import { Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './components/auth/login';
import Home from './components/home';
import PrivateRouter from './util/router/privateRote';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route element={<PrivateRouter/>}>
          <Route path='/' element={<Home/>}/>
        </Route>
        <Route path='/login' element={<LoginPage/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
