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
            <Form onSubmit={submitHandler} style={{ width: 500}}>
             <h1 style={{ 
                color: 'rgba(210, 220, 231, 1)'}}>Add a New Client Note</h1>
             <Form.Field>
             <input 
             label="Note"
             type="text" 
             autoComplete="off"
             value={note}
             onChange={handleNote}></input>
             </Form.Field>
            
               <Button style={{backgroundColor: 'rgba(210, 220, 231, 1)', color: 'rgba(0, 0, 0, 1)'}}
           
                type="submit"
                 >Submit Note</Button>
             </Form>      
        </div>
    )
}
