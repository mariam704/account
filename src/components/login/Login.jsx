import React from 'react';
import './Login.css';
import Text from '../Text/Text';
import {NavLink} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import { useState } from 'react';

function Login() {
const navigate = useNavigate();
const [val ,setVal] =useState({
    name: "",
    date: "",
    email: "",
    password : ""
    
})
const [data ,setDataa] =useState([]);
//console.log(val)
const getData = (e) =>{
   // console.log(e.target.value)
    const {value , name}=e.target;
    setVal(() =>{
        return {
            ...val,
            [name]:value
        }
    } )
    
}
const addFunc =(e) =>{
    e.preventDefault();;
    //console.log(val)
    const {name, email, date, password}= val;
    if(name === "" ){
        alert('name is required');
    }
    else if(email === "" ){
        alert('email is required');
    }
    else if (!email.includes("@")){
        alert('plz enter valid email add @');
    }
    else if (date === " " ){
        alert('date is required');
    }
    else if (password === " " ){
        alert('password is required')
    } else if (password.length<5  ){
        alert('password length>5 ')
    }else{
       // console.log(val)
       localStorage.setItem("userData" , JSON.stringify([... data, val]));
       navigate('/Sign')
    }
    


}



  return (
    <>
    <section>
      <div className="container"> 
        <form className='signform'>
        <div className="signup-form">
       
          <h2>Create an account</h2>
        
        <div className="input-boxes">
          
            <input type="text" name="name" onChange={getData} placeholder="User name" required/>
            <input type="date" name="date"  onChange={getData}  required/>
            <input type="email" name="email"  onChange={getData}  placeholder="Email" required/>         
            <input type="password" name="password" onChange={getData}  placeholder="password" required/>
         
          
            <button onClick={addFunc} >TRY IT FOR FREE</button> 
            <p>Already hava an account <span><NavLink to="/Sign"> Sign</NavLink></span></p>           
            <p>By registering you agree to the terms of Use</p>
             
            </div>
        </div>
        </form>

        <Text/>
      </div>

   

   


    </section>
   
    </>
   
    
  )
}

export default Login
