import React from 'react'
import {useState} from 'react';
import Client from './Client';


export default function User(props) {
    const classes = useStyles();
    
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
            props.openingSubmit(formData)
    
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



console.log(props)

    return (
        <div>
            <h1 variant="h1" style={{color: 'rgba(250, 250, 255, 1)'}}>Welcome, {props.user.name} </h1>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h1 variant="h1" style={{color: 'rgba(250, 250, 255, 1)'}}>Clients: </h1>
            {arrayOfComponents}
            <h4 align="center" style={{ backgroundColor: 'rgba(0, 11, 26, 0.9)', color: 'rgba(250, 250, 255, 1)'}}
            >Add a New Client: </h4>
                  <form className={classes.root} noValidate autoComplete="off" align="center" style={{ 
                     backgroundColor: 'rgba(255, 255, 255, 0.9)'}}>
                     <input label="Client Name" onChange={handleChangeName} value={name}></input>
                     <input label="Age" onChange={handleChangeAge} value={age}></input>
                     <input label="Email" onChange={handleChangeEmail} value={email}></input>
                     <input label="Profession" onChange={handleChangeProfession} value={profession}></input>
                     <input label="Phone" onChange={handleChangePhone} value={phone}></input>
                     <input label="Birthday" onChange={handleChangeBirthday} value={birthday}></input>
                     <button type="submit" value="submit" onClick={submitClientHandler}>Submit</button>
                  </form>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </div>
    )
}
