import React from 'react';
import '../login/Login.css';
import Logo from '../../img/logo1.png';
import {NavLink} from 'react-router-dom';
function Navbar() {
  return (

    <>
    <nav>
      <div className="nav-center">     
        <div className="nav-header">

          <h2>beborn</h2>
          <button className="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
       
        <ul class="links">
        <NavLink to='/'> Home</NavLink>
          <NavLink to='/Login' className="link"> Login</NavLink>
          <NavLink to='/Servces' className="link"> features</NavLink>
          <NavLink to='/Experence' className="link"> pricing</NavLink>
          <NavLink to='/Hstory' className="link"> portofilo</NavLink>
          <NavLink to='/Meda' className="link"> meda</NavLink>
          <NavLink to='/Sign' className="link active"> Sign up</NavLink>

        </ul>
    
      </div>
      </div>
    </nav>
    </>
  )
}

export default Navbar