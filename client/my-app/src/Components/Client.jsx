import React from 'react'
import {useState } from 'react';


export default function Client(props) {


    const [client, setclient] = useState({
        client: ''
      })
    

      const handleClick = (e) => {

        setClient({
          client: props.client.id
        })
        console.log(client)
    
         props.history.push(`/clients/${props.client.id}/notes`);
      }
  
      const deleteHandler = () => {
        fetch(`http://localhost:3000/clients/${props.client.id}`, {
          method: "DELETE",
          headers: {
            "Content-type": "application/json",
            "authorization": props.currentUser.token
        },
        })
          .then((r) => r.json())
          .then((r) => props.deleteClient(r.id));
      }
  





    return (
  <div>
      <card style={{ 
        color: 'rgba(250, 250, 255, 1)',
        backgroundColor: 'rgba(0, 11, 26, .7)'}}
        classes={{root: state.raised ? classes.cardHovered : ""}}
        onMouseOver={()=>setState({ raised: true, shadow:3})} 
        onMouseOut={()=>setState({ raised:false, shadow:1 })} 
        raised={state.raised} zdepth={state.shadow}
        onClick={handleClick}> 
        <h3>{props.client.name}</h3>
        <p>{props.client.profession}</p>
       </card>
        <button size="small" onClick={deleteHandler}>Delete</button>
  </div>
    )
}
