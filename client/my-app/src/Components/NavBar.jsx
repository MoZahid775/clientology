import React from 'react'
import {Switch, Link, Route, withRouter, Redirect} from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'



export default function NavBar(props) {


    return (
        <div>
           <div class="ui four item menu" style={{ 
          backgroundColor: 'rgba(0, 0, 0, .9)'}}>
             <Link to={'/'}  class="active item" style={{ backgroundColor: 'rgba(0, 0, 0, 0.9)', color: 'rgba(250, 250, 255, 1)'}}>Home</Link>
             <Link to={'/login'} class="item" style={{ backgroundColor: 'rgba(0, 8, 26, 0.5)', color: 'rgba(250, 250, 255, 1)'}}>Login</Link>
             <Link to={'/register'} class="item" style={{ backgroundColor: 'rgba(0, 0, 0, 0.9)', color: 'rgba(250, 250, 255, 1)'}}>Signup</Link>
             <Link to={'/'} onClick={props.logOut} class="item" style={{ backgroundColor: 'rgba(0, 8, 26, 0.5)', color: 'rgba(250, 250, 255, 1)'}}>Logout</Link>
           </div>

                {/* <Link to={'/'}>
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
                </Link>   */}

        </div>
    )
}
