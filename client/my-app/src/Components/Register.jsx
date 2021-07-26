import React from 'react'
import {useState} from 'react';



export default function Register(props) {

       // STATE BELOW
       const [userName, setUserName]=useState("")
       //STATE NUMBER 2
      const [password, setPassword]=useState("")
       //STATE NUMBER 3
      const [name, setName]=useState("")
       //STATE NUMBER 4
      const [age, setAge]=useState("")
       //STATE NUMBER 5
       const [email, setEmail]=useState("")

    //    const classes = useStyles()
  
    
  let submitHandler = (e) => {
      e.preventDefault()
  
      let formData = { 
          username: userName,    
          password: password,  
          name: name,
          age: age,
          email: email,
      }
      props.handleSubmit(formData)
      }
  
  
  const handleChangeUserName = (e) => {
        setUserName(e.target.value)}
  
  const handleChangePassword = (e) => {
        setPassword(e.target.value)}
  
  const handleChangeName = (e) => {
        setName(e.target.value)}
  
  const handleChangeAge = (e) => {
        setAge(e.target.value)}
  
  const handleChangeEmail = (e) => {
        setEmail(e.target.value)}





    return (
        <div style={{ 
            backgroundColor: 'rgba(255, 255, 255, 0.9)'}}>
                    <form onSubmit={submitHandler}>
             <h1>{props.formName}</h1>
             <input
             label="Username"
             type="text" 
             autoComplete="off"
             name="username"
             placeholder="username"
             value={userName}
             onChange={handleChangeUserName}
             htmlFor="username"></input>
              
             <input 
             label="Password"
             type="text"
             htmlFor="password"
             autoComplete="off"
             name="password"
             placeholder="password"
             value={password}
             onChange={handleChangePassword}
             htmlFor="password"></input>

             <input 
             htmlFor="name"
             label="Name"
             type="name" 
             autoComplete="off"
             name="name"
             placeholder="name"
             value={name}
             onChange={handleChangeName}
             htmlFor="Age"></input>

             <input
            label="age"
            type="text" 
            autoComplete="off"
            placeholder="age"
            name="age"
            value={age}
            onChange={handleChangeAge}
            htmlFor="age"></input>

             <input 
             label="email"
             htmlFor="email"
             type="text" 
             autoComplete="off"
             placeholder="email"
             name="email"
             value={email}
             onChange={handleChangeEmail}
             ></input>


            <button
             label="Submit"
             type="submit"
             value="Submit">Submit</button>

             </form>
             <br></br>
             <br></br>
        </div>
    )
}
