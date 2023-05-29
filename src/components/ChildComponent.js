import React from 'react'

const ChildComponent = (props) => {
  console.log(props);

  const handleChange = (e) =>{
    props.updateMessage(e.target.value);
  }
  
  return (
    <div>
      <h2>This is Child Component</h2>
      <p>Message from Parent Component is here: {props.message}  </p>
      <input type="text" value={props.message} onChange={handleChange} />
    </div>
  )
}

export default ChildComponent