import React from 'react'
import {useState } from 'react';
import { Button, Card, Image } from 'semantic-ui-react'


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
       <Card style={{ 
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        color: 'rgba(36, 242, 180, 1)',
        width: 500}}> 
            <Card.Content>
            <Image
          floated='right'
          size='mini'
          // src='https://www.vhv.rs/dpng/d/408-4087421_person-svg-circle-icon-picture-charing-cross-tube.png'
        />
        <br></br>
        <Card.Header style={{color: 'rgba(36, 242, 180, .9)'}}>{props.client.name}</Card.Header>
        <Card.Description style={{color: 'rgba(36, 242, 255, .7)'}}>
          Profession: <strong>{props.client.profession}</strong>
        </Card.Description>
        </Card.Content>
       <br></br>
       <Card.Content extra>
        <Button style={{backgroundColor: 'rgba(210, 220, 231, 1)', color: 'rgba(0, 0, 0, 1)'}} >Profile</Button>
        <Button style={{backgroundColor: 'rgba(210, 220, 231, 1)', color: 'rgba(0, 0, 0, 1)'}} >Purchase History</Button>
        <Button style={{backgroundColor: 'rgba(210, 220, 231, 1)', color: 'rgba(0, 0, 0, 1)'}} onClick={handleClick}>Notes</Button>
        <Button style={{backgroundColor: 'rgba(210, 220, 231, 1)', color: 'rgba(0, 0, 0, 1)'}} onClick={deleteHandler}>Delete</Button>
        <br></br>
        <br></br>
        <br></br>
        </Card.Content>
        </Card>
        <br></br>
     
  </div>
    )
}
