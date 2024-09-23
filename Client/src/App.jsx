import Register from './Pages/Register'
import Login from './Pages/Login'
import Home from './Pages/Home'
import { BrowserRouter, Navigate, Route, Routes, } from "react-router-dom";
import "./style.scss"
import { Children, useContext } from 'react';
import { AuthContext } from './context/AuthContext';
function App() {
  const {currentUser} = useContext(AuthContext)
  const ProtectedRoute = ({Children}) => {
    if(!currentUser) {
      return<Navigate to= "/login"/>
    }
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;