import React from 'react'
import {Switch, Link, Route, withRouter, Redirect} from 'react-router-dom'






export default function NavBar(props) {


    return (
        <div>
     
                <Link to={'/'}
                style={{ textDecoration: 'none' }}>
                <div className="home">
                <button>Home</button>
                </div>
                </Link>
                <Link to={'/login'}
                style={{ textDecoration: 'none' }}>
                <div className="login">
                <button>Login</button>
                </div>
                </Link>
                <Link to={'/register'}
                style={{ textDecoration: 'none' }}>
                <div className="register">
                <button>Signup</button>
                </div>
                </Link>
                <Link to={'/'}
                style={{ textDecoration: 'none' }}>
                <button 
                // onClick={props.logOut}
                >Log Out</button>
                </Link>
       
          
        </div>
    )
}
