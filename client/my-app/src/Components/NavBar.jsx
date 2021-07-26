import React from 'react'
import {Switch, Link, Route, withRouter, Redirect} from 'react-router-dom'






export default function NavBar(props) {


    return (
        <div>
           
                <Link to={'/'}>
                <div className="home">
                <button>Home</button>
                </div>
                </Link>
                <Link to={'/login'}>
                <div className="login">
                <button>Login</button>
                </div>
                </Link>
                <Link to={'/register'}>
                <div className="register">
                <button>Signup</button>
                </div>
                </Link>
                <Link to={'/'}>
                <button 
                onClick={props.logOut}
                >Log Out</button>
                </Link>  

        </div>
    )
}
