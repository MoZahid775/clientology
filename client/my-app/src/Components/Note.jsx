import React from 'react'
import {useState } from 'react';
import AddForm from './AddForm'
import { Button, Card, Image } from 'semantic-ui-react'








export default function Note(props) {
       //STATE 1
    const[toggled, setToggled] = useState(false)
       //STATE 2
    const[client, setClient] = useState(false)


// NOTES DELETION BUTTON
const deleteNoteHandler = (id) => {
  
    // console.log(id)
    fetch(`http://localhost:3000/notes/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
        "authorization": props.user.token
    },
    })
      .then((r) => r.json())
      .then((r) => props.deleteNoteFromState(id));
      // props.deleteGameFromState
  }


  //ADD GAME BUTTON
  const addNewNote = () => {
    setToggled(!toggled)
  }
  
  console.log(props.clientId)

  let arrayOfComponents = props.clientNotes.map(noteObj => {
           return (
                 <Card style={{ 
                  backgroundColor: 'rgba(0, 0, 0, 0.9)',
                   color: 'rgba(36, 242, 180, 1)',
                   width: 500
                }} 
                 key={noteObj.id} 
                 note={noteObj}
                 currentUser={props.user}
                 history={props.history} >
                 <p>Notes:{noteObj.note}</p>
                 <Button style={{backgroundColor: 'rgba(210, 220, 231, 1)', color: 'rgba(0, 0, 0, 1)'}} note={noteObj} onClick={() => {deleteNoteHandler(noteObj.id)}}>Delete</Button>   
                 </Card>
           )})


           console.log(client)
    return (
        <div>
            <br></br>
            <Button style={{backgroundColor: 'rgba(210, 220, 231, 1)', color: 'rgba(0, 0, 0, 1)'}} onClick={addNewNote}>Add a new Note</Button>
            {toggled ? <AddForm
            handleNoteSubmit={props.handleNoteSubmit} 
            clientId={props.clientId}
                />  : null }
            
          {arrayOfComponents}
        
        </div>
    )
}
