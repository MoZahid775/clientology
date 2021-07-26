import React from 'react'
import {useState} from 'react';




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
        <div style={{ 
            backgroundColor: 'rgba(255, 255, 255, 0.9)'}}>
                     <form onSubmit={submitHandler}>
             <h1>{props.formName}</h1>
             
             <input 
             label="Username"
             type="text" 
             name="username"
             placeholder="username"
             value={userName}
             onChange={handleChangeUserName}
            
             htmlFor="username"></input>
             <input htmlFor="password"
             label="Password"
             type="text" 
             placeholder="password"
              name="password"
              value={password}
              onChange={handleChangePassword}
             />
               <button
               label="Submit"
                type="submit"
                variant="contained"
                 value="Submit">Submit</button>
             </form>
             <br></br>
             <br></br>
        </div>
    )
}
