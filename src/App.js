import { BrowserRouter , Route , Routes } from 'react-router-dom';

import Home from './components/Home';
import AllCollege from './components/AllCollege'
import Signin from './components/Signin'
import Login from './components/Login'
import Header from './components/Header'
import Contextapi from './Context/contextapi';
import Nopage from './components/Nopage';
import ForgetPassword from './components/ForgetPassword';
import AddCollege from './components/AddCollege'
import ProtectedRoutes from './components/ProtectedRoutes';
import CollegeDetail from './components/CollegeDetail';
import Profile from './components/Profile';
import PersonalDetail from './components/PersonalDetail';
function App() {
  return (
    <BrowserRouter>
    <Contextapi>
    <Header/>

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/allcollege' element={<AllCollege/>}/>
      <Route path='/signup' element={<Signin/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/forgetpassword' element={<ForgetPassword/>}/>
      <Route path='/addcollege' element={ <ProtectedRoutes>
        <AddCollege/>
      </ProtectedRoutes> }/>
      <Route path='/profile' element={ <ProtectedRoutes>
        <Profile/>
      </ProtectedRoutes> }/>
      <Route path='/detail/:id' element={<CollegeDetail/>}/>
      <Route path='/personalcollegedetail/:id' element={<PersonalDetail/>}/>
      <Route path='*' element={<Nopage/>}/>
    </Routes>
   </Contextapi>
   </BrowserRouter>
  );
}

export default App;
