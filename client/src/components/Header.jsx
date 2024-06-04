import React from 'react'
import { UserButton } from '@clerk/clerk-react'

import logowithname from '../assets/logowithname.png'
import logo from '../assets/logo.png'

import { Link } from 'react-router-dom'


function Header(props) {
  return (
    <div className='header'>
      <div className='logo'>
        <img src={(props.type == "main") ? logowithname : logo} alt="logo" width={(props.type == "main") ? 250 : 140} />
      </div>
      
      {
        (props.type == "main") ? <UserButton afterSignOutUrl='/sign-in' /> : <Link to="/sign-in" className='btn'>Log In</Link>
      }

    </div>
  )
}

export default Header