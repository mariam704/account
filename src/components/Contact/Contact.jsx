import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser'; 
import { useEffect } from "react";
import './Contact.css';
import '../Servces/servces.css';
import { sendForm } from "emailjs-com";
// // i dawnload  yarn add emailjs to delver message frome user to my email search at googel emailjs go n react
// yarn add @emailjs/browser
//import  { useRef } from 'react';

const Contact = () => {
  //made object to collect all nut current value
  const targetValue  ={message:" ",user_name:"", user_emal:""}
  //use state to hooe value of nput and udate t 
   const [formValue,setformValue]= useState(targetValue);
   ////to hoo error msg and show t
   const [formErrors,setFormerrors]= useState({});
   //use false coz dont show the msg untl supt and chec
   const [submited,seFormsubmited]= useState(false);
    const form = useRef();
    const [msg, setMsg] = useState(false)

    const sendEmail = (e) => {
      e.preventDefault();
      //set the error when clic submit
     setFormerrors(validate(formValue));
     seFormsubmited(true);
     //condition to prevent sendng empty msg
     if(Object.keys(formErrors).length===0 && submited) {
      emailjs.sendForm('service_oav77vf', 'template_sz1g3w9', form.current, 'lJdw75A9Pz1xe2R70')
      .then((result) => {
          console.log(result.text);
          setMsg(true);
      }, (error) => {
          console.log(error.text);
      });
      
    }else{
      console.log("ERRORMSG");
    }
      // emailjs.sendForm('service_oav77vf', 'template_sz1g3w9', form.current, 'lJdw75A9Pz1xe2R70')
      //   .then((result) => {
      //       console.log(result.text);
      //       setMsg(true);
      //   }, (error) => {
      //       console.log(error.text);
      //   });
    };

    useEffect(() => {
      if(Object.keys(formErrors).length===0 && submited) {
        console.log("formValue");
      }
    },[formErrors]);
//handel error msg
    const validate  = (values)=> {
      const errors = {};
      const regax  = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      if(!values.user_name) {
        errors.user_name ="please write your name";
      }

      if(!values.user_emal) {
        errors.user_emal ="please write your email";
      }
      if(!values.message) {
        errors.message ="please write your message";
      }
      return errors;

    };
   const handelChange = (e)=> {
    //console.log(e.target);
    const {name , value } = e.target;
    setformValue({...formValue , [name]: value});
    console.log(formValue);


   };
  return (
   
    <div className='contact-form services'>
         {/* left side*/}
         <div className="left awosem">
        <div className="w-left">
          {/* darkMode */}
          <span >Get in Touch</span>
          <span>Contact me</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      {/* rght  side*/}
      <div className="right">
      {/* <pre>{JSON.stringify(formValue, undefined ,2)}</pre>  */}
      <form ref={form} onSubmit={sendEmail}>
      <div className="form-text">
       <input type="text"
         name="user_name"
         className="user"
         placeholder="Name" 
         value={formValue.user_name}
         onChange={handelChange}/>
         <span> {formErrors.user_name}</span>
      <input type="email"
       name="user_emal"
        className="user"
        placeholder="Email"
        value={formValue.user_emal} 
        onChange={handelChange}/>
        <span> {formErrors.user_emal}</span>
      
      </div>
      <div className="form-text">
      <input type="text" name="user" className="user"  placeholder="Last Name"/>
      <input type="phone" name="user_phone" className="user"  placeholder="Phone Numper "/>
      </div>
         <textarea name="message"
          className="user"
           placeholder="Message"
           value={formValue.message}
           onChange={handelChange}/>
           <span> {formErrors.message}</span>
          <input type="submit" value="Send" className="button"/>
          <span> {msg && "Thanks for Contacting me"}</span>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>

      </form>

      </div>

    </div>
  )
}

export default Contact