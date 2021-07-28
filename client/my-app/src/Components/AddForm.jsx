import React from 'react'
import {useState} from 'react';







export default function AddForm(props) {

         // STATE BELOW
         const [note, setNote]=useState("")
        //  //STATE NUMBER 2
        //   const [client, setClient]=useState(0)
  
let submitHandler = (e) => {
    e.preventDefault()

    let formData = { 
        note: note,    
        client_id: props.clientId}    
        props.handleNoteSubmit(formData)
        setNote("")
  }


const handleNote = (e) => {
      setNote(e.target.value)}

// const handleClient = (e) => {
//       setClient(e.target.value)}


console.log(props)

    return (
        <div>
            <form onSubmit={submitHandler}>
             <h1>{props.formName}</h1>
             <input 
             label="Note"
             type="text" 
             autoComplete="off"
             value={note}
             onChange={handleNote}></input>
            {/* <input 
             label="client"
             type="text" 
             autoComplete="off"
             name="client"
             value={client}
             onChange={handleClient}></input> */}
            
               <button
               label="Submit"
                type="submit"
                 value="Submit">Submit Note</button>
             </form>      
        </div>
    )
}
