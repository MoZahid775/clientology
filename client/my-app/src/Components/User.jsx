import React from 'react'
import {useState} from 'react';
import Client from './Client';


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
                  <form noValidate autoComplete="off" align="center" style={{ 
                     backgroundColor: 'rgba(255, 255, 255, 0.9)'}}>
                     <br></br>    
                     <p>Client Name</p>
                     <input placeHolder="Client Name" label="Client Name" onChange={handleChangeName} value={name}></input>
                     <br></br>
                     <p>Age</p>
                     <input label="Age" onChange={handleChangeAge} value={age}></input>
                     <br></br>
                     <p>Email</p>
                     <input placeHolder="Email" label="Email" onChange={handleChangeEmail} value={email}></input>
                     <br></br>
                     <p>Profession</p>
                     <input placeHolder="Profession" label="Profession" onChange={handleChangeProfession} value={profession}></input>
                     <br></br>
                     <p>Phone</p>
                     <input placeHolder="Phone" label="Phone" onChange={handleChangePhone} value={phone}></input>
                     <br></br>
                     <p>Birthday</p>
                     <input placeHolder="Birthday" label="Birthday" onChange={handleChangeBirthday} value={birthday}></input>
                     <br></br>
                     <br></br>
                     <button type="submit" value="submit" onClick={submitClientHandler}>Submit</button>
                     <br></br>
                     <br></br>
                  </form>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </div>
    )
}
