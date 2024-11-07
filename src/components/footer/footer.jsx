import React from 'react'

import './footer.css'
import mail from '../../components/images/mail.png'
import phone from '../../components/images/phone.png'
import location from '../../components/images/location.png'
import linkedIn from '../../components/images/linkedIn.png'
import facebook from '../../components/images/facebook.png'
import instagram from '../../components/images/instagram.png'
import whatsapp from '../../components/images/whatsapp.png'


function footer() {
   var name1 =document.getElementById("name");
   var email =document.getElementById("email");
   var message =document.getElementById("message");
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "45acc3d6-c4a6-4211-9418-015ffdb63826");
        alert("successful");
       name1='';
       email='';
       message='';
        

    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          console.log("Success", res);
        }
      };
  return (
    <section className='footer'>

        <div className='info'>
            <div className='flex'>
            <img src={mail} className='info-img' />
            
            <p>lorem@lorem.com</p>
            </div>
            <div className='flex'>
            <img src={phone} className='info-img' />
            <p>lorem@lorem.com</p>
            </div>
            <div className='flex'>
            <img src={location} className='info-img' />
            <p>lorem@lorem.com</p>
            </div>
            <div className='social-media'>
            {<a href='#'><img src={facebook}/> </a>}
            {<a href='#'><img src={instagram}/> </a>}
            {<a href='#'><img src={linkedIn}/> </a>}
            {<a href='#'><img src={whatsapp}/> </a>}
           
        </div>
        </div>

        <div className='form'>
            <form method='get'onSubmit={onSubmit} >
            <input type='text' placeholder='Name' name='nameuser'id='name' required/>
            <input type='email' placeholder='Email' name='email'id='email' required/>
            <textarea placeholder='Message' name='message' id='message' required />
            <button type='submit' value='SEND'>Send</button>
            </form>
            
        </div>
       
    
    </section>
  )
}

export default footer