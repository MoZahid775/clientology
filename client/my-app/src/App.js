import './App.css';
import {Switch, Link, Route, withRouter, Redirect, BrowserRouter} from 'react-router-dom'
import {useState, useEffect } from 'react';
import NavBar from './Components/NavBar';
import Register from './Components/Register';
import Login from './Components/Login';
import Home from './Components/Home';
//APP.JS ORDER 
//LOGIN AND OUT
//REGISTER



function App(props) {

  const [currentUser,setCurrentUser]=useState({
    id: 0,
    username:'',
    name:"",
    age:0,
    email:"",
    token:""
    // clients: [],
    // notes: []
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
    token:""
    // clients: [],
    // notes: []
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

console.log(currentUser)


  return (

    <div style={{ 
      backgroundImage: `url('https://cdn.luxe.digital/media/2019/09/12085245/men-style-guide-tom-ford-store-luxury-luxe.digital.jpg')`,
      // backgroundRepeat: 'no-repeat',(was originally 1950px)
      width:'1200px'
      }}>
        <NavBar logOut={logOut}/>
        <Switch>
        <Route path="/login" render={ renderForm } />
        <Route path="/register" render={ renderForm } />
        {/* <Route path="/user" render={ renderProfile } /> */}
        {/* <Route path="/openings/:id/games" render= { renderOpeningGames } />
        <Route path="/learn" render={ renderLearn } /> */}
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