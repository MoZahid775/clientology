import React from 'react'
import {useState} from 'react';
import Client from './Client';
import { Button, Form, Card } from 'semantic-ui-react'




export default function User(props) {
 
    
    // STATE NUMBER 1
    const [name, setName]=useState("")
    //STATE NUMBER 2
    const [age, setAge]=useState(0)
    //STATE NUMBER 3
    const [email, setEmail]=useState("")
    //STATE NUMBER 4
    const [profession, setProfession]=useState("")
    //STATE NUMBER 5
    const [phone, setPhone]=useState("")
    //STATE NUMBER 6
    const [birthday, setBirthday]=useState("")
   


    let submitClientHandler = (e) => {
        e.preventDefault()
    
        let formData = { 
            name: name,    
            age: age,
            email: email,
            profession: profession,
            phone: phone,
            birthday: birthday
        }      
            props.clientSubmit(formData)
            setName("")
            setAge(0)
            setEmail("")
            setProfession("")
            setPhone("")
            setBirthday("")
      }
    
    
    const handleChangeName = (e) => {
          setName(e.target.value)}
    
    const handleChangeAge = (e) => {
          setAge(e.target.value)}

    const handleChangeEmail = (e) => {
          setEmail(e.target.value)}

    const handleChangeProfession = (e) => {
          setProfession(e.target.value)}

    const handleChangePhone = (e) => {
          setPhone(e.target.value)}

    const handleChangeBirthday = (e) => {
          setBirthday(e.target.value)}




      // [{}, {}, {}] -> [</>, </>, </>]
  let arrayOfComponents = props.user.clients.map(clientObj => {
    return <Client key={clientObj.id} 
    client={clientObj}
    currentUser={props.user}
    deleteClient={props.deleteClient}
    history={props.history}/>
  })



    return (
        <div>
            <div style={{ 
                     backgroundColor: 'rgba(0, 0, 0, 0.7)'}}>
            <h1 style={{color: 'rgba(250, 250, 255, 1)'}}>Welcome back, {props.user.name} </h1>
            <br></br>
          
          
            <h1 variant="h1" style={{color: 'rgba(250, 250, 255, 1)'}}>Clients Dashboard </h1>
            <br></br>
            </div>
            <Card.Group>
            {arrayOfComponents}
            </Card.Group>
            <br></br>
            <br></br>
            <br></br>
                  <Form noValidate autoComplete="off" align="center" style={{ 
                     backgroundColor: 'rgba(0, 0, 0, 0.8)'
                     
                     
                     }}>
                     <br></br>
                     <h1 style={{  color: 'rgba(210, 220, 231, 1)'}}>Add a New Client</h1>
                     <br></br>    

                     <Form.Field>
                     <label style={{color: 'rgba(210, 220, 231, 1)'}}>Client Name</label>
                     <input placeHolder="Client Name" onChange={handleChangeName} value={name}></input>
                     <br></br>
                     </Form.Field>

                     <Form.Field>
                     <label style={{color: 'rgba(210, 220, 231, 1)'}}>Age</label>
                     <input label="Age" onChange={handleChangeAge} value={age}></input>
                     <br></br>
                     </Form.Field>

                     <Form.Field>
                     <label style={{color: 'rgba(210, 220, 231, 1)'}}>Email</label>
                     <input placeHolder="Email" onChange={handleChangeEmail} value={email}></input>
                     <br></br>
                     </Form.Field>

                     <Form.Field>
                     <label style={{color: 'rgba(210, 220, 231, 1)'}}>Profession</label>
                     <input placeHolder="Profession" onChange={handleChangeProfession} value={profession}></input>
                     <br></br>
                     </Form.Field>

                     <Form.Field>
                     <label style={{color: 'rgba(210, 220, 231, 1)'}}>Phone</label>
                     <input placeHolder="Phone" label="Phone" onChange={handleChangePhone} value={phone}></input>
                     <br></br>
                     </Form.Field>

                     <Form.Field>
                     <label style={{color: 'rgba(210, 220, 231, 1)'}}>Birthday</label>
                     <input placeHolder="Birthday" label="Birthday" onChange={handleChangeBirthday} value={birthday}></input>
                     <br></br>
                     </Form.Field>
                     <br></br>
                     <Button  style={{backgroundColor: 'rgba(210, 220, 231, 1)', color: 'rgba(0, 0, 0, 1)'}} class="large ui button" type="submit" value="submit" onClick={submitClientHandler}>Submit</Button>
                     <br></br>
                     <br></br>
                     <br></br>
                     <br></br>
                  </Form>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </div>
    )
}
