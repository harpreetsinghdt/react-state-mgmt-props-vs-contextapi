import React, { useState} from 'react';
import '../css/style.css';
import ChildComponent from './ChildComponent';


const ParentComponent = () => {
  const [message, setMessage] = useState("Hello from the parent component");
  
  const updateMessage = (newMessage) => {
    setMessage(newMessage);
  }
  
  return (
    <div>
      <h1>This is Parent Component</h1>
      <ChildComponent message={message} updateMessage={updateMessage}/>
    </div>
  )
}

export default ParentComponent;