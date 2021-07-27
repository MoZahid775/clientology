import React from 'react'
import {useState } from 'react';
import AddForm from './AddForm'
import AddForm from './AddForm'






export default function Note(props) {

    const[toggled, setToggled] = useState(false)



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
  
  // let gamesOpening = props.user.openings.find((opening) => {
  //  return opening.id == 
  // })
  let arrayOfComponents = prop.clientNotes.map(noteObj => {
           return (
                 <card key={noteObj.id} 
                 note={noteObj}
                 currentUser={props.user}
                 history={props.history} >
                 <p>Notes:{noteObj.note}</p>
                 <button note={noteObj} onClick={() => {deleteNoteHandler(noteObj.id)}}>Delete</button>   
                 </card>
           )})


    return (
        <div>
            <br></br>
            <button onClick={addNewNote}>Add a new Note</button>
            {toggled ? <AddForm
            handleNoteSubmit={props.handleNoteSubmit} 
                />  : null }
          {arrayOfComponents}
        </div>
    )
}
