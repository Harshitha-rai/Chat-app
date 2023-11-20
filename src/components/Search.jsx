import React from 'react'

const Search = () => {
  return (
    <div className='search'>
      <div className='search-form'>
        <input type='text' placeholder='Find a user' />
      </div>
      <div className='user-chat'>
        <img src='https://images.pexels.com/photos/4668513/pexels-photo-4668513.jpeg?auto=compress&cs=tinysrgb&w=600' alt='' />
      
        <div className='user-info'> 
          <span>Yachu</span>
        </div>
      </div>
    </div>
  )
}

export default Search