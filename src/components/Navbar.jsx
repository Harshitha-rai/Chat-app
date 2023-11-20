import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='nav-title'>ChitChat</span>
      <div className='nav-user'>
        <img src='https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg?auto=compress&cs=tinysrgb&w=600' alt='' />
        <span>Harshitha</span>
        <button className='logout'>Logout</button>
      </div>
    </div>
  )
}

export default Navbar