import React from 'react'

const Message = () => {
  return (
    <div className='message owner'>
      <div className='messageInfo'>
        <img src='https://images.pexels.com/photos/1387037/pexels-photo-1387037.jpeg?auto=compress&cs=tinysrgb&w=600' alt='' />
        <span>Just now</span>
      </div>
      <div className='messageContent'>
        <p>Hello</p>
        <img src='https://images.pexels.com/photos/1387037/pexels-photo-1387037.jpeg?auto=compress&cs=tinysrgb&w=600' alt='' />
      </div>
      
    </div>
  )
}

export default Message