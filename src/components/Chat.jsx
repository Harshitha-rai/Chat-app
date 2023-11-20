import React from 'react';
import Cam from '../image/cam.png';
import Add from '../image/add.png';
import More from '../image/more.png'
import Messages from './Messages';
import Input from './Input';

const Chat = () => {
  return (
    <div className='chat'>
      <div className='chat-info'>
        <span>Yachu</span>
        <div className='chat-icon'>
          <img src={Cam} alt='' />
          <img src={Add} alt='' />
          <img src={More} alt='' />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  )
}

export default Chat