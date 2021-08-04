import React from 'react'
import {useState} from 'react';
import 'semantic-ui-css/semantic.min.css'
import { Button, Checkbox, Form } from 'semantic-ui-react'


export default function Login(props) {

       // STATE BELOW
       const [userName, setUserName]=useState("")
       //STATE NUMBER 2
      const [password, setPassword]=useState("")

  

      let submitHandler = (e) => {
        e.preventDefault()
    
        let formData = { 
            username: userName,    
            password: password}      
            props.handleSubmit(formData)
            // console.log(formData)
      }
    
    
    const handleChangeUserName = (e) => {
          setUserName(e.target.value)}
    
    const handleChangePassword = (e) => {
          setPassword(e.target.value)}





    return (
        // <div style={{ 
        //     backgroundColor: 'rgba(255, 255, 255, 0.9)'}}>
        //              <form onSubmit={submitHandler}>
        //      <h1>{props.formName}</h1>
             
        //      <input 
        //      label="Username"
        //      type="text" 
        //      name="username"
        //      placeholder="username"
        //      value={userName}
        //      onChange={handleChangeUserName}
            
        //      htmlFor="username"></input>


        //      <input htmlFor="password"
        //      label="Password"
        //      type="text" 
        //      placeholder="password"
        //       name="password"
        //       value={password}
        //       onChange={handleChangePassword}
        //      />
        //        <button
        //        label="Submit"
        //         type="submit"
        //         variant="contained"
        //          value="Submit">Submit</button>
        //      </form>
        // </div>
        
        <Form onSubmit={submitHandler} style={{ 
          backgroundColor: 'rgba(0, 0, 0, 0.6)'}}
   
         >
           <br></br>
               <h1 style={{ 
                color: 'rgba(210, 220, 231, 1)'}}>{props.formName}</h1>
        <Form.Field>
            <label style={{ 
                color: 'rgba(210, 220, 231, 1)'}}>Username</label>
                <input 
                 label="Username"
                 type="text" 
                 name="username"
                 placeholder="username"
                 value={userName}
                 onChange={handleChangeUserName}          
                 htmlFor="username"></input>
         </Form.Field>


    <Form.Field>
      <label style={{ 
                color: 'rgba(210, 220, 231, 1)'}}>Password</label>
      <input htmlFor="password"
             label="Password"
             type="text" 
             placeholder="password"
             name="password"
             value={password}
             onChange={handleChangePassword}
             />
    </Form.Field>


    <Button  style={{backgroundColor: 'rgba(210, 220, 231, 1)', color: 'rgba(0, 0, 0, 1)'}} type='submit'>Submit</Button>
             <br></br>
             <br></br>
  </Form>
    )
}
