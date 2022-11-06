import React from 'react';
import './Sign.css';
import {NavLink} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import Text from '../Text/Text';


import { useState } from 'react';
function Sign() {
    const navigate = useNavigate();
    
const [val ,setVal] =useState({
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
    e.preventDefault();
    const getUser  =localStorage.getItem("userData");
    //console.log(val)
    const {email,  password}= val;
    if(email === "" ){
        alert('email is required');
    }
    else if (!email.includes("@")){
        alert('plz enter valid email add @');
    }
    else if (password === " " ){
        alert('password is required')
    } else if (password.length<5  ){
        alert('password length>5 ')
    }else{
       // console.log(val)
       if(getUser && getUser.length){
        const userData = JSON.parse(getUser);
        const userlogn = userData.filter((el, g)=>{
            return el.email ===email && el.password===password
        });
        if(userlogn.length===0){
            alert('invalid detalis')
        }else{
            navigate('/Login')
         

        }
        
        console.log(userlogn)
       }
      // localStorage.setItem("userData" , JSON.stringify([... data, val]));
    }
    


}



  return (
    <>
   
    <section>
      <div className="container"> 
        <form  >
        <div className="signup">
       
          <h2>Create an account</h2>
        
        <div className="boxes">
            <input type="email" name="email"  onChange={getData}  placeholder="Email" required/>         
            <input type="password" name="password" onChange={getData}  placeholder="password" required/>
            <button className='logn' onClick={addFunc} >TRY IT FOR FREE</button>
            <p>Dont hava an account <span><NavLink to="/login"> Creat account</NavLink></span></p>
              <p>By registering you agree to the terms of Use</p>
            </div>

        </div>
        </form>

        {/* <div className='text-container'>
          <h2>better markting results with clean design </h2>
          <p>
            we have been working very hard to create the new version of our course 
            .it comes with a lot of new
            features.check it out now!
          </p>
          <button className="btn">
            play
             </button>
             
             <button className=" active"  >
              see our price
            
               </button>
        </div> */}
 <Text/>
      </div>
    </section>
   
    </>
   
    
  )
}

export default Sign