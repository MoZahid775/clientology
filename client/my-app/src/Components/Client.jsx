import React from 'react'
import {useState } from 'react';


export default function Client(props) {


    const [client, setClient] = useState({
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
        color: 'rgba(20, 250, 255, 1)'}}> 
        <h3>{props.client.name}</h3>
        <p>{props.client.profession}</p>
        <button>Profile</button>
        <button onClick={handleClick}>Notes</button>
        </card>
        <button onClick={deleteHandler}>Delete</button>
  </div>
    )
}
