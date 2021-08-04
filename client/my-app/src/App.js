import './App.css';
import {Switch, Link, Route, withRouter, Redirect, BrowserRouter} from 'react-router-dom'
import {useState, useEffect } from 'react';
import NavBar from './Components/NavBar';
import Register from './Components/Register';
import Login from './Components/Login';
import Home from './Components/Home';
import User from './Components/User';
import Note from './Components/Note';
import Purchase from './Components/Purchase';
import Learn from './Components/Learn';


//APP.JS ORDER 
//LOGIN AND OUT
//REGISTER
//CLIENTS
//NOTES
//PURCHASES


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

  const [currentPurchases, setCurrentPurchases]=useState({
    purchases:[]
    })

//LOGIN AND OUT-------FUNCTION TO HANDLE THE SUBMISSION OF LOGIN DETAILS

const handleLoginSubmit = (formData) => {


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
     
    setCurrentPurchases({purchases:resp.purchases})

  
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
  setCurrentPurchases({purchases:[]})




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
  ...currentUser, clients: copyOfClients
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



//NOTES------RANDOM MISPLACED COMPONENT--------THIS IS OUR HANDLE SUBMIT FOR ADDING A NOTE
const handleNoteSubmit = (formData) => {
//  console.log(formData)

  fetch("http://localhost:3000/notes", {
      method: "POST",
      headers: {
          "Content-type": "application/json",
          "authorization": currentUser.token
      },
      body: JSON.stringify({
        note: formData.note,
        client_id: formData.client_id
      })
      })
      .then(res => res.json())
      .then((res) => addNoteToState(res))
}


//PURCHASES---------------ADD PURCHASE TO STATE IN THE FRONT


const addPurchaseToState = (newlyCreatedPurchase) => {
  // console.log(currentUser)
 let copyOfPurchases= [...currentPurchases.purchases, newlyCreatedPurchase]
//  console.log(newlyCreatedNote)
//  console.log(copyOfNotes)


 setCurrentPurchases({
  purchases: copyOfPurchases
 })

//  console.log(currentUser)

}


//PURCHASES------------DELETE A PURCHASE FROM STATE IN THE FRONT
  const deletePurchaseFromState = (deletedId) => {
   

    let copyOfPurchases = currentPurchases.purchases.filter((purchaseObj) => {
      return purchaseObj.id !== deletedId
    })
    setCurrentPurchases({
      purchases: copyOfPurchases
    })
    
  }



//PURCHASES----RANDOM MISPLACED COMPONENT--------THIS IS OUR HANDLE SUBMIT FOR ADDING A PURCHASE
const handlePurchaseSubmit = (formData) => {
//  console.log(formData)

  fetch("http://localhost:3000/purchases", {
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
      .then((res) => addPurchaseToState(res))
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
  // console.log(Number(routerProps.match.params.id))
        let clientNotes = currentUser.notes.filter((noteObj) => {
         return noteObj.client_id == Number(routerProps.match.params.id)
         })
  return (<Note user={currentUser}
  clientNotes={clientNotes} deleteNoteFromState={deleteNoteFromState}
  handleNoteSubmit={handleNoteSubmit}
  clientId={Number(routerProps.match.params.id)}
   />
    )
  
}

const renderClientPurchases = (routerProps) => {
  // console.log(Number(routerProps.match.params.id))
        let clientPurchases = currentPurchases.purchases.filter((purchaseObj) => {
         return purchaseObj.client_id == Number(routerProps.match.params.id)
         })
  return (<Purchase user={currentUser}
  clientPurchases={clientPurchases} deletePurchaseFromState={deletePurchaseFromState}
  handlePurchaseSubmit={handlePurchaseSubmit}
  clientId={Number(routerProps.match.params.id)}
   />
    )
  
}

// const renderClientProfile = (routerProps) => {
//   // console.log(Number(routerProps.match.params.id))
//         let clientProfile = currentPurchases.purchases.filter((purchaseObj) => {
//          return purchaseObj.client_id == Number(routerProps.match.params.id)
//          })
//   return (<Purchase user={currentUser}
//   clientPurchases={clientPurchases} deletePurchaseFromState={deletePurchaseFromState}
//   handlePurchaseSubmit={handlePurchaseSubmit}
//   clientId={Number(routerProps.match.params.id)}
//    />
//     )
  
// }

const renderLearn = (routerProps) => {
  return <Learn />
}








console.log(currentUser)
console.log(currentPurchases)
// console.log(currentProfiles)


  return (

    <div style={{ 
      backgroundImage: `url('https://cdn.shopify.com/s/files/1/0004/4630/0222/files/Retail_Store_Interior_Design_Moncler_Paris_Gilles_Boissier_Read_more_in_The_Luxurist_at_www.luxdeco.com.jpg?v=1594253221')`,
      width: window.innerWidth,
      height: '100%',
      }}>
        <NavBar logOut={logOut}/>
        <Switch>
        <Route path="/login" render={ renderForm } />
        <Route path="/register" render={ renderForm } />
        <Route path="/user" render={ renderProfile } />
        <Route path="/clients/:id/notes" render= { renderClientNotes } />
        <Route path="/clients/:id/purchases" render= { renderClientPurchases } />
        {/* <Route path="/clients/:id/profile" render= { renderclientProfiles} /> */}
        <Route path="/learn" render={ renderLearn } />
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