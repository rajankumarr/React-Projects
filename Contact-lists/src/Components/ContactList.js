import React from 'react'
// import DeleteIcon from '@mui/icons-material/Delete';



function ContactList(props) {
    const {contact, removeContact}=props
    const contactList=contact.map((val)=>{
        return(
            <div className='contact-list'>
                <div style={{marginLeft:'50px'}}>{val.data.name}</div>
                <div style={{marginLeft:'50px'}}>{val.data.email}</div>
                
                <button onClick={()=>removeContact(val.id)} style={{backgroundColor:'black', color:'white'} }>Delete</button>
            </div>
        )
    })
  return (
    <>
    <div className='contact-lists'>Contact Lists</div>
    <div>{contactList}</div>
    </>
  )
}

export default ContactList
