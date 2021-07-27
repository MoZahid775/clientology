import './App.css';
import {Switch, Link, Route, withRouter, Redirect, BrowserRouter} from 'react-router-dom'
import {useState, useEffect } from 'react';
import NavBar from './Components/NavBar';
import Register from './Components/Register';
import Login from './Components/Login';
import Home from './Components/Home';
import User from './Components/User';
//APP.JS ORDER 
//LOGIN AND OUT
//REGISTER
//CLIENTS
//NOTES


function App(props) {

  const [currentUser,setCurrentUser]=useState({
    id: 0,
    username:'',
    name:"",
    age:0,
    email:"",
    token:"",
    clients: [],
    notes: []
    })


//LOGIN AND OUT-------FUNCTION TO HANDLE THE SUBMISSION OF LOGIN DETAILS

const handleLoginSubmit = (formData) => {
  console.log(formData)

  fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
          "Content-type": "application/json"
      },
      body: JSON.stringify({
        formData
      })
      })
      .then(res => res.json())
      .then((res) => handleResponse(res))
}

//LOGIN AND OUT------HELPER FUNCTION FOR THE LOGIN SUBMIT

let handleResponse= (resp) => {
  console.log(resp)
  console.log(resp.user)
  console.log(resp.token)
  if(resp.token){
    setCurrentUser({
      id: resp.user.id,
      username: resp.user.username,
      name: resp.user.name,
      age: resp.user.age,
      email: resp.user.email,
      token: resp.token,
      clients: resp.clients,
      notes: resp.notes
    })

    localStorage.token = resp.token
    props.history.push("/user")
    
  } else {
    alert("Please try again. Username or password is incorrect")
  }
}

//LOGIN AND OUT---------FUNCTION TO LOG USER OUT
const logOut = () => {
  setCurrentUser({
    id: 0,
    username:'',
    name:"",
    age:0,
    email:"",
    token:"",
    clients: [],
    notes: []
  })
  localStorage.clear()

}


//REGISTRATION----FUNCTION TO HANDLE SUBMISSION OF RESIGSTRATION

const handleRegisterSubmit = (formData) => {
  console.log(formData)

  fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
          "Content-type": "application/json"
      },
      body: JSON.stringify(
          formData
      )
      })
      .then(res => res.json())
      .then((res) => handleRegisterResponse(res))
}

//REGISTRATION----FUNCTION TO HANDLE THE REGISTRATION RESPONSE


let handleRegisterResponse = (resp) => {
  console.log(resp)
  if(resp.id){
    alert("New User Registered!")
    props.history.push("/login")
  }
  else {alert(resp.errors)
}
}





// CLIENT------------- THIS IS OUR HANDLE SUBMIT FOR SUBMITTING AN CLIENT
const handleClientSubmit = (formData) => {
   
  fetch("http://localhost:3000/clients", {
      method: "POST",
      headers: {
          "Content-type": "application/json",
          "authorization": currentUser.token
      },
      body: JSON.stringify(
        formData
      )
      })
      .then(res => res.json())
      .then((res) => addClientToState(res))
}


//CLIENT-------------- CHANGE THE STATE OF CLIENTS IN ZE FRONT
const addClientToState = (newlyCreatedClient) => {
  console.log(currentUser.clients)
 let copyOfClients= [...currentUser.clients, newlyCreatedClient]
 console.log(newlyCreatedClient)
 console.log(copyOfClients)


 setCurrentUser({
  id: currentUser.id,
  username: currentUser.username,
  name: currentUser.name,
  age: currentUser.age,
  email: currentUser.email,
  token: currentUser.token,
  clients: copyOfClients,
  notes: currentUser.notes
 })
}

//CLIENT-------------DELETE CLIENT FROM STATE IN THE FRONT
const deleteClientFromState = (deletedId) => {
  // console.log(deletedId)
   let copyOfClients = currentUser.clients.filter((clientObj) => {
     return clientObj.id !== deletedId
   })
   setCurrentUser({
    id: currentUser.id,
    username: currentUser.username,
    name: currentUser.name,
    age: currentUser.age,
    email: currentUser.email,
    token: currentUser.token,
    clients: copyOfClients,
    notes: currentUser.notes
   })
   console.log(currentUser.clients)
}

//NOTES---------------ADD NOTE TO STATE IN THE FRONT


const addNoteToState = (newlyCreatedNote) => {
  // console.log(currentUser)
 let copyOfNotes= [...currentUser.notes, newlyCreatedNote]
//  console.log(newlyCreatedNote)
//  console.log(copyOfNotes)


 setCurrentUser({
  id: currentUser.id,
  username: currentUser.username,
  name: currentUser.name,
  age: currentUser.age,
  email: currentUser.email,
  token: currentUser.token,
  clients: currentUser.clients,
  notes: copyOfNotes
 })

//  console.log(currentUser)

}


//NOTES------------DELETE NOTE FROM STATE IN THE FRONT
  const deleteNoteFromState = (deletedId) => {
   

    let copyOfNotes = currentUser.notes.filter((noteObj) => {
      return noteObj.id !== deletedId
    })
    setCurrentUser({
      id: currentUser.id,
      username: currentUser.username,
      name: currentUser.name,
      age: currentUser.age,
      email: currentUser.email,
      token: currentUser.token,
      clients: currentUser.clients,
      notes: copyOfNotes
    })
    
  }



//RANDOM MISPLACED COMPONENT--------THIS IS OUR HANDLE SUBMIT FOR ADDING A GAME
const handleNoteSubmit = (formData) => {
 

  fetch("http://localhost:3000/notes", {
      method: "POST",
      headers: {
          "Content-type": "application/json",
          "authorization": currentUser.token
      },
      body: JSON.stringify({
        note: formData.note,
        opening_id: formData.opening_id
      })
      })
      .then(res => res.json())
      .then((res) => addNoteToState(res))
}



//RENDERING OF DIFFERENT ROUTES ETC
const renderForm = (routerProps) => {
  if(routerProps.location.pathname === "/login"){
    return <Login 
      formName="Login Form"
      handleSubmit={handleLoginSubmit}
    />
  } else if (routerProps.location.pathname === "/register") {
    return <Register
      formName="Register Form"
      handleSubmit={handleRegisterSubmit}
    />
  }
}

const renderProfile = (routerProps) => {
  return <User user={currentUser}
  Clients={currentUser.clients}
  clientSubmit={handleClientSubmit}
  deleteClient={deleteClientFromState}
  history={props.history}
  />
}


const renderClientNotes = (routerProps) => {
  // console.log(currentUser)
  let clientNotes = currentUser.notes.filter((noteObj) => {
    return noteObj.client_id == Number(routerProps.match.params.id)
  })
  return (<Note user={currentUser}
  clientNotes={clientNotes} deleteNoteFromState={deleteNoteFromState}
  handleNoteSubmit={handleNoteSubmit}/>
    )
  
}











console.log(currentUser)


  return (

    <div style={{ 
      backgroundImage: `url('https://c4.wallpaperflare.com/wallpaper/154/723/662/floral-pattern-wallpaper-preview.jpg')`,
      // backgroundRepeat: 'no-repeat',(was originally 1950px)
      width:'1200px'
      }}>
        <NavBar logOut={logOut}/>
        <Switch>
        <Route path="/login" render={ renderForm } />
        <Route path="/register" render={ renderForm } />
        <Route path="/user" render={ renderProfile } />
        <Route path="/clients/:id/notes" render= { renderClientNotes } />
        {/* <Route path="/learn" render={ renderLearn } /> */}
        <Route path={'/'} >
        <Home />
        </Route> 
        </Switch>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
    </div>



  );
}

export default withRouter(App);

//https://c4.wallpaperflare.com/wallpaper/154/723/662/floral-pattern-wallpaper-preview.jpg