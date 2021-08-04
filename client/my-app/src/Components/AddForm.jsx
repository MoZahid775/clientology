import React from 'react'
import {useState} from 'react';
import { Button, Form } from 'semantic-ui-react'







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
            <Form onSubmit={submitHandler}>
             <h1>{props.formName}</h1>
             <Form.Field>
             <input 
             label="Note"
             type="text" 
             autoComplete="off"
             value={note}
             onChange={handleNote}></input>
             </Form.Field>
            
               <Button
           
                type="submit"
                 >Submit Note</Button>
             </Form>      
        </div>
    )
}
