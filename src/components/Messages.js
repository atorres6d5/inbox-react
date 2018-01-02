import React from 'react';
import Message from './Message'

const Messages = ({data, toggle, starred, box, selected}) => {


  return (
    data.map(email=>{
      return <Message key={email.id} email={email} clicky={toggle} stars={starred} box={box} selected={selected}/>
    })

  );
}



export default Messages;
