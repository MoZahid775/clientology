import React from 'react'
import {useState} from 'react';
import { Button, Form } from 'semantic-ui-react'


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
        <Form style={{backgroundColor: 'rgba(0, 0, 0, 0.6)',
        width:'700px',
        position: 'absolute',left: '33%'
        
        
        
        
        }} onSubmit={submitHandler}>
            <br></br>
             <h1 style={{  color: 'rgba(210, 220, 231, 1)'}}>{props.formName}</h1>
             <Form.Field>
               <label style={{color: 'rgba(210, 220, 231, 1)'}}>Username</label>
             <input
             type="text" 
             autoComplete="off"
             name="username"
             placeholder="username"
             value={userName}
             onChange={handleChangeUserName}
             htmlFor="username"></input>
            </Form.Field> 


            <Form.Field>
            <label style={{color: 'rgba(210, 220, 231, 1)'}}>Password</label>
             <input 
             type="text"
             htmlFor="password"
             autoComplete="off"
             name="password"
             placeholder="password"
             value={password}
             onChange={handleChangePassword}
             htmlFor="password"></input>
            </Form.Field> 

            <Form.Field> 
            <label style={{color: 'rgba(210, 220, 231, 1)'}}>Name</label>
             <input 
             htmlFor="name"
             type="text" 
             autoComplete="off"
             name="name"
             placeholder="name"
             value={name}
             onChange={handleChangeName}
             htmlFor="Age"></input>
            </Form.Field> 

            <Form.Field> 
            <label style={{color: 'rgba(210, 220, 231, 1)'}}>Age</label>
             <input
            type="text" 
            autoComplete="off"
            placeholder="age"
            name="age"
            value={age}
            onChange={handleChangeAge}
            htmlFor="age"></input>
            </Form.Field> 

            <Form.Field> 
            <label style={{color: 'rgba(210, 220, 231, 1)'}}>Email</label>
             <input           
             htmlFor="email"
             type="text" 
             autoComplete="off"
             placeholder="email"
             name="email"
             value={email}
             onChange={handleChangeEmail}
             ></input>
            </Form.Field> 


            <Button style={{backgroundColor: 'rgba(210, 220, 231, 1)', color: 'rgba(0, 0, 0, 1)'}} type="submit">Submit</Button>

           
             <br></br>
             <br></br>
        </Form>
    )
}

