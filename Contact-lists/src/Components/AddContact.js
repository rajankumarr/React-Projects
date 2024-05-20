import React, { useState } from 'react'

function AddContact({addContact}) {
    const[contactData, setContactData]=useState({name:"", email:""})

    const handleChange=(e)=>{
       if(e.target.name=== "name") 
        setContactData({...contactData,name:e.target.value})
        else{
            setContactData({...contactData,email:e.target.value})
        }
    }
    const handleAdd=()=>{
        if(contactData.name=== "" || contactData.email=== ""){
            alert("Please fill all the details")
            return

        }
        addContact(contactData)
        setContactData({name:"", email:""})
    }
  return (
    <div>
    <div className='add-contact'> Add Contact</div>
    <div className="form-detail">
        <form >
            
            <input className='name' type="text" placeholder='Enter Your Name' name='name' value={contactData.name} onChange={handleChange}/><br />
            
            <input className='email' type="email" placeholder='Enter Your Email' name='email' value={contactData.email} onChange={handleChange}/><br />
            
        </form>
        <button className='btn-contact' onClick={handleAdd}>Add Contact</button>
    </div>
    </div>
  )
}

export default AddContact
