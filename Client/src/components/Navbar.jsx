import React from 'react'
import {signOut} from "firebase/auth"
import { auth } from "../firebase"


const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>SIGEPS</span>
      <div className='user'>
        <img src="https://images.pexels.com/photos/26926252/pexels-photo-26926252/free-photo-of-o-olhar.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
        <span>Max</span>
        <button onClick={()=>signOut(auth)}>Logout</button>
      </div>
    </div>
  )
}

export default Navbar