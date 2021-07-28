import React from 'react'
import {useState } from 'react';
import AddForm from './AddForm'







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
                 <card key={noteObj.id} 
                 note={noteObj}
                 currentUser={props.user}
                 history={props.history} >
                 <p>Notes:{noteObj.note}</p>
                 <button note={noteObj} onClick={() => {deleteNoteHandler(noteObj.id)}}>Delete</button>   
                 </card>
           )})


           console.log(client)
    return (
        <div>
            <br></br>
            <button onClick={addNewNote}>Add a new Note</button>
            {toggled ? <AddForm
            handleNoteSubmit={props.handleNoteSubmit} 
            clientId={props.clientId}
                />  : null }
          {arrayOfComponents}
        </div>
    )
}
